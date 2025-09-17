const { app, BrowserWindow } = require("electron");
const path = require("path");

function createWindow() {
  const win = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: { preload: path.join(__dirname, "preload.js") },
  });

  // Load Next.js frontend (assuming dev server on 3000)
  win.loadURL("http://localhost:3000");
}

app.whenReady().then(createWindow);