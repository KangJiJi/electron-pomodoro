const { app, BrowserWindow, Menu } = require("electron");
const url = require("url");
const path = require("path");
const isDev = require("electron-is-dev");
let mainWin;

function createWindow() {
  const menu = Menu.buildFromTemplate([
    {
      label: "Dev Tools",
      role: "toggleDevTools",
      accelerator: "F12",
      click: () => {
        win.webContents.toggleDevTools();
      },
    },
  ]);
  Menu.setApplicationMenu(menu);
  mainWin = new BrowserWindow({
    center: true,
    fullscreenable: false,
    resizable: false,
    autoHideMenuBar: true,
    width: 320,
    height: 285,
    icon: path.join(
      __dirname,
      "../src/assets/images/icon/electronTomato/electronTomato.png"
    ),
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

app.setAppUserModelId("Pomodoro timer");

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
