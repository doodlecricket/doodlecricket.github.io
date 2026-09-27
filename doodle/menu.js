// Games menu behaviour. The markup is static HTML rendered by
// scripts/build-pages.mjs (see doodle.css for the look).
(function () {
  "use strict";

  // Category filters: works for the menu panel and the grid on hub pages.
  function initFilters(root) {
    var chips = root.querySelectorAll("[data-dd-filter]");
    chips.forEach(function (chip) {
      chip.addEventListener("click", function () {
        var cat = chip.getAttribute("data-dd-filter");
        chips.forEach(function (c) {
          c.setAttribute("aria-pressed", String(c === chip));
        });
        root.querySelectorAll("[data-dd-cat]").forEach(function (item) {
          item.hidden =
            cat !== "all" && item.getAttribute("data-dd-cat") !== cat;
        });
      });
    });
  }

  // Keep floating UI clear of ad slots, whatever the page layout: measure the
  // visible top, left and bottom ads and expose the free area as CSS vars.
  var AD_TOP = ".ad-top, .top-placeholder";
  var AD_LEFT = ".ad-left, .left-sidebar";
  var AD_BOTTOM = ".ad-bottom, .bottom-placeholder";

  function visibleRects(selector) {
    var rects = [];
    document.querySelectorAll(selector).forEach(function (el) {
      var style = getComputedStyle(el);
      var r = el.getBoundingClientRect();
      if (
        style.display !== "none" &&
        style.visibility !== "hidden" &&
        r.width > 0 &&
        r.height > 0
      ) {
        rects.push(r);
      }
    });
    return rects;
  }

  function placeClearOfAds() {
    var h = window.innerHeight;
    var w = window.innerWidth;
    var top = 0;
    var left = 0;
    var bottom = 0;
    visibleRects(AD_TOP).forEach(function (r) {
      if (r.top < h / 2) top = Math.max(top, r.bottom);
    });
    visibleRects(AD_LEFT).forEach(function (r) {
      if (r.left < w / 3 && r.height > h / 3) left = Math.max(left, r.right);
    });
    visibleRects(AD_BOTTOM).forEach(function (r) {
      if (r.bottom > h / 2) bottom = Math.max(bottom, h - r.top);
    });
    var s = document.documentElement.style;
    s.setProperty("--dd-safe-top", Math.round(Math.max(top, 0) + 12) + "px");
    s.setProperty("--dd-safe-left", Math.round(left + 12) + "px");
    s.setProperty("--dd-safe-bottom", Math.round(bottom) + "px");
  }

  function initMenu() {
    var launcher = document.querySelector("[data-dd-launcher]");
    var menu = document.querySelector("[data-dd-menu]");
    if (!launcher || !menu) return;
    var panel = menu.querySelector(".dd-panel");

    function focusables() {
      return Array.prototype.filter.call(
        panel.querySelectorAll("a[href], button:not([disabled])"),
        function (el) {
          return el.offsetParent !== null;
        },
      );
    }

    function open() {
      placeClearOfAds();
      menu.hidden = false;
      document.documentElement.classList.add("dd-open");
      launcher.setAttribute("aria-expanded", "true");
      panel.focus();
    }

    function close() {
      menu.hidden = true;
      document.documentElement.classList.remove("dd-open");
      launcher.setAttribute("aria-expanded", "false");
      launcher.focus();
    }

    launcher.addEventListener("click", open);
    menu.addEventListener("click", function (e) {
      if (e.target.closest("[data-dd-close]")) close();
    });

    // While open, keys belong to the menu, not to the game underneath.
    menu.addEventListener("keydown", function (e) {
      e.stopPropagation();
      if (e.key === "Escape") {
        close();
        return;
      }
      if (e.key !== "Tab") return;
      var items = focusables();
      if (!items.length) return;
      var first = items[0];
      var last = items[items.length - 1];
      if (
        e.shiftKey &&
        (document.activeElement === first || document.activeElement === panel)
      ) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    });

    placeClearOfAds();
    window.addEventListener("resize", placeClearOfAds);
    // Ads load late and can change size.
    [1500, 4000, 8000].forEach(function (ms) {
      setTimeout(placeClearOfAds, ms);
    });
  }

  function init() {
    document.querySelectorAll("[data-dd-games]").forEach(initFilters);
    initMenu();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
