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

    /* STATO PATRIMONIALE ATTIVO */
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
    var totaleImmobilizzazioniMateriali = document.getElementById('totaleImmobilizzazioniMateriali').value
    // III. Finanziarie
    var impreseControllate = document.getElementById('impreseControllate').value
    var impreseCollegate = document.getElementById('impreseCollegate').value
    var impreseControllanti = document.getElementById('impreseControllanti').value
    var altreImprese = document.getElementById('altreImprese').value
    var creditiImmobilizzazioniImpreseControllateEntro12Mesi = document.getElementById('creditiImmobilizzazioniImpreseControllateEntro12Mesi').value
    var creditiImmobilizzazioniImpreseControllateOltre12Mesi = document.getElementById('creditiImmobilizzazioniImpreseControllateOltre12Mesi').value
    var creditiImmobilizzazioniImpreseCollegateEntro12Mesi = document.getElementById('creditiImmobilizzazioniImpreseCollegateEntro12Mesi').value
    var creditiImmobilizzazioniImpreseCollegateOltre12Mesi = document.getElementById('creditiImmobilizzazioniImpreseCollegateOltre12Mesi').value
    var creditiImmobilizzazioniImpreseControllantiEntro12Mesi = document.getElementById('creditiImmobilizzazioniImpreseControllantiEntro12Mesi').value
    var creditiImmobilizzazioniImpreseControllantiOltre12Mesi = document.getElementById('creditiImmobilizzazioniImpreseControllantiOltre12Mesi').value
    var creditiImmobilizzazioniAltreImpreseEntro12Mesi = document.getElementById('creditiImmobilizzazioniAltreImpreseEntro12Mesi').value
    var creditiImmobilizzazioniAltreImpreseOltre12Mesi = document.getElementById('creditiImmobilizzazioniAltreImpreseOltre12Mesi').value
    var altriTitoliImmobilizzazioni = document.getElementById('altriTitoliImmobilizzazioni').value
    var azioniProprie = document.getElementById('azioniProprie').value
    var totaleImmobilizzazioniFinanziarie = document.getElementById('totaleImmobilizzazioniFinanziarie').value
    var totaleImmobilizzazioni = document.getElementById('totaleImmobilizzazioni').value

    // C. Attivo Circolante
    // I. Rimanenze
    var materiePrime = document.getElementById('materiePrime').value
    var prodottiCorsoLavorazione = document.getElementById('prodottiCorsoLavorazione').value
    var lavoriCorsoOrdinazione = document.getElementById('lavoriCorsoOrdinazione').value
    var prodottiFinitiMerci = document.getElementById('prodottiFinitiMerci').value
    var acconti = document.getElementById('acconti').value
    var totaleRimanenze = document.getElementById('totaleRimanenze').value
    // II. Crediti
    var creditiAttivoCircolanteClientiEntro12Mesi = document.getElementById('creditiAttivoCircolanteClientiEntro12Mesi').value
    var creditiAttivoCircolanteClientiOltre12Mesi = document.getElementById('creditiAttivoCircolanteClientiOltre12Mesi').value
    var creditiAttivoCircolanteImpreseControllateEntro12Mesi = document.getElementById('creditiAttivoCircolanteImpreseControllateEntro12Mesi').value
    var creditiAttivoCircolanteImpreseControllateOltre12Mesi = document.getElementById('creditiAttivoCircolanteImpreseControllateOltre12Mesi').value
    var creditiAttivoCircolanteImpreseCollegateEntro12Mesi = document.getElementById('creditiAttivoCircolanteImpreseCollegateEntro12Mesi').value
    var creditiAttivoCircolanteImpreseCollegateOltre12Mesi = document.getElementById('creditiAttivoCircolanteImpreseCollegateOltre12Mesi').value
    var creditiAttivoCircolanteImpreseControllantiEntro12Mesi = document.getElementById('creditiAttivoCircolanteImpreseControllantiEntro12Mesi').value
    var creditiAttivoCircolanteImpreseControllantiOltre12Mesi = document.getElementById('creditiAttivoCircolanteImpreseControllantiOltre12Mesi').value
    var creditiAttivoCircolanteAltreImpreseEntro12Mesi = document.getElementById('creditiAttivoCircolanteAltreImpreseEntro12Mesi').value
    var creditiAttivoCircolanteAltreImpreseOltre12Mesi = document.getElementById('creditiAttivoCircolanteAltreImpreseOltre12Mesi').value
    var totaleCrediti = document.getElementById('totaleCrediti').value
    // III. Attività finanziarie che non costituiscono immobilizzazioni
    var partecipazioniImpreseControllate = document.getElementById('partecipazioniImpreseControllate').value
    var partecipazioniImpreseCollegate = document.getElementById('partecipazioniImpreseCollegate').value
    var partecipazioniImpreseControllanti = document.getElementById('partecipazioniImpreseControllanti').value
    var altrePartecipazioni = document.getElementById('altrePartecipazioni').value
    var strumentiFinanziariDerivatiAttivi = document.getElementById('strumentiFinanziariDerivatiAttivi').value
    var altriTitoliAttivoCircolante = document.getElementById('altriTitoliAttivoCircolante').value
    var totaleAttivitaFinanziarie = document.getElementById('totaleAttivitaFinanziarie').value
    // IV. Disponibilità liquide
    var depositiBancariPostali = document.getElementById('depositiBancariPostali').value
    var assegni = document.getElementById('assegni').value
    var danaroValoriCassa = document.getElementById('danaroValoriCassa').value
    var totaleDisponibilitaLiquide = document.getElementById('totaleDisponibilitaLiquide').value
    var totaleAttivoCircolante = document.getElementById('totaleAttivoCircolante').value

    // D) Ratei e Risconti
    var rateiRiscontiAttivo = document.getElementById('rateiRiscontiAttivo').value
    var disaggioPrestiti = document.getElementById('disaggioPrestiti').value
    var totaleRateiRiscontiAttivi = document.getElementById('totaleRateiRiscontiAttivi').value

    // TOTALE ATTIVO
    var totaleAttivo = document.getElementById('totaleAttivo').value

    /* STATO PATRIMONIALE PASSIVO */
    // A. Patrimonio Netto
    var capitale = document.getElementById('capitale').value
    var riservaSovrapprezzoAzioni = document.getElementById('riservaSovrapprezzoAzioni').value
    var riserveRivalutazione = document.getElementById('riserveRivalutazione').value
    var riservaLegale = document.getElementById('riservaLegale').value
    var riserveStatutarie = document.getElementById('riserveStatutarie').value
    var altreRiserve = document.getElementById('altreRiserve').value
    var riservaOperazioniCopertura = document.getElementById('riservaOperazioniCopertura').value
    var utilePortatoNuovo = document.getElementById('utilePortatoNuovo').value
    var utileEsercizio = document.getElementById('utileEsercizio').value
    var riservaNegativaAzioniProprie = document.getElementById('riservaNegativaAzioniProprie').value
    var totalePatrimonioNetto = document.getElementById('totalePatrimonioNetto').value

    // B. Fondi per rischi e oneri
    var trattamentoQuiescenzaObblighiSimili = document.getElementById('trattamentoQuiescenzaObblighiSimili').value
    var imposteAncheDifferite = document.getElementById('imposteAncheDifferite').value
    var strumentiFinanziariDerivatiPassivi = document.getElementById('strumentiFinanziariDerivatiPassivi').value
    var altriFondi = document.getElementById('altriFondi').value
    var totaleFondiRischiOneri = document.getElementById('totaleFondiRischiOneri').value

    // C. Trattamento fine rapporto
    var trattamentoFineRapporto = document.getElementById('trattamentoFineRapporto').value

    // D. Debiti

    // E. ratei e risconti
    var rateiRiscontiPassivo = document.getElementById('rateiRiscontiPassivo').value
    var aggioPrestiti = document.getElementById('aggioPrestiti').value
    var totaleRateiRiscontiPassivi = document.getElementById('totaleRateiRiscontiPassivi').value

    // TOTALE PASSIVO
    var totalePassivo = document.getElementById('totalePassivo').value



    /*
    var  = document.getElementById('').value
    var  = document.getElementById('').value
    var  = document.getElementById('').value
    var  = document.getElementById('').value
    var  = document.getElementById('').value
    var  = document.getElementById('').value
    var  = document.getElementById('').value
    var  = document.getElementById('').value
    var  = document.getElementById('').value
    var  = document.getElementById('').value
    var  = document.getElementById('').value
    var  = document.getElementById('').value
    var  = document.getElementById('').value
    var  = document.getElementById('').value
    var  = document.getElementById('').value
    var  = document.getElementById('').value
    var  = document.getElementById('').value
    var  = document.getElementById('').value
    var  = document.getElementById('').value
    var  = document.getElementById('').value
    var  = document.getElementById('').value
    var  = document.getElementById('').value
    var  = document.getElementById('').value
    var  = document.getElementById('').value
    var  = document.getElementById('').value
    var  = document.getElementById('').value
    var  = document.getElementById('').value
    var  = document.getElementById('').value
    var  = document.getElementById('').value
    var  = document.getElementById('').value
    var  = document.getElementById('').value
*/

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

        /* STATO PATRIMONIALE ATTIVO */
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
        "creditiImmobilizzazioniImpreseControllateEntro12Mesi": creditiImmobilizzazioniImpreseControllateEntro12Mesi,
        "creditiImmobilizzazioniImpreseControllateOltre12Mesi": creditiImmobilizzazioniImpreseControllateOltre12Mesi,
        "creditiImmobilizzazioniImpreseCollegateEntro12Mesi": creditiImmobilizzazioniImpreseCollegateEntro12Mesi,
        "creditiImmobilizzazioniImpreseCollegateOltre12Mesi": creditiImmobilizzazioniImpreseCollegateOltre12Mesi,
        "creditiImmobilizzazioniImpreseControllantiEntro12Mesi": creditiImmobilizzazioniImpreseControllantiEntro12Mesi,
        "creditiImmobilizzazioniImpreseControllantiOltre12Mesi": creditiImmobilizzazioniImpreseControllantiOltre12Mesi,
        "creditiImmobilizzazioniAltreImpreseEntro12Mesi": creditiImmobilizzazioniAltreImpreseEntro12Mesi,
        "creditiImmobilizzazioniAltreImpreseOltre12Mesi": creditiImmobilizzazioniAltreImpreseOltre12Mesi,
        "altriTitoliImmobilizzazioni": altriTitoliImmobilizzazioni,
        "azioniProprie": azioniProprie,
        "totaleImmobilizzazioniFinanziarie": totaleImmobilizzazioniFinanziarie,
        // Totale Immobilizzazioni
        "totaleImmobilizzazioni": totaleImmobilizzazioni,
        // C. Attivo Circolante
        // I. Rimanenze
        "materiePrime": materiePrime,
        "prodottiCorsoLavorazione": prodottiCorsoLavorazione,
        "lavoriCorsoOrdinazione": lavoriCorsoOrdinazione,
        "prodottiFinitiMerci": prodottiFinitiMerci,
        "acconti": acconti,
        "totaleRimanenze": totaleRimanenze,
        // II. Crediti
        "creditiAttivoCircolanteClientiEntro12Mesi": creditiAttivoCircolanteClientiEntro12Mesi,
        "creditiAttivoCircolanteClientiOltre12Mesi": creditiAttivoCircolanteClientiOltre12Mesi,
        "creditiAttivoCircolanteImpreseControllateEntro12Mesi": creditiAttivoCircolanteImpreseControllateEntro12Mesi,
        "creditiAttivoCircolanteImpreseControllateOltre12Mesi": creditiAttivoCircolanteImpreseControllateOltre12Mesi,
        "creditiAttivoCircolanteImpreseCollegateEntro12Mesi": creditiAttivoCircolanteImpreseCollegateEntro12Mesi,
        "creditiAttivoCircolanteImpreseCollegateOltre12Mesi": creditiAttivoCircolanteImpreseCollegateOltre12Mesi,
        "creditiAttivoCircolanteImpreseControllantiEntro12Mesi": creditiAttivoCircolanteImpreseControllantiEntro12Mesi,
        "creditiAttivoCircolanteImpreseControllantiOltre12Mesi": creditiAttivoCircolanteImpreseControllantiOltre12Mesi,
        "creditiAttivoCircolanteAltreImpreseEntro12Mesi": creditiAttivoCircolanteAltreImpreseEntro12Mesi,
        "creditiAttivoCircolanteAltreImpreseOltre12Mesi": creditiAttivoCircolanteAltreImpreseOltre12Mesi,
        "totaleCrediti": totaleCrediti,
        // III. Attività finanziarie che non costituiscono immobilizzazioni
        "partecipazioniImpreseControllate": partecipazioniImpreseControllate,
        "partecipazioniImpreseCollegate": partecipazioniImpreseCollegate,
        "partecipazioniImpreseControllanti": partecipazioniImpreseControllanti,
        "altrePartecipazioni": altrePartecipazioni,
        "strumentiFinanziariDerivatiAttivi": strumentiFinanziariDerivatiAttivi,
        "altriTitoliAttivoCircolante": altriTitoliAttivoCircolante,
        "totaleAttivitaFinanziarie": totaleAttivitaFinanziarie,
        // IV. Disponibilità liquide
        "depositiBancariPostali": depositiBancariPostali,
        "assegni": assegni,
        "danaroValoriCassa": danaroValoriCassa,
        "totaleDisponibilitaLiquide": totaleDisponibilitaLiquide,
        "totaleAttivoCircolante": totaleAttivoCircolante,
        // D) Ratei e Risconti
        "rateiRiscontiAttivo": rateiRiscontiAttivo,
        "disaggioPrestiti": disaggioPrestiti,
        "totaleRateiRiscontiAttivi": totaleRateiRiscontiAttivi,
        // TOTALE ATTIVO
        "totaleAttivo": totaleAttivo,

        /* STATO PATRIMONIALE PASSIVO */
        // A. Patrimonio Netto
        "capitale": capitale,
        "riservaSovrapprezzoAzioni": riservaSovrapprezzoAzioni,
        "riserveRivalutazione": riserveRivalutazione,
        "riservaLegale": riservaLegale,
        "riserveStatutarie": riserveStatutarie,
        "altreRiserve": altreRiserve,
        "riservaOperazioniCopertura": riservaOperazioniCopertura,
        "utilePortatoNuovo": utilePortatoNuovo,
        "utileEsercizio": utileEsercizio,
        "riservaNegativaAzioniProprie": riservaNegativaAzioniProprie,
        "totalePatrimonioNetto": totalePatrimonioNetto,

        // B. Fondi per rischi e oneri
        "trattamentoQuiescenzaObblighiSimili": trattamentoQuiescenzaObblighiSimili,
        "imposteAncheDifferite": imposteAncheDifferite,
        "strumentiFinanziariDerivatiPassivi": strumentiFinanziariDerivatiPassivi,
        "altriFondi": altriFondi,
        "totaleFondiRischiOneri": totaleFondiRischiOneri,

        // C. Trattamento fine rapporto
        "trattamentoFineRapporto": trattamentoFineRapporto,

        // D. Debiti

        // E. ratei e risconti
        "rateiRiscontiPassivo": rateiRiscontiPassivo,
        "aggioPrestiti": aggioPrestiti,
        "totaleRateiRiscontiPassivi": totaleRateiRiscontiPassivi,

        // TOTALE PASSIVO
        "totalePassivo": totalePassivo,
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
                document.getElementById('impreseControllate').value = testo[0].impreseControllate
                document.getElementById('impreseCollegate').value = testo[0].impreseCollegate
                document.getElementById('impreseControllanti').value = testo[0].impreseControllanti
                document.getElementById('altreImprese').value = testo[0].altreImprese
                document.getElementById('creditiImmobilizzazioniImpreseControllateEntro12Mesi').value = testo[0].creditiImmobilizzazioniImpreseControllateEntro12Mesi
                document.getElementById('creditiImmobilizzazioniImpreseControllateOltre12Mesi').value = testo[0].creditiImmobilizzazioniImpreseControllateOltre12Mesi
                document.getElementById('creditiImmobilizzazioniImpreseCollegateEntro12Mesi').value = testo[0].creditiImmobilizzazioniImpreseCollegateEntro12Mesi
                document.getElementById('creditiImmobilizzazioniImpreseCollegateOltre12Mesi').value = testo[0].creditiImmobilizzazioniImpreseCollegateOltre12Mesi
                document.getElementById('creditiImmobilizzazioniImpreseControllantiEntro12Mesi').value = testo[0].creditiImmobilizzazioniImpreseControllantiEntro12Mesi
                document.getElementById('creditiImmobilizzazioniImpreseControllantiOltre12Mesi').value = testo[0].creditiImmobilizzazioniImpreseControllantiOltre12Mesi
                document.getElementById('creditiImmobilizzazioniAltreImpreseEntro12Mesi').value = testo[0].creditiImmobilizzazioniAltreImpreseEntro12Mesi
                document.getElementById('creditiImmobilizzazioniAltreImpreseOltre12Mesi').value = testo[0].creditiImmobilizzazioniAltreImpreseOltre12Mesi
                document.getElementById('altriTitoliImmobilizzazioni').value = testo[0].altriTitoliImmobilizzazioni
                document.getElementById('azioniProprie').value = testo[0].azioniProprie
                document.getElementById('totaleImmobilizzazioniFinanziarie').value = testo[0].totaleImmobilizzazioniFinanziarie
                document.getElementById('totaleImmobilizzazioni').value = testo[0].totaleImmobilizzazioni
                // C. Attivo Circolante
                // I. Rimanenze
                document.getElementById('materiePrime').value = testo[0].materiePrime
                document.getElementById('prodottiCorsoLavorazione').value = testo[0].prodottiCorsoLavorazione
                document.getElementById('lavoriCorsoOrdinazione').value = testo[0].lavoriCorsoOrdinazione
                document.getElementById('prodottiFinitiMerci').value = testo[0].prodottiFinitiMerci
                document.getElementById('acconti').value = testo[0].acconti
                document.getElementById('totaleRimanenze').value = testo[0].totaleRimanenze
                // II. Crediti
                document.getElementById('creditiAttivoCircolanteClientiEntro12Mesi').value = testo[0].creditiAttivoCircolanteClientiEntro12Mesi
                document.getElementById('creditiAttivoCircolanteClientiOltre12Mesi').value = testo[0].creditiAttivoCircolanteClientiOltre12Mesi
                document.getElementById('creditiAttivoCircolanteImpreseControllateEntro12Mesi').value = testo[0].creditiAttivoCircolanteImpreseControllateEntro12Mesi
                document.getElementById('creditiAttivoCircolanteImpreseControllateOltre12Mesi').value = testo[0].creditiAttivoCircolanteImpreseControllateOltre12Mesi
                document.getElementById('creditiAttivoCircolanteImpreseCollegateEntro12Mesi').value = testo[0].creditiAttivoCircolanteImpreseCollegateEntro12Mesi
                document.getElementById('creditiAttivoCircolanteImpreseCollegateOltre12Mesi').value = testo[0].creditiAttivoCircolanteImpreseCollegateOltre12Mesi
                document.getElementById('creditiAttivoCircolanteImpreseControllantiEntro12Mesi').value = testo[0].creditiAttivoCircolanteImpreseControllantiEntro12Mesi
                document.getElementById('creditiAttivoCircolanteImpreseControllantiOltre12Mesi').value = testo[0].creditiAttivoCircolanteImpreseControllantiOltre12Mesi
                document.getElementById('creditiAttivoCircolanteAltreImpreseEntro12Mesi').value = testo[0].creditiAttivoCircolanteAltreImpreseEntro12Mesi
                document.getElementById('creditiAttivoCircolanteAltreImpreseOltre12Mesi').value = testo[0].creditiAttivoCircolanteAltreImpreseOltre12Mesi
                document.getElementById('totaleCrediti').value = testo[0].totaleCrediti
                // III. Attività finanziarie che non costituiscono immobilizzazioni
                document.getElementById('partecipazioniImpreseControllate').value = testo[0].partecipazioniImpreseControllate
                document.getElementById('partecipazioniImpreseCollegate').value = testo[0].partecipazioniImpreseCollegate
                document.getElementById('partecipazioniImpreseControllanti').value = testo[0].partecipazioniImpreseControllanti
                document.getElementById('altrePartecipazioni').value = testo[0].altrePartecipazioni
                document.getElementById('strumentiFinanziariDerivatiAttivi').value = testo[0].strumentiFinanziariDerivatiAttivi
                document.getElementById('altriTitoliAttivoCircolante').value = testo[0].altriTitoliAttivoCircolante
                document.getElementById('totaleAttivitaFinanziarie').value = testo[0].totaleAttivitaFinanziarie
                // IV. Disponibilità liquide
                document.getElementById('depositiBancariPostali').value = testo[0].depositiBancariPostali
                document.getElementById('assegni').value = testo[0].assegni
                document.getElementById('danaroValoriCassa').value = testo[0].danaroValoriCassa
                document.getElementById('totaleDisponibilitaLiquide').value = testo[0].totaleDisponibilitaLiquide
                document.getElementById('totaleAttivoCircolante').value = testo[0].totaleAttivoCircolante
                // D) Ratei e Risconti
                document.getElementById('rateiRiscontiAttivo').value = testo[0].rateiRiscontiAttivo
                document.getElementById('disaggioPrestiti').value = testo[0].disaggioPrestiti
                document.getElementById('totaleRateiRiscontiAttivi').value = testo[0].totaleRateiRiscontiAttivi
                // TOTALE ATTIVO
                document.getElementById('totaleAttivo').value = testo[0].totaleAttivo

                console.log("file aperto")
            })
        }
    })
})
