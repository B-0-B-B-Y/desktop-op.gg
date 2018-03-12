const electron = require('electron')
const {app, BrowserWindow, ipcMain} = require('electron')
const { blockWindowAds, adBlocker } = require('electron-ad-blocker');
const path = require('path')
const url = require('url')
const fs = require('fs')

let opggWindow = null;

app.on('ready', function() {

  const {width, height} = electron.screen.getPrimaryDisplay().size

    opggWindow = new BrowserWindow({
        height: height * 0.8,
        width: width * 0.6,
        frame: false,
        transparent: false,
        icon: path.join(__dirname, 'app/build/icon.png'),
        alwaysOnTop: false
    })

    opggWindow.loadURL('file://' + __dirname + '/app/index.html');

    const options = {
      verbose: false,
      logger: console,
    }

    //opggWindow.webContents.openDevTools()

    blockWindowAds(opggWindow, options);

})

ipcMain.on('button-press-hide', (event, arg) => {
  opggWindow.minimize()
})

ipcMain.on('button-press-close', (event, arg) => {
  app.quit()
})
