const { remote, ipcRenderer } = require("electron");

function getCurrentWindow() {
  return remote.getCurrentWindow();
}

function openMenu(x, y) {
  ipcRenderer.send(`display-app-menu`, { x, y });
}

function minimizeWindow(window = getCurrentWindow()) {
  if (window.isMinimizable()) {
    window.minimize();
  }
}

function maximizeWindow(window = getCurrentWindow()) {
  if (window.isMaximizable()) {
    window.maximize();
  }
}

function unmaximizeWindow(window = getCurrentWindow()) {
  window.unmaximize();
}

function maxUnmaxWindow(window = getCurrentWindow()) {
  if (window.isMaximized()) {
    window.unmaximize();
  } else {
    window.maximize();
  }
}

function close(window = getCurrentWindow()) {
  window.close();
}

function isWindowMaximized(window = getCurrentWindow()) {
  return window.isMaximized();
}

module.exports = {
  getCurrentWindow,
  openMenu,
  minimizeWindow,
  maximizeWindow,
  unmaximizeWindow,
  maxUnmaxWindow,
  isWindowMaximized
};
