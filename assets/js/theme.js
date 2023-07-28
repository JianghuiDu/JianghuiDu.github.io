// Has to be in the head tag, otherwise a flicker effect will occur.

let toggleTheme = (theme) => {
  if (theme == "dark") {
    setTheme("light");
  } else {
    setTheme("dark");
  }
<<<<<<< HEAD
}


let setTheme = (theme) =>  {
=======
};

let setTheme = (theme) => {
>>>>>>> 347ea053 (Initial commit)
  transTheme();
  setHighlight(theme);
  setGiscusTheme(theme);

  if (theme) {
    document.documentElement.setAttribute("data-theme", theme);
<<<<<<< HEAD
  }
  else {
    document.documentElement.removeAttribute("data-theme");
  }
  localStorage.setItem("theme", theme);

  // Updates the background of medium-zoom overlay.
  if (typeof medium_zoom !== 'undefined') {
    medium_zoom.update({
      background: getComputedStyle(document.documentElement)
          .getPropertyValue('--global-bg-color') + 'ee',  // + 'ee' for trasparency.
    })
  }
};


=======

    // Add class to tables.
    let tables = document.getElementsByTagName("table");
    for (let i = 0; i < tables.length; i++) {
      if (theme == "dark") {
        tables[i].classList.add("table-dark");
      } else {
        tables[i].classList.remove("table-dark");
      }
    }

    // Set jupyter notebooks themes.
    let jupyterNotebooks = document.getElementsByClassName("jupyter-notebook-iframe-container");
    for (let i = 0; i < jupyterNotebooks.length; i++) {
      let bodyElement = jupyterNotebooks[i].getElementsByTagName("iframe")[0].contentWindow.document.body;
      if (theme == "dark") {
        bodyElement.setAttribute("data-jp-theme-light", "false");
        bodyElement.setAttribute("data-jp-theme-name", "JupyterLab Dark");
      } else {
        bodyElement.setAttribute("data-jp-theme-light", "true");
        bodyElement.setAttribute("data-jp-theme-name", "JupyterLab Light");
      }
    }

  } else {
    document.documentElement.removeAttribute("data-theme");
  }

  localStorage.setItem("theme", theme);

  // Updates the background of medium-zoom overlay.
  if (typeof medium_zoom !== "undefined") {
    medium_zoom.update({
      background:
        getComputedStyle(document.documentElement).getPropertyValue(
          "--global-bg-color"
        ) + "ee", // + 'ee' for trasparency.
    });
  }
};

>>>>>>> 347ea053 (Initial commit)
let setHighlight = (theme) => {
  if (theme == "dark") {
    document.getElementById("highlight_theme_light").media = "none";
    document.getElementById("highlight_theme_dark").media = "";
  } else {
    document.getElementById("highlight_theme_dark").media = "none";
    document.getElementById("highlight_theme_light").media = "";
  }
<<<<<<< HEAD
}


let setGiscusTheme = (theme) => {

  function sendMessage(message) {
    const iframe = document.querySelector('iframe.giscus-frame');
    if (!iframe) return;
    iframe.contentWindow.postMessage({ giscus: message }, 'https://giscus.app');
=======
};

let setGiscusTheme = (theme) => {
  function sendMessage(message) {
    const iframe = document.querySelector("iframe.giscus-frame");
    if (!iframe) return;
    iframe.contentWindow.postMessage({ giscus: message }, "https://giscus.app");
>>>>>>> 347ea053 (Initial commit)
  }

  sendMessage({
    setConfig: {
<<<<<<< HEAD
      theme: theme
    }
  });

}

=======
      theme: theme,
    },
  });
};
>>>>>>> 347ea053 (Initial commit)

let transTheme = () => {
  document.documentElement.classList.add("transition");
  window.setTimeout(() => {
    document.documentElement.classList.remove("transition");
<<<<<<< HEAD
  }, 500)
}


let initTheme = (theme) => {
  if (theme == null || theme == 'null') {
    const userPref = window.matchMedia;
    if (userPref && userPref('(prefers-color-scheme: dark)').matches) {
        theme = 'dark';
=======
  }, 500);
};

let initTheme = (theme) => {
  if (theme == null || theme == "null") {
    const userPref = window.matchMedia;
    if (userPref && userPref("(prefers-color-scheme: dark)").matches) {
      theme = "dark";
>>>>>>> 347ea053 (Initial commit)
    }
  }

  setTheme(theme);
<<<<<<< HEAD
}

=======
};
>>>>>>> 347ea053 (Initial commit)

initTheme(localStorage.getItem("theme"));
