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
    resizable: false,
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
  const path2 = "./command.txt";
  try {
    if (fs.existsSync(path2)) {
      const data = fs.readFileSync("./command.txt", {
        encoding: "utf8",
        flag: "r",
      });
      dir = exec(data, function (err, stdout, stderr) {
        if (err) {
          // should have err.code here?
        }
        console.log(stdout);
        var m = 0,
          s = 0,
          b = 0,
          d = 0,
          cR = 0,
          cG = 0,
          cB = 0;
        if (data.includes("cB")) {
          var dashes = [];
          for (var i = 0; i < data.length; i++) {
            if (data.charAt(i) == "-") {
              dashes.push(i);
            }
          }
          m = parseInt(data.substring(data.indexOf("m") + 1, dashes[1] - 1));
          s = parseInt(data.substring(data.indexOf("s") + 1, dashes[2] - 1));
          b = parseInt(data.substring(data.indexOf("-b") + 3, dashes[3] - 1));
          cR = parseInt(data.substring(data.indexOf("R") + 1, dashes[4] - 1));
          cG = parseInt(data.substring(data.indexOf("G") + 1, dashes[5] - 1));
          cB = parseInt(data.substring(data.indexOf("B") + 1, data.length));
          console.log(m, s, b, cR, cG, cB);
          win.webContents.send("fromMain", {
            m: m,
            s: s,
            b: b,
            cR: cR,
            cG: cG,
            cB: cB,
          });
        } else {
          var dashes = [];
          for (var i = 0; i < data.length; i++) {
            if (data.charAt(i) == "-") {
              dashes.push(i);
            }
          }
          m = parseInt(data.substring(data.indexOf("m") + 1, dashes[1] - 1));
          s = parseInt(data.substring(data.indexOf("s") + 1, dashes[2] - 1));
          b = parseInt(data.substring(data.indexOf("-b") + 3, dashes[3] - 1));
          d = parseInt(data.substring(data.indexOf("d") + 1, data.length));
          console.log(m, s, b, d);
          win.webContents.send("fromMain", { m: m, s: s, b: b, d: d });
        }
      });
      //file exists
    }
  } catch (err) {
    console.error(err);
  }

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
    fs.writeFileSync("command.txt", args);
  });
  dir.on("exit", function (code) {
    // exit code is code
  });
  fs.readFile("install.sh", (error, data) => {
    // Do something with file contents
    // Send result back to renderer process
    // win.webContents.send("fromMain", "Hello");
  });
});
