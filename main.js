
const { app, BrowserWindow } = require("electron");
const path = require("path");
const url = require("url");

let win;
function createWindow() {
  win = new BrowserWindow({titleBarStyle: 'hidden',
  titleBarOverlay:{
    color: 'rgb(170, 230, 250)',
    symbolColor: '#000'
  }, width: 1600, height: 800 ,
}, );
  // load the dist folder from Angular
  win.loadURL(
    url.format({
      pathname: path.join(__dirname, '/dist/index.html'), // compiled verion of our app
      protocol: "file:",
      slashes: true
    })
  );
  // The following is optional and will open the DevTools:
  // win.webContents.openDevTools()
  win.on("closed", () => {
    win = null;
  });
}
app.on("ready", createWindow);
// on macOS, closing the window doesn't quit the app
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
  
});