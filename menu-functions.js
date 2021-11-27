const { ipcRenderer } = require("electron");


function openMenu(x, y) {
  ipcRenderer.send(`display-app-menu`, { x, y });
}

function minimizeWindow() {
  ipcRenderer.send(`minimize-window`);
}

function maximizeWindow() {
  ipcRenderer.send(`maximize-window`);
}

function unmaximizeWindow() {
  ipcRenderer.send(`unmaximize-window`);
}

function maxUnmaxWindow() {
  ipcRenderer.send(`max-unmax-window`);
}

function closeWindow() {
  ipcRenderer.send(`close-window`);
}


module.exports = {
  openMenu,
  minimizeWindow,
  maximizeWindow,
  unmaximizeWindow,
  maxUnmaxWindow,
  closeWindow,
};

