const { app, BrowserWindow, ipcMain } = require("electron");
const path = require("path");
const { menu } = require("./menu");

let mainWindow;

const isWindows = process.platform === "win32";

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, "preload.js")
      // (NOT RECOMMENDED)
      // If true, we can skip attaching functions from ./menu-functions.js to window object in preload.js.
      // And, instead, we can use electron APIs directly in renderer.js
      // From Electron v5, nodeIntegration is set to false by default. And the window is recommended to use preload.js to get access to only required Node.js apis.
      // nodeIntegration: true
    },
    frame: isWindows ? false : true //Remove frame to hide default menu
  });

  mainWindow.loadFile("index.html");

  mainWindow.on("closed", function () {
    mainWindow = null;
  });
}

app.on("ready", createWindow);

app.on("window-all-closed", function () {
  if (process.platform !== "darwin") app.quit();
});

app.on("activate", function () {
  if (mainWindow === null) createWindow();
});

// Register an event listener. When ipcRenderer sends mouse click co-ordinates, show menu at that point.
ipcMain.on(`display-app-menu`, function (e, args) {
  if (isWindows && mainWindow) {
    menu.popup({
      window: mainWindow,
      x: args.x,
      y: args.y
    });
  }
});


// Register an event listener. When ipcRenderer sends a request to minimize the window; minimize the window if possible.
ipcMain.on(`minimize-window`, function (e, args) {
  if (mainWindow) {
    if (mainWindow.minimizable) {
      // browserWindow.isMinimizable() for old electron versions
      mainWindow.minimize();
    }
  }
});

// Register an event listener. When ipcRenderer sends a request to maximize he window; maximize the window if possible.
ipcMain.on(`maximize-window`, function (e, args) {
  if (mainWindow) {
    if (mainWindow.maximizable) {
      // browserWindow.isMinimizable() for old electron versions
      mainWindow.maximize();
    }
  }
});

// Register an event listener. When ipcRenderer sends a request to unmaximize the window, unmaximize the window.
ipcMain.on(`unmaximize-window`, function (e, args) {
  if (mainWindow) {
    mainWindow.unmaximize()
  }
});

// Register an event listener. When ipcRenderer sends a request to max-unmax the window; check if it is maximized and unmaximize it. Otherwise maximize it
ipcMain.on(`max-unmax-window`, function (e, args) {
  if (mainWindow) {
    if (mainWindow.isMaximized()) {
      mainWindow.unmaximize();
    } else {
      mainWindow.maximize();
    }
  }
});

// Register an event listener. When ipcRenderer sends a request to close the window; close it
ipcMain.on(`close-window`, function (e, args) {
  if (mainWindow) {
    mainWindow.close();
  }
});