const { app, BrowserWindow, ipcMain } = require("electron");
const path = require("path");
const fs = require("fs");
var exec = require("child_process").exec;

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let win;

async function createWindow() {
  // Create the browser window.
  win = new BrowserWindow({
    autoHideMenuBar: true,
    width: 800,
    height: 800,
    webPreferences: {
      nodeIntegration: false, // is default value after Electron v5
      contextIsolation: true, // protect against prototype pollution
      enableRemoteModule: false, // turn off remote
      preload: path.join(__dirname, "preload.js"), // use a preload script
    },
  });

  // Load app
  win.loadFile(path.join(__dirname, "index.html"));

  // rest of code..
}

app.on("ready", createWindow);

ipcMain.on("toMain", (event, args) => {
  console.log(args);
  dir = exec(args, function (err, stdout, stderr) {
    if (err) {
      // should have err.code here?
    }
    console.log(stdout);
  });
  dir.on("exit", function (code) {
    // exit code is code
  });
  fs.readFile("install.sh", (error, data) => {
    // Do something with file contents

    // Send result back to renderer process
    win.webContents.send("fromMain", "Hello");
  });
});
