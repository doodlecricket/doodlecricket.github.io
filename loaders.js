// Function to create and insert a script tag
function createScriptTag(options) {
  return new Promise((resolve, reject) => {
    const script = document.createElement("script");

    if (options.src) {
      script.src = options.src;
      script.onload = resolve;
      script.onerror = reject;
    } else {
      resolve();
    }

    if (options.inline) {
      script.textContent = options.inline;
    }

    if (options.async) {
      script.async = true;
    }

    if (options.defer) {
      script.defer = true;
    }

    if (options.crossOrigin) {
      script.crossOrigin = options.crossOrigin;
    }

    if (options.attributes) {
      for (const [key, value] of Object.entries(options.attributes)) {
        script.setAttribute(key, value);
      }
    }

    document.head.appendChild(script);

    if (!options.src) {
      // If it's an inline script, resolve immediately after appending
      resolve();
    }
  });
}

// Function to create and insert ad display div
function createAdDisplayDiv(
  id,
  className = null,
  container = null,
  style = null,
) {
  const div = document.createElement("div");
  div.id = id;
  if (className != null) {
    div.className = className;
  }
  if (style != null) {
    div.setAttribute("style", style);
  }

  const script = document.createElement("script");
  script.textContent = `
    googletag.cmd.push(function () {
      googletag.display('${id}');
    });
  `;

  div.appendChild(script);

  if (container == null) {
    document.body.appendChild(div);
  } else {
    document.querySelector(container).appendChild(div);
  }
}
