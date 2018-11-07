const {app, BrowserWindow, Menu} = require('electron')
const path = require('path')
const url = require('url')
const electron = require('electron')

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
            {label:'Importa file'},
            {label:'Salva'},
            {label:'Salva con nome'},
        ]
    },
    { 
      label: 'Opzioni',
      submenu: [
        {label: 'Rilancia',
      click(){
        app.relaunch()
        app.quit()
      }},
      ]
    },
    { 
      label: 'Info',
      submenu: [
        {label: 'Sito web',
      click: function(){
        electron.shell.openExternal('http://www.odcec.an.it/')
      }},
      ]
    },
    {
      label: 'Esci',
        click(){
          app.quit()
      }
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
