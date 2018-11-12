const fs = require('fs')
const path = require('path')
const app = require('electron').remote
const dialog = app.dialog

var data = new Date()
var giorno = data.getDate()
var mese = data.getMonth()
var anno = data.getFullYear()
var oggi = anno + '-' + mese + '-' + giorno

bottoneSalvataggio = document.getElementById('salvataggio')
bottoneLettura = document.getElementById('lettura')
bottoneAnnullo = document.getElementById('annullo')

azienda = document.getElementById('azienda')
sede = document.getElementById('sede')
responsabile = document.getElementById('responsabile')
annoFondazione = document.getElementById('annoFondazione')

let pathName = path.join(__dirname, 'Files')

bottoneSalvataggio.addEventListener('click', function () {

    //let file = path.join(pathName, 'Riclassificazione Azienda - ' + oggi + '.txt')
    let contenuto =  "azienda: " + azienda.value
    let sedeAzienda = sede.value
    let responsabileAzienda = responsabile.value
    let annoFondazioneAzienda = annoFondazione.value
    
    //mostro finestra per salvataggio file
    let messaggio = "Specificare cartella per salvataggio?"    
    dialog.showSaveDialog((filename) =>{
        if (filename == undefined){
            window.alert("non hai salvato il file...")
            return console.log("non hai salvato il file")            
        }
    })

    fs.writeFile(filename, contenuto, function (err) {
        if (err) {
            window.alert("Errore: " + err.message)
            return console.log("Errore: " + err.message)
        }
        window.alert("File creato!")
        console.log("file creato")
    })
})


bottoneLettura.addEventListener('click', function () {

    let file = path.join(pathName, 'Riclassificazione Azienda - ' + oggi + '.txt')
    let contenuto =  "azienda: " + azienda.value
    let sedeAzienda = sede.value
    let responsabileAzienda = responsabile.value
    let annoFondazioneAzienda = annoFondazione.value
    fs.readFile(file, function (err, data) {
        if (err) {
            window.alert("Errore")
            return console.log("Errore")
        }
        contenuto.value = data
        window.alert("File creato!")
        console.log("file creato")
    })
})