const electron = require("electron");

// console.log("the value of the electron is:");
// console.dir(electron);

const { app, BrowserWindow } = electron;

let win;

const createWindow = () => {
    win = new BrowserWindow({
        height: 200,
        width: 200
    });

    win.loadFile("./index.html")

    win.webContents.openDevTools();

    win.on("close", () => {
        win = null;
    });
};

app.on("ready", createWindow);

app.on("window-all-closed", () => {
    if(process.platform !== "darwin") {
        app.quit();
    }
});

app.on("activate", () => {
    if(win == null) {
        createWindow();
    }
});