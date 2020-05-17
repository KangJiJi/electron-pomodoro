const { app, BrowserWindow, Menu } = require("electron");
const url = require("url");
const path = require("path");
const isDev = require("electron-is-dev");
let mainWin;

function createWindow() {
  Menu.setApplicationMenu(null);
  mainWin = new BrowserWindow({
    center: true,
    fullscreenable: false,
    resizable: false,
    width: 380,
    height: 285,
  });

  const startUrl = isDev
    ? "http://localhost:3000"
    : process.env.ELECTRON_START_URL ||
      url.format({
        pathname: path.join(__dirname, "../build/index.html"),
        protocol: "file:",
        slashes: true,
      });

  mainWin.loadURL(startUrl);

  if (isDev) {
    mainWin.webContents.openDevTools();
  }

  mainWin.on("closed", () => {
    mainWin = null;
  });
}

app.on("ready", () => {
  createWindow();
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (mainWin === null) {
    createWindow();
  }
});
