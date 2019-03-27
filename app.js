
const electron = require('electron')

const { app, BrowserWindow, Menu } = require('electron')

const path = require('path')
const url = require('url')
const fs = require('fs')
const os = require('os')
const MenuItem = electron.MenuItem
const Tray = electron.Tray
const iconPath = path.join(__dirname, 'logo1.png')
const ipc = electron.ipcMain
const shell = require('electron').shell

let tray = null
let window = null

// aspetta fino a che l'app non è pronta
app.on('ready', () => {

  // Creo icona nella barra delle icone
  tray = new Tray(iconPath)
  // e menu sull'icona
  let menuIcona = [
    {
      label: 'Sito',
      click: function () {
        electron.shell.openExternal('http://www.odcec.an.it/')
      }
    },
    {
      type: 'separator'
    },
    {
      label: 'Chiudi', click() {
        var choice = require('electron').dialog.showMessageBox(
          {
            type: 'question',
            buttons: ['Yes', 'No'],
            title: 'Conferma',
            message: 'Sei sicuro di voler uscire?'
          }, (choice) => {
            if (choice == '0') {
              app.quit()
            }
          }
        );
      }
    }
  ]
  const iconMenu = Menu.buildFromTemplate(menuIcona)
  tray.setContextMenu(iconMenu)
  tray.setToolTip('Analisi bilancio')

  // Creo la finestra iniziale
  window = new BrowserWindow({
    // Imposto il colore di sfondo
    backgroundColor: "#D6D8DC",
    show: false
  })
  // visualizzo finestra in fullscreen
  window.maximize()
  

  //Creo il menù
  var menu = Menu.buildFromTemplate([
    {
      label: 'File',
      submenu: [
        {
          label: 'Apri progetto',
          //passo alla classe index.js dove c'è la funzione di apertura
          click: function (menuItem, currentWindow) {
            currentWindow.webContents.send('apri')
          }
        },
        { type: "separator" },
        {
          label: 'Salva con nome',
          //passo alla classe index.js dove c'è la funzione di salvataggio
          click: function (menuItem, currentWindow) {
            currentWindow.webContents.send('salva')
          }
        },
        { type: "separator" },
        {
          label: 'Esci', click() {
            var choice = require('electron').dialog.showMessageBox(
              {
                type: 'question',
                buttons: ['Yes', 'No'],
                title: 'Conferma',
                message: 'Sei sicuro di voler uscire?'
              }, (choice) => {
                if (choice == '0') {
                  app.quit()
                }
              }
            );
          }
        },
      ]
    },
    {
      label: 'Visualizza',
      submenu: [
        { role: 'reload', label: 'Pulisci' },
        { role: 'toggledevtools', label: 'Ispeziona' },
        { type: 'separator' },
        { role: 'resetzoom', label: 'Ripristina zoom' },
        { role: 'zoomin', label: 'Aumenta zoom' },
        { role: 'zoomout', label: 'Diminuisci zoom' },
        { type: 'separator' },
        { role: 'togglefullscreen', label: 'Modalità schermo intero' }
      ]
    },
    /*
    {
      label: 'Strumenti',
      submenu: [
        { label: 'Modifica anno di partenza' },
        { label: 'Aggiungi anno' },
        { label: 'Rimuovi ultimo anno' },
        { label: 'Aggiungi anno (forecast)' },
        { label: 'Rimuovi ultimo anno (forecast)' },
      ]
    },
    */
    {
      label: 'Opzioni',
      submenu: [
        { role: 'undo', label: 'Annulla' },
        { type: 'separator' },
        { role: 'cut', label: 'Taglia' },
        { role: 'copy', label: 'Copia' },
        { role: 'paste', label: 'Incolla' },
        { role: 'delete', label: 'Cancella' },
        { role: 'selectall', label: 'Seleziona tutto' }
      ]
    },
    {
      label: 'Info',
      submenu: [
        {
          label: 'Sito web',
          click: function () {
            electron.shell.openExternal('http://www.odcec.an.it/')
          }
        },
      ]
    }
  ])
  Menu.setApplicationMenu(menu)

  //menù per tasto destro
  const ctxMenu = new Menu()

  ctxMenu.append(new MenuItem({
    role: 'toggledevtools', label: 'Ispeziona'
  }))
  
  ctxMenu.append(new MenuItem({
    type: 'separator'
  }))
  ctxMenu.append(new MenuItem({
    role: 'undo', label: 'Annulla'
  }))
  ctxMenu.append(new MenuItem({
    role: 'reload', label: 'Pulisci'
  }))
  ctxMenu.append(new MenuItem({
    type: 'separator'
  }))
  ctxMenu.append(new MenuItem({
    role: 'cut', label: 'Taglia'
  }))
  ctxMenu.append(new MenuItem({
    role: 'copy', label: 'Copia'
  }))
  ctxMenu.append(new MenuItem({
    role: 'paste', label: 'Incolla'
  }))
  ctxMenu.append(new MenuItem({
    role: 'selectall', label: 'Seleziona tutto'
  }))

  window.webContents.on('context-menu', function (e, params) {
    ctxMenu.popup(window, params.x, params.y)
  })

  // Carica un URL nella finestra al locale index.html
  window.loadURL(url.format({
    pathname: path.join(__dirname, 'index.html'),
    protocol: 'file:',
    slashes: true
  }))

  // Mostra finestra quando la pagina è pronta
  window.once('ready-to-show', () => {
    window.show()
  })

  window.on('close', function (e) {
    window = null
    app.quit()
  })

})

// creazione pdf
ipc.on('print-to-pdf', event => {
  const pdfPath = path.join(os.tmpdir(), 'Analisi Bilancio.pdf')

  const win = BrowserWindow.fromWebContents(event.sender)

  win.webContents.printToPDF({marginsType: 1, pageSize:'Tabloid'}, (error, data) => {
    if (error) return console.log(error.message)

    fs.writeFile(pdfPath, data, err => {
      if (err) return console.log(err.message)
      shell.openExternal('file://' + pdfPath)
    })
  })
})