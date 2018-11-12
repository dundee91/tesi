const fs = require('fs')
const path = require('path')

var data = new Date()
var giorno = data.getDate()
var mese = data.getMonth()
var anno = data.getFullYear()
var oggi = anno + '-' + mese + '-' + giorno

bottoneSalvataggio = document.getElementById('salvataggio')
bottoneAnnullo = document.getElementById('annullo')

azienda = document.getElementById('azienda')
sede = document.getElementById('sede')
responsabile = document.getElementById('responsabile')
annoFondazione = document.getElementById('annoFondazione')

let pathName = path.join(__dirname, 'Files')

bottoneSalvataggio.addEventListener('click', function () {

    let file = path.join(pathName, 'Riclassificazione Azienda - ' + oggi + '.txt')
    let contenuto =  "azienda: " + azienda.value
    let sedeAzienda = sede.value
    let responsabileAzienda = responsabile.value
    let annoFondazioneAzienda = annoFondazione.value
    fs.writeFile(file, contenuto, function (err) {
        if (err) {
            window.alert("Errore")
            return console.log("Errore")
        }
        window.alert("File creato!")
        console.log("file creato")
    })
})