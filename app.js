const { app, BrowserWindow, Menu } = require('electron')
const path = require('path')
const url = require('url')
const electron = require('electron')
const fs = require('fs')

let window = null

// aspetta fino a che l'app non è pronta
app.once('ready', () => {
  // Creo la finestra iniziale
  window = new BrowserWindow({
    // Imposto l'altezza iniziale a 1000px
    width: 1000,
    // Imposto la larghezza iniziale a 800px
    height: 800,
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
        { label: 'Nuovo Progetto' },
        { label: 'Apri' },
        { type: "separator" },
        { label: 'Salva' },
        { label: 'Salva con nome' },
        { label: 'Chiudi' },
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
        {role: 'reload', label: 'Ricarica'},
        {role: 'toggledevtools', label: 'Ispeziona'},
        {type: 'separator'},
        {role: 'resetzoom', label: 'Ripristina zoom'},
        {role: 'zoomin', label: 'Aumenta zoom'},
        {role: 'zoomout', label: 'Diminuisci zoom'},
        {type: 'separator'},
        {role: 'togglefullscreen', label: 'Modalità schermo intero'}
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
        {role: 'undo', label: 'Annulla'},
        {type: 'separator'},
        {role: 'cut', label: 'Taglia'},
        {role: 'copy', label: 'Copia'},
        {role: 'paste', label:'Incolla'},
        {role: 'delete', label:'Cancella'},
        {role: 'selectall', label:'Seleziona tutto'}
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
  Menu.setApplicationMenu(menu);


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
})
