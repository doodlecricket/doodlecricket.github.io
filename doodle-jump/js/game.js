var Doodle;
((Doodle = Doodle || {}).BootState = {
  init: function () {
    (this.game.stage.disableVisibilityChange = !0),
      (this.game.stage.backgroundColor = "#16181c"),
      (this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL),
      (this.scale.pageAlignHorizontally = !0),
      (this.scale.pageAlignVertically = !0),
      this.game.physics.startSystem(Phaser.Physics.ARCADE);
  },
  preload: function () {
    this.load.image("splash", "assets/images/splash.webp");
    this.load.image("gameicon", "assets/images/gameicon.webp");
    this.load.image("logo", "assets/images/logo.png");
  },
  create: function () {
    this.state.start("Preload");
  },
}),
  ((Doodle = Doodle || {}).CalibrateState = {
    init: function () {
      this.calibratedValue = localStorage.getItem("DJ_calibrated") || 0;
    },
    create: function () {
      (this.jumpSound = this.add.audio("jump")),
        (this.background = this.add.sprite(0, 0, "atlas2", "background")),
        (this.info = this.add.sprite(
          this.world.game.width / 2,
          this.world.game.height / 2,
          "atlas2",
          "calibrateInfo"
        )),
        this.info.anchor.setTo(0.5),
        (this.doneButton = new Phaser.Sprite(
          this.game,
          370,
          840,
          "atlas2",
          "donebtn"
        )),
        (this.doneButton.inputEnabled = !0),
        this.doneButton.events.onInputOut.add(function () {
          this.doneButton.loadTexture("atlas2", "donebtn");
        }, this),
        this.doneButton.events.onInputUp.add(function () {
          14 == this.doneButton.frame &&
            (this.state.start("Settings"),
            this.doneButton.loadTexture("atlas2", "donebtn"));
        }, this),
        this.doneButton.events.onInputDown.add(function () {
          this.doneButton.loadTexture("atlas2", "donebtn2");
        }, this),
        this.add.existing(this.doneButton),
        (this.setButton = new Phaser.Sprite(
          this.game,
          130,
          840,
          "atlas2",
          "setbtn"
        )),
        (this.setButton.inputEnabled = !0),
        this.setButton.events.onInputOut.add(function () {
          this.setButton.loadTexture("atlas2", "setbtn");
        }, this),
        this.setButton.events.onInputUp.add(function () {
          16 == this.setButton.frame &&
            (this.calibrateSet(),
            this.setButton.loadTexture("atlas2", "setbtn"));
        }, this),
        this.setButton.events.onInputDown.add(function () {
          this.setButton.loadTexture("atlas2", "setbtn2");
        }, this),
        this.add.existing(this.setButton),
        (this.player = this.add.sprite(
          this.game.world.centerX,
          this.game.world.height - 200,
          "player0"
        )),
        this.player.anchor.setTo(0.5),
        this.game.physics.arcade.enable(this.player),
        this.player.body.setSize(60, 90, 0, 20),
        (this.player.body.velocity.y = -1080),
        (this.optionsLogo = this.add.sprite(30, 50, "atlas2", "optionsLogo")),
        (this.platformPool = this.add.group());
      for (var t = 0; 5 > t; t++)
        (platform = new Phaser.Sprite(
          this.game,
          0 + 140 * t,
          this.game.world.height - 180 - (t % 2) * 30,
          "atlas",
          "platform0"
        )),
          this.game.physics.arcade.enableBody(platform),
          this.platformPool.add(platform),
          (platform.body.allowGravity = !1),
          (platform.body.immovable = !0),
          platform.anchor.setTo(0, 0);
      var e,
        s = new FULLTILT.getDeviceOrientation({ type: "world" }),
        i = this;
      navigator.userAgent.indexOf("AppleWebKit"),
        /iPad|iPhone|iPod/.test(navigator.userAgent) && window.MSStream,
        s
          .then(function (t) {
            e = t;
          })
          .catch(function (t) {
            console.error(t);
          }),
        (function t() {
          if (e) {
            var s = e.getScreenAdjustedEuler();
            i.cursorContr ||
              i.game.paused ||
              !i.player.alive ||
              ((i.player.body.velocity.x =
                40 * s.gamma * Math.cos((s.beta * Math.PI) / 180) +
                i.calibratedValue),
              40 * s.gamma * Math.cos((s.beta * Math.PI) / 180) > 0
                ? i.player.frame < 2 && i.player.scale.setTo(-1, 1)
                : i.player.frame < 2 && i.player.scale.setTo(1, 1));
          }
          requestAnimationFrame(t);
        })();
    },
    calibrateSet: function (t) {
      (this.calibratedValue -= this.player.body.velocity.x),
        localStorage.setItem("DJ_calibrated", this.calibratedValue);
    },
    update: function () {
      this.game.physics.arcade.overlap(
        this.player,
        this.platformPool,
        this.collide,
        null,
        this
      ),
        this.player.x > this.game.world.width &&
          (this.player.x -= this.game.world.width),
        this.player.x < 0 && (this.player.x += this.game.world.width);
    },
    collide: function (t, e) {
      t.body.velocity.y > 0 && this.jumpSound.play(),
        (t.body.velocity.y = -1080);
    },
    initIOScontrol: function () {
      var t = -1 != navigator.userAgent.indexOf("AppleWebKit"),
        e = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream,
        s = this;
      if (t && e) {
        console.log("game", "register message listener");
        var i = window.addEventListener ? "addEventListener" : "attachEvent";
        (0, window[i])(
          "attachEvent" == i ? "onmessage" : "message",
          function (t) {
            var e = t[t.message ? "message" : "data"];
            console.log("game", e),
              e.mssg &&
                "deviceorientation" == e.mssg &&
                "Calibrate" == Doodle.game.state.current &&
                (console.log(e.event.alpha, e.event.beta, e.event.gamma),
                s.cursorContr ||
                  s.game.paused ||
                  !s.player.alive ||
                  ((s.player.body.velocity.x =
                    e.event.gamma *
                      s.GYRO_SENSE *
                      Math.cos((e.event.beta * Math.PI) / 180) +
                    s.calibratedValue),
                  s.player.body.velocity.x > 0
                    ? s.player.frame < 2 && s.player.scale.setTo(-1, 1)
                    : s.player.frame < 2 && s.player.scale.setTo(1, 1)));
          }
        );
      }
    },
  }),
  ((Doodle = Doodle || {}).GameState = {
    init: function (t) {
      (this.adTriggered = !1),
        (this.dontPlaysound = !1),
        this.game.world.setBounds(0, 0, 640, 960),
        (this.widthPlat = 114),
        (this.stats =
          JSON.parse(localStorage.getItem("DJ_stats")) ||
          JSON.parse(this.game.cache.getText("stats"))),
        console.log("=============================="),
        console.log("OK!!"),
        console.log(this.stats),
        console.log("=============================="),
        (this.stats.stats[15][1] = 0),
        (this.stats.achievements[0][2] = 0),
        (this.stats.achievements[1][2] = 0),
        (this.stats.achievements[2][2] = 0),
        (this.stats.achievements[3][2] = 0),
        (this.stats.achievements[4][2] = 0),
        (this.stats.achievements[5][2] = 0),
        (this.stats.achievements[6][2] = 0),
        (this.stats.achievements[7][2] = 0),
        (this.stats.achievements[8][2] = 0),
        (this.stats.achievements[9][2] = 0),
        (this.stats.achievements[10][2] = 0),
        (this.stats.achievements[12][2] = 0),
        (this.stats.achievements[13][2] = 0),
        (this.stats.achievements[14][2] = 0),
        (this.achievementsOrder = []),
        (this.death = this.death || 0),
        (this.localTopScores =
          JSON.parse(localStorage.getItem("DJ_localTopScores")) || []),
        (this.directionalShootingValue =
          localStorage.getItem("DJ_directionalShooting") || "true"),
        this.localTopScores.length > 10 && (this.localTopScores.length = 10),
        (this.name = localStorage.getItem("DJ_Doodle_name") || ""),
        (this.calibratedValue = +localStorage.getItem("DJ_calibrated") || 0),
        // (document.getElementById("highscore").value = this.name),
        (this.propellerAppear = 9e3 * Math.random() + 1e3),
        (this.jetpackAppear = 9500 * Math.random() + 2500),
        (this.JETPACK_TIMES = 3),
        (this.game.physics.arcade.OVERLAP_BIAS = 16),
        (this.cursorContr = !1),
        (this.cursors = this.game.input.keyboard.createCursorKeys()),
        (this.inputNameListener = !1),
        (this.score = 0),
        (this.scoreMarkPool = this.add.group()),
        (this.platformPool = this.add.group()),
        (this.bonusPool = this.add.group()),
        (this.obstaclePool = this.add.group()),
        (this.bulletPool = this.add.group()),
        (this.bulletPool.enableBody = !0),
        (this.game.physics.arcade.gravity.y = 1728),
        (this.scenes0 = JSON.parse(this.game.cache.getText("scenes0"))),
        (this.scenes0.easyScenes = Phaser.ArrayUtils.shuffle(
          this.scenes0.easyScenes
        )),
        (this.scenes0.hardScenes = Phaser.ArrayUtils.shuffle(
          this.scenes0.hardScenes
        )),
        (this.easyScenesIndex = 0),
        (this.hardScenesIndex = 0),
        (this.ACCELERATION = +this.game.net.getQueryString("accel") || 50),
        (this.MAX_ACCELERATION =
          +this.game.net.getQueryString("maxaccel") || 600),
        (this.GYRO_SENSE = +this.game.net.getQueryString("gyrosense") || 40),
        "{}" == JSON.stringify(Doodle.GameState.ACCELERATION) &&
          (this.ACCELERATION = 60),
        "{}" == JSON.stringify(Doodle.GameState.MAX_ACCELERATION) &&
          (this.MAX_ACCELERATION = 700),
        "{}" == JSON.stringify(Doodle.GameState.GYRO_SENSE) &&
          (this.GYRO_SENSE = 40);
    },
    create: function () {
      (enterKey = this.game.input.keyboard.addKey(Phaser.Keyboard.ENTER)),
        enterKey.onDown.add(function () {
          // document.getElementById("highscore").blur();
        }, this),
        (spaceBar = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR)),
        spaceBar.onDown.add(this.playerShoot, this),
        ((this.gameOverStats = this.add.bitmapText(
          150,
          500,
          "DoodleFont",
          "0",
          60
        )),
        (this.gameOverStats.alpha = 0)),
        (this.gameOverStats1 = this.add.bitmapText(
          100,
          420,
          "DoodleFont",
          "",
          60
        )),
        (this.gameOverStats2 = this.add.bitmapText(
          190,
          370,
          "DoodleFont",
          "",
          60
        )),
        this.gameOverStats.anchor.setTo(0, 0.5),
        (this.gameOverGroup = this.add.group()),
        (this.gameOverText = new Phaser.Sprite(
          this.game,
          this.game.width / 2,
          300,
          "atlas",
          "gameOver"
        )),
        this.gameOverText.anchor.setTo(0.5),
        (this.appstore = new Phaser.Sprite(this.game, 10, 760, "appstore")),
        (this.appstore.inputEnabled = !0),
        this.appstore.events.onInputUp.add(function () {}, this),
        (this.googleplay = new Phaser.Sprite(this.game, 10, 690, "googleplay")),
        (this.googleplay.inputEnabled = !0),
        this.googleplay.events.onInputUp.add(function () {}, this),
        (this.menuButton = new Phaser.Sprite(
          this.game,
          400,
          700,
          "atlas",
          "menu_01"
        )),
        (this.playAgainButton = new Phaser.Sprite(
          this.game,
          360,
          640,
          "atlas",
          "playAgain_01"
        )),
        this.playAgainButton.anchor.setTo(0.5),
        (this.bottomGO = new Phaser.Sprite(
          this.game,
          0,
          830,
          "atlas",
          "bottom"
        )),
        this.gameOverGroup.add(this.gameOverStats),
        this.gameOverGroup.add(this.gameOverStats1),
        this.gameOverGroup.add(this.gameOverStats2),
        this.gameOverGroup.add(this.appstore),
        this.gameOverGroup.add(this.googleplay),
        this.gameOverGroup.add(this.bottomGO),
        this.gameOverGroup.add(this.gameOverText),
        this.gameOverGroup.add(this.playAgainButton),
        this.gameOverGroup.add(this.menuButton),
        (this.gameOverGroup.visible = !1);
      // (this.tapToChange = new Phaser.Sprite(
      //     this.game,
      //     410,
      //     510,
      //     "atlas",
      //     "tapToChange",
      // ));
      // this.gameOverGroup.add(this.tapToChange);
      (this.playAgainButton.inputEnabled = !0),
        this.playAgainButton.events.onInputOut.add(function () {
          this.playAgainButton.loadTexture("atlas", "playAgain_01");
        }, this),
        spaceBar.onDown.add(function () {
          this.gameOverGroup.visible
            ? (this.state.start("Game"),
              this.playAgainButton.loadTexture("atlas", "playAgain_01"),
              this.writeScore())
            : (this.adTriggered = !0);
        }, this),
        this.playAgainButton.events.onInputUp.add(function () {
          7 == this.playAgainButton.frame &&
            (this.adTriggered
              ? (this.state.start("Game"),
                this.playAgainButton.loadTexture("atlas", "playAgain_01"),
                this.writeScore())
              : (this.gameOver(), (this.adTriggered = !0)));
        }, this),
        this.playAgainButton.events.onInputDown.add(function () {
          this.playAgainButton.loadTexture("atlas", "playAgain_02");
        }, this),
        (this.overlay = this.add.bitmapData(300, 50)),
        (this.inputNamePole = new Phaser.Sprite(
          this.game,
          330,
          470,
          this.overlay
        )),
        (this.inputNamePole.inputEnabled = !0),
        this.inputNamePole.events.onInputUp.add(function () {
          this.inputTextSchedule();
          // document.getElementById("highscore").focus();
          // document
          //     .getElementById("highscore")
          //     .setSelectionRange(1e3, 1e3);
          this.inputNameListener = !0;
        }, this),
        this.gameOverGroup.add(this.inputNamePole),
        (this.menuButton.inputEnabled = !0),
        this.menuButton.events.onInputOut.add(function () {
          this.menuButton.loadTexture("atlas", "menu_01");
        }, this),
        this.menuButton.events.onInputUp.add(function () {
          5 == this.menuButton.frame &&
            (this.adTriggered
              ? (this.state.start("Menu"),
                this.menuButton.loadTexture("atlas", "menu_01"),
                this.writeScore())
              : (this.gameOver(), (this.adTriggered = !0)));
        }, this),
        this.menuButton.events.onInputDown.add(function () {
          this.menuButton.loadTexture("atlas", "menu_02");
        }, this),
        (this.panel = this.add.sprite(0, -23, "atlas", "top")),
        (this.panel.fixedToCamera = !0),
        (this.panel.alpha = 0.55),
        (this.coinsCountLabel = this.add.bitmapText(
          15,
          5,
          "DoodleFont",
          "0",
          60
        )),
        (this.coinsCountLabel.fixedToCamera = !0),
        (this.coinsCountLabel.fontWeight = "bold"),
        (this.background = this.add.sprite(0, 0, "atlas2", "background")),
        (this.background.fixedToCamera = !0),
        this.game.world.sendToBack(this.background),
        (this.precedingPlatform = {
          x: this.game.world.centerX,
          y: this.game.world.height - 30,
          hasBonusObject: -1,
        }),
        (this.player = this.add.sprite(
          this.game.world.centerX,
          this.game.world.height - 200,
          "player0"
        )),
        this.player.anchor.setTo(0.5),
        this.game.physics.arcade.enable(this.player),
        this.player.body.setSize(
          60,
          90,
          this.player.width / 2 - 30,
          this.player.height / 2 - 45 + 20
        ),
        (this.player.body.velocity.y = -1080),
        (this.player.playerTimer = this.game.time.create(!1)),
        this.player.playerTimer.start(),
        (this.trunk = new Phaser.Sprite(this.game, 0, 0, "atlas", "trunk")),
        this.trunk.anchor.setTo(0.5),
        this.player.addChild(this.trunk),
        (this.trunk.visible = !1),
        (this.pauseButton = this.add.sprite(
          this.game.width - 50,
          30,
          "atlas",
          "pause"
        )),
        (this.pauseButton.inputEnabled = !0),
        this.pauseButton.events.onInputDown.add(this.pauseGame, this),
        (this.pauseButton.fixedToCamera = !0),
        (this.pauseButton.hitArea = new Phaser.Rectangle(-15, -15, 53, 60)),
        (this.pausePanelGroup = this.add.group()),
        (this.pausePanelGroup.y = this.game.height),
        (this.pauseCover = new Phaser.Sprite(
          this.game,
          0,
          0,
          "atlas3",
          "pauseCover"
        )),
        (this.pauseCover.fixedToCamera = !0),
        (this.resumeButton = new Phaser.Sprite(
          this.game,
          300,
          800,
          "atlas",
          "resume_01"
        )),
        (this.resumeButton.fixedToCamera = !0),
        this.pausePanelGroup.add(this.pauseCover),
        this.pausePanelGroup.add(this.resumeButton),
        (this.sounds = {}),
        (this.sounds.jump = this.add.audio("jump")),
        (this.sounds.beake_platfrom = this.add.audio("beake_platfrom")),
        (this.sounds.shoot = this.add.audio("shoot")),
        (this.sounds.shoot2 = this.add.audio("shoot2")),
        (this.sounds.spring = this.add.audio("spring")),
        (this.sounds.falling = this.add.audio("falling")),
        (this.sounds.jetpack = this.add.audio("jetpack")),
        (this.sounds.propeller = this.add.audio("propeller")),
        (this.sounds.monster_warning = this.add.audio("monster_warning")),
        (this.sounds.monster_warning.loop = !0),
        (this.sounds.monster_kill = this.add.audio("monster_kill")),
        (this.sounds.monster_hit = this.add.audio("monster_hit")),
        (this.sounds.jumponmonster = this.add.audio("jumponmonster")),
        (this.sounds.ufo_kill = this.add.audio("ufo_kill")),
        (this.sounds.ufo_warning = this.add.audio("ufo_warning")),
        (this.sounds.ufo_abduct = this.add.audio("ufo_abduct")),
        (this.sounds.black_hole = this.add.audio("black_hole")),
        (this.sounds.white = this.add.audio("white")),
        this.loadScoreMarks();
      var t,
        e =
          (navigator.userAgent.indexOf("AppleWebKit"),
          /iPad|iPhone|iPod/.test(navigator.userAgent) && window.MSStream,
          new FULLTILT.getDeviceOrientation({ type: "world" })),
        s = this;
      e
        .then(function (e) {
          t = e;
        })
        .catch(function (t) {
          console.error(t);
        }),
        (function e() {
          if (t) {
            var i = t.getScreenAdjustedEuler();
            s.cursorContr ||
              s.game.paused ||
              !s.player.alive ||
              ((s.player.body.velocity.x =
                i.gamma * s.GYRO_SENSE * Math.cos((i.beta * Math.PI) / 180) +
                s.calibratedValue),
              i.gamma * s.GYRO_SENSE * Math.cos((i.beta * Math.PI) / 180) +
                s.calibratedValue >
              0
                ? s.player.frame < 2 && s.player.scale.setTo(-1, 1)
                : s.player.frame < 2 && s.player.scale.setTo(1, 1));
          }
          requestAnimationFrame(e);
        })(),
        this.cursors.up.onDown.add(this.playerShoot, this),
        this.game.input.onTap.add(function () {
          "true" == this.directionalShootingValue
            ? this.playerShoot(1)
            : this.playerShoot();
        }, this),
        this.game.input.onUp.add(function () {
          this.game.paused &&
            (this.resumeButton
              .getBounds()
              .contains(this.game.input.x, this.game.input.y) &&
              this.unPauseGame(),
            this.resumeButton.loadTexture("atlas", "resume_01"));
        }, this),
        this.game.input.onDown.add(function () {
          this.game.paused &&
            this.resumeButton
              .getBounds()
              .contains(this.game.input.x, this.game.input.y) &&
            this.resumeButton.loadTexture("atlas", "resume_02");
        }, this),
        this.loadLevel();
    },
    update: function () {
      this.player.y > 2400 &&
        !this.adTriggered &&
        (this.gameOver(), (this.adTriggered = !0)),
        this.player.alive &&
          (this.cursors.left.isDown
            ? ((this.cursorContr = !0),
              this.player.body.velocity.x >= 0
                ? (this.player.body.velocity.x = -this.ACCELERATION)
                : ((this.player.body.velocity.x -= this.ACCELERATION),
                  this.player.body.velocity.x < -this.MAX_ACCELERATION &&
                    (this.player.body.velocity.x = -this.MAX_ACCELERATION)),
              this.player.frame < 2 && this.player.scale.setTo(1, 1))
            : this.cursors.right.isDown
              ? ((this.cursorContr = !0),
                this.player.body.velocity.x <= 0
                  ? (this.player.body.velocity.x = this.ACCELERATION)
                  : ((this.player.body.velocity.x += this.ACCELERATION),
                    this.player.body.velocity.x > this.MAX_ACCELERATION &&
                      (this.player.body.velocity.x = this.MAX_ACCELERATION)),
                this.player.frame < 2 && this.player.scale.setTo(-1, 1))
              : !this.cursors.right.isDown &&
                !this.cursors.left.isDown &
                  (0 != this.player.body.velocity.x) &&
                (Math.abs(this.player.body.velocity.x) > this.ACCELERATION
                  ? (this.player.body.velocity.x -=
                      (this.player.body.velocity.x /
                        Math.abs(this.player.body.velocity.x)) *
                      this.ACCELERATION)
                  : (this.player.body.velocity.x = 0))),
        this.player.body.velocity.y > 1080 &&
          (this.player.body.velocity.y = 1080),
        this.player.y < 0.48 * this.game.world.height &&
          this.player.alive &&
          this.moveScreen(this.player.y - 0.48 * this.game.world.height),
        this.precedingPlatform.y + 2 * this.score > 0 &&
          (this.score > 5e3 && !this.player.withBonus && Math.random() > 0.95
            ? this.loadScene()
            : this.loadLevel()),
        this.player.alive &&
          (this.platformPool.forEach(function (t) {
            t.top >= this.game.world.height - this.platformPool.y && t.kill();
          }, this),
          this.bonusPool.forEach(function (t) {
            t.top >= this.game.world.height - this.bonusPool.y &&
              ("bonus2" == t.type &&
                !t.used &&
                t.alive &&
                ((this.stats.achievements[10][2] += 1),
                this.stats.achievements[10][2] >= 3 &&
                  this.achieveMentUnlock(10)),
              t.kill());
          }, this),
          this.obstaclePool.forEach(function (t) {
            t.top >= this.game.world.height - this.obstaclePool.y &&
              (t.alive &&
                4 != t.type &&
                ((this.stats.achievements[4][2] += 1),
                (this.stats.achievements[5][2] += 1),
                this.stats.achievements[4][2] >= 10 &&
                  this.achieveMentUnlock(4),
                this.stats.achievements[5][2] >= 30 &&
                  this.achieveMentUnlock(5)),
              t.kill());
          }, this)),
        this.game.physics.arcade.overlap(
          this.player,
          this.platformPool,
          this.jumpState,
          null,
          this
        ),
        this.game.physics.arcade.overlap(
          this.player,
          this.bonusPool,
          this.bonusActivate,
          this.bonusNotActivate,
          this
        ),
        this.game.physics.arcade.overlap(
          this.player,
          this.obstaclePool,
          this.obstacleUSE,
          null,
          this
        ),
        this.game.physics.arcade.overlap(
          this.bulletPool,
          this.obstaclePool,
          this.enemyKill,
          this.enemyCheck,
          this
        ),
        this.player.x > this.game.world.width &&
          (this.player.x -= this.game.world.width),
        this.player.x < 0 && (this.player.x += this.game.world.width),
        this.player.y > this.game.world.height &&
          2400 != this.game.world.bounds.height &&
          this.gameOver(0, null);
      //   this.inputNameListener &&
      //     ("highscore" != document.activeElement.id &&
      //       (this.player.playerTimer.remove(this.player.inputTimer),
      //       //   (this.gameOverStats.text = "your name:" + this.name),
      //       (this.inputNameListener = !1)),
      //     document.getElementById("highscore").value != this.name &&
      //       ((document.getElementById("highscore").value = document
      //         .getElementById("highscore")
      //         .value.replace(/\W/g, "")),
      //       (this.name = document.getElementById("highscore").value),
      //       (this.gameOverStats.text = "your name:" + this.name)));
    },
    gameOver: function (t, e) {
      if ("fearless" != this.name) {
        if (((this.player.alive = !1), 0 == t)) {
          if (((self = this), this.death++, this.death % 5 == 0)) {
            (this.popUPMenu = this.add.sprite(
              this.game.width / 2,
              2880,
              "popupAtlas",
              "blank"
            )),
              this.popUPMenu.anchor.setTo(0.5),
              (this.popUPMenu.close = this.add.sprite(
                353 - this.popUPMenu.width / 2,
                378 - this.popUPMenu.height / 2,
                "popupAtlas",
                "close"
              )),
              this.popUPMenu.close.anchor.setTo(0.5),
              (this.popUPMenu.close.inputEnabled = !0),
              this.popUPMenu.close.events.onInputDown.add(function () {
                this.add.tween(this.popUPMenu).to({ y: 2880 }, 1e3).start();
              }, this),
              this.popUPMenu.addChild(this.popUPMenu.close),
              (this.popUPMenu.playNow = this.add.sprite(
                160 - this.popUPMenu.width / 2,
                385 - this.popUPMenu.height / 2,
                "popupAtlas",
                "playNow"
              )),
              this.popUPMenu.playNow.anchor.setTo(0.5),
              (this.popUPMenu.playNow.inputEnabled = !0),
              this.popUPMenu.playNow.events.onInputUp.add(function () {}, this),
              this.popUPMenu.addChild(this.popUPMenu.playNow);
            var s = [];
            this.game.device.android
              ? (s = [1])
              : this.game.device.iOS
                ? (s = [0])
                : this.game.device.iOS || (s = [0, 1]);
            for (var i = 0, a = 0; a < s.length; a++) {
              switch (s[a]) {
                case 0:
                  var o = "appstore",
                    h = "";
                  break;
                case 1:
                  (o = "googleplay"), (h = "");
              }
              var n = 140 * i - 70 * (s.length - 1);
              i++;
              var l = this.popUPMenu["image" + s[a]];
              (l = this.add.sprite(
                n,
                290 - this.popUPMenu.height / 2,
                "popupAtlas",
                o
              )).anchor.setTo(0.5),
                (l.inputEnabled = !0),
                (l.link = h),
                l.events.onInputUp.add(function (t) {}, this),
                this.popUPMenu.addChild(l);
            }
            this.add.tween(this.popUPMenu).to({ y: 1920 }, 1e3).start();
          }
          this.achievementName && this.achievementName.destroy(),
            this.achievementHolder && this.achievementHolder.destroy(),
            this.player.playerTimer.running &&
              ((this.stats.stats[4][1] += Math.round(
                this.player.playerTimer.seconds
              )),
              this.stats.stats[5][1] <
                Math.round(this.player.playerTimer.seconds) &&
                (this.stats.stats[5][1] = Math.round(
                  this.player.playerTimer.seconds
                )),
              (this.stats.stats[6][1] = Math.round(
                this.player.playerTimer.seconds
              )),
              0 == t && (this.stats.stats[23][1] += 1)),
            this.dontPlaysound || this.sounds.falling.play(),
            (this.scoreMarkPool.x += this.game.width),
            this.platformPool.forEach(function (t) {
              t.animations.currentAnim && t.kill();
            }, this),
            this.obstaclePool.forEach(function (t) {
              t.kill();
            }, this),
            this.bonusPool.forEach(function (t) {
              t.kill();
            }, this),
            this.game.device.android
              ? ((this.appstore.visible = !1), (this.googleplay.y = 725))
              : this.game.device.iOS &&
                ((this.googleplay.visible = !1), (this.appstore.y = 725)),
            this.game.world.setBounds(0, 0, 640, 2400),
            this.game.camera.follow(
              this.player,
              Phaser.Camera.FOLLOW_LOCKON,
              0.2,
              0.2
            ),
            (this.gameOverGroup.y = 1440),
            (this.gameOverGroup.visible = !0),
            this.setHighScore(),
            // (this.gameOverStats.text = "your name:" + this.name),
            (this.gameOverStats1.text =
              "your high score: " + this.localTopScores[0][1]),
            (this.gameOverStats2.text =
              "your score: " + Math.round(this.score));
        }
        2 == t &&
          (this.player.body.velocity.y < 0 && (this.player.body.velocity.y = 0),
          (stars = new Phaser.Sprite(this.game, -40, -60, "atlas", "stars_01")),
          stars.animations.add(
            "stars",
            ["atlas", "stars_01", "stars_02", "stars_03"],
            24,
            !0
          ),
          stars.play("stars"),
          this.player.addChild(stars),
          this.game.world.bringToTop(this.player)),
          1 == t &&
            ((offsetX = 0),
            (offsetY = 0),
            (offsetTime = 0),
            6 == e.type && e.animations.currentAnim
              ? ((offsetX = 0), (offsetY = -80))
              : 4 == e.type &&
                ((offsetX = 0), (offsetY = -25), (offsetTime = 400)),
            (e.suckYou = !0),
            (this.player.allowGravity = !1),
            (tween = this.game.add.tween(this.player).to(
              {
                x: e.x + offsetX,
                y: e.y + this.obstaclePool.y + offsetY,
              },
              1e3 - offsetTime,
              Phaser.Easing.Linear.None
            )),
            (tween2 = this.game.add
              .tween(this.player.scale)
              .to({ x: 0, y: 0 }, 1e3 - offsetTime, Phaser.Easing.Linear.None)),
            tween2.onComplete.addOnce(function () {
              this.gameOver(0, null),
                (this.player.y = this.game.height),
                (this.player.allowGravity = !0);
            }, this),
            tween.start(),
            (this.dontPlaysound = !0),
            tween2.start());
      } else 0 == t && (this.player.body.velocity.y = -2080);
    },
    distanceBtwPlatforms: function (t) {
      if (null == t)
        (e = 25 + Math.random() * ((150 + this.score) / 150)) > 90 && (e = 90),
          2 == this.precedingPlatform.type && e > 50 && (e = 50);
      else var e = 0;
      if (-1 != this.precedingPlatform.hasBonusObject) {
        e += 15;
        var s = 30 + Math.random() * ((50 + this.score) / 50);
        2 == this.precedingPlatform.hasBonusObject && (e += 10),
          s > 70 && (s = 70),
          (e += s);
      }
      return e;
    },
    loadLevel: function () {
      for (; this.precedingPlatform.y + 2 * this.score > -100; ) {
        this.foundY =
          this.precedingPlatform.y - 2 * this.distanceBtwPlatforms();
        var t = this.spawnPlatform(
          this.game,
          Math.random() * (this.game.world.width - this.widthPlat) +
            this.widthPlat / 2,
          this.foundY,
          "platform0",
          this.precedingPlatform,
          this.score
        );
        2 != t.type &&
          (this.jetpackAppear < 0 && this.JETPACK_TIMES > 0
            ? (this.JETPACK_TIMES--,
              (t.hasBonusObject = 2),
              (this.jetpackAppear = 1e4 * Math.random() + 1e4),
              this.spawnBonus(2, t))
            : this.propellerAppear < 0
              ? ((t.hasBonusObject = 3),
                (this.propellerAppear = 1e4 * Math.random() + 1e4),
                this.spawnBonus(3, t))
              : Math.random() > 0.9 &&
                ((t.hasBonusObject = 0), this.spawnBonus(0, t))),
          (this.precedingPlatform = t);
      }
    },
    jumpState: function (t, e) {
      t.alive &&
        e.alive &&
        e.y + e.height / 2 + this.platformPool.y > t.bottom &&
        t.body.velocity.y > 0 &&
        (2 == e.type &&
          ((e.body.velocity.x = 0),
          (e.body.allowGravity = !0),
          e.animations.add(
            "breake",
            [
              "atlas",
              "platform2",
              "platformSheet_02",
              "platformSheet_03",
              "platformSheet_04",
            ],
            24,
            !1
          ),
          e.play("breake"),
          (this.stats.achievements[14][2] += 1),
          this.stats.achievements[14][2] >= 50 && this.achieveMentUnlock(14),
          (this.stats.achievements[15][2] += 1),
          this.stats.achievements[15][2] >= 1e3 && this.achieveMentUnlock(15),
          (e.alive = !1),
          this.sounds.beake_platfrom.play()),
        2 != e.type &&
          ((0 != t.frame && 2 != t.frame) ||
            ((t.frame += 1),
            this.player.playerTimer.add(
              (20 * Phaser.Timer.SECOND) / 60,
              function () {
                t.frame -= 1;
              },
              this
            )),
          3 == e.type ? this.sounds.white.play() : this.sounds.jump.play(),
          (t.body.velocity.y = -1080),
          0 == e.type &&
            ((this.stats.achievements[12][2] += 1),
            this.stats.achievements[12][2] >= 200 &&
              this.achieveMentUnlock(12)),
          1 == e.type &&
            ((this.stats.achievements[13][2] += 1),
            this.stats.achievements[13][2] >= 100 &&
              this.achieveMentUnlock(13)),
          (this.stats.stats[13][1] += 1),
          (this.stats.stats[15][1] += 1),
          (this.stats.achievements[0][2] = 0),
          (this.stats.achievements[1][2] = 0)),
        3 == e.type && e.kill());
    },
    bonusActivate: function (t, e) {
      t.alive && !e.used && e.bonusAction(t, e, this.bonusPool);
    },
    bonusNotActivate: function (t, e) {
      return t.alive && !e.used
        ? (e.top + e.bottom) / 2 + this.bonusPool.y > t.top
        : void 0;
    },
    obstacleUSE: function (t, e) {
      t.alive &&
        !t.withBonus &&
        e.alive &&
        (e.y + e.height / 2 + this.obstaclePool.y > t.bottom &&
        t.body.velocity.y > 0 &&
        4 != e.type
          ? ((e.body.allowGravity = !0),
            (t.body.velocity.y = -1080),
            (e.body.velocity.y = 360),
            (e.alive = !1),
            (this.stats.achievements[2][2] += 1),
            (this.stats.achievements[3][2] += 1),
            this.stats.achievements[2][2] >= 10 && this.achieveMentUnlock(2),
            this.stats.achievements[3][2] >= 30 && this.achieveMentUnlock(3),
            6 == e.type && this.achieveMentUnlock(17),
            6 == e.type
              ? (this.stats.stats[11][1] += 1)
              : (this.stats.stats[9][1] += 1),
            this.sounds.jumponmonster.play())
          : 4 == e.type || 6 == e.type
            ? (6 == e.type &&
                (e.sounds.ufo_abduct.play(), (this.stats.stats[25][1] += 1)),
              4 == e.type &&
                (e.sounds.black_hole.play(), (this.stats.stats[26][1] += 1)),
              this.gameOver(1, e))
            : (this.gameOver(2, e),
              this.sounds.monster_hit.play(),
              (this.stats.stats[24][1] += 1))),
        t.alive &&
          t.withBonus &&
          e.alive &&
          4 != e.type &&
          3 == t.bonusType &&
          (e.kill(), this.achieveMentUnlock(16));
    },
    moveScreen: function (t) {
      (this.player.y -= t),
        (this.platformPool.y -= t),
        (this.bonusPool.y -= t),
        (this.scoreMarkPool.y -= t),
        (this.obstaclePool.y -= t),
        (this.score -= t / 2),
        (this.jetpackAppear += t / 2),
        (this.propellerAppear += t / 2),
        this.score > 1e5 &&
          1 != this.stats.achievements[18][3] &&
          this.achieveMentUnlock(18),
        (this.coinsCountLabel.text = Math.round(this.score));
    },
    spawnBonus: function (t, e) {
      var s = this.bonusPool.getFirstExists(!1);
      s
        ? s.reset(e.x, e.top + 5, "bonus" + t, e, this.score)
        : ((s = new Doodle.Bonus(
            this.game,
            e.x,
            e.top + 5,
            "bonus" + t,
            e,
            this.score,
            this.sounds,
            this.stats
          )),
          this.bonusPool.add(s));
    },
    spawnPlatform: function (t, e, s, i, a, o, h) {
      var n = this.platformPool.getFirstExists(!1);
      return (
        n
          ? n.reset(e, s, i, a, o, h)
          : ((n = new Doodle.Platform(t, e, s, i, a, o, h)),
            this.platformPool.add(n)),
        n
      );
    },
    spanwObstacle: function (t, e, s, i) {
      var a = this.obstaclePool.getFirstExists(!1);
      return (
        a
          ? a.reset(e, s, i)
          : ((a = new Doodle.Obstacle(
              t,
              e,
              s,
              i,
              this.sounds,
              this.stats,
              this.obstaclePool
            )),
            this.obstaclePool.add(a)),
        a
      );
    },
    loadScene: function () {
      var t = this.precedingPlatform.y - 2 * this.distanceBtwPlatforms(1);
      this.score >= 15e3
        ? ((index = this.hardScenesIndex),
          (array = this.scenes0.hardScenes),
          this.hardScenesIndex++)
        : ((index = this.easyScenesIndex),
          (array = this.scenes0.easyScenes),
          this.easyScenesIndex++),
        array[index].forEach(function (e, s) {
          if (e.type < 4) {
            var i = this.spawnPlatform(
              this.game,
              2 * e.x,
              t - 2 * e.y,
              "platform0",
              this.precedingPlatform,
              this.score,
              e.type
            );
            this.last = i;
          } else if (5 == e.type) {
            i = this.spawnPlatform(
              this.game,
              2 * e.x,
              t - 2 * e.y,
              "platform0",
              this.precedingPlatform,
              this.score,
              0
            );
            this.spawnBonus(0, i), (this.last = i);
          } else this.spanwObstacle(this.game, 2 * e.x, t - 2 * e.y, e.type);
        }, this),
        (this.precedingPlatform = this.last),
        this.easyScenesIndex >= this.scenes0.easyScenes.length &&
          (this.easyScenesIndex = 0),
        this.hardScenesIndex >= this.scenes0.hardScenes.length &&
          (this.hardScenesIndex = 0);
    },
    playerShoot: function (t) {
      this.game.paused ||
        ((velx = 0),
        (offsetX = 0),
        (this.trunk.angle = 0),
        this.player.alive &&
          !this.player.withBonus &&
          (Math.random() > 0.5
            ? this.sounds.shoot2.play()
            : this.sounds.shoot.play(),
          this.player.frame < 2 &&
            ((this.player.frame += 2), (this.trunk.visible = !0)),
          1 == t &&
            ((velx =
              (1e3 *
                (this.game.input.activePointer.position.x -
                  this.game.world.width / 2)) /
              (this.game.world.width / 2)),
            (this.trunk.angle =
              this.player.scale.x *
              (Math.acos(
                (-1 * velx) / Math.sqrt(Math.pow(-1e3, 2) + Math.pow(velx, 2))
              ) *
                (180 / Math.PI) -
                90)),
            (offsetX =
              this.player.scale.x *
              ((this.trunk.height / 2) *
                Math.sin(this.trunk.angle * (Math.PI / 180))))),
          this.spawnBullet(
            this.game,
            this.trunk.x + this.player.x + offsetX,
            this.trunk.top + this.player.y,
            "bullet",
            velx
          ),
          this.player.playerTimer.remove(this.player.shootTimer),
          (this.player.shootTimer = this.player.playerTimer.add(
            (20 * Phaser.Timer.SECOND) / 60,
            function () {
              (this.player.frame -= 2),
                this.player.body.velocity.x < 0
                  ? this.player.scale.setTo(1, 1)
                  : this.player.scale.setTo(-1, 1),
                (this.trunk.visible = !1),
                this.player.playerTimer.remove(this.player.shootTimer);
            },
            this
          ))));
    },
    spawnBullet: function (t, e, s, i, a) {
      var o = this.bulletPool.getFirstExists(!1);
      o
        ? o.reset(e, s, i)
        : ((o = new Doodle.Bullet(t, e, s, i, this.stats)),
          this.bulletPool.add(o)),
        (o.body.velocity.y = -1920),
        (o.body.allowGravity = !1),
        (o.body.velocity.x = a);
    },
    enemyCheck: function (t, e) {
      return 6 == e.type && e.animations.currentAnim
        ? ((hz = t.y + 40 < e.y + this.obstaclePool.y),
          hz && this.enemyKill(t, e),
          !1)
        : void 0;
    },
    enemyKill: function (t, e) {
      4 != e.type &&
        (e.suckYou &&
          (tween.stop(),
          tween2.stop(),
          this.player.scale.setTo.x <= 0
            ? this.player.scale.setTo(-1, 1)
            : this.player.scale.setTo(1, 1),
          (this.player.alive = !0),
          this.achieveMentUnlock(11)),
        e.damage(1),
        t.kill());
    },
    pauseGame: function () {
      this.player.alive &&
        ((this.game.paused = !0), (this.pausePanelGroup.y = 0));
    },
    unPauseGame: function () {
      (this.game.paused = !1), (this.pausePanelGroup.y = this.game.height);
    },
    setHighScore: function () {
      this.localTopScores.push(["findIndex", Math.round(this.score)]),
        this.localTopScores.sort(function (t, e) {
          return t[1] === e[1] ? 0 : t[1] < e[1] ? 1 : -1;
        });
      for (var t = 0; 11 > t; t++)
        if ("findIndex" == this.localTopScores[t][0]) {
          (this.setScoreName = t), (this.localTopScores[t][0] = this.name);
          break;
        }
      if ("object" == typeof localStorage)
        try {
          localStorage.setItem(
            "DJ_localTopScores",
            JSON.stringify(this.localTopScores)
          );
        } catch (t) {
          console.log("Progress not saved");
        }
    },
    loadScoreMarks: function () {
      this.localTopScores.forEach(function (t) {
        (scoreMark = new Phaser.Sprite(
          this.game,
          640,
          960 - 2 * t[1] - 0.48 * this.game.world.height,
          "atlas",
          "scoreMark"
        )),
          this.scoreMarkPool.add(scoreMark),
          scoreMark.anchor.setTo(1),
          (this.nameMark = this.add.bitmapText(
            630,
            960 - 2 * t[1] - 0.48 * this.game.world.height - 5,
            "DoodleFont",
            t[0],
            24
          )),
          this.nameMark.anchor.setTo(1),
          this.scoreMarkPool.add(this.nameMark);
      }, this);
    },
    inputTextSchedule: function (t) {
      this.player.inputTimer = this.player.playerTimer.add(
        (20 * Phaser.Timer.SECOND) / 60,
        function () {
          null == t && // (this.gameOverStats.text = "your name:" + this.name + "|"),
            this.inputTextSchedule("|"),
            "|" == t && // (this.gameOverStats.text = "your name:" + this.name),
              this.inputTextSchedule();
        },
        this
      );
    },
    writeScore: function () {
      if (
        ((this.stats.stats[2][1] = Math.round(this.score)),
        (this.stats.stats[0][1] += 1),
        (this.stats.stats[1][1] = this.localTopScores[0][1]),
        (this.stats.stats[3][1] = Math.round(
          (this.stats.stats[3][1] * (this.stats.stats[0][1] - 1) +
            Math.round(this.score)) /
            this.stats.stats[0][1]
        )),
        this.stats.stats[14][1] < this.stats.stats[15][1] &&
          (this.stats.stats[14][1] = this.stats.stats[15][1]),
        (this.stats.stats[16][1] = Math.round(
          (this.stats.stats[16][1] * (this.stats.stats[0][1] - 1) +
            this.stats.stats[15][1]) /
            this.stats.stats[0][1]
        )),
        //document.getElementById("highscore").blur(),
        "" == this.name && (this.name = "") /* unnamed */,
        (this.localTopScores[this.setScoreName][0] = this.name),
        "object" == typeof localStorage)
      )
        try {
          localStorage.setItem(
            "DJ_localTopScores",
            JSON.stringify(this.localTopScores)
          ),
            localStorage.setItem("DJ_stats", JSON.stringify(this.stats)),
            localStorage.setItem("DJ_Doodle_name", this.name);
        } catch (t) {
          console.log("Progress not saved");
        }
    },
    achieveMentUnlock: function (t, e) {
      1 != this.stats.achievements[t][3] &&
        (e || this.achievementsOrder.push(t),
        null == this.achievementsOrder[1]) &&
        ((this.achievementsGroup = this.add.group()),
        (this.achievementName = this.add.bitmapText(
          this.game.world.width / 2,
          1015,
          "DoodleFont2",
          this.stats.achievements[t][0],
          60
        )),
        this.achievementName.anchor.setTo(0.5),
        (this.achievementHolder = this.add.sprite(
          this.game.world.width / 2,
          1002,
          "atlas2",
          "achievementHolder"
        )),
        this.achievementHolder.anchor.setTo(0.5),
        this.achievementsGroup.add(this.achievementHolder),
        this.achievementsGroup.add(this.achievementName),
        (this.stats.achievements[t][3] = 1),
        (tween1 = this.game.add
          .tween(this.achievementsGroup)
          .to({ y: -84 }, 1e3, Phaser.Easing.Linear.None)),
        (tween12 = this.game.add
          .tween(this.achievementsGroup)
          .to({ y: 0 }, 1e3, Phaser.Easing.Linear.None)),
        tween1.onComplete.addOnce(function () {
          setTimeout(function () {
            tween12.start();
          }, 1e3);
        }, this),
        tween12.onComplete.addOnce(function () {
          this.achievementsGroup.destroy(),
            this.achievementsOrder.shift(),
            this.achievementsOrder.length > 0 &&
              this.achieveMentUnlock(this.achievementsOrder[0], !0);
        }, this),
        tween1.start());
    },
    initIOScontrol: function () {
      var t = -1 != navigator.userAgent.indexOf("AppleWebKit"),
        e = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream,
        s = this;
      if (t && e) {
        console.log("game", "register message listener");
        var i = window.addEventListener ? "addEventListener" : "attachEvent";
        (0, window[i])(
          "attachEvent" == i ? "onmessage" : "message",
          function (t) {
            var e = t[t.message ? "message" : "data"];
            console.log("game", e),
              e.mssg &&
                "deviceorientation" == e.mssg &&
                "Game" == Doodle.game.state.current &&
                (console.log(e.event.alpha, e.event.beta, e.event.gamma),
                s.cursorContr ||
                  s.game.paused ||
                  !s.player.alive ||
                  ((s.player.body.velocity.x =
                    e.event.gamma *
                      s.GYRO_SENSE *
                      Math.cos((e.event.beta * Math.PI) / 180) +
                    s.calibratedValue),
                  s.player.body.velocity.x > 0
                    ? s.player.frame < 2 && s.player.scale.setTo(-1, 1)
                    : s.player.frame < 2 && s.player.scale.setTo(1, 1)));
          }
        );
      }
    },
  }),
  ((Doodle = Doodle || {}).MenuState = {
    init: function () {},
    create: function () {
      (this.jumpSound = this.add.audio("jump")),
        this.game.world.setBounds(0, 0, 640, 960),
        (this.game.physics.arcade.gravity.y = 1728),
        (this.bgMenu = this.add.sprite(0, 0, "atlas3", "bgMenu"));
      var t = [];
      this.game.device.android
        ? (t = [1])
        : this.game.device.iOS
          ? (t = [0])
          : this.game.device.iOS || (t = [0, 1]);
      for (var e = 0; e < t.length; e++) {
        switch (t[e]) {
          case 0:
            var s = "appstore",
              i = "";
            break;
          case 1:
            (s = "googleplay"), (i = "");
        }
        var a = 85 + 140 * e,
          o = this["imageLink" + t[e]];
        (o = this.add.sprite(a, 900, "popupAtlas", s)).anchor.setTo(0.5),
          (o.inputEnabled = !0),
          (o.link = i),
          o.events.onInputUp.add(function (t) {}, this);
      }
      (this.platform = this.add.sprite(60, 750, "atlas", "platform0")),
        this.game.physics.arcade.enable(this.platform),
        (this.platform.body.allowGravity = !1),
        (this.platform.body.immovable = !0),
        (this.player = this.add.sprite(
          115,
          this.game.world.height + 100,
          "player0"
        )),
        this.player.anchor.setTo(0.5),
        this.game.physics.arcade.enable(this.player),
        this.player.body.setSize(60, 90, 0, 20),
        (this.player.body.velocity.y = -2100),
        this.player.scale.setTo(-1, 1),
        (this.ufo = new Doodle.Obstacle(this.game, 500, 150, "6")),
        this.ufo.animations.add("beam", ["atlas", "ufo_01", "ufo_02"], 24, !0),
        this.ufo.play("beam"),
        this.add.existing(this.ufo),
        (this.game.sound.volume = 0.3),
        (this.playButton = this.add.sprite(130, 230, "atlas", "Play_01")),
        (this.playButton.inputEnabled = !0),
        this.playButton.events.onInputUp.add(function () {
          11 == this.playButton.frame &&
            (this.camera.fade("#000000"),
            this.camera.onFadeComplete.add(function () {
              this.state.start("Game"),
                this.playButton.loadTexture("atlas", "Play_01");
            }, this));
        }, this),
        this.playButton.events.onInputDown.add(function () {
          this.playButton.loadTexture("atlas", "Play_02");
        }, this),
        this.playButton.events.onInputOut.add(function () {
          this.playButton.loadTexture("atlas", "Play_01");
        }, this),
        (this.optionsButton = this.add.sprite(
          this.world.game.width - 140,
          this.world.game.height - 240,
          "atlas2",
          "opt"
        )),
        (this.optionsButton.inputEnabled = !0),
        this.optionsButton.events.onInputUp.add(function () {
          29 == this.optionsButton.frame && this.state.start("Settings");
        }, this),
        this.optionsButton.events.onInputDown.add(function () {
          this.optionsButton.loadTexture("atlas2", "opt1");
        }, this),
        this.optionsButton.events.onInputOut.add(function () {
          this.optionsButton.loadTexture("atlas2", "opt");
        }, this),
        (this.scoresButton = this.add.sprite(
          this.world.game.width - 260,
          this.world.game.height - 240,
          "atlas2",
          "opt2"
        )),
        (this.scoresButton.inputEnabled = false), // enable click on button
        (this.scoresButton.alpha = 0), // hide scores button
        this.scoresButton.events.onInputUp.add(function () {
          32 == this.scoresButton.frame && this.state.start("Scores");
        }, this),
        this.scoresButton.events.onInputDown.add(function () {
          this.scoresButton.loadTexture("atlas2", "opt3");
        }, this),
        this.scoresButton.events.onInputOut.add(function () {
          this.scoresButton.loadTexture("atlas2", "opt2");
        }, this),
        (this.soundToggleValue = localStorage.getItem("DJ_soundToggle") || !0),
        "false" == this.soundToggleValue
          ? (this.game.sound.mute = !0)
          : (this.game.sound.mute = !1);
    },
    update: function () {
      this.game.physics.arcade.overlap(
        this.player,
        this.platform,
        this.collide,
        null,
        this
      );
    },
    collide: function (t, e) {
      t.body.velocity.y > 0 && this.jumpSound.play(),
        (t.body.velocity.y = -1080);
    },
  }),
  ((Doodle = Doodle || {}).PreloadState = {
    preload: function () {
      var t =
        (this.game.add.image(0, 0, "splash"),
        this.game.add.image(320, 581, "logo"));
      t.anchor.setTo(0.5), t.scale.setTo(4.63), (t.alpha = 0);
      var e = this.game.add.image(320, 450, "gameicon");
      e.anchor.setTo(0.5), e.scale.setTo(5), (e.alpha = 0);
      var s = this.game.add
          .tween(e)
          .to({ alpha: 0.28 }, 146, Phaser.Easing.Linear.None)
          .start(),
        i = this.game.add
          .tween(e.scale)
          .to({ x: 3.8, y: 3.8 }, 146, Phaser.Easing.Linear.None)
          .start(),
        a = this.game.add
          .tween(e)
          .to({ alpha: 1 }, 374, Phaser.Easing.Linear.None),
        o = this.game.add
          .tween(e.scale)
          .to({ x: 0.8, y: 0.8 }, 374, Phaser.Easing.Linear.None),
        h = this.game.add
          .tween(e.scale)
          .to({ x: 1, y: 1 }, 280, Phaser.Easing.Linear.None);
      s.chain(a), i.chain(o, h);
      var n = this.game.add
          .tween(t)
          .to({ alpha: 0 }, 146, Phaser.Easing.Linear.None)
          .start(),
        l = this.game.add
          .tween(t.scale)
          .to({ x: 4.63, y: 4.63 }, 146, Phaser.Easing.Linear.None)
          .start(),
        r = this.game.add
          .tween(t)
          .to({ alpha: 1 }, 520, Phaser.Easing.Linear.None),
        d = this.game.add
          .tween(t.scale)
          .to({ x: 0.66, y: 0.66 }, 520, Phaser.Easing.Linear.None),
        u = this.game.add
          .tween(t.scale)
          .to({ x: 1, y: 1 }, 278, Phaser.Easing.Linear.None);
      n.chain(r),
        l.chain(d, u),
        this.game.load.atlas(
          "atlas",
          "assets/images/atlas.webp",
          "assets/images/atlas.json"
        ),
        this.game.load.atlas(
          "atlas2",
          "assets/images/atlas2.webp",
          "assets/images/atlas2.json"
        ),
        this.game.load.atlas(
          "atlas3",
          "assets/images/atlas3.webp",
          "assets/images/atlas3.json"
        ),
        this.game.load.atlas(
          "popupAtlas",
          "assets/images/popupAtlas.webp",
          "assets/images/popupAtlas.json"
        ),
        this.load.spritesheet(
          "player0",
          "assets/images/playerSheet.webp",
          124,
          120,
          4
        ),
        this.load.image("appstore", "assets/images/appstore.webp"),
        this.load.image("googleplay", "assets/images/googleplay.webp"),
        this.load.audio("white", [
          "assets/audio/white.mp3",
          "assets/audio/white.ogg",
        ]),
        this.load.audio("ufo_warning", [
          "assets/audio/ufo_warning.mp3",
          "assets/audio/ufo_warning.ogg",
        ]),
        this.load.audio("ufo_kill", [
          "assets/audio/ufo_kill.mp3",
          "assets/audio/ufo_kill.ogg",
        ]),
        this.load.audio("ufo_abduct", [
          "assets/audio/ufo_abduct.mp3",
          "assets/audio/ufo_abduct.ogg",
        ]),
        this.load.audio("spring", [
          "assets/audio/spring.mp3",
          "assets/audio/spring.ogg",
        ]),
        this.load.audio("shoot2", [
          "assets/audio/shoot2.mp3",
          "assets/audio/shoot2.ogg",
        ]),
        this.load.audio("shoot", [
          "assets/audio/shoot.mp3",
          "assets/audio/shoot.ogg",
        ]),
        this.load.audio("propeller", [
          "assets/audio/propeller.mp3",
          "assets/audio/propeller.ogg",
        ]),
        this.load.audio("monster_warning", [
          "assets/audio/monster_warning.mp3",
          "assets/audio/monster_warning.ogg",
        ]),
        this.load.audio("monster_kill", [
          "assets/audio/monster_kill.mp3",
          "assets/audio/monster_kill.ogg",
        ]),
        this.load.audio("monster_hit", [
          "assets/audio/monster_hit.mp3",
          "assets/audio/monster_hit.ogg",
        ]),
        this.load.audio("jumponmonster", [
          "assets/audio/jumponmonster.mp3",
          "assets/audio/jumponmonster.ogg",
        ]),
        this.load.audio("jump", [
          "assets/audio/jump.mp3",
          "assets/audio/jump.ogg",
        ]),
        this.load.audio("jetpack", [
          "assets/audio/jetpack.mp3",
          "assets/audio/jetpack.ogg",
        ]),
        this.load.audio("falling", [
          "assets/audio/falling.mp3",
          "assets/audio/falling.ogg",
        ]),
        this.load.audio("black_hole", [
          "assets/audio/black_hole.mp3",
          "assets/audio/black_hole.ogg",
        ]),
        this.load.audio("beake_platfrom", [
          "assets/audio/beake_platfrom.mp3",
          "assets/audio/beake_platfrom.ogg",
        ]),
        this.load.bitmapFont(
          "DoodleFont",
          "assets/fonts/bitmapFont_0.webp",
          "assets/fonts/bitmapFont.fnt"
        ),
        this.load.bitmapFont(
          "DoodleFont2",
          "assets/fonts/bitmapFont2_0.webp",
          "assets/fonts/bitmapFont2.fnt"
        ),
        this.load.text("scenes0", "assets/data/skin0Scenes.json"),
        this.load.text("stats", "assets/data/statachieve.json"),
        (this.startGame = !1),
        this.game.time.events.add(
          1.4 * Phaser.Timer.SECOND,
          function () {
            this.startGame && this.state.start("Menu"), (this.startGame = !0);
          },
          this
        ),
        this.game.load.onLoadComplete.add(function () {
          this.startGame && this.state.start("Menu"), (this.startGame = !0);
        }, this);
    },
    create: function () {},
  }),
  ((Doodle = Doodle || {}).ScoresState = {
    init: function () {
      (this.localTopScores =
        JSON.parse(localStorage.getItem("DJ_localTopScores")) || []),
        this.localTopScores.length > 10 && (this.localTopScores.length = 10),
        (this.followScroll = !1),
        (this.startTouchY = 0),
        (this.scrollLimit = -318),
        (this.scrollLimit2 = -230);
    },
    create: function () {
      this.game.input.mouse.mouseWheelCallback = function (e) {
        t.backgroundScores
          .getBounds()
          .contains(t.game.input.x, t.game.input.y) &&
          t.scrollMenu.visible &&
          t.scrollMenu.y <= 0 &&
          t.scrollMenu.y >= t.scrollLimit &&
          ((t.scrollMenu.y += 40 * t.game.input.mouse.wheelDelta),
          t.scrollMenu.y > 0 && (t.scrollMenu.y = 0),
          t.scrollMenu.y < t.scrollLimit && (t.scrollMenu.y = t.scrollLimit),
          (t.textElements.y = t.scrollMenu.y)),
          t.backgroundScores2
            .getBounds()
            .contains(t.game.input.x, t.game.input.y) &&
            t.scrollMenu2.visible &&
            t.scrollMenu2.y <= 0 &&
            t.scrollMenu2.y >= t.scrollLimit2 &&
            ((t.scrollMenu2.y += 40 * t.game.input.mouse.wheelDelta),
            t.scrollMenu2.y > 0 && (t.scrollMenu2.y = 0),
            t.scrollMenu2.y < t.scrollLimit2 &&
              (t.scrollMenu2.y = t.scrollLimit2),
            (t.textElements.y = t.scrollMenu2.y));
      };
      var t = this;
      if (
        (this.localTopScores.length > 0
          ? (this.localTopScores[0][0],
            this.localTopScores[0][1],
            (this.compare = this.submittedValue != this.localTopScores[0][1]))
          : (this.compare = !1),
        null == this.dataTest || this.compare)
      )
        t = this;
      (this.stats =
        JSON.parse(localStorage.getItem("DJ_stats")) ||
        JSON.parse(this.game.cache.getText("stats"))),
        (this.backgroundScores = this.add.tileSprite(
          100,
          268,
          620,
          810,
          "atlas2",
          "bgScores"
        )),
        (this.backgroundScores.inputEnabled = !0),
        this.backgroundScores.events.onInputDown.add(function () {
          (this.followScroll = !0), (this.startTouchY = this.input.y);
        }, this),
        this.backgroundScores.events.onInputUp.add(function () {
          this.followScroll = !1;
        }, this),
        (this.backgroundScores2 = this.add.tileSprite(
          100,
          185,
          620,
          810,
          "atlas2",
          "bgScores"
        )),
        (this.backgroundScores2.inputEnabled = !0),
        this.backgroundScores2.events.onInputDown.add(function () {
          (this.followScroll2 = !0), (this.startTouchY2 = this.input.y);
        }, this),
        this.backgroundScores2.events.onInputUp.add(function () {
          this.followScroll2 = !1;
        }, this),
        (this.scrollMenu = this.add.group()),
        (this.scrollMenu2 = this.add.group()),
        (this.textElements = this.add.group()),
        (this.achievementsGroup = this.add.group()),
        (this.scoresBtn = this.add.sprite(100, 180, "atlas2", "scoresBtn")),
        (this.scoresBtn.inputEnabled = !0),
        this.scoresBtn.events.onInputDown.add(function () {
          this.setState("score");
        }, this),
        (this.statsBtn = this.add.sprite(248, 180, "atlas2", "statsBtn")),
        (this.statsBtn.inputEnabled = !0),
        this.statsBtn.events.onInputDown.add(function () {
          this.setState("stats");
        }, this),
        (this.achievementsBtn = this.add.sprite(
          374,
          180,
          "atlas2",
          "achievementsBtn"
        )),
        (this.achievementsBtn.inputEnabled = !0),
        this.achievementsBtn.events.onInputDown.add(function () {
          this.setState("achievements");
        }, this),
        this.stats.achievements.forEach(function (t, e) {
          0 == t[3]
            ? (icon = this.add.sprite(115, 285 + 105 * e, "atlas2", "ach"))
            : (icon = this.add.sprite(115, 285 + 105 * e, "atlas2", "ach" + e)),
            this.achievementsGroup.add(icon);
        }, this),
        this.scrollMenu.add(this.backgroundScores),
        this.scrollMenu.add(this.scoresBtn),
        this.scrollMenu.add(this.statsBtn),
        this.scrollMenu.add(this.achievementsBtn),
        this.scrollMenu.add(this.achievementsGroup),
        this.scrollMenu2.add(this.backgroundScores2),
        (this.achievementsGroup.visible = !1);
      this.background = this.add.sprite(0, 0, "atlas3", "scores");
      (this.globalButton = this.add.sprite(460, 755, "atlas2", "globalBtn")),
        (this.globalButton.inputEnabled = !0),
        this.globalButton.events.onInputDown.add(function () {
          this.setLoad("global");
        }, this),
        (this.localButton = this.add.sprite(320, 755, "atlas2", "localBtn")),
        (this.localButton.inputEnabled = !0),
        this.localButton.events.onInputDown.add(function () {
          this.setLoad("local");
        }, this),
        (this.menuButton = new Phaser.Sprite(
          this.game,
          370,
          860,
          "atlas",
          "menu_01"
        )),
        (this.menuButton.inputEnabled = !0),
        this.menuButton.events.onInputOut.add(function () {
          this.menuButton.loadTexture("atlas", "menu_01");
        }, this),
        this.menuButton.events.onInputUp.add(function () {
          5 == this.menuButton.frame &&
            (this.state.start("Menu"),
            this.menuButton.loadTexture("atlas", "menu_01"));
        }, this),
        this.menuButton.events.onInputDown.add(function () {
          this.menuButton.loadTexture("atlas", "menu_02");
        }, this),
        this.add.existing(this.menuButton),
        this.setLoad("local");
    },
    update: function () {
      this.followScroll &&
        this.input.y != this.startTouchY &&
        this.scrollMenu.y <= 0 &&
        this.scrollMenu.y >= this.scrollLimit &&
        ((this.scrollMenu.y += this.input.y - this.startTouchY),
        this.scrollMenu.y > 0 && (this.scrollMenu.y = 0),
        this.scrollMenu.y < this.scrollLimit &&
          (this.scrollMenu.y = this.scrollLimit),
        (this.startTouchY = this.input.y),
        (this.textElements.y = this.scrollMenu.y)),
        this.followScroll2 &&
          this.input.y != this.startTouchY2 &&
          this.scrollMenu2.y <= 0 &&
          this.scrollMenu2.y >= this.scrollLimit2 &&
          ((this.scrollMenu2.y += this.input.y - this.startTouchY2),
          this.scrollMenu2.y > 0 && (this.scrollMenu2.y = 0),
          this.scrollMenu2.y < this.scrollLimit2 &&
            (this.scrollMenu2.y = this.scrollLimit2),
          (this.startTouchY2 = this.input.y),
          (this.textElements.y = this.scrollMenu2.y));
    },
    spawnText: function (t, e, s, i, a, o, h) {
      var n = this.textElements.getFirstExists(!1);
      return (
        n
          ? (n.reset(e, s), (n.text = i), (n.fontSize = a))
          : (((n = this.add.bitmapText(e, s, "DoodleFont", i, a)).text = i),
            this.textElements.add(n)),
        (n.align = o),
        n.anchor.setTo(h.x, h.y),
        n
      );
    },
    setState: function (t) {
      this.scoresBtn.loadTexture("atlas2", "scoresBtn"),
        this.statsBtn.loadTexture("atlas2", "statsBtn"),
        this.achievementsBtn.loadTexture("atlas2", "achievementsBtn"),
        (this.achievementsGroup.visible = !1),
        (this.scrollMenu.y = 0),
        (this.textElements.y = 0),
        this.textElements.forEachAlive(function (t) {
          t.kill();
        }, this),
        "score" == t
          ? ((this.backgroundScores.height = 810),
            (this.scrollLimit = -318),
            (this.backgroundScores.scale.y = 1),
            this.localTopScores.forEach(function (t, e) {
              this.spawnText(
                this,
                120,
                280 + 81 * e,
                e + 1 + ". " + t[0],
                60,
                "left",
                { x: 0, y: 0 }
              ),
                this.spawnText(this, 620, 280 + 81 * e, t[1], 60, "right", {
                  x: 1,
                  y: 0,
                });
            }, this),
            this.scoresBtn.loadTexture("atlas2", "scoresBtn1"))
          : "stats" == t
            ? (this.statsBtn.loadTexture("atlas2", "statsBtn1"),
              (this.backgroundScores.height = 2187),
              (this.scrollLimit = -1695),
              (this.backgroundScores.scale.y = 1),
              this.stats.stats.forEach(function (t, e) {
                4 == e || 5 == e || 6 == e
                  ? this.spawnText(
                      this,
                      620,
                      280 + 81 * e,
                      this.convertToHHMMSS(t[1]),
                      60,
                      "right",
                      { x: 1, y: 0 }
                    )
                  : this.spawnText(this, 620, 280 + 81 * e, t[1], 60, "right", {
                      x: 1,
                      y: 0,
                    }),
                  this.spawnText(this, 120, 280 + 81 * e, t[0], 60, "left", {
                    x: 0,
                    y: 0,
                  });
              }, this))
            : "achievements" == t &&
              ((this.achievementsGroup.visible = !0),
              this.achievementsBtn.loadTexture("atlas2", "achievementsBtn1"),
              (this.backgroundScores.height = 2187),
              (this.scrollLimit = -1508),
              (this.backgroundScores.scale.y = 1.3),
              this.stats.achievements.forEach(function (t, e) {
                this.spawnText(this, 195, 280 + 105 * e, t[0], 48, "left", {
                  x: 0,
                  y: 0,
                }),
                  this.spawnText(this, 195, 315 + 105 * e, t[1], 35, "right", {
                    x: 0,
                    y: 0,
                  });
              }, this));
    },
    convertToHHMMSS: function (t) {
      (hours = Math.floor(t / 3600)),
        (minutes = Math.floor(t / 60) % 60),
        (t %= 60);
      var e = "";
      return (
        0 != hours && (e += hours + "h:"),
        0 != minutes && (e += minutes + "m:"),
        e + (t + "s")
      );
    },
    setLoad: function (t) {
      this.globalButton.loadTexture("atlas2", "globalBtn"),
        this.localButton.loadTexture("atlas2", "localBtn"),
        (this.scrollMenu.visible = !1),
        (this.scrollMenu2.visible = !1),
        this.textElements.forEachAlive(function (t) {
          t.kill();
        }, this),
        "local" == t &&
          (this.localButton.loadTexture("atlas2", "localBtn1"),
          (this.scrollMenu.visible = !0),
          this.setState("score")),
        "global" == t &&
          (this.globalButton.loadTexture("atlas2", "globalBtn1"),
          (this.scrollMenu2.visible = !0),
          this.dataTest &&
            this.dataTest.forEach(function (t, e) {
              this.spawnText(
                this,
                120,
                199 + 81 * e,
                e + 1 + ". " + t[0],
                60,
                "left",
                { x: 0, y: 0 }
              ),
                this.spawnText(this, 620, 199 + 81 * e, t[1], 60, "right", {
                  x: 1,
                  y: 0,
                });
            }, this));
    },
  }),
  ((Doodle = Doodle || {}).SettingsState = {
    init: function () {
      (this.soundToggleValue = localStorage.getItem("DJ_soundToggle") || !0),
        (this.directionalShootingValue =
          localStorage.getItem("DJ_directionalShooting") || !1),
        (this.calibrateValue = localStorage.getItem("DJ_calibrate") || "AUTO"),
        (this.calibratedValue = localStorage.getItem("DJ_calibrated") || 0);
    },
    create: function () {
      (this.background = this.add.sprite(0, 0, "atlas2", "background")),
        (this.menuButton = new Phaser.Sprite(
          this.game,
          370,
          800,
          "atlas",
          "menu_01"
        )),
        (this.menuButton.inputEnabled = !0),
        this.menuButton.events.onInputOut.add(function () {
          this.menuButton.loadTexture("atlas", "menu_01");
        }, this),
        this.menuButton.events.onInputUp.add(function () {
          5 == this.menuButton.frame &&
            (this.state.start("Menu"),
            this.menuButton.loadTexture("atlas", "menu_01"));
        }, this),
        this.menuButton.events.onInputDown.add(function () {
          this.menuButton.loadTexture("atlas", "menu_02");
        }, this),
        this.add.existing(this.menuButton),
        (this.soundToggler = new Phaser.Sprite(
          this.game,
          360,
          460,
          "atlas2",
          "soundToggle"
        )),
        this.soundToggler.anchor.setTo(0.5),
        this.add.existing(this.soundToggler),
        (this.soundButton = new Phaser.Sprite(
          this.game,
          360,
          500,
          "atlas2",
          "ONoff1"
        )),
        this.soundButton.anchor.setTo(0.5),
        (this.soundButton.inputEnabled = !0),
        this.soundButton.events.onInputUp.add(function () {
          this.soundButton.over &&
            (25 == this.soundButton.frame
              ? this.toggleSound(!1)
              : this.toggleSound(!0));
        }, this),
        this.soundButton.events.onInputDown.add(function () {
          this.soundButton.over = !0;
        }, this),
        this.soundButton.events.onInputOut.add(function () {
          this.soundButton.over = !1;
        }, this),
        this.add.existing(this.soundButton),
        "false" == this.soundToggleValue &&
          ((this.game.sound.mute = !0),
          this.soundButton.loadTexture("atlas2", "onOFF")),
        (this.dirShoot = new Phaser.Sprite(
          this.game,
          300,
          240,
          "atlas2",
          "dirShoot"
        )),
        this.dirShoot.anchor.setTo(0.5),
        this.add.existing(this.dirShoot),
        (this.dirShootButton = new Phaser.Sprite(
          this.game,
          300,
          280,
          "atlas2",
          "ONoff1"
        )),
        this.dirShootButton.anchor.setTo(0.5),
        (this.dirShootButton.inputEnabled = !0),
        this.dirShootButton.events.onInputUp.add(function () {
          this.dirShootButton.over &&
            (25 == this.dirShootButton.frame
              ? this.toggleShooting(!1)
              : this.toggleShooting(!0));
        }, this),
        this.dirShootButton.events.onInputDown.add(function () {
          this.dirShootButton.over = !0;
        }, this),
        this.dirShootButton.events.onInputOut.add(function () {
          this.dirShootButton.over = !1;
        }, this),
        this.add.existing(this.dirShootButton),
        "false" == this.directionalShootingValue &&
          this.dirShootButton.loadTexture("atlas2", "onOFF"),
        (this.calibrate = new Phaser.Sprite(
          this.game,
          300,
          660,
          "atlas2",
          "calibrate"
        )),
        this.calibrate.anchor.setTo(0.5),
        this.add.existing(this.calibrate),
        (this.calibrateButton = new Phaser.Sprite(
          this.game,
          300,
          700,
          "atlas2",
          "AUTOman1"
        )),
        this.calibrateButton.anchor.setTo(0.5),
        (this.calibrateButton.inputEnabled = !0),
        this.calibrateButton.events.onInputUp.add(function () {
          this.calibrateButton.over &&
            (12 == this.calibrateButton.frame
              ? this.calibrateSet("MANUAL")
              : this.calibrateSet("AUTO"));
        }, this),
        this.calibrateButton.events.onInputDown.add(function () {
          this.calibrateButton.over = !0;
        }, this),
        this.calibrateButton.events.onInputOut.add(function () {
          this.calibrateButton.over = !1;
        }, this),
        this.add.existing(this.calibrateButton),
        "MANUAL" == this.calibrateValue &&
          this.calibrateButton.loadTexture("atlas2", "autoMAN"),
        (this.optionsLogo = this.add.sprite(30, 50, "atlas2", "optionsLogo"));
    },
    toggleSound: function (t) {
      if (t) {
        if (((this.soundToggle = !0), "object" == typeof localStorage))
          try {
            localStorage.setItem("DJ_soundToggle", this.soundToggle);
          } catch (t) {
            console.log("Progress not saved");
          }
        this.soundButton.loadTexture("atlas2", "ONoff1"),
          (this.game.sound.mute = !1);
      } else {
        if (((this.soundToggle = !1), "object" == typeof localStorage))
          try {
            localStorage.setItem("DJ_soundToggle", this.soundToggle);
          } catch (t) {
            console.log("Progress not saved");
          }
        this.soundButton.loadTexture("atlas2", "onOFF"),
          (this.game.sound.mute = !0);
      }
    },
    toggleShooting: function (t) {
      if (t) {
        if (
          ((this.directionalShootingValue = !0),
          "object" == typeof localStorage)
        )
          try {
            localStorage.setItem(
              "DJ_directionalShooting",
              this.directionalShootingValue
            );
          } catch (t) {
            console.log("Progress not saved");
          }
        this.dirShootButton.loadTexture("atlas2", "ONoff1");
      } else {
        if (
          ((this.directionalShootingValue = !1),
          "object" == typeof localStorage)
        )
          try {
            localStorage.setItem(
              "DJ_directionalShooting",
              this.directionalShootingValue
            );
          } catch (t) {
            console.log("Progress not saved");
          }
        this.dirShootButton.loadTexture("atlas2", "onOFF");
      }
    },
    calibrateSet: function (t) {
      if ("AUTO" == t) {
        if (((this.calibratedValue = 0), "object" == typeof localStorage))
          try {
            localStorage.setItem("DJ_calibrated", this.calibratedValue);
          } catch (t) {
            console.log("Progress not saved");
          }
        this.calibrateButton.loadTexture("atlas2", "AUTOman1");
      } else
        this.calibrateButton.loadTexture("atlas2", "autoMAN"),
          this.state.start("Calibrate");
      if ("object" == typeof localStorage)
        try {
          localStorage.setItem("DJ_calibrate", t);
        } catch (t) {
          console.log("Progress not saved");
        }
    },
  }),
  ((Doodle = Doodle || {}).Bonus = function (t, e, s, i, a, o, h, n) {
    (this.stats = n),
      Phaser.Sprite.call(this, t, e, s, "atlas", i),
      (this.bonusAction = function (t, e, s) {
        (this.bonusPool = s),
          (this.playerTimer = this.game.time.create(!1)),
          this.playerTimer.start(),
          e.y + e.height / 2 + this.bonusPool.y > t.bottom &&
            t.body.velocity.y > 0 &&
            ("bonus0" != e.type ||
              e.used ||
              ((e.used = !0),
              e.loadTexture("atlas", "bonus01"),
              (0 != t.frame && 2 != t.frame) ||
                ((t.frame += 1),
                t.playerTimer.add(
                  (20 * Phaser.Timer.SECOND) / 60,
                  function () {
                    t.frame -= 1;
                  },
                  this
                )),
              h.spring.play(),
              (this.stats.achievements[0][2] += 1),
              (this.stats.achievements[1][2] += 1),
              this.stats.achievements[0][2] >= 3 &&
                Doodle.GameState.achieveMentUnlock(0),
              this.stats.achievements[1][2] >= 5 &&
                Doodle.GameState.achieveMentUnlock(1),
              (t.body.velocity.y = -1800))),
          "bonus3" != e.type ||
            e.used ||
            t.withBonus ||
            ((this.stats.stats[19][1] += 1),
            (this.stats.achievements[8][2] += 1),
            this.stats.achievements[8][2] >= 3 &&
              Doodle.GameState.achieveMentUnlock(8),
            h.propeller.play(),
            t.addChild(e),
            (t.frame = 1),
            (e.x = 0),
            (e.y = -10),
            (e.used = !0),
            e.animations.add(
              "prop",
              ["atlas", "propeller_03", "propeller_02", "propeller_04"],
              24,
              !0
            ),
            e.play("prop"),
            (t.withBonus = !0),
            (t.bonusType = 3),
            (t.body.velocity.y = -250),
            (t.body.gravity.y = -2448),
            (e.body.velocity.x = 0),
            this.playerTimer.add(
              (80 * Phaser.Timer.SECOND) / 60,
              function () {
                t.body.gravity.y = -1728;
              },
              this
            ),
            this.playerTimer.add(
              (170 * Phaser.Timer.SECOND) / 60,
              function () {
                t.body.gravity.y = -1008;
              },
              this
            ),
            this.playerTimer.add(
              (195 * Phaser.Timer.SECOND) / 60,
              function () {
                e.animations.stop(null, !0), e.loadTexture("atlas", "bonus3");
              },
              this
            ),
            this.playerTimer.add(
              (200 * Phaser.Timer.SECOND) / 60,
              function () {
                (e.maxVel = 600),
                  (t.frame = 0),
                  (t.body.gravity.y = 0),
                  (t.bonusType = null),
                  (t.withBonus = !1),
                  t.removeChildren,
                  this.bonusPool.add(e),
                  (e.x = t.x + 13 * t.scale.x),
                  (e.y = t.y - this.bonusPool.y - 10),
                  (e.body.allowGravity = !0),
                  (e.body.velocity.y = t.body.velocity.y - 360),
                  (e.body.gravity.y = 1800),
                  (e.body.velocity.x = 180 * t.scale.x),
                  (e.body.gravity.x = -180 * t.scale.x),
                  (e.body.angularVelocity = 180 * -t.scale.x);
              },
              this
            )),
          "bonus2" != e.type ||
            e.used ||
            t.withBonus ||
            ((this.stats.stats[18][1] += 1),
            (this.stats.achievements[9][2] += 1),
            this.stats.achievements[9][2] >= 3 &&
              Doodle.GameState.achieveMentUnlock(9),
            h.jetpack.play(),
            t.addChild(e),
            e.loadTexture("atlas", "bonus2anim_01"),
            (e.x = 42),
            (e.y = 110),
            (e.used = !0),
            e.animations.add(
              "anim0",
              ["atlas", "bonus2anim_01", "bonus2anim_02", "bonus2anim_03"],
              24,
              !0
            ),
            e.animations.add(
              "anim1",
              ["atlas", "bonus2anim_04", "bonus2anim_05", "bonus2anim_06"],
              24,
              !0
            ),
            e.animations.add(
              "anim2",
              ["atlas", "bonus2anim_07", "bonus2anim_08", "bonus2anim_09"],
              24,
              !0
            ),
            e.play("anim0"),
            (t.withBonus = !0),
            (e.body.velocity.x = 0),
            (t.body.velocity.y = -1080),
            (t.body.gravity.y = -2952),
            this.playerTimer.add(
              (30 * Phaser.Timer.SECOND) / 60,
              function () {
                e.play("anim1");
              },
              this
            ),
            this.playerTimer.add(
              (60 * Phaser.Timer.SECOND) / 60,
              function () {
                t.body.gravity.y = -1728;
              },
              this
            ),
            this.playerTimer.add(
              (120 * Phaser.Timer.SECOND) / 60,
              function () {
                t.body.gravity.y = -864;
              },
              this
            ),
            this.playerTimer.add(
              (170 * Phaser.Timer.SECOND) / 60,
              function () {
                e.play("anim2");
              },
              this
            ),
            this.playerTimer.add(
              (180 * Phaser.Timer.SECOND) / 60,
              function () {
                (e.maxVel = 600),
                  e.animations.stop(null, !0),
                  e.loadTexture("atlas", "bonus2anim_10"),
                  (t.body.gravity.y = 0),
                  (t.withBonus = !1),
                  t.removeChildren,
                  this.bonusPool.add(e),
                  (e.x = t.x + 55 * t.scale.x),
                  (e.y = t.y - this.bonusPool.y + 110),
                  (e.body.allowGravity = !0),
                  (e.body.velocity.y = t.body.velocity.y - 360),
                  (e.body.gravity.y = 3600),
                  (e.body.velocity.x = 180 * t.scale.x),
                  (e.body.gravity.x = -180 * t.scale.x),
                  (e.body.angularVelocity = 120 * t.scale.x);
              },
              this
            ));
      }),
      this.reset(e, s, i, a, o);
  }),
  (Doodle.Bonus.prototype = Object.create(Phaser.Sprite.prototype)),
  (Doodle.Bonus.prototype.constructor = Doodle.Bonus),
  (Doodle.Bonus.prototype.kill = function () {
    this.playerTimer && this.playerTimer.stop(),
      Phaser.Sprite.prototype.kill.call(this);
  }),
  (Doodle.Bonus.prototype.reset = function (t, e, s, i, a) {
    Phaser.Sprite.prototype.reset.call(this, t, e),
      (this.maxVel = 0),
      this.loadTexture("atlas", s),
      (this.angle = 0),
      (this.type = s),
      this.game.physics.arcade.enableBody(this),
      this.body.setSize(this.width, this.height, 0, 0),
      (this.body.velocity.x = 0),
      (this.body.angularVelocity = 0),
      (this.body.velocity.y = 0),
      (this.body.allowGravity = !1),
      (this.body.immovable = !0),
      this.anchor.setTo(0.5, 1),
      (this.used = !1),
      0 != i.body.velocity.x &&
        ((this.body.velocity.x = i.body.velocity.x), (i.child = this));
    var o =
      Math.random() * (i.width - this.width - 10) -
      (i.width - this.width - 10) / 2;
    this.x -= o;
  }),
  (Doodle.Bonus.prototype.update = function () {
    600 == this.maxVel &&
      this.alive &&
      this.body.velocity.y > this.maxVel &&
      (this.body.velocity.y = 600);
  }),
  ((Doodle = Doodle || {}).Bullet = function (t, e, s, i, a) {
    (this.stats = a),
      Phaser.Sprite.call(this, t, e, s, "atlas", i),
      this.anchor.setTo(0.5),
      (this.checkWorldBounds = !0),
      (this.outOfBoundsKill = !0);
  }),
  (Doodle.Bullet.prototype = Object.create(Phaser.Sprite.prototype)),
  (Doodle.Bullet.prototype.constructor = Doodle.Bullet),
  (Doodle.Bullet.prototype.kill = function () {
    Phaser.Sprite.prototype.kill.call(this),
      this._outOfBoundsFired &&
        ((this.stats.achievements[6][2] = 0),
        (this.stats.achievements[7][2] = 0));
  }),
  ((Doodle = Doodle || {}).Obstacle = function (t, e, s, i, a, o, h) {
    Phaser.Sprite.call(this, t, e, s, "atlas", "obstacle" + i),
      (this.sounds = a),
      (this.stats = o),
      this.reset(e, s, i),
      (this.pool = h);
  }),
  (Doodle.Obstacle.prototype = Object.create(Phaser.Sprite.prototype)),
  (Doodle.Obstacle.prototype.constructor = Doodle.Obstacle),
  (Doodle.Obstacle.prototype.reset = function (t, e, s) {
    Phaser.Sprite.prototype.reset.call(this, t, e),
      (this.scale.x = 1),
      (this.type = s),
      this.loadTexture("atlas", "obstacle" + s),
      this.anchor.setTo(0.5, 0.5),
      this.game.physics.arcade.enableBody(this),
      this.body.setSize(this.width, this.height, 0, 0),
      (this.body.allowGravity = !1),
      (this.body.immovable = !0),
      (this.offsetXX = 0),
      (this.offsetYY = 0),
      (this.newOffsetX = 0),
      (this.newOffsetY = 0),
      (this.rangeX = 0),
      (this.rangeY = 0),
      (this.health = 1),
      this.sounds &&
        (4 != this.type && 6 != this.type
          ? this.sounds.monster_warning.play()
          : 4 != this.type && this.sounds.ufo_warning.play()),
      11 == s && (this.health = 2),
      4 == s &&
        (this.body.setSize(80, 80, this.width / 2 - 40, this.height / 2 - 40),
        this.game.world.sendToBack(this)),
      9 == s && ((this.body.velocity.x = 360), (this.scale.x *= -1)),
      6 == s &&
        ((this.animations.currentAnim = null),
        Math.random() > 0.33
          ? (this.animations.add("beam", ["atlas", "ufo_01", "ufo_02"], 24, !0),
            this.play("beam"),
            this.body.setSize(this.width, this.height, 0, 0))
          : this.body.setSize(
              160,
              70,
              this.width / 2 - 80,
              this.height / 2 - 35
            )),
      10 == s &&
        (this.animations.add(
          "fly",
          [
            "atlas",
            "obstacle10",
            "but1",
            "but2",
            "but3",
            "but4",
            "but3",
            "but2",
            "but1",
            "obstacle10",
          ],
          24,
          !0
        ),
        this.play("fly"));
  }),
  (Doodle.Obstacle.prototype.update = function () {
    this.alive &&
      9 == this.type &&
      (this.left >= this.game.world.width &&
        this.body.velocity.x > 0 &&
        ((this.scale.x *= -1), (this.body.velocity.x *= -1)),
      this.left <= 0 &&
        this.body.velocity.x < 0 &&
        ((this.scale.x *= -1), (this.body.velocity.x *= -1)),
      (this.newOffsetY = 20 * Math.sin((this.rangeY * Math.PI) / 180)),
      (this.y += this.newOffsetY - this.offsetYY),
      (this.offsetYY = this.newOffsetY),
      (this.rangeY += 8.5),
      this.rangeY >= 360 && (this.rangeY -= 360)),
      !this.alive ||
        (7 != this.type &&
          8 != this.type &&
          10 != this.type &&
          11 != this.type) ||
        ((this.newOffsetX = 20 * Math.sin((this.rangeX * Math.PI) / 180)),
        (this.newOffsetY = 10 * Math.sin((this.rangeY * Math.PI) / 180)),
        (this.x += this.newOffsetX - this.offsetXX),
        (this.y += this.newOffsetY - this.offsetYY),
        (this.offsetXX = this.newOffsetX),
        (this.offsetYY = this.newOffsetY),
        (this.rangeX += 14),
        (this.rangeY += 2.8),
        this.rangeX >= 360 && (this.rangeX -= 360),
        this.rangeY >= 360 && (this.rangeY -= 360)),
      this.alive &&
        6 == this.type &&
        !this.suckYou &&
        ((this.newOffsetX = 40 * Math.sin((this.rangeX * Math.PI) / 180)),
        (this.newOffsetY = 20 * Math.sin((this.rangeY * Math.PI) / 90)),
        (this.x += this.newOffsetX - this.offsetXX),
        (this.y += this.newOffsetY - this.offsetYY),
        (this.offsetXX = this.newOffsetX),
        (this.offsetYY = this.newOffsetY),
        (this.rangeX += 1),
        (this.rangeY += 1),
        this.rangeX >= 360 && (this.rangeX -= 360),
        this.rangeY >= 360 && (this.rangeY -= 360));
  }),
  (Doodle.Obstacle.prototype.damage = function (t) {
    Phaser.Sprite.prototype.damage.call(this, t),
      11 == this.type &&
        (this.animations.add(
          "bloody",
          [
            "atlas",
            "green0",
            "green1",
            "green2",
            "green3",
            "green2",
            "green1",
            "green0",
          ],
          24,
          !0
        ),
        this.play("bloody")),
      this.alive ||
        (6 == this.type
          ? (this.sounds.ufo_kill.play(), (this.stats.stats[10][1] += 1))
          : (this.sounds.monster_kill.play(), (this.stats.stats[8][1] += 1)),
        (this.stats.achievements[6][2] += 1),
        (this.stats.achievements[7][2] += 1),
        this.stats.achievements[6][2] >= 5 &&
          Doodle.GameState.achieveMentUnlock(6),
        this.stats.achievements[7][2] >= 10 &&
          Doodle.GameState.achieveMentUnlock(7));
  }),
  (Doodle.Obstacle.prototype.kill = function () {
    Phaser.Sprite.prototype.kill.call(this);
    var t = 0,
      e = 0;
    this.pool.forEachAlive(function (s) {
      6 == s.type && (t += 1),
        (7 != s.type &&
          8 != s.type &&
          9 != s.type &&
          10 != s.type &&
          11 != s.type) ||
          (e += 1);
    }, this),
      0 == t && this.sounds.ufo_warning.stop(),
      0 == e && this.sounds.monster_warning.stop();
  }),
  ((Doodle = Doodle || {}).Platform = function (t, e, s, i, a, o, h) {
    Phaser.Sprite.call(this, t, e, s, "atlas", i), this.reset(e, s, i, a, o, h);
  }),
  (Doodle.Platform.prototype = Object.create(Phaser.Sprite.prototype)),
  (Doodle.Platform.prototype.constructor = Doodle.Platform),
  (Doodle.Platform.prototype.reset = function (t, e, s, i, a, o) {
    Phaser.Sprite.prototype.reset.call(this, t, e),
      this.loadTexture("atlas", "platform0"),
      (this.type = 0),
      (this.hasBonusObject = -1),
      (this.moving = !1),
      (this.child = null),
      this.anchor.setTo(0.5, 0),
      this.game.physics.arcade.enableBody(this),
      this.body.setSize(this.width, this.height, 0, 0),
      (this.body.allowGravity = !1),
      (this.body.immovable = !0),
      null == o &&
        (2 != i.type &&
          Math.random() < 0.2 &&
          ((this.type = 2), this.loadTexture("atlas", "platform2")),
        a > 5500 &&
          100 * Math.random() < a / 400 &&
          ((this.moving = !0),
          2 != this.type &&
            ((this.type = 1), this.loadTexture("atlas", "platform1")),
          (this.setVelocity = 60 * (0.5 + 0.5 * Math.random() + a / 3e4) * 2),
          this.setVelocity > 300
            ? (this.body.velocity.x = 300)
            : (this.body.velocity.x = this.setVelocity))),
      null != o &&
        (this.loadTexture("atlas", "platform" + o),
        (this.type = o),
        1 == o &&
          ((this.setVelocity = 60 * (0.5 + 0.5 * Math.random() + a / 3e4) * 2),
          this.setVelocity > 300
            ? (this.body.velocity.x = 300)
            : (this.body.velocity.x = this.setVelocity)));
  }),
  (Doodle.Platform.prototype.update = function () {
    this.alive &&
      (this.right >= this.game.world.width &&
        (this.body.velocity.x > 0 && (this.body.velocity.x *= -1),
        this.child && (this.child.body.velocity.x *= -1)),
      this.left <= 0 &&
        (this.body.velocity.x < 0 && (this.body.velocity.x *= -1),
        this.child && (this.child.body.velocity.x *= -1)),
      this.body.allowGravity &&
        this.body.velocity.y > 600 &&
        (this.body.velocity.y = 600));
  });
