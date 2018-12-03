const fs = require('fs')
const path = require('path')
const app = require('electron').remote
const dialog = app.dialog
const ipc = require('electron').ipcRenderer

// salvataggio progetto
ipc.on('salva', function (ev, data) {
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

    //Stato Patrimoniale
    // A. Crediti verso soci
    var creditiVersoSoci = document.getElementById('creditiVersoSoci').value
    // B. Immobilizzazioni
    // I. Immateriali
    var costiImpiantoAmpliamento = document.getElementById('costiImpiantoAmpliamento').value
    var costiRicercaSviluppo = document.getElementById('costiRicercaSviluppo').value
    var dirittiBrevetto = document.getElementById('dirittiBrevetto').value
    var concessioniLicenzeMarchi = document.getElementById('concessioniLicenzeMarchi').value
    var avviamento = document.getElementById('avviamento').value
    var immobilizzazioniCorso = document.getElementById('immobilizzazioniCorso').value
    var immobilizzazioniAltro = document.getElementById('immobilizzazioniAltro').value
    var totaleImmobilizzazioniImmateriali = document.getElementById('totaleImmobilizzazioniImmateriali').value
    // II. Materiali
    var terreniFabbricati = document.getElementById('terreniFabbricati').value
    var impiantiMacchinario = document.getElementById('impiantiMacchinario').value
    var attrezzatureIndustriali = document.getElementById('attrezzatureIndustriali').value
    var altriBeni = document.getElementById('altriBeni').value
    var immobilizzazioniCorsoAcconti = document.getElementById('immobilizzazioniCorsoAcconti').value
    var totaleImmobilizzazioniMateriali = parseFloat(terreniFabbricati) + parseFloat(impiantiMacchinario) + parseFloat(attrezzatureIndustriali) + parseFloat(altriBeni) +
        parseFloat(immobilizzazioniCorsoAcconti)
    document.getElementById('totaleImmobilizzazioniMateriali').value = totaleImmobilizzazioniMateriali
    // III. Finanziarie
    var impreseControllate = document.getElementById('impreseControllate').value
    var impreseCollegate = document.getElementById('impreseCollegate').value
    var impreseControllanti = document.getElementById('impreseControllanti').value
    var altreImprese = document.getElementById('altreImprese').value
    var creditiImpreseControllateEntro12Mesi = document.getElementById('creditiImmobilizzazioniImpreseControllateEntro12Mesi').value
    var creditiImpreseControllateOltre12Mesi = document.getElementById('creditiImmobilizzazioniImpreseControllateOltre12Mesi').value
    var creditiImpreseCollegateEntro12Mesi = document.getElementById('creditiImmobilizzazioniImpreseCollegateEntro12Mesi').value
    var creditiImpreseCollegateOltre12Mesi = document.getElementById('creditiImmobilizzazioniImpreseCollegateOltre12Mesi').value
    var creditiImpreseControllantiEntro12Mesi = document.getElementById('creditiImmobilizzazioniImpreseControllantiEntro12Mesi').value
    var creditiImpreseControllantiOltre12Mesi = document.getElementById('creditiImmobilizzazioniImpreseControllantiOltre12Mesi').value
    var creditiAltreImpreseEntro12Mesi = document.getElementById('creditiImmobilizzazioniAltreImpreseEntro12Mesi').value
    var creditiAltreImpreseOltre12Mesi = document.getElementById('creditiImmobilizzazioniAltreImpreseOltre12Mesi').value
    var altriTitoliImmobilizzazioni = document.getElementById('altriTitoliImmobilizzazioni').value
    var azioniProprie = document.getElementById('azioniProprie').value
    var totaleImmobilizzazioniFinanziarie =  
        parseFloat(impreseControllate) + parseFloat(impreseCollegate) + parseFloat(impreseControllanti) + parseFloat(altreImprese) +
        parseFloat(creditiImpreseControllateEntro12Mesi) + parseFloat(creditiImpreseControllateOltre12Mesi) + parseFloat(creditiImpreseCollegateEntro12Mesi) + 
        parseFloat(creditiImpreseCollegateOltre12Mesi) + parseFloat(creditiImpreseControllantiEntro12Mesi) + parseFloat(creditiImpreseControllantiOltre12Mesi) + 
        parseFloat(creditiAltreImpreseEntro12Mesi) + parseFloat(creditiAltreImpreseOltre12Mesi) + parseFloat(altriTitoliImmobilizzazioni) + parseFloat(azioniProprie)
    document.getElementById('totaleImmobilizzazioniFinanziarie').value = totaleImmobilizzazioniFinanziarie
    var totaleImmobilizzazioni = 
        parseFloat(totaleImmobilizzazioniImmateriali) + parseFloat(totaleImmobilizzazioniMateriali) + parseFloat(totaleImmobilizzazioniFinanziarie)
        document.getElementById('totaleImmobilizzazioni').value = totaleImmobilizzazioni

    //creo array per json
    let contenuto = [{
        // Anagrafica Aziendale
        "ragioneSociale": ragioneSociale,
        "partitaIVA": partitaIVA,
        "settoreProduzione": settoreProduzione,
        "contrattoCollettivo": contrattoCollettivo,
        "numeroDipendenti": numeroDipendenti,
        "indirizzo": indirizzo,
        "comune": comune,
        "provincia": provincia,
        "cap": cap,
        "referente": referente,
        "telefono": telefono,
        "fax": fax,
        "email": email,
        "sitoWeb": sitoWeb,
        "note": note,
        // Analisi Quantitativa
        "storiaAzienda": storiaAzienda,
        "titolari": titolari,
        "descrizioneAttuale": descrizioneAttuale,
        "prodotto": prodotto,
        "mercatoProdotto": mercatoProdotto,
        "politicheProduzione": politicheProduzione,
        "politicheDistribuzione": politicheDistribuzione,
        "principaliFornitori": principaliFornitori,
        "principaliClienti": principaliClienti,
        "rapportiContrattuali": rapportiContrattuali,
        "internazionalizzazione": internazionalizzazione,
        "personale": personale,
        "strutturaInvestimenti": strutturaInvestimenti,
        "marchiBrevetti": marchiBrevetti,
        "tipologiaRischi": tipologiaRischi,
        "informazioniUtili": informazioniUtili,
        "finalitaRichiesta": finalitaRichiesta,
        "fidiEdUtilizzi": fidiEdUtilizzi,
        "conclusioni": conclusioni,

        // STATO PATRIMONIALE
        // A. Crediti verso soci
        "creditiVersoSoci": creditiVersoSoci,
        // B. Immobilizzazioni
        // I. Immateriali
        "costiImpiantoAmpliamento": costiImpiantoAmpliamento,
        "costiRicercaSviluppo": costiRicercaSviluppo,
        "dirittiBrevetto": dirittiBrevetto,
        "concessioniLicenzeMarchi": concessioniLicenzeMarchi,
        "avviamento": avviamento,
        "immobilizzazioniCorso": immobilizzazioniCorso,
        "immobilizzazioniAltro": immobilizzazioniAltro,
        "totaleImmobilizzazioniImmateriali": totaleImmobilizzazioniImmateriali,
        // II. Materiali
        "terreniFabbricati": terreniFabbricati,
        "impiantiMacchinario": impiantiMacchinario,
        "attrezzatureIndustriali": attrezzatureIndustriali,
        "altriBeni": altriBeni,
        "immobilizzazioniCorsoAcconti": immobilizzazioniCorsoAcconti,
        "totaleImmobilizzazioniMateriali": totaleImmobilizzazioniMateriali,
        // III. Finanziarie
        "impreseControllate": impreseControllate,
        "impreseCollegate": impreseCollegate,
        "impreseControllanti": impreseControllanti,
        "altreImprese": altreImprese,
        "creditiImmobilizzazioniImpreseControllateEntro12Mesi": creditiImpreseControllateEntro12Mesi,
        "creditiImmobilizzazioniImpreseControllateOltre12Mesi": creditiImpreseControllateOltre12Mesi,
        "creditiImmobilizzazioniImpreseCollegateEntro12Mesi": creditiImpreseCollegateEntro12Mesi,
        "creditiImmobilizzazioniImpreseCollegateOltre12Mesi": creditiImpreseCollegateOltre12Mesi,
        "creditiImmobilizzazioniImpreseControllantiEntro12Mesi": creditiImpreseControllantiEntro12Mesi,
        "creditiImmobilizzazioniImpreseControllantiOltre12Mesi": creditiImpreseControllantiOltre12Mesi,
        "creditiImmobilizzazioniAltreImpreseEntro12Mesi": creditiAltreImpreseEntro12Mesi,
        "creditiImmobilizzazioniAltreImpreseOltre12Mesi": creditiAltreImpreseOltre12Mesi,
        "altriTitoliImmobilizzazioni": altriTitoliImmobilizzazioni,
        "azioniProprie": azioniProprie,
        "totaleImmobilizzazioniFinanziarie": totaleImmobilizzazioniFinanziarie,
        // Totale
        "totaleImmobilizzazioni": totaleImmobilizzazioni
    }]

    var json = JSON.stringify(contenuto);

    //mostro finestra per salvataggio file
    dialog.showSaveDialog((filename) => {
        if (filename == undefined) {
            window.alert("non hai salvato il progetto...")
            return console.log("progetto non salvato")
        }
        //salvo file
        fs.writeFile(filename, json, function (err) {
            if (err) {
                window.alert("Errore: " + err.message)
                alert.name()
                return console.log("Errore: " + err.message)
            }

            window.alert("Progetto Salvato!")
            console.log("progetto salvato")
        })
    })
})

// apertura progetto salvato
ipc.on('apri', function (ev, data) {

    //mostro finestra per apertura file
    dialog.showOpenDialog((filenames) => {
        if (filenames == undefined) {
            alert("Nessun file selezionato")
            console.log("Nessun file selezionato")
        }
        else {
            var filename = filenames[0]
            fs.readFile(filename, function (err, data) {
                if (err) {
                    window.alert("Errore durante la lettura del file: " + err.message)
                    return console.log("Errore durante la lettura del file: " + err.message)
                }
                let testo = JSON.parse(data)

                // Leggo tutti i dati del json
                // Anagrafica Aziendale
                document.getElementById('ragioneSociale').value = testo[0].ragioneSociale
                document.getElementById('partitaIVA').value = testo[0].partitaIVA
                document.getElementById('settoreProduzione').value = testo[0].settoreProduzione
                document.getElementById('contrattoCollettivo').value = testo[0].contrattoCollettivo
                document.getElementById('numeroDipendenti').value = testo[0].numeroDipendenti
                document.getElementById('indirizzo').value = testo[0].indirizzo
                document.getElementById('comune').value = testo[0].comune
                document.getElementById('provincia').value = testo[0].provincia
                document.getElementById('cap').value = testo[0].cap
                document.getElementById('referente').value = testo[0].referente
                document.getElementById('telefono').value = testo[0].telefono
                document.getElementById('fax').value = testo[0].fax
                document.getElementById('email').value = testo[0].email
                document.getElementById('sitoWeb').value = testo[0].sitoWeb
                document.getElementById('note').value = testo[0].note

                // Analisi Quantitativa
                document.getElementById('storiaAzienda').value = testo[0].storiaAzienda
                document.getElementById('titolari').value = testo[0].titolari
                document.getElementById('descrizioneAttuale').value = testo[0].descrizioneAttuale
                document.getElementById('prodotto').value = testo[0].prodotto
                document.getElementById('mercatoProdotto').value = testo[0].mercatoProdotto
                document.getElementById('politicheProduzione').value = testo[0].politicheProduzione
                document.getElementById('politicheDistribuzione').value = testo[0].politicheDistribuzione
                document.getElementById('principaliFornitori').value = testo[0].principaliFornitori
                document.getElementById('principaliClienti').value = testo[0].principaliClienti
                document.getElementById('rapportiContrattuali').value = testo[0].rapportiContrattuali
                document.getElementById('internazionalizzazione').value = testo[0].internazionalizzazione
                document.getElementById('personale').value = testo[0].personale
                document.getElementById('strutturaInvestimenti').value = testo[0].strutturaInvestimenti
                document.getElementById('marchiBrevetti').value = testo[0].marchiBrevetti
                document.getElementById('tipologiaRischi').value = testo[0].tipologiaRischi
                document.getElementById('informazioniUtili').value = testo[0].informazioniUtili
                document.getElementById('finalitaRichiesta').value = testo[0].finalitaRichiesta
                document.getElementById('fidiEdUtilizzi').value = testo[0].fidiEdUtilizzi
                document.getElementById('conclusioni').value = testo[0].conclusioni

                //STATO PATRIMONIALE
        // A. Crediti verso soci
                document.getElementById('creditiVersoSoci').value = testo[0].creditiVersoSoci
                // B. Immobilizzazioni
                // I. Immateriali
                document.getElementById('costiImpiantoAmpliamento').value = testo[0].costiImpiantoAmpliamento
                document.getElementById('costiRicercaSviluppo').value = testo[0].costiRicercaSviluppo
                document.getElementById('dirittiBrevetto').value = testo[0].dirittiBrevetto
                document.getElementById('concessioniLicenzeMarchi').value = testo[0].concessioniLicenzeMarchi
                document.getElementById('avviamento').value = testo[0].avviamento
                document.getElementById('immobilizzazioniCorso').value = testo[0].immobilizzazioniCorso
                document.getElementById('immobilizzazioniAltro').value = testo[0].immobilizzazioniAltro
                document.getElementById('totaleImmobilizzazioniImmateriali').value = testo[0].totaleImmobilizzazioniImmateriali
                // II. Materiali
                document.getElementById('terreniFabbricati').value = testo[0].terreniFabbricati
                document.getElementById('impiantiMacchinario').value = testo[0].impiantiMacchinario
                document.getElementById('attrezzatureIndustriali').value = testo[0].attrezzatureIndustriali
                document.getElementById('altriBeni').value = testo[0].altriBeni
                document.getElementById('immobilizzazioniCorsoAcconti').value = testo[0].immobilizzazioniCorsoAcconti
                document.getElementById('totaleImmobilizzazioniMateriali').value = testo[0].totaleImmobilizzazioniMateriali
                // III. Finanziarie
                document.getElementById('impreseControllate').value = testo[0].impreseControllate,
                document.getElementById('impreseCollegate').value = testo[0].impreseCollegate,
                document.getElementById('impreseControllanti').value = testo[0].impreseControllanti,
                document.getElementById('altreImprese').value = testo[0].altreImprese,
                document.getElementById('creditiImpreseControllateEntro12Mesi').value = testo[0].creditiImpreseControllateEntro12Mesi,
                document.getElementById('creditiImpreseControllateOltre12Mesi').value = testo[0].creditiImpreseControllateOltre12Mesi,
                document.getElementById('creditiImpreseCollegateEntro12Mesi').value = testo[0].creditiImpreseCollegateEntro12Mesi,
                document.getElementById('creditiImpreseCollegateOltre12Mesi').value = testo[0].creditiImpreseCollegateOltre12Mesi,
                document.getElementById('creditiImpreseControllantiEntro12Mesi').value = testo[0].creditiImpreseControllantiEntro12Mesi,
                document.getElementById('creditiImpreseControllantiOltre12Mesi').value = testo[0].creditiImpreseControllantiOltre12Mesi,
                document.getElementById('creditiAltreImpreseEntro12Mesi').value = testo[0].creditiAltreImpreseEntro12Mesi,
                document.getElementById('creditiAltreImpreseOltre12Mesi').value = testo[0].creditiAltreImpreseOltre12Mesi,
                document.getElementById('altriTitoliImmobilizzazioni').value = testo[0].altriTitoliImmobilizzazioni,
                document.getElementById('azioniProprie').value = testo[0].azioniProprie,
                document.getElementById('totaleImmobilizzazioniFinanziarie').value = testo[0].totaleImmobilizzazioniFinanziarie
                document.getElementById('totaleImmobilizzazioni').value = testo[0].totaleImmobilizzazioni

                console.log("file aperto")
            })
        }
    })
})
