const { app, BrowserWindow, Tray } = require('electron');

let mainWindow;

app.on('ready', ()=>{
  
  mainWindow = new BrowserWindow({
    width: 400,
    height: 400,
    resizable: false,
    icon: __dirname+"/assets/img/favicon.ico"
  });
  
  mainWindow.loadURL(`file://${__dirname}/index.html`)
})