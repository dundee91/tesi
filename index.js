const fs = require('fs')
const path = require('path')
const app = require('electron').remote
const dialog = app.dialog

var data = new Date()
var giorno = data.getDate()
var mese = data.getMonth()
var anno = data.getFullYear()

bottoneSalvataggio = document.getElementById('salvataggio')
bottoneLettura = document.getElementById('lettura')

ragioneSociale = document.getElementById('ragioneSociale')
partitaIVA = document.getElementById('partitaIVA')
settoreProduzione = document.getElementById('settoreProduzione')
contrattoCollettivo = document.getElementById('contrattoCollettivo')
indirizzo = document.getElementById('indirizzo')
comune = document.getElementById('comune')
cap = document.getElementById('cap')
provincia = document.getElementById('provincia')
referente = document.getElementById('referente')
telefono = document.getElementById('telefono')
fax = document.getElementById('fax')
email = document.getElementById('email')
sitoWeb = document.getElementById('sitoWeb')
numeroDipendenti = document.getElementById('numeroDipendenti')
note = document.getElementById('note')

let pathName = path.join(__dirname, 'Files')

bottoneSalvataggio.addEventListener('click', function () {

    //let file = path.join(pathName, 'Riclassificazione Azienda - ' + oggi + '.txt')
    let ragioneSocialeTxt = ragioneSociale.value
    let settoreProduzioneTxt = settoreProduzione.value
    let partitaIVATxt = partitaIVA.value
    let contrattoCollettivoTxt = contrattoCollettivo.value
    let indirizzoTxt = indirizzo.value
    let comuneTxt = comune.value
    let capTxt = cap.value
    let provinciaTxt = provincia.value
    let referenteTxt = referente.value
    let telefonoTxt = telefono.value
    let faxTxt = fax.value
    let emailTxt = email.value
    let sitoWebTxt = sitoWeb.value
    let numeroDipendentiTxt = numeroDipendenti.value
    let noteTxt = note.value

    let contenuto = ragioneSocialeTxt + "\r\n" +
    settoreProduzioneTxt + "\r\n" + 
    partitaIVATxt + "\r\n" + 
    contrattoCollettivoTxt + "\r\n" + 
    indirizzoTxt + "\r\n" + 
    comuneTxt + "\r\n" + 
    capTxt + "\r\n" + 
    provinciaTxt + "\r\n" + 
    referenteTxt + "\r\n" + 
    telefonoTxt + "\r\n" +
    faxTxt + "\r\n" + 
    emailTxt + "\r\n" + 
    sitoWebTxt + "\r\n" + 
    numeroDipendentiTxt + "\r\n" + 
    noteTxt

    //mostro finestra per salvataggio file
    dialog.showSaveDialog((filename) => {
        if (filename == undefined) {
            window.alert("non hai salvato il file...")
            return console.log("non hai salvato il file")
        }

        fs.writeFile(filename, contenuto, function (err) {
            if (err) {
                window.alert("Errore: " + err.message)
                return console.log("Errore: " + err.message)
            }
            window.alert("File creato!")
            console.log("file creato")
        })
    })
})


bottoneLettura.addEventListener('click', function () {
    dialog.showOpenDialog((filename) => {
        if (filename == undefined) {
            alert("Nessun file selezionato")
            console.log("Nessun file selezionato")
        }

        fs.readFileSync(filename, function (err, data) {
            if (err) {
                window.alert("Errore durante la lettura del file: " + err.message)
                return console.log("Errore durante la lettura del file: " + err.message)
            }
            contenuto.value = data
            window.alert("File creato!")
            console.log("file creato")
        })
    })

})