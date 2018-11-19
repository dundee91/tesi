const { app, BrowserWindow, Menu } = require('electron')
const path = require('path')
const url = require('url')
const electron = require('electron')
const fs = require('fs')
const MenuItem = electron.MenuItem
const Tray = electron.Tray
const iconPath = path.join(__dirname, 'logo1.png')
const dialog = app.dialog

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
        app.quit()
      }
    }
  ]
  const iconMenu = Menu.buildFromTemplate(menuIcona)
  tray.setContextMenu(iconMenu)
  tray.setToolTip('Riclassificazione Aziende')


  // Creo la finestra iniziale
  window = new BrowserWindow({
    // Imposto la larghezza iniziale a 800px
    width: 800,
    // Imposto l'altezza iniziale a 1000px
    height: 1000,
    // Imposto il colore di sfondo
    backgroundColor: "#D6D8DC",
    // non mostra la finestra fino a che non è pronta
    show: false
  })

  //Creo il menù
  var menu = Menu.buildFromTemplate([
    {
      label: 'File',
      submenu: [
        {
          label: 'Apri progetto',
          //passo alla classe index.js dove c'è la funzione di apertura
          click: function (menuItem, currentWindow){
            currentWindow.webContents.send('apri')
          }
        },
        { type: "separator" },
        {
          label: 'Salva con nome',
          //passo alla classe index.js dove c'è la funzione di salvataggio
          click: function (menuItem, currentWindow){
            currentWindow.webContents.send('salva')
          }
        },
        { type: "separator" },
        {
          label: 'Esci', click() {
            app.quit()
          }
        },
      ]
    },
    {
      label: 'Visualizza',
      submenu: [
        { role: 'reload', label: 'Ricarica' },
        { role: 'toggledevtools', label: 'Ispeziona' },
        { type: 'separator' },
        { role: 'resetzoom', label: 'Ripristina zoom' },
        { role: 'zoomin', label: 'Aumenta zoom' },
        { role: 'zoomout', label: 'Diminuisci zoom' },
        { type: 'separator' },
        { role: 'togglefullscreen', label: 'Modalità schermo intero' }
      ]
    },
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
    role: 'reload', label: 'Ricarica'
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

  window.on('close', function(e){
    var choice = require('electron').dialog.showMessageBox(this,
        {
          type: 'question',
          buttons: ['Yes', 'No'],
          title: 'Conferma',
          message: 'Sei sicuro di voler uscire?'
       });
       if(choice == 1){
         e.preventDefault();
       }
    })

})
