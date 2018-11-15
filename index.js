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

let pathName = path.join(__dirname, 'Files')

bottoneSalvataggio.addEventListener('click', function () {

    // Anagrafica Aziendale
    let ragioneSociale = document.getElementById('ragioneSociale').value
    let partitaIVA = document.getElementById('partitaIVA').value
    let settoreProduzione = document.getElementById('settoreProduzione').value
    let contrattoCollettivo = document.getElementById('contrattoCollettivo').value
    let numeroDipendenti = document.getElementById('numeroDipendenti').value
    let indirizzo = document.getElementById('indirizzo').value
    let comune = document.getElementById('comune').value
    let provincia = document.getElementById('provincia').value
    let cap = document.getElementById('cap').value
    let referente = document.getElementById('referente').value
    let telefono = document.getElementById('telefono').value
    let fax = document.getElementById('fax').value
    let email = document.getElementById('email').value
    let sitoWeb = document.getElementById('sitoWeb').value
    let note = document.getElementById('note').value

    // Analisi Quantitativa
    let storiaAzienda = document.getElementById('storiaAzienda').value
    let titolari = document.getElementById('titolari').value
    let descrizioneAttuale = document.getElementById('descrizioneAttuale').value
    let prodotto = document.getElementById('prodotto').value
    let mercatoProdotto = document.getElementById('mercatoProdotto').value
    let politicheProduzione = document.getElementById('politicheProduzione').value
    let politicheDistribuzione = document.getElementById('politicheDistribuzione').value
    let principaliFornitori = document.getElementById('principaliFornitori').value
    let principaliClienti = document.getElementById('principaliClienti').value
    let rapportiContrattuali = document.getElementById('rapportiContrattuali').value
    let internazionalizzazione = document.getElementById('internazionalizzazione').value
    let personale = document.getElementById('personale').value
    let strutturaInvestimenti = document.getElementById('strutturaInvestimenti').value
    let marchiBrevetti = document.getElementById('marchiBrevetti').value
    let tipologiaRischi = document.getElementById('tipologiaRischi').value
    let informazioniUtili = document.getElementById('informazioniUtili').value
    let finalitaRichiesta = document.getElementById('finalitaRichiesta').value
    let fidiEdUtilizzi = document.getElementById('fidiEdUtilizzi').value
    let conclusioni = document.getElementById('conclusioni').value


    //let file = path.join(pathName, 'Riclassificazione Azienda - ' + oggi + '.txt')

    let contenuto =
        // Anagrafica Aziendale
        ragioneSociale + "\r\n" +
        settoreProduzione + "\r\n" +
        partitaIVA + "\r\n" +
        contrattoCollettivo + "\r\n" +
        numeroDipendenti + "\r\n" +
        indirizzo + "\r\n" +
        comune + "\r\n" +
        provincia + "\r\n" +
        cap + "\r\n" +
        referente + "\r\n" +
        telefono + "\r\n" +
        fax + "\r\n" +
        email + "\r\n" +
        sitoWeb + "\r\n" +
        note + "\r\n" +
        // Analisi Quantitativa
        storiaAzienda + "\r\n" +
        titolari + "\r\n" +
        descrizioneAttuale + "\r\n" +
        prodotto + "\r\n" +
        mercatoProdotto + "\r\n" +
        politicheProduzione + "\r\n" +
        politicheDistribuzione + "\r\n" +
        principaliFornitori + "\r\n" +
        principaliClienti + "\r\n" +
        rapportiContrattuali + "\r\n" +
        internazionalizzazione + "\r\n" +
        personale + "\r\n" +
        strutturaInvestimenti + "\r\n" +
        marchiBrevetti + "\r\n" +
        tipologiaRischi + "\r\n" +
        informazioniUtili + "\r\n" +
        finalitaRichiesta + "\r\n" +
        fidiEdUtilizzi + "\r\n" +
        conclusioni


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