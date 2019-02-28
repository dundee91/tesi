const fs = require('fs')
const pdf = require('pdfkit')
const app = require('electron').remote
const dialog = app.dialog
const ipc = require('electron').ipcRenderer


// salvataggio progetto
ipc.on('salva', function (ev, data) {

    //mostro finestra per salvataggio file
    dialog.showSaveDialog((filename) => {
        if (filename == undefined) {
            window.alert("non hai salvato il progetto...")
            return console.log("progetto non salvato")
        }
        //salvo file
        fs.writeFile(filename, array(), function (err) {
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
                document.getElementById('storiaAzienda').value = testo[1].storiaAzienda
                document.getElementById('titolari').value = testo[1].titolari
                document.getElementById('organoControllo').value = testo[1].organoControllo
                document.getElementById('descrizioneAttuale').value = testo[1].descrizioneAttuale
                document.getElementById('prodottiCommercializzati').value = testo[1].prodottiCommercializzati
                document.getElementById('mercatoRiferimento').value = testo[1].mercatoRiferimento
                document.getElementById('politicheProduzione').value = testo[1].politicheProduzione
                document.getElementById('politicheDistribuzione').value = testo[1].politicheDistribuzione
                document.getElementById('principaliFornitori').value = testo[1].principaliFornitori
                document.getElementById('principaliClienti').value = testo[1].principaliClienti
                document.getElementById('rapportiContrattuali').value = testo[1].rapportiContrattuali
                document.getElementById('internazionalizzazione').value = testo[1].internazionalizzazione
                document.getElementById('personale').value = testo[1].personale
                document.getElementById('strutturaInvestimenti').value = testo[1].strutturaInvestimenti
                document.getElementById('marchiBrevetti').value = testo[1].marchiBrevetti
                document.getElementById('tipologiaRischi').value = testo[1].tipologiaRischi
                document.getElementById('informazioniUtili').value = testo[1].informazioniUtili
                document.getElementById('finalitaRichiesta').value = testo[1].finalitaRichiesta
                document.getElementById('fidiEdUtilizzi').value = testo[1].fidiEdUtilizzi
                document.getElementById('conclusioni').value = testo[1].conclusioni

                /* STATO PATRIMONIALE ATTIVO */
                // A. Crediti verso soci
                document.getElementById('creditiVersoSoci').value = testo[2].creditiVersoSoci
                // B. Immobilizzazioni
                // I. Immateriali
                document.getElementById('costiImpiantoAmpliamento').value = testo[2].costiImpiantoAmpliamento
                document.getElementById('costiRicercaSviluppo').value = testo[2].costiRicercaSviluppo
                document.getElementById('dirittiBrevetto').value = testo[2].dirittiBrevetto
                document.getElementById('concessioniLicenzeMarchi').value = testo[2].concessioniLicenzeMarchi
                document.getElementById('avviamento').value = testo[2].avviamento
                document.getElementById('immobilizzazioniCorso').value = testo[2].immobilizzazioniCorso
                document.getElementById('immobilizzazioniAltro').value = testo[2].immobilizzazioniAltro
                document.getElementById('totaleImmobilizzazioniImmateriali').value = testo[2].totaleImmobilizzazioniImmateriali
                // II. Materiali
                document.getElementById('terreniFabbricati').value = testo[2].terreniFabbricati
                document.getElementById('impiantiMacchinario').value = testo[2].impiantiMacchinario
                document.getElementById('attrezzatureIndustriali').value = testo[2].attrezzatureIndustriali
                document.getElementById('altriBeni').value = testo[2].altriBeni
                document.getElementById('immobilizzazioniCorsoAcconti').value = testo[2].immobilizzazioniCorsoAcconti
                document.getElementById('totaleImmobilizzazioniMateriali').value = testo[2].totaleImmobilizzazioniMateriali
                // III. Finanziarie
                document.getElementById('impreseControllate').value = testo[2].impreseControllate
                document.getElementById('impreseCollegate').value = testo[2].impreseCollegate
                document.getElementById('impreseControllanti').value = testo[2].impreseControllanti
                document.getElementById('altreImprese').value = testo[2].altreImprese
                document.getElementById('creditiImmobilizzazioniImpreseControllateEntro12Mesi').value = testo[2].creditiImmobilizzazioniImpreseControllateEntro12Mesi
                document.getElementById('creditiImmobilizzazioniImpreseControllateOltre12Mesi').value = testo[2].creditiImmobilizzazioniImpreseControllateOltre12Mesi
                document.getElementById('creditiImmobilizzazioniImpreseCollegateEntro12Mesi').value = testo[2].creditiImmobilizzazioniImpreseCollegateEntro12Mesi
                document.getElementById('creditiImmobilizzazioniImpreseCollegateOltre12Mesi').value = testo[2].creditiImmobilizzazioniImpreseCollegateOltre12Mesi
                document.getElementById('creditiImmobilizzazioniImpreseControllantiEntro12Mesi').value = testo[2].creditiImmobilizzazioniImpreseControllantiEntro12Mesi
                document.getElementById('creditiImmobilizzazioniImpreseControllantiOltre12Mesi').value = testo[2].creditiImmobilizzazioniImpreseControllantiOltre12Mesi
                document.getElementById('creditiImmobilizzazioniAltreImpreseEntro12Mesi').value = testo[2].creditiImmobilizzazioniAltreImpreseEntro12Mesi
                document.getElementById('creditiImmobilizzazioniAltreImpreseOltre12Mesi').value = testo[2].creditiImmobilizzazioniAltreImpreseOltre12Mesi
                document.getElementById('altriTitoliImmobilizzazioni').value = testo[2].altriTitoliImmobilizzazioni
                document.getElementById('azioniProprieImmobilizzazioniFinanziarie').value = testo[2].azioniProprieImmobilizzazioniFinanziarie
                document.getElementById('totaleImmobilizzazioniFinanziarie').value = testo[2].totaleImmobilizzazioniFinanziarie
                document.getElementById('totaleImmobilizzazioni').value = testo[2].totaleImmobilizzazioni
                // C. Attivo Circolante
                // I. Rimanenze
                document.getElementById('materiePrime').value = testo[2].materiePrime
                document.getElementById('prodottiCorsoLavorazione').value = testo[2].prodottiCorsoLavorazione
                document.getElementById('lavoriCorsoOrdinazione').value = testo[2].lavoriCorsoOrdinazione
                document.getElementById('prodottiFinitiMerci').value = testo[2].prodottiFinitiMerci
                document.getElementById('acconti').value = testo[2].acconti
                document.getElementById('totaleRimanenze').value = testo[2].totaleRimanenze
                // II. Crediti
                document.getElementById('creditiAttivoCircolanteClientiEntro12Mesi').value = testo[2].creditiAttivoCircolanteClientiEntro12Mesi
                document.getElementById('creditiAttivoCircolanteClientiOltre12Mesi').value = testo[2].creditiAttivoCircolanteClientiOltre12Mesi
                document.getElementById('creditiAttivoCircolanteImpreseControllateEntro12Mesi').value = testo[2].creditiAttivoCircolanteImpreseControllateEntro12Mesi
                document.getElementById('creditiAttivoCircolanteImpreseControllateOltre12Mesi').value = testo[2].creditiAttivoCircolanteImpreseControllateOltre12Mesi
                document.getElementById('creditiAttivoCircolanteImpreseCollegateEntro12Mesi').value = testo[2].creditiAttivoCircolanteImpreseCollegateEntro12Mesi
                document.getElementById('creditiAttivoCircolanteImpreseCollegateOltre12Mesi').value = testo[2].creditiAttivoCircolanteImpreseCollegateOltre12Mesi
                document.getElementById('creditiAttivoCircolanteImpreseControllantiEntro12Mesi').value = testo[2].creditiAttivoCircolanteImpreseControllantiEntro12Mesi
                document.getElementById('creditiAttivoCircolanteImpreseControllantiOltre12Mesi').value = testo[2].creditiAttivoCircolanteImpreseControllantiOltre12Mesi
                document.getElementById('creditiAttivoCircolanteCreditiTributariEntro12Mesi').value = testo[2].creditiAttivoCircolanteCreditiTributariEntro12Mesi
                document.getElementById('creditiAttivoCircolanteCreditiTributariOltre12Mesi').value = testo[2].creditiAttivoCircolanteCreditiTributariOltre12Mesi
                document.getElementById('creditiAttivoCircolanteImposteAnticipateEntro12Mesi').value = testo[2].creditiAttivoCircolanteImposteAnticipateEntro12Mesi
                document.getElementById('creditiAttivoCircolanteImposteAnticipateOltre12Mesi').value = testo[2].creditiAttivoCircolanteImposteAnticipateOltre12Mesi
                document.getElementById('creditiAttivoCircolanteAltreImpreseEntro12Mesi').value = testo[2].creditiAttivoCircolanteAltreImpreseEntro12Mesi
                document.getElementById('creditiAttivoCircolanteAltreImpreseOltre12Mesi').value = testo[2].creditiAttivoCircolanteAltreImpreseOltre12Mesi
                document.getElementById('totaleCrediti').value = testo[2].totaleCrediti
                // III. Attività finanziarie che non costituiscono immobilizzazioni
                document.getElementById('partecipazioniImpreseControllate').value = testo[2].partecipazioniImpreseControllate
                document.getElementById('partecipazioniImpreseCollegate').value = testo[2].partecipazioniImpreseCollegate
                document.getElementById('partecipazioniImpreseControllanti').value = testo[2].partecipazioniImpreseControllanti
                document.getElementById('altrePartecipazioni').value = testo[2].altrePartecipazioni
                document.getElementById('azioniProprieAttivitaFinanziarie').value = testo[2].azioniProprieAttivitaFinanziarie
                document.getElementById('altriTitoliAttivoCircolante').value = testo[2].altriTitoliAttivoCircolante
                document.getElementById('totaleAttivitaFinanziarie').value = testo[2].totaleAttivitaFinanziarie
                // IV. Disponibilità liquide
                document.getElementById('depositiBancariPostali').value = testo[2].depositiBancariPostali
                document.getElementById('assegni').value = testo[2].assegni
                document.getElementById('danaroValoriCassa').value = testo[2].danaroValoriCassa
                document.getElementById('totaleDisponibilitaLiquide').value = testo[2].totaleDisponibilitaLiquide
                document.getElementById('totaleAttivoCircolante').value = testo[2].totaleAttivoCircolante
                // D) Ratei e Risconti
                document.getElementById('rateiRiscontiAttivo').value = testo[2].rateiRiscontiAttivo
                document.getElementById('disaggioPrestiti').value = testo[2].disaggioPrestiti
                document.getElementById('totaleRateiRiscontiAttivi').value = testo[2].totaleRateiRiscontiAttivi
                // TOTALE ATTIVO
                document.getElementById('totaleAttivo').value = testo[2].totaleAttivo

                /* STATO PATRIMONIALE PASSIVO */
                // A. Patrimonio Netto
                document.getElementById('capitale').value = testo[2].capitale
                document.getElementById('riservaSovrapprezzoAzioni').value = testo[2].riservaSovrapprezzoAzioni
                document.getElementById('riserveRivalutazione').value = testo[2].riserveRivalutazione
                document.getElementById('riservaLegale').value = testo[2].riservaLegale
                document.getElementById('riserveStatutarie').value = testo[2].riserveStatutarie
                document.getElementById('altreRiserve').value = testo[2].altreRiserve
                document.getElementById('utilePortatoNuovo').value = testo[2].utilePortatoNuovo
                document.getElementById('utileEsercizio').value = testo[2].utileEsercizio
                document.getElementById('riservaAzioniProprie').value = testo[2].riservaAzioniProprie
                document.getElementById('totalePatrimonioNetto').value = testo[2].totalePatrimonioNetto

                // B. Fondi per rischi e oneri
                document.getElementById('trattamentoQuiescenzaObblighiSimili').value = testo[2].trattamentoQuiescenzaObblighiSimili
                document.getElementById('imposteAncheDifferite').value = testo[2].imposteAncheDifferite
                document.getElementById('altriFondi').value = testo[2].altriFondi
                document.getElementById('totaleFondiRischiOneri').value = testo[2].totaleFondiRischiOneri

                // C. Trattamento fine rapporto
                document.getElementById('trattamentoFineRapportoSP').value = testo[2].trattamentoFineRapportoSP

                // D. Debiti
                document.getElementById('obbligazioniEntro12Mesi').value = testo[2].obbligazioniEntro12Mesi
                document.getElementById('obbligazioniOltre12Mesi').value = testo[2].obbligazioniOltre12Mesi
                document.getElementById('obbligazioniConvertibiliEntro12Mesi').value = testo[2].obbligazioniConvertibiliEntro12Mesi
                document.getElementById('obbligazioniConvertibiliOltre12Mesi').value = testo[2].obbligazioniConvertibiliOltre12Mesi
                document.getElementById('debitiVersoSociFinanziamentiEntro12Mesi').value = testo[2].debitiVersoSociFinanziamentiEntro12Mesi
                document.getElementById('debitiVersoSociFinanziamentiOltre12Mesi').value = testo[2].debitiVersoSociFinanziamentiOltre12Mesi
                document.getElementById('debitiVersoBancheEntro12Mesi').value = testo[2].debitiVersoBancheEntro12Mesi
                document.getElementById('debitiVersoBancheOltre12Mesi').value = testo[2].debitiVersoBancheOltre12Mesi
                document.getElementById('debitiVersoAltriFinanziatoriEntro12Mesi').value = testo[2].debitiVersoAltriFinanziatoriEntro12Mesi
                document.getElementById('debitiVersoAltriFinanziatoriOltre12Mesi').value = testo[2].debitiVersoAltriFinanziatoriOltre12Mesi
                document.getElementById('accontiEntro12Mesi').value = testo[2].accontiEntro12Mesi
                document.getElementById('accontiOltre12Mesi').value = testo[2].accontiOltre12Mesi
                document.getElementById('debitiVersoFornitoriEntro12Mesi').value = testo[2].debitiVersoFornitoriEntro12Mesi
                document.getElementById('debitiVersoFornitoriOltre12Mesi').value = testo[2].debitiVersoFornitoriOltre12Mesi
                document.getElementById('debitiRappresentatiTitoliCreditoEntro12Mesi').value = testo[2].debitiRappresentatiTitoliCreditoEntro12Mesi
                document.getElementById('debitiRappresentatiTitoliCreditoOltre12Mesi').value = testo[2].debitiRappresentatiTitoliCreditoOltre12Mesi
                document.getElementById('debitiVersoImpreseControllateEntro12Mesi').value = testo[2].debitiVersoImpreseControllateEntro12Mesi
                document.getElementById('debitiVersoImpreseControllateOltre12Mesi').value = testo[2].debitiVersoImpreseControllateOltre12Mesi
                document.getElementById('debitiVersoImpreseCollegateEntro12Mesi').value = testo[2].debitiVersoImpreseCollegateEntro12Mesi
                document.getElementById('debitiVersoImpreseCollegateOltre12Mesi').value = testo[2].debitiVersoImpreseCollegateOltre12Mesi
                document.getElementById('debitiVersoControllantiEntro12Mesi').value = testo[2].debitiVersoControllantiEntro12Mesi
                document.getElementById('debitiVersoControllantiOltre12Mesi').value = testo[2].debitiVersoControllantiOltre12Mesi
                document.getElementById('debitiTributariEntro12Mesi').value = testo[2].debitiTributariEntro12Mesi
                document.getElementById('debitiTributariOltre12Mesi').value = testo[2].debitiTributariOltre12Mesi
                document.getElementById('debitiVersoIstituiPrevidenzaEntro12Mesi').value = testo[2].debitiVersoIstituiPrevidenzaEntro12Mesi
                document.getElementById('debitiVersoIstituiPrevidenzaOltre12Mesi').value = testo[2].debitiVersoIstituiPrevidenzaOltre12Mesi
                document.getElementById('altriDebitiEntro12Mesi').value = testo[2].altriDebitiEntro12Mesi
                document.getElementById('altriDebitiOltre12Mesi').value = testo[2].altriDebitiOltre12Mesi
                document.getElementById('totaleDebiti').value = testo[2].totaleDebiti

                // E. ratei e risconti
                document.getElementById('rateiRiscontiPassivo').value = testo[2].rateiRiscontiPassivo
                document.getElementById('aggioPrestiti').value = testo[2].aggioPrestiti
                document.getElementById('totaleRateiRiscontiPassivi').value = testo[2].totaleRateiRiscontiPassivi

                // TOTALE PASSIVO
                document.getElementById('totalePassivo').value = testo[2].totalePassivo

                /* CONTO ECONOMICO */
                // A) Valore della produzione
                document.getElementById('ricaviVendite').value = testo[3].ricaviVendite
                document.getElementById('variazioniRimanenze').value = testo[3].variazioniRimanenze
                document.getElementById('variazioniLavoriInCorso').value = testo[3].variazioniLavoriInCorso
                document.getElementById('incrementiImmobilizzazioniLavoriInterni').value = testo[3].incrementiImmobilizzazioniLavoriInterni
                document.getElementById('altriRicaviProventi').value = testo[3].altriRicaviProventi
                document.getElementById('totaleValoreProduzione').value = testo[3].totaleValoreProduzione

                // B) Costi della produzione
                document.getElementById('materiePrimeCE').value = testo[3].materiePrimeCE
                document.getElementById('servizi').value = testo[3].servizi
                document.getElementById('godimentoBeniTerzi').value = testo[3].godimentoBeniTerzi
                document.getElementById('diCuiCanoniLeasing').value = testo[3].diCuiCanoniLeasing
                document.getElementById('salariStipendi').value = testo[3].salariStipendi
                document.getElementById('oneriSociali').value = testo[3].oneriSociali
                document.getElementById('trattamentoFineRapportoCE').value = testo[3].trattamentoFineRapportoCE
                document.getElementById('trattamentoQuiescenzaSimili').value = testo[3].trattamentoQuiescenzaSimili
                document.getElementById('altriCosti').value = testo[3].altriCosti
                document.getElementById('ammortamentoImmobilizzazioniImmateriali').value = testo[3].ammortamentoImmobilizzazioniImmateriali
                document.getElementById('ammortamentoImmobilizzazioniMateriali').value = testo[3].ammortamentoImmobilizzazioniMateriali
                document.getElementById('altreSvalutazioniImmobilizzazioni').value = testo[3].altreSvalutazioniImmobilizzazioni
                document.getElementById('svalutazioniCreditiCompresiAttivoCircolante').value = testo[3].svalutazioniCreditiCompresiAttivoCircolante
                document.getElementById('variazioneRimanenzeMateriePrime').value = testo[3].variazioneRimanenzeMateriePrime
                document.getElementById('accantonamentiPerRischi').value = testo[3].accantonamentiPerRischi
                document.getElementById('altriAccantonamenti').value = testo[3].altriAccantonamenti
                document.getElementById('oneriDiversiGestione').value = testo[3].oneriDiversiGestione
                document.getElementById('totaleCostiProduzione').value = testo[3].totaleCostiProduzione

                // Differenza tra Valore e Costi della produzione
                document.getElementById('differenzaValoreCostiProduzione').value = testo[3].differenzaValoreCostiProduzione

                // C) Proventi e oneri finanziari
                document.getElementById('proventiDaControllate').value = testo[3].proventiDaControllate
                document.getElementById('proventiDaCollegate').value = testo[3].proventiDaCollegate
                document.getElementById('proventiDaControllanti').value = testo[3].proventiDaControllanti
                document.getElementById('proventiCreditiIscrittiImmobilizzazioniControllate').value = testo[3].proventiCreditiIscrittiImmobilizzazioniControllate
                document.getElementById('proventiCreditiIscrittiImmobilizzazioniCollegate').value = testo[3].proventiCreditiIscrittiImmobilizzazioniCollegate
                document.getElementById('proventiCreditiIscrittiImmobilizzazioniControllanti').value = testo[3].proventiCreditiIscrittiImmobilizzazioniControllanti
                document.getElementById('proventiTitoliIscrittiImmobilizzazioni').value = testo[3].proventiTitoliIscrittiImmobilizzazioni
                document.getElementById('proventiTitoliIscrittiAttivoCircolante').value = testo[3].proventiTitoliIscrittiAttivoCircolante
                document.getElementById('proventiDiversiDaiPrecedentiControllate').value = testo[3].proventiDiversiDaiPrecedentiControllate
                document.getElementById('proventiDiversiDaiPrecedentiCollegate').value = testo[3].proventiDiversiDaiPrecedentiCollegate
                document.getElementById('proventiDiversiDaiPrecedentiControllanti').value = testo[3].proventiDiversiDaiPrecedentiControllanti
                document.getElementById('interessiAltriOneriFinanziariDaControllate').value = testo[3].interessiAltriOneriFinanziariDaControllate
                document.getElementById('interessiAltriOneriFinanziariDaCollegate').value = testo[3].interessiAltriOneriFinanziariDaCollegate
                document.getElementById('interessiAltriOneriFinanziariDaControllanti').value = testo[3].interessiAltriOneriFinanziariDaControllanti
                document.getElementById('utiliPerditesuCambi').value = testo[3].utiliPerditesuCambi
                document.getElementById('totaleProventiOneriFinanziari').value = testo[3].totaleProventiOneriFinanziari

                // D) Rettifiche di valore di attività finanziarie
                document.getElementById('rivalutazioniPartecipazioni').value = testo[3].rivalutazioniPartecipazioni
                document.getElementById('rivalutazioniImmobilizzazioniFinanziarie').value = testo[3].rivalutazioniImmobilizzazioniFinanziarie
                document.getElementById('rivalutazioniTitoliIscrittiAttivoCircolante').value = testo[3].rivalutazioniTitoliIscrittiAttivoCircolante
                document.getElementById('rivalutazioniStrumentiFinanziariDerivati').value = testo[3].rivalutazioniStrumentiFinanziariDerivati
                document.getElementById('svalutazioniPartecipazioni').value = testo[3].svalutazioniPartecipazioni
                document.getElementById('svalutazioniImmobilizzazioniFinanziarie').value = testo[3].svalutazioniImmobilizzazioniFinanziarie
                document.getElementById('svalutazioniTitoliIscrittiAttivoCircolante').value = testo[3].svalutazioniTitoliIscrittiAttivoCircolante
                document.getElementById('svalutazioniStrumentiFinanziariDerivati').value = testo[3].svalutazioniStrumentiFinanziariDerivati
                document.getElementById('totaleRettifiche').value = testo[3].totaleRettifiche

                // E) Proventi e oneri straordinari
                document.getElementById('proventiStraordinari').value = testo[3].proventiStraordinari
                document.getElementById('plusvalenzeAlienazioni').value = testo[3].plusvalenzeAlienazioni
                document.getElementById('altriProventi').value = testo[3].altriProventi
                document.getElementById('oneriStraordinari').value = testo[3].oneriStraordinari
                document.getElementById('minusvalenzeAlienazioni').value = testo[3].minusvalenzeAlienazioni
                document.getElementById('altriOneri').value = testo[3].altriOneri
                document.getElementById('totalePartiteStraordinarie').value = testo[3].totalePartiteStraordinarie

                // Risultato prima delle Imposte
                document.getElementById('risultatoPrimaImposte').value = testo[3].risultatoPrimaImposte
                // Imposte
                document.getElementById('imposteRedditoEsercizio').value = testo[3].imposteRedditoEsercizio
                // Utile (perdite) dell'esercizio
                document.getElementById('utilePerditeEsercizio').value = testo[3].utilePerditeEsercizio

                // RICLASSIFICAZIONE STATO PATRIMONIALE FUNZIONALE (OPERATIVO)

                document.getElementById('SPFOimmobilizzazioniImmateriali').value = testo[4].SPFOimmobilizzazioniImmateriali
                document.getElementById('SPFOimmobilizzazioniMateriali').value = testo[4].SPFOimmobilizzazioniMateriali
                document.getElementById('SPFOimmobilizzazioniFinanziarieNette').value = testo[4].SPFOimmobilizzazioniFinanziarieNette
                document.getElementById('SPFOtotaleImmobilizzazioniNette').value = testo[4].SPFOtotaleImmobilizzazioniNette
                document.getElementById('SPFOmagazzino').value = testo[4].SPFOmagazzino
                document.getElementById('SPFOcreditiVersoClienti').value = testo[4].SPFOcreditiVersoClienti
                document.getElementById('SPFOaltriCrediti').value = testo[4].SPFOaltriCrediti
                document.getElementById('SPFOrateiRiscontiAttivi').value = testo[4].SPFOrateiRiscontiAttivi
                document.getElementById('SPFOtotaleAttivoCommerciale').value = testo[4].SPFOtotaleAttivoCommerciale
                document.getElementById('SPFOdebitiVersoFornitori').value = testo[4].SPFOdebitiVersoFornitori
                document.getElementById('SPFOaltriDebitiNonFinanziari').value = testo[4].SPFOaltriDebitiNonFinanziari
                document.getElementById('SPFOrateiRiscontiPassivi').value = testo[4].SPFOrateiRiscontiPassivi
                document.getElementById('SPFOtotalePassivoCommerciale').value = testo[4].SPFOtotalePassivoCommerciale
                document.getElementById('SPFOcapitaleEsercizio').value = testo[4].SPFOcapitaleEsercizio
                document.getElementById('SPFOfondiRischiOneri').value = testo[4].SPFOfondiRischiOneri
                document.getElementById('SPFOfondoTfr').value = testo[4].SPFOfondoTfr
                document.getElementById('SPFOtotaleFondiOperativi').value = testo[4].SPFOtotaleFondiOperativi
                document.getElementById('SPFOcapitaleInvestitoNetto').value = testo[4].SPFOcapitaleInvestitoNetto
                document.getElementById('SPFOdebitiFinanziariBreveTermine').value = testo[4].SPFOdebitiFinanziariBreveTermine
                document.getElementById('SPFOdisponibilitaLiquide').value = testo[4].SPFOdisponibilitaLiquide
                document.getElementById('SPFOcreditiFinanziariBreveTermine').value = testo[4].SPFOcreditiFinanziariBreveTermine
                document.getElementById('SPFOtotalePosizioneFinanziariaBreveTermine').value = testo[4].SPFOtotalePosizioneFinanziariaBreveTermine
                document.getElementById('SPFOdebitiFinanziariMedioLungoTermine').value = testo[4].SPFOdebitiFinanziariMedioLungoTermine
                document.getElementById('SPFOcreditiFinanziariMedioLungoTermine').value = testo[4].SPFOcreditiFinanziariMedioLungoTermine
                document.getElementById('SPFOtotalePosizioneFinanziariaMedioLungoTermine').value = testo[4].SPFOtotalePosizioneFinanziariaMedioLungoTermine
                document.getElementById('SPFOtotalePosizioneFinanziaria').value = testo[4].SPFOtotalePosizioneFinanziaria
                document.getElementById('SPFOcapitaleSocialeFinanziamentiContoCapitale').value = testo[4].SPFOcapitaleSocialeFinanziamentiContoCapitale
                document.getElementById('SPFOriserve').value = testo[4].SPFOriserve
                document.getElementById('SPFOredditonetto').value = testo[4].SPFOredditonetto
                document.getElementById('SPFOtotalePatrimonioNetto').value = testo[4].SPFOtotalePatrimonioNetto
                document.getElementById('SPFOtotaleDebitoFinanziarioPatrimonioNetto').value = testo[4].SPFOtotaleDebitoFinanziarioPatrimonioNetto

                // RICLASSIFICAZIONE STATO PATRIMONIALE FINANZIARIO
                document.getElementById('SPFimmobilizzazioniImmateriali').value = testo[5].SPFimmobilizzazioniImmateriali
                document.getElementById('SPFimmobilizzazioniMateriali').value = testo[5].SPFimmobilizzazioniMateriali
                document.getElementById('SPFimmobilizzazioniFinanziarie').value = testo[5].SPFimmobilizzazioniFinanziarie
                document.getElementById('SPFtotaleImmobilizzazioniNette').value = testo[5].SPFtotaleImmobilizzazioniNette
                document.getElementById('SPFmagazzino').value = testo[5].SPFmagazzino
                document.getElementById('SPFcreditiCommerciali').value = testo[5].SPFcreditiCommerciali
                document.getElementById('SPFaltriCrediti').value = testo[5].SPFaltriCrediti
                document.getElementById('SPFrateiRiscontiAttivi').value = testo[5].SPFrateiRiscontiAttivi
                document.getElementById('SPFliquidita').value = testo[5].SPFliquidita
                document.getElementById('SPFtotaleAttivoCircolante').value = testo[5].SPFtotaleAttivoCircolante
                document.getElementById('SPFtotaleAttivo').value = testo[5].SPFtotaleAttivo
                document.getElementById('SPFcapitaleSociale').value = testo[5].SPFcapitaleSociale
                document.getElementById('SPFriserve').value = testo[5].SPFriserve
                document.getElementById('SPFredditoNetto').value = testo[5].SPFredditoNetto
                document.getElementById('SPFtotalePatrimonioNetto').value = testo[5].SPFtotalePatrimonioNetto
                document.getElementById('SPFdebitiFinanziariMlTermine').value = testo[5].SPFdebitiFinanziariMlTermine
                document.getElementById('SPFaltriDebiti').value = testo[5].SPFaltriDebiti
                document.getElementById('SPFfondoTFR').value = testo[5].SPFfondoTFR
                document.getElementById('SPFaltriFondi').value = testo[5].SPFaltriFondi
                document.getElementById('SPFtotalePassivoMlTermine').value = testo[5].SPFtotalePassivoMlTermine
                document.getElementById('SPFdebitiFinanziariBreveTermine').value = testo[5].SPFdebitiFinanziariBreveTermine
                document.getElementById('SPFdebitiCommercialiFornitori').value = testo[5].SPFdebitiCommercialiFornitori
                document.getElementById('SPFaltriDebitiNonFinanziari').value = testo[5].SPFaltriDebitiNonFinanziari
                document.getElementById('SPFrateiRiscontiPassivi').value = testo[5].SPFrateiRiscontiPassivi
                document.getElementById('SPFtotalePassivoBreveTermine').value = testo[5].SPFtotalePassivoBreveTermine
                document.getElementById('SPFtotalePassivoPatrimonioNetto').value = testo[5].SPFtotalePassivoPatrimonioNetto
                document.getElementById('SPFeventualeSquadraturaAttivoPass').value = testo[5].SPFeventualeSquadraturaAttivoPass

                /* RICLASSIFICAZIONE CONTO ECONOMICO VALORE AGGIUNTO */
                document.getElementById('CEricaviVendite').value = testo[6].CEricaviVendite
                document.getElementById('CEproduzioneInterna').value = testo[6].CEproduzioneInterna
                document.getElementById('CEtotaleValoreProduzione').value = testo[6].CEtotaleValoreProduzione
                document.getElementById('CEconsumoMateriePrime').value = testo[6].CEconsumoMateriePrime
                document.getElementById('CEcostiServizi').value = testo[6].CEcostiServizi
                document.getElementById('CEaltriCostiOperativiEsterni').value = testo[6].CEaltriCostiOperativiEsterni
                document.getElementById('CEtotaleConsumiEsterni').value = testo[6].CEtotaleConsumiEsterni
                document.getElementById('CEvaloreAggiunto').value = testo[6].CEvaloreAggiunto
                document.getElementById('CEcostiPersonale').value = testo[6].CEcostiPersonale
                document.getElementById('CEtotaleMargineOperativoLordo').value = testo[6].CEtotaleMargineOperativoLordo
                document.getElementById('CEammortamenti').value = testo[6].CEammortamenti
                document.getElementById('CEcanoniLeasing').value = testo[6].CEcanoniLeasing
                document.getElementById('CEaccantonamentiSvalutazioni').value = testo[6].CEaccantonamentiSvalutazioni
                document.getElementById('CEtotaleAmmortamentiSvalutazioni').value = testo[6].CEtotaleAmmortamentiSvalutazioni
                document.getElementById('CEaltriProventiOperativi').value = testo[6].CEaltriProventiOperativi
                document.getElementById('CEproventiFinanziari').value = testo[6].CEproventiFinanziari
                document.getElementById('CEsaldoGestioneMobiliare').value = testo[6].CEsaldoGestioneMobiliare
                document.getElementById('CEtotaleRisultatoOperativo').value = testo[6].CEtotaleRisultatoOperativo
                document.getElementById('CEoneriFinanziari').value = testo[6].CEoneriFinanziari
                document.getElementById('CEtotaleRisultatoLordo').value = testo[6].CEtotaleRisultatoLordo
                document.getElementById('CEproventiStraordinari').value = testo[6].CEproventiStraordinari
                document.getElementById('CEoneriStraordinari').value = testo[6].CEoneriStraordinari
                document.getElementById('CErisultatoAreaStraordinaria').value = testo[6].CErisultatoAreaStraordinaria
                document.getElementById('CEtotaleRisultatoAnteImposte').value = testo[6].CEtotaleRisultatoAnteImposte
                document.getElementById('CEimposteReddito').value = testo[6].CEimposteReddito
                document.getElementById('CEtotaleRisultatoNetto').value = testo[6].CEtotaleRisultatoNetto

                /* FORECAST
                document.getElementById('FCricaviVendite').value = testo[7].FCricaviVendite
                document.getElementById('FCconsumiMerci').value = testo[7].FCconsumiMerci
                document.getElementById('FCincValProdConsumiMerci').value = testo[7].FCincValProdConsumiMerci
                document.getElementById('FCacquistiServizi').value = testo[7].FCacquistiServizi
                document.getElementById('FCincValProdAcquistiServizi').value = testo[7].FCincValProdAcquistiServizi
                document.getElementById('FCcostoGodimentoBeniTerzi').value = testo[7].FCcostoGodimentoBeniTerzi
                document.getElementById('FCdiCuiCanoniLeasing').value = testo[7].FCdiCuiCanoniLeasing
                document.getElementById('FCcostiDelPersonale').value = testo[7].FCcostiDelPersonale
                document.getElementById('FCincValProdCostiPersonale').value = testo[7].FCincValProdCostiPersonale
                document.getElementById('FCaccantonamentoTFR').value = testo[7].FCaccantonamentoTFR
                document.getElementById('FCincCostoPersonale').value = testo[7].FCincCostoPersonale
                document.getElementById('FCutilizziFondoTFR').value = testo[7].FCutilizziFondoTFR
                document.getElementById('FCaccantonamenti').value = testo[7].FCaccantonamenti
                document.getElementById('FCutilizziAltriFondi').value = testo[7].FCutilizziAltriFondi
                 */

                console.log("file aperto")
            })
        }
    })
})

ipc.on('stampa', function (ev) {

    console.log("stampa?")
    var myDoc = new pdf;

    var oggi = new Date();
    var anno = oggi.getFullYear()
    var mese = oggi.getMonth() + 1
    // faccio stampare uno zero davanti al valore del mese se mese precedente ad ottobre
    var meseString = null
    if (mese < 10) {
        meseString = "0" + mese.toString()
    }
    else {
        meseString = mese.toString()
    }
    var giorno = oggi.getDate()
    var azienda = document.getElementById('ragioneSociale').value

    array()
    
    let testo = JSON.parse(data)

    // creo file con denominazione prestabilita "yyyymmdd - nomeAzienda.pdf"
    myDoc.pipe(fs.createWriteStream(anno.toString() + meseString + giorno.toString() + ' - ' + azienda + '.pdf'));

    // imposto font style del pdf
    myDoc.font('Times-Roman')
        // imposto font size del pdf
        .fontSize(48)
        // imposto contenuto del pdf
        .text('NodeJS PDF Document', 100, 100);

    myDoc.end();

    window.alert("pdf Salvato!")
    console.log("pdf salvato")

})

function array() {
    
    //creo array per json
    let contenuto = [
        /* ANAGRAFICA AZIENDALE */
        {
            "ragioneSociale" : document.getElementById('ragioneSociale').value,
            "partitaIVA" : document.getElementById('partitaIVA').value,
            "settoreProduzione" : document.getElementById('settoreProduzione').value,
            "contrattoCollettivo" : document.getElementById('contrattoCollettivo').value,
            "numeroDipendenti" : document.getElementById('numeroDipendenti').value,
            "indirizzo" : document.getElementById('indirizzo').value,
            "comune" : document.getElementById('comune').value,
            "provincia" : document.getElementById('provincia').value,
            "cap" : document.getElementById('cap').value,
            "referente" : document.getElementById('referente').value,
            "telefono" : document.getElementById('telefono').value,
            "fax" : document.getElementById('fax').value,
            "email" : document.getElementById('email').value,
            "sitoWeb" : document.getElementById('sitoWeb').value,
            "note" : document.getElementById('note').value
        },
        /* ANALISI QUANTITATIVA */
        {
            "storiaAzienda" : document.getElementById('storiaAzienda').value,
            "titolari" : document.getElementById('titolari').value,
            "organoControllo" : document.getElementById('organoControllo').value,
            "descrizioneAttuale" : document.getElementById('descrizioneAttuale').value,
            "prodottiCommercializzati" : document.getElementById('prodottiCommercializzati').value,
            "mercatoRiferimento" : document.getElementById('mercatoRiferimento').value,
            "politicheProduzione" : document.getElementById('politicheProduzione').value,
            "politicheDistribuzione" : document.getElementById('politicheDistribuzione').value,
            "principaliFornitori" : document.getElementById('principaliFornitori').value,
            "principaliClienti" : document.getElementById('principaliClienti').value,
            "rapportiContrattuali" : document.getElementById('rapportiContrattuali').value,
            "internazionalizzazione" : document.getElementById('internazionalizzazione').value,
            "personale" : document.getElementById('personale').value,
            "strutturaInvestimenti" : document.getElementById('strutturaInvestimenti').value,
            "marchiBrevetti" : document.getElementById('marchiBrevetti').value,
            "tipologiaRischi" : document.getElementById('tipologiaRischi').value,
            "informazioniUtili" : document.getElementById('informazioniUtili').value,
            "finalitaRichiesta" : document.getElementById('finalitaRichiesta').value,
            "fidiEdUtilizzi" : document.getElementById('fidiEdUtilizzi').value,
            "conclusioni" : document.getElementById('conclusioni').value
        },
        /* STATO PATRIMONIALE ATTIVO */
        {
            // A. Crediti verso soci
            "creditiVersoSoci" : document.getElementById('creditiVersoSoci').value,
        
            // B. Immobilizzazioni
            // I. Immateriali
            "costiImpiantoAmpliamento" : document.getElementById('costiImpiantoAmpliamento').value,
            "costiRicercaSviluppo" : document.getElementById('costiRicercaSviluppo').value,
            "dirittiBrevetto" : document.getElementById('dirittiBrevetto').value,
            "concessioniLicenzeMarchi" : document.getElementById('concessioniLicenzeMarchi').value,
            "avviamento" : document.getElementById('avviamento').value,
            "immobilizzazioniCorso" : document.getElementById('immobilizzazioniCorso').value,
            "immobilizzazioniAltro" : document.getElementById('immobilizzazioniAltro').value,
            "totaleImmobilizzazioniImmateriali" : document.getElementById('totaleImmobilizzazioniImmateriali').value,
            // II. Materiali
            "terreniFabbricati" : document.getElementById('terreniFabbricati').value,
            "impiantiMacchinario" : document.getElementById('impiantiMacchinario').value,
            "attrezzatureIndustriali" : document.getElementById('attrezzatureIndustriali').value,
            "altriBeni" : document.getElementById('altriBeni').value,
            "immobilizzazioniCorsoAcconti" : document.getElementById('immobilizzazioniCorsoAcconti').value,
            "totaleImmobilizzazioniMateriali" : document.getElementById('totaleImmobilizzazioniMateriali').value,
            // III. Finanziarie
            "impreseControllate" : document.getElementById('impreseControllate').value,
            "impreseCollegate" : document.getElementById('impreseCollegate').value,
            "impreseControllanti" : document.getElementById('impreseControllanti').value,
            "altreImprese" : document.getElementById('altreImprese').value,
            "creditiImmobilizzazioniImpreseControllateEntro12Mesi" : document.getElementById('creditiImmobilizzazioniImpreseControllateEntro12Mesi').value,
            "creditiImmobilizzazioniImpreseControllateOltre12Mesi" : document.getElementById('creditiImmobilizzazioniImpreseControllateOltre12Mesi').value,
            "creditiImmobilizzazioniImpreseCollegateEntro12Mesi" : document.getElementById('creditiImmobilizzazioniImpreseCollegateEntro12Mesi').value,
            "creditiImmobilizzazioniImpreseCollegateOltre12Mesi" : document.getElementById('creditiImmobilizzazioniImpreseCollegateOltre12Mesi').value,
            "creditiImmobilizzazioniImpreseControllantiEntro12Mesi" : document.getElementById('creditiImmobilizzazioniImpreseControllantiEntro12Mesi').value,
            "creditiImmobilizzazioniImpreseControllantiOltre12Mesi" : document.getElementById('creditiImmobilizzazioniImpreseControllantiOltre12Mesi').value,
            "creditiImmobilizzazioniAltreImpreseEntro12Mesi" : document.getElementById('creditiImmobilizzazioniAltreImpreseEntro12Mesi').value,
            "creditiImmobilizzazioniAltreImpreseOltre12Mesi" : document.getElementById('creditiImmobilizzazioniAltreImpreseOltre12Mesi').value,
            "altriTitoliImmobilizzazioni" : document.getElementById('altriTitoliImmobilizzazioni').value,
            "azioniProprieImmobilizzazioniFinanziarie" : document.getElementById('azioniProprieImmobilizzazioniFinanziarie').value,
            "totaleImmobilizzazioniFinanziarie" : document.getElementById('totaleImmobilizzazioniFinanziarie').value,
            "totaleImmobilizzazioni" : document.getElementById('totaleImmobilizzazioni').value,
        
            // C. Attivo Circolante
            // I. Rimanenze
            "materiePrime" : document.getElementById('materiePrime').value,
            "prodottiCorsoLavorazione" : document.getElementById('prodottiCorsoLavorazione').value,
            "lavoriCorsoOrdinazione" : document.getElementById('lavoriCorsoOrdinazione').value,
            "prodottiFinitiMerci" : document.getElementById('prodottiFinitiMerci').value,
            "acconti" : document.getElementById('acconti').value,
            "totaleRimanenze" : document.getElementById('totaleRimanenze').value,
            // II. Crediti
            "creditiAttivoCircolanteClientiEntro12Mesi" : document.getElementById('creditiAttivoCircolanteClientiEntro12Mesi').value,
            "creditiAttivoCircolanteClientiOltre12Mesi" : document.getElementById('creditiAttivoCircolanteClientiOltre12Mesi').value,
            "creditiAttivoCircolanteImpreseControllateEntro12Mesi" : document.getElementById('creditiAttivoCircolanteImpreseControllateEntro12Mesi').value,
            "creditiAttivoCircolanteImpreseControllateOltre12Mesi" : document.getElementById('creditiAttivoCircolanteImpreseControllateOltre12Mesi').value,
            "creditiAttivoCircolanteImpreseCollegateEntro12Mesi" : document.getElementById('creditiAttivoCircolanteImpreseCollegateEntro12Mesi').value,
            "creditiAttivoCircolanteImpreseCollegateOltre12Mesi" : document.getElementById('creditiAttivoCircolanteImpreseCollegateOltre12Mesi').value,
            "creditiAttivoCircolanteImpreseControllantiEntro12Mesi" : document.getElementById('creditiAttivoCircolanteImpreseControllantiEntro12Mesi').value,
            "creditiAttivoCircolanteImpreseControllantiOltre12Mesi" : document.getElementById('creditiAttivoCircolanteImpreseControllantiOltre12Mesi').value,
            "creditiAttivoCircolanteCreditiTributariEntro12Mesi" : document.getElementById('creditiAttivoCircolanteCreditiTributariEntro12Mesi').value,
            "creditiAttivoCircolanteCreditiTributariOltre12Mesi" : document.getElementById('creditiAttivoCircolanteCreditiTributariOltre12Mesi').value,
            "creditiAttivoCircolanteImposteAnticipateEntro12Mesi" : document.getElementById('creditiAttivoCircolanteImposteAnticipateEntro12Mesi').value,
            "creditiAttivoCircolanteImposteAnticipateOltre12Mesi" : document.getElementById('creditiAttivoCircolanteImposteAnticipateOltre12Mesi').value,
            "creditiAttivoCircolanteAltreImpreseEntro12Mesi" : document.getElementById('creditiAttivoCircolanteAltreImpreseEntro12Mesi').value,
            "creditiAttivoCircolanteAltreImpreseOltre12Mesi" : document.getElementById('creditiAttivoCircolanteAltreImpreseOltre12Mesi').value,
            "totaleCrediti" : document.getElementById('totaleCrediti').value,
            // III. Attività finanziarie che non costituiscono immobilizzazioni
            "partecipazioniImpreseControllate" : document.getElementById('partecipazioniImpreseControllate').value,
            "partecipazioniImpreseCollegate" : document.getElementById('partecipazioniImpreseCollegate').value,
            "partecipazioniImpreseControllanti" : document.getElementById('partecipazioniImpreseControllanti').value,
            "altrePartecipazioni" : document.getElementById('altrePartecipazioni').value,
            "azioniProprieAttivitaFinanziarie" : document.getElementById('azioniProprieAttivitaFinanziarie').value,
            "altriTitoliAttivoCircolante" : document.getElementById('altriTitoliAttivoCircolante').value,
            "totaleAttivitaFinanziarie" : document.getElementById('totaleAttivitaFinanziarie').value,
            // IV. Disponibilità liquide
            "depositiBancariPostali" : document.getElementById('depositiBancariPostali').value,
            "assegni" : document.getElementById('assegni').value,
            "danaroValoriCassa" : document.getElementById('danaroValoriCassa').value,
            "totaleDisponibilitaLiquide" : document.getElementById('totaleDisponibilitaLiquide').value,
            "totaleAttivoCircolante" : document.getElementById('totaleAttivoCircolante').value,
        
            // D) Ratei e Risconti
            "rateiRiscontiAttivo" : document.getElementById('rateiRiscontiAttivo').value,
            "disaggioPrestiti" : document.getElementById('disaggioPrestiti').value,
            "totaleRateiRiscontiAttivi" : document.getElementById('totaleRateiRiscontiAttivi').value,
        
            // TOTALE ATTIVO
            "totaleAttivo" : document.getElementById('totaleAttivo').value,
        
            /* STATO PATRIMONIALE PASSIVO */
            // A. Patrimonio Netto
            "capitale" : document.getElementById('capitale').value,
            "riservaSovrapprezzoAzioni" : document.getElementById('riservaSovrapprezzoAzioni').value,
            "riserveRivalutazione" : document.getElementById('riserveRivalutazione').value,
            "riservaLegale" : document.getElementById('riservaLegale').value,
            "riserveStatutarie" : document.getElementById('riserveStatutarie').value,
            "altreRiserve" : document.getElementById('altreRiserve').value,
            "utilePortatoNuovo" : document.getElementById('utilePortatoNuovo').value,
            "utileEsercizio" : document.getElementById('utileEsercizio').value,
            "riservaAzioniProprie" : document.getElementById('riservaAzioniProprie').value,
            "totalePatrimonioNetto" : document.getElementById('totalePatrimonioNetto').value,
        
            // B. Fondi per rischi e oneri
            "trattamentoQuiescenzaObblighiSimili" : document.getElementById('trattamentoQuiescenzaObblighiSimili').value,
            "imposteAncheDifferite" : document.getElementById('imposteAncheDifferite').value,
            "altriFondi" : document.getElementById('altriFondi').value,
            "totaleFondiRischiOneri" : document.getElementById('totaleFondiRischiOneri').value,
        
            // C. Trattamento fine rapporto
            "trattamentoFineRapportoSP" : document.getElementById('trattamentoFineRapportoSP').value,
        
            // D. Debiti
            "obbligazioniEntro12Mesi" : document.getElementById('obbligazioniEntro12Mesi').value,
            "obbligazioniOltre12Mesi" : document.getElementById('obbligazioniOltre12Mesi').value,
            "obbligazioniConvertibiliEntro12Mesi" : document.getElementById('obbligazioniConvertibiliEntro12Mesi').value,
            "obbligazioniConvertibiliOltre12Mesi" : document.getElementById('obbligazioniConvertibiliOltre12Mesi').value,
            "debitiVersoSociFinanziamentiEntro12Mesi" : document.getElementById('debitiVersoSociFinanziamentiEntro12Mesi').value,
            "debitiVersoSociFinanziamentiOltre12Mesi" : document.getElementById('debitiVersoSociFinanziamentiOltre12Mesi').value,
            "debitiVersoBancheEntro12Mesi" : document.getElementById('debitiVersoBancheEntro12Mesi').value,
            "debitiVersoBancheOltre12Mesi" : document.getElementById('debitiVersoBancheOltre12Mesi').value,
            "debitiVersoAltriFinanziatoriEntro12Mesi" : document.getElementById('debitiVersoAltriFinanziatoriEntro12Mesi').value,
            "debitiVersoAltriFinanziatoriOltre12Mesi" : document.getElementById('debitiVersoAltriFinanziatoriOltre12Mesi').value,
            "accontiEntro12Mesi" : document.getElementById('accontiEntro12Mesi').value,
            "accontiOltre12Mesi" : document.getElementById('accontiOltre12Mesi').value,
            "debitiVersoFornitoriEntro12Mesi" : document.getElementById('debitiVersoFornitoriEntro12Mesi').value,
            "debitiVersoFornitoriOltre12Mesi" : document.getElementById('debitiVersoFornitoriOltre12Mesi').value,
            "debitiRappresentatiTitoliCreditoEntro12Mesi" : document.getElementById('debitiRappresentatiTitoliCreditoEntro12Mesi').value,
            "debitiRappresentatiTitoliCreditoOltre12Mesi" : document.getElementById('debitiRappresentatiTitoliCreditoOltre12Mesi').value,
            "debitiVersoImpreseControllateEntro12Mesi" : document.getElementById('debitiVersoImpreseControllateEntro12Mesi').value,
            "debitiVersoImpreseControllateOltre12Mesi" : document.getElementById('debitiVersoImpreseControllateOltre12Mesi').value,
            "debitiVersoImpreseCollegateEntro12Mesi" : document.getElementById('debitiVersoImpreseCollegateEntro12Mesi').value,
            "debitiVersoImpreseCollegateOltre12Mesi" : document.getElementById('debitiVersoImpreseCollegateOltre12Mesi').value,
            "debitiVersoControllantiEntro12Mesi" : document.getElementById('debitiVersoControllantiEntro12Mesi').value,
            "debitiVersoControllantiOltre12Mesi" : document.getElementById('debitiVersoControllantiOltre12Mesi').value,
            "debitiTributariEntro12Mesi" : document.getElementById('debitiTributariEntro12Mesi').value,
            "debitiTributariOltre12Mesi" : document.getElementById('debitiTributariOltre12Mesi').value,
            "debitiVersoIstituiPrevidenzaEntro12Mesi" : document.getElementById('debitiVersoIstituiPrevidenzaEntro12Mesi').value,
            "debitiVersoIstituiPrevidenzaOltre12Mesi" : document.getElementById('debitiVersoIstituiPrevidenzaOltre12Mesi').value,
            "altriDebitiEntro12Mesi" : document.getElementById('altriDebitiEntro12Mesi').value,
            "altriDebitiOltre12Mesi" : document.getElementById('altriDebitiOltre12Mesi').value,
            "totaleDebiti" : document.getElementById('totaleDebiti').value,
        
            // E. ratei e risconti
            "rateiRiscontiPassivo" : document.getElementById('rateiRiscontiPassivo').value,
            "aggioPrestiti" : document.getElementById('aggioPrestiti').value,
            "totaleRateiRiscontiPassivi" : document.getElementById('totaleRateiRiscontiPassivi').value,
        
            // TOTALE PASSIVO
            "totalePassivo" : document.getElementById('totalePassivo').value
        },
        /* CONTO ECONOMICO */
        {
            // A) Valore della produzione
            "ricaviVendite" : document.getElementById('ricaviVendite').value,
            "variazioniRimanenze" : document.getElementById('variazioniRimanenze').value,
            "variazioniLavoriInCorso" : document.getElementById('variazioniLavoriInCorso').value,
            "incrementiImmobilizzazioniLavoriInterni" : document.getElementById('incrementiImmobilizzazioniLavoriInterni').value,
            "altriRicaviProventi" : document.getElementById('altriRicaviProventi').value,
            "totaleValoreProduzione" : document.getElementById('totaleValoreProduzione').value,
        
            // B) Costi della produzione
            "materiePrimeCE" : document.getElementById('materiePrimeCE').value,
            "servizi" : document.getElementById('servizi').value,
            "godimentoBeniTerzi" : document.getElementById('godimentoBeniTerzi').value,
            "diCuiCanoniLeasing" : document.getElementById('diCuiCanoniLeasing').value,
            "salariStipendi" : document.getElementById('salariStipendi').value,
            "oneriSociali" : document.getElementById('oneriSociali').value,
            "trattamentoFineRapportoCE" : document.getElementById('trattamentoFineRapportoCE').value,
            "trattamentoQuiescenzaSimili" : document.getElementById('trattamentoQuiescenzaSimili').value,
            "altriCosti" : document.getElementById('altriCosti').value,
            "ammortamentoImmobilizzazioniImmateriali" : document.getElementById('ammortamentoImmobilizzazioniImmateriali').value,
            "ammortamentoImmobilizzazioniMateriali" : document.getElementById('ammortamentoImmobilizzazioniMateriali').value,
            "altreSvalutazioniImmobilizzazioni" : document.getElementById('altreSvalutazioniImmobilizzazioni').value,
            "svalutazioniCreditiCompresiAttivoCircolante" : document.getElementById('svalutazioniCreditiCompresiAttivoCircolante').value,
            "variazioneRimanenzeMateriePrime" : document.getElementById('variazioneRimanenzeMateriePrime').value,
            "accantonamentiPerRischi" : document.getElementById('accantonamentiPerRischi').value,
            "altriAccantonamenti" : document.getElementById('altriAccantonamenti').value,
            "oneriDiversiGestione" : document.getElementById('oneriDiversiGestione').value,
            "totaleCostiProduzione" : document.getElementById('totaleCostiProduzione').value,
        
            // Differenza tra Valore e Costi della produzione
            "differenzaValoreCostiProduzione" : document.getElementById('differenzaValoreCostiProduzione').value,
        
            // C) Proventi e oneri finanziari
            "proventiDaControllate" : document.getElementById('proventiDaControllate').value,
            "proventiDaCollegate" : document.getElementById('proventiDaCollegate').value,
            "proventiDaControllanti" : document.getElementById('proventiDaControllanti').value,
            "proventiCreditiIscrittiImmobilizzazioniControllate" : document.getElementById('proventiCreditiIscrittiImmobilizzazioniControllate').value,
            "proventiCreditiIscrittiImmobilizzazioniCollegate" : document.getElementById('proventiCreditiIscrittiImmobilizzazioniCollegate').value,
            "proventiCreditiIscrittiImmobilizzazioniControllanti" : document.getElementById('proventiCreditiIscrittiImmobilizzazioniControllanti').value,
            "proventiTitoliIscrittiImmobilizzazioni" : document.getElementById('proventiTitoliIscrittiImmobilizzazioni').value,
            "proventiTitoliIscrittiAttivoCircolante" : document.getElementById('proventiTitoliIscrittiAttivoCircolante').value,
            "proventiDiversiDaiPrecedentiControllate" : document.getElementById('proventiDiversiDaiPrecedentiControllate').value,
            "proventiDiversiDaiPrecedentiCollegate" : document.getElementById('proventiDiversiDaiPrecedentiCollegate').value,
            "proventiDiversiDaiPrecedentiControllanti" : document.getElementById('proventiDiversiDaiPrecedentiControllanti').value,
            "interessiAltriOneriFinanziariDaControllate" : document.getElementById('interessiAltriOneriFinanziariDaControllate').value,
            "interessiAltriOneriFinanziariDaCollegate" : document.getElementById('interessiAltriOneriFinanziariDaCollegate').value,
            "interessiAltriOneriFinanziariDaControllanti" : document.getElementById('interessiAltriOneriFinanziariDaControllanti').value,
            "utiliPerditesuCambi" : document.getElementById('utiliPerditesuCambi').value,
            "totaleProventiOneriFinanziari" : document.getElementById('totaleProventiOneriFinanziari').value,
        
            // D) Rettifiche di valore di attività finanziarie
            "rivalutazioniPartecipazioni" : document.getElementById('rivalutazioniPartecipazioni').value,
            "rivalutazioniImmobilizzazioniFinanziarie" : document.getElementById('rivalutazioniImmobilizzazioniFinanziarie').value,
            "rivalutazioniTitoliIscrittiAttivoCircolante" : document.getElementById('rivalutazioniTitoliIscrittiAttivoCircolante').value,
            "rivalutazioniStrumentiFinanziariDerivati" : document.getElementById('rivalutazioniStrumentiFinanziariDerivati').value,
            "svalutazioniPartecipazioni" : document.getElementById('svalutazioniPartecipazioni').value,
            "svalutazioniImmobilizzazioniFinanziarie" : document.getElementById('svalutazioniImmobilizzazioniFinanziarie').value,
            "svalutazioniTitoliIscrittiAttivoCircolante" : document.getElementById('svalutazioniTitoliIscrittiAttivoCircolante').value,
            "svalutazioniStrumentiFinanziariDerivati" : document.getElementById('svalutazioniStrumentiFinanziariDerivati').value,
            "totaleRettifiche" : document.getElementById('totaleRettifiche').value,
        
            // E) Proventi e oneri straordinari
            "proventiStraordinari" : document.getElementById('proventiStraordinari').value,
            "plusvalenzeAlienazioni" : document.getElementById('plusvalenzeAlienazioni').value,
            "altriProventi" : document.getElementById('altriProventi').value,
            "oneriStraordinari" : document.getElementById('oneriStraordinari').value,
            "minusvalenzeAlienazioni" : document.getElementById('minusvalenzeAlienazioni').value,
            "altriOneri" : document.getElementById('altriOneri').value,
            "totalePartiteStraordinarie" : document.getElementById('totalePartiteStraordinarie').value,
        
            // Risultato prima delle imposte
            "risultatoPrimaImposte" : document.getElementById('risultatoPrimaImposte').value,
            // Imposte
            "imposteRedditoEsercizio" : document.getElementById('imposteRedditoEsercizio').value,
            // Utile (perdite) dell'esercizio
            "utilePerditeEsercizio" : document.getElementById('utilePerditeEsercizio').value
        },
        /* RICLASSIFICAZIONE STATO PATRIMONIALE FUNZIONALE (OPERATIVO) */
        {
            "SPFOimmobilizzazioniImmateriali" : document.getElementById('SPFOimmobilizzazioniImmateriali').value,
            "SPFOimmobilizzazioniMateriali" : document.getElementById('SPFOimmobilizzazioniMateriali').value,
            "SPFOimmobilizzazioniFinanziarieNette" : document.getElementById('SPFOimmobilizzazioniFinanziarieNette').value,
            "SPFOtotaleImmobilizzazioniNette" : document.getElementById('SPFOtotaleImmobilizzazioniNette').value,
            "SPFOmagazzino" : document.getElementById('SPFOmagazzino').value,
            "SPFOcreditiVersoClienti" : document.getElementById('SPFOcreditiVersoClienti').value,
            "SPFOaltriCrediti" : document.getElementById('SPFOaltriCrediti').value,
            "SPFOrateiRiscontiAttivi" : document.getElementById('SPFOrateiRiscontiAttivi').value,
            "SPFOtotaleAttivoCommerciale" : document.getElementById('SPFOtotaleAttivoCommerciale').value,
            "SPFOdebitiVersoFornitori" : document.getElementById('SPFOdebitiVersoFornitori').value,
            "SPFOaltriDebitiNonFinanziari" : document.getElementById('SPFOaltriDebitiNonFinanziari').value,
            "SPFOrateiRiscontiPassivi" : document.getElementById('SPFOrateiRiscontiPassivi').value,
            "SPFOtotalePassivoCommerciale" : document.getElementById('SPFOtotalePassivoCommerciale').value,
            "SPFOcapitaleEsercizio" : document.getElementById('SPFOcapitaleEsercizio').value,
            "SPFOfondiRischiOneri" : document.getElementById('SPFOfondiRischiOneri').value,
            "SPFOfondoTfr" : document.getElementById('SPFOfondoTfr').value,
            "SPFOtotaleFondiOperativi" : document.getElementById('SPFOtotaleFondiOperativi').value,
            "SPFOcapitaleInvestitoNetto" : document.getElementById('SPFOcapitaleInvestitoNetto').value,
            "SPFOdebitiFinanziariBreveTermine" : document.getElementById('SPFOdebitiFinanziariBreveTermine').value,
            "SPFOdisponibilitaLiquide" : document.getElementById('SPFOdisponibilitaLiquide').value,
            "SPFOcreditiFinanziariBreveTermine" : document.getElementById('SPFOcreditiFinanziariBreveTermine').value,
            "SPFOtotalePosizioneFinanziariaBreveTermine" : document.getElementById('SPFOtotalePosizioneFinanziariaBreveTermine').value,
            "SPFOdebitiFinanziariMedioLungoTermine" : document.getElementById('SPFOdebitiFinanziariMedioLungoTermine').value,
            "SPFOcreditiFinanziariMedioLungoTermine" : document.getElementById('SPFOcreditiFinanziariMedioLungoTermine').value,
            "SPFOtotalePosizioneFinanziariaMedioLungoTermine" : document.getElementById('SPFOtotalePosizioneFinanziariaMedioLungoTermine').value,
            "SPFOtotalePosizioneFinanziaria" : document.getElementById('SPFOtotalePosizioneFinanziaria').value,
            "SPFOcapitaleSocialeFinanziamentiContoCapitale" : document.getElementById('SPFOcapitaleSocialeFinanziamentiContoCapitale').value,
            "SPFOriserve" : document.getElementById('SPFOriserve').value,
            "SPFOredditonetto" : document.getElementById('SPFOredditonetto').value,
            "SPFOtotalePatrimonioNetto" : document.getElementById('SPFOtotalePatrimonioNetto').value,
            "SPFOtotaleDebitoFinanziarioPatrimonioNetto" : document.getElementById('SPFOtotaleDebitoFinanziarioPatrimonioNetto').value
        },
        /* RICLASSIFICAZIONE STATO PATRIMONIALE FINANZIARIO */
        {
            "SPFimmobilizzazioniImmateriali" : document.getElementById('SPFimmobilizzazioniImmateriali').value,
            "SPFimmobilizzazioniMateriali" : document.getElementById('SPFimmobilizzazioniMateriali').value,
            "SPFimmobilizzazioniFinanziarie" : document.getElementById('SPFimmobilizzazioniFinanziarie').value,
            "SPFtotaleImmobilizzazioniNette" : document.getElementById('SPFtotaleImmobilizzazioniNette').value,
            "SPFmagazzino" : document.getElementById('SPFmagazzino').value,
            "SPFcreditiCommerciali" : document.getElementById('SPFcreditiCommerciali').value,
            "SPFaltriCrediti" : document.getElementById('SPFaltriCrediti').value,
            "SPFrateiRiscontiAttivi" : document.getElementById('SPFrateiRiscontiAttivi').value,
            "SPFliquidita" : document.getElementById('SPFliquidita').value,
            "SPFtotaleAttivoCircolante" : document.getElementById('SPFtotaleAttivoCircolante').value,
            "SPFtotaleAttivo" : document.getElementById('SPFtotaleAttivo').value,
            "SPFcapitaleSociale" : document.getElementById('SPFcapitaleSociale').value,
            "SPFriserve" : document.getElementById('SPFriserve').value,
            "SPFredditoNetto" : document.getElementById('SPFredditoNetto').value,
            "SPFtotalePatrimonioNetto" : document.getElementById('SPFtotalePatrimonioNetto').value,
            "SPFdebitiFinanziariMlTermine" : document.getElementById('SPFdebitiFinanziariMlTermine').value,
            "SPFaltriDebiti" : document.getElementById('SPFaltriDebiti').value,
            "SPFfondoTFR" : document.getElementById('SPFfondoTFR').value,
            "SPFaltriFondi" : document.getElementById('SPFaltriFondi').value,
            "SPFtotalePassivoMlTermine" : document.getElementById('SPFtotalePassivoMlTermine').value,
            "SPFdebitiFinanziariBreveTermine" : document.getElementById('SPFdebitiFinanziariBreveTermine').value,
            "SPFdebitiCommercialiFornitori" : document.getElementById('SPFdebitiCommercialiFornitori').value,
            "SPFaltriDebitiNonFinanziari" : document.getElementById('SPFaltriDebitiNonFinanziari').value,
            "SPFrateiRiscontiPassivi" : document.getElementById('SPFrateiRiscontiPassivi').value,
            "SPFtotalePassivoBreveTermine" : document.getElementById('SPFtotalePassivoBreveTermine').value,
            "SPFtotalePassivoPatrimonioNetto" : document.getElementById('SPFtotalePassivoPatrimonioNetto').value,
            "SPFeventualeSquadraturaAttivoPass" : document.getElementById('SPFeventualeSquadraturaAttivoPass').value
        },
        /* RICLASSIFICAZIONE CONTO ECONOMICO VALORE AGGIUNTO */
        {
            "CEricaviVendite": document.getElementById('CEricaviVendite').value,
            "CEproduzioneInterna": document.getElementById('CEproduzioneInterna').value,
            "CEtotaleValoreProduzione": document.getElementById('CEtotaleValoreProduzione').value,
            "CEconsumoMateriePrime": document.getElementById('CEconsumoMateriePrime').value,
            "CEcostiServizi": document.getElementById('CEcostiServizi').value,
            "CEaltriCostiOperativiEsterni": document.getElementById('CEaltriCostiOperativiEsterni').value,
            "CEtotaleConsumiEsterni": document.getElementById('CEtotaleConsumiEsterni').value,
            "CEvaloreAggiunto": document.getElementById('CEvaloreAggiunto').value,
            "CEcostiPersonale": document.getElementById('CEcostiPersonale').value,
            "CEtotaleMargineOperativoLordo": document.getElementById('CEtotaleMargineOperativoLordo').value,
            "CEammortamenti": document.getElementById('CEammortamenti').value,
            "CEcanoniLeasing": document.getElementById('CEcanoniLeasing').value,
            "CEaccantonamentiSvalutazioni": document.getElementById('CEaccantonamentiSvalutazioni').value,
            "CEtotaleAmmortamentiSvalutazioni": document.getElementById('CEtotaleAmmortamentiSvalutazioni').value,
            "CEaltriProventiOperativi": document.getElementById('CEaltriProventiOperativi').value,
            "CEproventiFinanziari": document.getElementById('CEproventiFinanziari').value,
            "CEsaldoGestioneMobiliare": document.getElementById('CEsaldoGestioneMobiliare').value,
            "CEtotaleRisultatoOperativo": document.getElementById('CEtotaleRisultatoOperativo').value,
            "CEoneriFinanziari": document.getElementById('CEoneriFinanziari').value,
            "CEtotaleRisultatoLordo": document.getElementById('CEtotaleRisultatoLordo').value,
            "CEproventiStraordinari": document.getElementById('CEproventiStraordinari').value,
            "CEoneriStraordinari": document.getElementById('CEoneriStraordinari').value,
            "CErisultatoAreaStraordinaria": document.getElementById('CErisultatoAreaStraordinaria').value,
            "CEtotaleRisultatoAnteImposte": document.getElementById('CEtotaleRisultatoAnteImposte').value,
            "CEimposteReddito": document.getElementById('CEimposteReddito').value,
            "CEtotaleRisultatoNetto": document.getElementById('CEtotaleRisultatoNetto').value
        },
        /* FORECAST
        {
    "FCricaviVendite" : document.getElementById('FCricaviVendite').value,
    "FCconsumiMerci" : document.getElementById('FCconsumiMerci').value,
    "FCincValProdConsumiMerci" : document.getElementById('FCincValProdConsumiMerci').value,
    "FCacquistiServizi" : document.getElementById('FCacquistiServizi').value,
    "FCincValProdAcquistiServizi" : document.getElementById('FCincValProdAcquistiServizi').value,
    "FCcostoGodimentoBeniTerzi" : document.getElementById('FCcostoGodimentoBeniTerzi').value,
    "FCdiCuiCanoniLeasing" : document.getElementById('FCdiCuiCanoniLeasing').value,
    "FCcostiDelPersonale" : document.getElementById('FCcostiDelPersonale').value,
    "FCincValProdCostiPersonale" : document.getElementById('FCincValProdCostiPersonale').value,
    "FCaccantonamentoTFR" : document.getElementById('FCaccantonamentoTFR').value,
    "FCincCostoPersonale" : document.getElementById('FCincCostoPersonale').value,
    "FCutilizziFondoTFR" : document.getElementById('FCutilizziFondoTFR').value,
    "FCaccantonamenti" : document.getElementById('FCaccantonamenti').value,
    "FCutilizziAltriFondi" : document.getElementById('FCutilizziAltriFondi').value
        } */
    ]

    var json = JSON.stringify(contenuto);
    return json;
}