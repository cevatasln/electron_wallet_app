// eslint-disable-next-line no-undef
const { ipcRenderer } = require("electron");
window.irender = ipcRenderer;
window.addEventListener("DOMContentLoaded", () => {
  // eslint-disable-next-line no-unused-vars
  const replaceText = (selector, text) => {
    const element = document.getElementById(selector);
    if (element) element.innerText = text;
  };

  // eslint-disable-next-line no-unused-vars
  for (const type of ["chrome", "node", "electron"]) {
    // eslint-disable-next-line no-undef
    // replaceText(`${type}-version`, process.versions[type]);
  }
});
