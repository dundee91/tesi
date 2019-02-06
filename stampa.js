const fs = require('fs')
const path = require('path')
const app = require('electron').remote
const dialog = app.dialog
const ipc = require('electron').ipcRenderer
const BrowserWindow = require('electron')

ipc.on('stampa', function (ev){

    console.log("stampa?")
    const pdfPath = path.join(__dirname,'print.pdf');
    const win = BrowserWindow.fromWebContents(ev.sender);

    win.webContents.printToPDF({}, function(error, data){
        if(error){
            return console.log(error.message)
        }
        fs.writeFile(pdfPath, data, function(err){
            if(err){
                return console.log(err.message)
            }

            Electron.shell.openExternal('file://' + pdfPath);
        })
    })
    
    
})