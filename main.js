// eslint-disable-next-line no-undef
const { app, BrowserWindow, ipcMain } = require("electron");
// eslint-disable-next-line no-unused-vars, no-undef
const path = require("path");
// eslint-disable-next-line no-undef
var accounts = require("./db/models/accounts");
function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      // eslint-disable-next-line no-undef
      preload: path.join(__dirname, "preload.js"),
      nodeIntegration: true,
      contextIsolation: false,
    },
  });

  // eslint-disable-next-line no-unused-vars
  ipcMain.handle("accounts", async (event, arg) => {
    return await accounts.listAccounts;
    // await awaitableProcess();
  });

  // eslint-disable-next-line no-undef
  win.loadFile(__dirname + "./dist/index.html");
}

app.whenReady().then(() => {
  createWindow();

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on("window-all-closed", () => {
  // eslint-disable-next-line no-undef
  if (process.platform !== "darwin") {
    app.quit();
  }
});
