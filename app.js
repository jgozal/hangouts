const electron = require('electron');
const { app, BrowserWindow } = electron;

let mainWindow;

app.on('ready', () => {
    mainWindow = new BrowserWindow({
        width: 1000,
        height: 700
    });

    mainWindow.setTitle('Google Hangouts');
    mainWindow.loadURL('https://hangouts.google.com/?hl=en');

    mainWindow.on('closed', () => {
        mainWindow = null;
    });
});