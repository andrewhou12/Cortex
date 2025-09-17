const { app, BrowserWindow } = require("electron");
const path = require("path");

function createWindow() {
  const win = new BrowserWindow({
    width: 1200,
    height: 800,
    frame: false, 
    transparent: true, 
    vibrancy: false, 
    hasShadow: false, 
    skipTaskbar: true, 
    hiddenInMissionControl: true,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
    },
  });

  win.loadURL("http://localhost:3000");
}

app.whenReady().then(createWindow);
