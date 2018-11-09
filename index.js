const fs = require('fs')
const path = require('path')

var data = new Date()
var oggi = data.toLocaleDateString()

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
            return console.log("Errore")
        }
        console.log("file creato")
    })
})