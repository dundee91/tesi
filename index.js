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
    var trattamentoFineRapportoSP = document.getElementById('trattamentoFineRapportoSP').value

    // D. Debiti
    var obbligazioniEntro12Mesi = document.getElementById('obbligazioniEntro12Mesi').value
    var obbligazioniOltre12Mesi = document.getElementById('obbligazioniOltre12Mesi').value
    var obbligazioniConvertibiliEntro12Mesi = document.getElementById('obbligazioniConvertibiliEntro12Mesi').value
    var obbligazioniConvertibiliOltre12Mesi = document.getElementById('obbligazioniConvertibiliOltre12Mesi').value
    var debitiVersoSociFinanziamentiEntro12Mesi = document.getElementById('debitiVersoSociFinanziamentiEntro12Mesi').value
    var debitiVersoSociFinanziamentiOltre12Mesi = document.getElementById('debitiVersoSociFinanziamentiOltre12Mesi').value
    var debitiVersoBancheEntro12Mesi = document.getElementById('debitiVersoBancheEntro12Mesi').value
    var debitiVersoBancheOltre12Mesi = document.getElementById('debitiVersoBancheOltre12Mesi').value
    var debitiVersoAltriFinanziatoriEntro12Mesi = document.getElementById('debitiVersoAltriFinanziatoriEntro12Mesi').value
    var debitiVersoAltriFinanziatoriOltre12Mesi = document.getElementById('debitiVersoAltriFinanziatoriOltre12Mesi').value
    var accontiEntro12Mesi = document.getElementById('accontiEntro12Mesi').value
    var accontiOltre12Mesi = document.getElementById('accontiOltre12Mesi').value
    var debitiVersoFornitoriEntro12Mesi = document.getElementById('debitiVersoFornitoriEntro12Mesi').value
    var debitiVersoFornitoriOltre12Mesi = document.getElementById('debitiVersoFornitoriOltre12Mesi').value
    var debitiRappresentatiTitoliCreditoEntro12Mesi = document.getElementById('debitiRappresentatiTitoliCreditoEntro12Mesi').value
    var debitiRappresentatiTitoliCreditooltre12Mesi = document.getElementById('debitiRappresentatiTitoliCreditooltre12Mesi').value
    var debitiVersoImpreseControllateEntro12Mesi = document.getElementById('debitiVersoImpreseControllateEntro12Mesi').value
    var debitiVersoImpreseControllateOltre12Mesi = document.getElementById('debitiVersoImpreseControllateOltre12Mesi').value
    var debitiVersoImpreseCollegateEntro12Mesi = document.getElementById('debitiVersoImpreseCollegateEntro12Mesi').value
    var debitiVersoImpreseCollegateOltre12Mesi = document.getElementById('debitiVersoImpreseCollegateOltre12Mesi').value
    var debitiVersoControllantiEntro12Mesi = document.getElementById('debitiVersoControllantiEntro12Mesi').value
    var debitiVersoControllantiOltre12Mesi = document.getElementById('debitiVersoControllantiOltre12Mesi').value
    var debitiTributariEntro12Mesi = document.getElementById('debitiTributariEntro12Mesi').value
    var debitiTributariOltre12Mesi = document.getElementById('debitiTributariOltre12Mesi').value
    var debitiVersoIstituiPrevidenzaEntro12Mesi = document.getElementById('debitiVersoIstituiPrevidenzaEntro12Mesi').value
    var debitiVersoIstituiPrevidenzaOltre12Mesi = document.getElementById('debitiVersoIstituiPrevidenzaOltre12Mesi').value
    var altriDebitiEntro12Mesi = document.getElementById('altriDebitiEntro12Mesi').value
    var altriDebitiOltre12Mesi = document.getElementById('altriDebitiOltre12Mesi').value
    var totaleDebiti = document.getElementById('totaleDebiti').value

    // E. ratei e risconti
    var rateiRiscontiPassivo = document.getElementById('rateiRiscontiPassivo').value
    var aggioPrestiti = document.getElementById('aggioPrestiti').value
    var totaleRateiRiscontiPassivi = document.getElementById('totaleRateiRiscontiPassivi').value

    // TOTALE PASSIVO
    var totalePassivo = document.getElementById('totalePassivo').value

    /* CONTO ECONOMICO */
    // A) Valore della produzione
    var ricaviVendite = document.getElementById('ricaviVendite').value
    var variazioniRimanenze = document.getElementById('variazioniRimanenze').value
    var variazioniRimanenzeProdottiInCorso = document.getElementById('variazioniRimanenzeProdottiInCorso').value
    var incrementiImmobilizzazioniLavoriInterni = document.getElementById('incrementiImmobilizzazioniLavoriInterni').value
    var altriRicaviProventi = document.getElementById('altriRicaviProventi').value
    var totaleValoreProduzione = document.getElementById('totaleValoreProduzione').value

    // B) Costi della produzione
    var materiePrimeCE = document.getElementById('materiePrimeCE').value
    var servizi = document.getElementById('servizi').value
    var godimentoBeniTerzi = document.getElementById('godimentoBeniTerzi').value
    var salariStipendi = document.getElementById('salariStipendi').value
    var oneriSociali = document.getElementById('oneriSociali').value
    var trattamentoFineRapportoCE = document.getElementById('trattamentoFineRapportoCE').value
    var trattamentoQuiescenzaSimili = document.getElementById('trattamentoQuiescenzaSimili').value
    var altriCosti = document.getElementById('altriCosti').value
    var ammortamentoImmobilizzazioniImmateriali = document.getElementById('ammortamentoImmobilizzazioniImmateriali').value
    var ammortamentoImmobilizzazioniMateriali = document.getElementById('ammortamentoImmobilizzazioniMateriali').value
    var altreSvalutazioniImmobilizzazioni = document.getElementById('altreSvalutazioniImmobilizzazioni').value
    var svalutazioniCreditiCompresiAttivoCircolante = document.getElementById('svalutazioniCreditiCompresiAttivoCircolante').value
    var variazioneRimanenzeMateriePrime = document.getElementById('variazioneRimanenzeMateriePrime').value
    var accantonamentiPerRischi = document.getElementById('accantonamentiPerRischi').value
    var altriAccantonamenti = document.getElementById('altriAccantonamenti').value
    var oneriDiversiGestione = document.getElementById('oneriDiversiGestione').value
    var totaleCostiProduzione = document.getElementById('totaleCostiProduzione').value

    // Differenza tra Valore e Costi della produzione
    var differenzaValoreCostiProduzione = document.getElementById('differenzaValoreCostiProduzione').value

    // C) Proventi e oneri finanziari
    var proventiDaControllate = document.getElementById('proventiDaControllate').value
    var proventiDaCollegate = document.getElementById('proventiDaCollegate').value
    var proventiCreditiIscrittiImmobilizzazioniControllate = document.getElementById('proventiCreditiIscrittiImmobilizzazioniControllate').value
    var proventiCreditiIscrittiImmobilizzazioniCollegate = document.getElementById('proventiCreditiIscrittiImmobilizzazioniCollegate').value
    var proventiCreditiIscrittiImmobilizzazioniControllanti = document.getElementById('proventiCreditiIscrittiImmobilizzazioniControllanti').value
    var proventiTitoliIscrittiImmobilizzazioni = document.getElementById('proventiTitoliIscrittiImmobilizzazioni').value
    var proventiTitoliIscrittiAttivoCircolante = document.getElementById('proventiTitoliIscrittiAttivoCircolante').value
    var proventiDiversiDaiPrecedentiControllate = document.getElementById('proventiDiversiDaiPrecedentiControllate').value
    var proventiDiversiDaiPrecedentiCollegate = document.getElementById('proventiDiversiDaiPrecedentiCollegate').value
    var proventiDiversiDaiPrecedentiControllanti = document.getElementById('proventiDiversiDaiPrecedentiControllanti').value
    var interessiAltriOneriFinanziariDaControllate = document.getElementById('interessiAltriOneriFinanziariDaControllate').value
    var interessiAltriOneriFinanziariDaCollegate = document.getElementById('interessiAltriOneriFinanziariDaCollegate').value
    var interessiAltriOneriFinanziariDaControllanti = document.getElementById('interessiAltriOneriFinanziariDaControllanti').value
    var totaleProventiOneriFinanziari = document.getElementById('totaleProventiOneriFinanziari').value

    // D) Rettifiche di valore di attività finanziarie
    var rivalutazioniPartecipazioni = document.getElementById('rivalutazioniPartecipazioni').value
    var rivalutazioniImmobilizzazioniFinanziarie = document.getElementById('rivalutazioniImmobilizzazioniFinanziarie').value
    var rivalutazioniTitoliIscrittiAttivoCircolante = document.getElementById('rivalutazioniTitoliIscrittiAttivoCircolante').value
    var rivalutazioniStrumentiFinanziariDerivati = document.getElementById('rivalutazioniStrumentiFinanziariDerivati').value
    var svalutazioniPartecipazioni = document.getElementById('svalutazioniPartecipazioni').value
    var svalutazioniImmobilizzazioniFinanziarie = document.getElementById('svalutazioniImmobilizzazioniFinanziarie').value
    var svalutazioniTitoliIscrittiAttivoCircolante = document.getElementById('svalutazioniTitoliIscrittiAttivoCircolante').value
    var svalutazioniStrumentiFinanziariDerivati = document.getElementById('svalutazioniStrumentiFinanziariDerivati').value
    var totaleRettifiche = document.getElementById('totaleRettifiche').value

    // E) Proventi e oneri straordinari
    var proventiStraordinari = document.getElementById('proventiStraordinari').value
    var plusvalenzeAlienazioni = document.getElementById('plusvalenzeAlienazioni').value
    var oneriStraordinari = document.getElementById('oneriStraordinari').value
    var minusvalenzeAlienazioni = document.getElementById('minusvalenzeAlienazioni').value
    var imposteRelativeEserciziPrecedenti = document.getElementById('imposteRelativeEserciziPrecedenti').value
    var totalePartiteStraordinarie = document.getElementById('totalePartiteStraordinarie').value

    // Risultato prima delle imposte
    var risultatoPrimaImposte = document.getElementById('risultatoPrimaImposte').value
    // Imposte
    var imposteRedditoEsercizio = document.getElementById('imposteRedditoEsercizio').value
    // Utile (perdite) dell'esercizio
    var utilePerditeEsercizio = document.getElementById('utilePerditeEsercizio').value

    /*
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
        "trattamentoFineRapportoSP": trattamentoFineRapportoSP,

        // D. Debiti
        "obbligazioniEntro12Mesi": obbligazioniEntro12Mesi,
        "obbligazioniOltre12Mesi": obbligazioniOltre12Mesi,
        "obbligazioniConvertibiliEntro12Mesi": obbligazioniConvertibiliEntro12Mesi,
        "obbligazioniConvertibiliOltre12Mesi": obbligazioniConvertibiliOltre12Mesi,
        "debitiVersoSociFinanziamentiEntro12Mesi": debitiVersoSociFinanziamentiEntro12Mesi,
        "debitiVersoSociFinanziamentiOltre12Mesi": debitiVersoSociFinanziamentiOltre12Mesi,
        "debitiVersoBancheEntro12Mesi": debitiVersoBancheEntro12Mesi,
        "debitiVersoBancheOltre12Mesi": debitiVersoBancheOltre12Mesi,
        "debitiVersoAltriFinanziatoriEntro12Mesi": debitiVersoAltriFinanziatoriEntro12Mesi,
        "debitiVersoAltriFinanziatoriOltre12Mesi": debitiVersoAltriFinanziatoriOltre12Mesi,
        "accontiEntro12Mesi": accontiEntro12Mesi,
        "accontiOltre12Mesi": accontiOltre12Mesi,
        "debitiVersoFornitoriEntro12Mesi": debitiVersoFornitoriEntro12Mesi,
        "debitiVersoFornitoriOltre12Mesi": debitiVersoFornitoriOltre12Mesi,
        "debitiRappresentatiTitoliCreditoEntro12Mesi": debitiRappresentatiTitoliCreditoEntro12Mesi,
        "debitiRappresentatiTitoliCreditooltre12Mesi": debitiRappresentatiTitoliCreditooltre12Mesi,
        "debitiVersoImpreseControllateEntro12Mesi": debitiVersoImpreseControllateEntro12Mesi,
        "debitiVersoImpreseControllateOltre12Mesi": debitiVersoImpreseControllateOltre12Mesi,
        "debitiVersoImpreseCollegateEntro12Mesi": debitiVersoImpreseCollegateEntro12Mesi,
        "debitiVersoImpreseCollegateOltre12Mesi": debitiVersoImpreseCollegateOltre12Mesi,
        "debitiVersoControllantiEntro12Mesi": debitiVersoControllantiEntro12Mesi,
        "debitiVersoControllantiOltre12Mesi": debitiVersoControllantiOltre12Mesi,
        "debitiTributariEntro12Mesi": debitiTributariEntro12Mesi,
        "debitiTributariOltre12Mesi": debitiTributariOltre12Mesi,
        "debitiVersoIstituiPrevidenzaEntro12Mesi": debitiVersoIstituiPrevidenzaEntro12Mesi,
        "debitiVersoIstituiPrevidenzaOltre12Mesi": debitiVersoIstituiPrevidenzaOltre12Mesi,
        "altriDebitiEntro12Mesi": altriDebitiEntro12Mesi,
        "altriDebitiOltre12Mesi": altriDebitiOltre12Mesi,
        "totaleDebiti": totaleDebiti,

        // E. ratei e risconti
        "rateiRiscontiPassivo": rateiRiscontiPassivo,
        "aggioPrestiti": aggioPrestiti,
        "totaleRateiRiscontiPassivi": totaleRateiRiscontiPassivi,

        // TOTALE PASSIVO
        "totalePassivo": totalePassivo,

        /* CONTO ECONOMICO */
        // A) Valore della produzione
        "ricaviVendite": ricaviVendite,
        "variazioniRimanenze": variazioniRimanenze,
        "variazioniRimanenzeProdottiInCorso": variazioniRimanenzeProdottiInCorso,
        "incrementiImmobilizzazioniLavoriInterni": incrementiImmobilizzazioniLavoriInterni,
        "altriRicaviProventi": altriRicaviProventi,
        "totaleValoreProduzione": totaleValoreProduzione,

        // B) Costi della produzione
        "materiePrimeCE": materiePrimeCE,
        "servizi": servizi,
        "godimentoBeniTerzi": godimentoBeniTerzi,
        "salariStipendi": salariStipendi,
        "oneriSociali": oneriSociali,
        "trattamentoFineRapportoCE": trattamentoFineRapportoCE,
        "trattamentoQuiescenzaSimili": trattamentoQuiescenzaSimili,
        "altriCosti": altriCosti,
        "totaleCostiProduzione": totaleCostiProduzione,
        "ammortamentoImmobilizzazioniImmateriali": ammortamentoImmobilizzazioniImmateriali,
        "ammortamentoImmobilizzazioniMateriali": ammortamentoImmobilizzazioniMateriali,
        "altreSvalutazioniImmobilizzazioni": altreSvalutazioniImmobilizzazioni,
        "svalutazioniCreditiCompresiAttivoCircolante": svalutazioniCreditiCompresiAttivoCircolante,
        "variazioneRimanenzeMateriePrime": variazioneRimanenzeMateriePrime,
        "accantonamentiPerRischi": accantonamentiPerRischi,
        "altriAccantonamenti": altriAccantonamenti,
        "oneriDiversiGestione": oneriDiversiGestione,

        // Differenza tra Valore e Costi della produzione
        "differenzaValoreCostiProduzione": differenzaValoreCostiProduzione,

        // C) Proventi e oneri finanziari
        "proventiDaControllate": proventiDaControllate,
        "proventiDaCollegate": proventiDaCollegate,
        "proventiCreditiIscrittiImmobilizzazioniControllate": proventiCreditiIscrittiImmobilizzazioniControllate,
        "proventiCreditiIscrittiImmobilizzazioniCollegate": proventiCreditiIscrittiImmobilizzazioniCollegate,
        "proventiCreditiIscrittiImmobilizzazioniControllanti": proventiCreditiIscrittiImmobilizzazioniControllanti,
        "proventiTitoliIscrittiImmobilizzazioni": proventiTitoliIscrittiImmobilizzazioni,
        "proventiTitoliIscrittiAttivoCircolante": proventiTitoliIscrittiAttivoCircolante,
        "proventiDiversiDaiPrecedentiControllate": proventiDiversiDaiPrecedentiControllate,
        "proventiDiversiDaiPrecedentiCollegate": proventiDiversiDaiPrecedentiCollegate,
        "proventiDiversiDaiPrecedentiControllanti": proventiDiversiDaiPrecedentiControllanti,
        "interessiAltriOneriFinanziariDaControllate": interessiAltriOneriFinanziariDaControllate,
        "interessiAltriOneriFinanziariDaCollegate": interessiAltriOneriFinanziariDaCollegate,
        "interessiAltriOneriFinanziariDaControllanti": interessiAltriOneriFinanziariDaControllanti,
        "totaleProventiOneriFinanziari": totaleProventiOneriFinanziari,

        // D) Rettifiche di valore di attività finanziarie
        "rivalutazioniPartecipazioni" : rivalutazioniPartecipazioni,
        "rivalutazioniImmobilizzazioniFinanziarie" : rivalutazioniImmobilizzazioniFinanziarie,
        "rivalutazioniTitoliIscrittiAttivoCircolante" : rivalutazioniTitoliIscrittiAttivoCircolante,
        "rivalutazioniStrumentiFinanziariDerivati" : rivalutazioniStrumentiFinanziariDerivati,
        "svalutazioniPartecipazioni" : svalutazioniPartecipazioni,
        "svalutazioniImmobilizzazioniFinanziarie" : svalutazioniImmobilizzazioniFinanziarie,
        "svalutazioniTitoliIscrittiAttivoCircolante" : svalutazioniTitoliIscrittiAttivoCircolante,
        "svalutazioniStrumentiFinanziariDerivati" : svalutazioniStrumentiFinanziariDerivati,
        "totaleRettifiche" : totaleRettifiche,

        // E) Proventi e oneri straordinari
        "proventiStraordinari" : proventiStraordinari,
        "plusvalenzeAlienazioni" : plusvalenzeAlienazioni,
        "oneriStraordinari" : oneriStraordinari,
        "minusvalenzeAlienazioni" : minusvalenzeAlienazioni,
        "imposteRelativeEserciziPrecedenti" : imposteRelativeEserciziPrecedenti,
        "totalePartiteStraordinarie" : totalePartiteStraordinarie,

        // Risultato prima delle imposte
        "risultatoPrimaImposte" : risultatoPrimaImposte,
        // Imposte
        'imposteRedditoEsercizio' : imposteRedditoEsercizio,
        // Utile (perdite) dell'esercizio
        'utilePerditeEsercizio' : utilePerditeEsercizio
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

                /* STATO PATRIMONIALE ATTIVO */
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

                /* STATO PATRIMONIALE PASSIVO */
                // A. Patrimonio Netto
                document.getElementById('capitale').value = testo[0].capitale
                document.getElementById('riservaSovrapprezzoAzioni').value = testo[0].riservaSovrapprezzoAzioni
                document.getElementById('riserveRivalutazione').value = testo[0].riserveRivalutazione
                document.getElementById('riservaLegale').value = testo[0].riservaLegale
                document.getElementById('riserveStatutarie').value = testo[0].riserveStatutarie
                document.getElementById('altreRiserve').value = testo[0].altreRiserve
                document.getElementById('riservaOperazioniCopertura').value = testo[0].riservaOperazioniCopertura
                document.getElementById('utilePortatoNuovo').value = testo[0].utilePortatoNuovo
                document.getElementById('utileEsercizio').value = testo[0].utileEsercizio
                document.getElementById('riservaNegativaAzioniProprie').value = testo[0].riservaNegativaAzioniProprie
                document.getElementById('totalePatrimonioNetto').value = testo[0].totalePatrimonioNetto

                // B. Fondi per rischi e oneri
                document.getElementById('trattamentoQuiescenzaObblighiSimili').value = testo[0].trattamentoQuiescenzaObblighiSimili
                document.getElementById('imposteAncheDifferite').value = testo[0].imposteAncheDifferite
                document.getElementById('strumentiFinanziariDerivatiPassivi').value = testo[0].strumentiFinanziariDerivatiPassivi
                document.getElementById('altriFondi').value = testo[0].altriFondi
                document.getElementById('totaleFondiRischiOneri').value = testo[0].totaleFondiRischiOneri

                // C. Trattamento fine rapporto
                document.getElementById('trattamentoFineRapportoSP').value = testo[0].trattamentoFineRapportoSP

                // D. Debiti
                document.getElementById('obbligazioniEntro12Mesi').value = testo[0].obbligazioniEntro12Mesi
                document.getElementById('obbligazioniOltre12Mesi').value = testo[0].obbligazioniOltre12Mesi
                document.getElementById('obbligazioniConvertibiliEntro12Mesi').value = testo[0].obbligazioniConvertibiliEntro12Mesi
                document.getElementById('obbligazioniConvertibiliOltre12Mesi').value = testo[0].obbligazioniConvertibiliOltre12Mesi
                document.getElementById('debitiVersoSociFinanziamentiEntro12Mesi').value = testo[0].debitiVersoSociFinanziamentiEntro12Mesi
                document.getElementById('debitiVersoSociFinanziamentiOltre12Mesi').value = testo[0].debitiVersoSociFinanziamentiOltre12Mesi
                document.getElementById('debitiVersoBancheEntro12Mesi').value = testo[0].debitiVersoBancheEntro12Mesi
                document.getElementById('debitiVersoBancheOltre12Mesi').value = testo[0].debitiVersoBancheOltre12Mesi
                document.getElementById('debitiVersoAltriFinanziatoriEntro12Mesi').value = testo[0].debitiVersoAltriFinanziatoriEntro12Mesi
                document.getElementById('debitiVersoAltriFinanziatoriOltre12Mesi').value = testo[0].debitiVersoAltriFinanziatoriOltre12Mesi
                document.getElementById('accontiEntro12Mesi').value = testo[0].accontiEntro12Mesi
                document.getElementById('accontiOltre12Mesi').value = testo[0].accontiOltre12Mesi
                document.getElementById('debitiVersoFornitoriEntro12Mesi').value = testo[0].debitiVersoFornitoriEntro12Mesi
                document.getElementById('debitiVersoFornitoriOltre12Mesi').value = testo[0].debitiVersoFornitoriOltre12Mesi
                document.getElementById('debitiRappresentatiTitoliCreditoEntro12Mesi').value = testo[0].debitiRappresentatiTitoliCreditoEntro12Mesi
                document.getElementById('debitiRappresentatiTitoliCreditooltre12Mesi').value = testo[0].debitiRappresentatiTitoliCreditooltre12Mesi
                document.getElementById('debitiVersoImpreseControllateEntro12Mesi').value = testo[0].debitiVersoImpreseControllateEntro12Mesi
                document.getElementById('debitiVersoImpreseControllateOltre12Mesi').value = testo[0].debitiVersoImpreseControllateOltre12Mesi
                document.getElementById('debitiVersoImpreseCollegateEntro12Mesi').value = testo[0].debitiVersoImpreseCollegateEntro12Mesi
                document.getElementById('debitiVersoImpreseCollegateOltre12Mesi').value = testo[0].debitiVersoImpreseCollegateOltre12Mesi
                document.getElementById('debitiVersoControllantiEntro12Mesi').value = testo[0].debitiVersoControllantiEntro12Mesi
                document.getElementById('debitiVersoControllantiOltre12Mesi').value = testo[0].debitiVersoControllantiOltre12Mesi
                document.getElementById('debitiTributariEntro12Mesi').value = testo[0].debitiTributariEntro12Mesi
                document.getElementById('debitiTributariOltre12Mesi').value = testo[0].debitiTributariOltre12Mesi
                document.getElementById('debitiVersoIstituiPrevidenzaEntro12Mesi').value = testo[0].debitiVersoIstituiPrevidenzaEntro12Mesi
                document.getElementById('debitiVersoIstituiPrevidenzaOltre12Mesi').value = testo[0].debitiVersoIstituiPrevidenzaOltre12Mesi
                document.getElementById('altriDebitiEntro12Mesi').value = testo[0].altriDebitiEntro12Mesi
                document.getElementById('altriDebitiOltre12Mesi').value = testo[0].altriDebitiOltre12Mesi
                document.getElementById('totaleDebiti').value = testo[0].totaleDebiti

                // E. ratei e risconti
                document.getElementById('rateiRiscontiPassivo').value = testo[0].rateiRiscontiPassivo
                document.getElementById('aggioPrestiti').value = testo[0].aggioPrestiti
                document.getElementById('totaleRateiRiscontiPassivi').value = testo[0].totaleRateiRiscontiPassivi

                // TOTALE PASSIVO
                document.getElementById('totalePassivo').value = testo[0].totalePassivo

                /* CONTO ECONOMICO */
                // A) Valore della produzione
                document.getElementById('ricaviVendite').value = testo[0].ricaviVendite
                document.getElementById('variazioniRimanenze').value = testo[0].variazioniRimanenze
                document.getElementById('variazioniRimanenzeProdottiInCorso').value = testo[0].variazioniRimanenzeProdottiInCorso
                document.getElementById('incrementiImmobilizzazioniLavoriInterni').value = testo[0].incrementiImmobilizzazioniLavoriInterni
                document.getElementById('altriRicaviProventi').value = testo[0].altriRicaviProventi
                document.getElementById('totaleValoreProduzione').value = testo[0].totaleValoreProduzione

                // B) Costi della produzione
                document.getElementById('materiePrimeCE').value = testo[0].materiePrimeCE
                document.getElementById('servizi').value = testo[0].servizi
                document.getElementById('godimentoBeniTerzi').value = testo[0].godimentoBeniTerzi
                document.getElementById('salariStipendi').value = testo[0].salariStipendi
                document.getElementById('oneriSociali').value = testo[0].oneriSociali
                document.getElementById('trattamentoFineRapportoCE').value = testo[0].trattamentoFineRapportoCE
                document.getElementById('trattamentoQuiescenzaSimili').value = testo[0].trattamentoQuiescenzaSimili
                document.getElementById('altriCosti').value = testo[0].altriCosti
                document.getElementById('ammortamentoImmobilizzazioniImmateriali').value = testo[0].ammortamentoImmobilizzazioniImmateriali
                document.getElementById('ammortamentoImmobilizzazioniMateriali').value = testo[0].ammortamentoImmobilizzazioniMateriali
                document.getElementById('altreSvalutazioniImmobilizzazioni').value = testo[0].altreSvalutazioniImmobilizzazioni
                document.getElementById('svalutazioniCreditiCompresiAttivoCircolante').value = testo[0].svalutazioniCreditiCompresiAttivoCircolante
                document.getElementById('variazioneRimanenzeMateriePrime').value = testo[0].variazioneRimanenzeMateriePrime
                document.getElementById('accantonamentiPerRischi').value = testo[0].accantonamentiPerRischi
                document.getElementById('altriAccantonamenti').value = testo[0].altriAccantonamenti
                document.getElementById('oneriDiversiGestione').value = testo[0].oneriDiversiGestione
                document.getElementById('totaleCostiProduzione').value = testo[0].totaleCostiProduzione

                // Differenza tra Valore e Costi della produzione
                document.getElementById('differenzaValoreCostiProduzione').value = testo[0].differenzaValoreCostiProduzione

                // C) Proventi e oneri finanziari
                document.getElementById('proventiDaControllate').value = testo[0].proventiDaControllate
                document.getElementById('proventiDaCollegate').value = testo[0].proventiDaCollegate
                document.getElementById('proventiCreditiIscrittiImmobilizzazioniControllate').value = testo[0].proventiCreditiIscrittiImmobilizzazioniControllate
                document.getElementById('proventiCreditiIscrittiImmobilizzazioniCollegate').value = testo[0].proventiCreditiIscrittiImmobilizzazioniCollegate
                document.getElementById('proventiCreditiIscrittiImmobilizzazioniControllanti').value = testo[0].proventiCreditiIscrittiImmobilizzazioniControllanti
                document.getElementById('proventiTitoliIscrittiImmobilizzazioni').value = testo[0].proventiTitoliIscrittiImmobilizzazioni
                document.getElementById('proventiTitoliIscrittiAttivoCircolante').value = testo[0].proventiTitoliIscrittiAttivoCircolante
                document.getElementById('proventiDiversiDaiPrecedentiControllate').value = testo[0].proventiDiversiDaiPrecedentiControllate
                document.getElementById('proventiDiversiDaiPrecedentiCollegate').value = testo[0].proventiDiversiDaiPrecedentiCollegate
                document.getElementById('proventiDiversiDaiPrecedentiControllanti').value = testo[0].proventiDiversiDaiPrecedentiControllanti
                document.getElementById('interessiAltriOneriFinanziariDaControllate').value = testo[0].interessiAltriOneriFinanziariDaControllate
                document.getElementById('interessiAltriOneriFinanziariDaCollegate').value = testo[0].interessiAltriOneriFinanziariDaCollegate
                document.getElementById('interessiAltriOneriFinanziariDaControllanti').value = testo[0].interessiAltriOneriFinanziariDaControllanti
                document.getElementById('totaleProventiOneriFinanziari').value = testo[0].totaleProventiOneriFinanziari

                // D) Rettifiche di valore di attività finanziarie
                document.getElementById('rivalutazioniPartecipazioni').value = testo[0].rivalutazioniPartecipazioni
                document.getElementById('rivalutazioniImmobilizzazioniFinanziarie').value = testo[0].rivalutazioniImmobilizzazioniFinanziarie
                document.getElementById('rivalutazioniTitoliIscrittiAttivoCircolante').value = testo[0].rivalutazioniTitoliIscrittiAttivoCircolante
                document.getElementById('rivalutazioniStrumentiFinanziariDerivati').value = testo[0].rivalutazioniStrumentiFinanziariDerivati
                document.getElementById('svalutazioniPartecipazioni').value = testo[0].svalutazioniPartecipazioni
                document.getElementById('svalutazioniImmobilizzazioniFinanziarie').value = testo[0].svalutazioniImmobilizzazioniFinanziarie
                document.getElementById('svalutazioniTitoliIscrittiAttivoCircolante').value = testo[0].svalutazioniTitoliIscrittiAttivoCircolante
                document.getElementById('svalutazioniStrumentiFinanziariDerivati').value = testo[0].svalutazioniStrumentiFinanziariDerivati
                document.getElementById('totaleRettifiche').value = testo[0].totaleRettifiche

                // E) Proventi e oneri straordinari
                document.getElementById('proventiStraordinari').value = testo[0].proventiStraordinari
                document.getElementById('plusvalenzeAlienazioni').value = testo[0].plusvalenzeAlienazioni
                document.getElementById('oneriStraordinari').value = testo[0].oneriStraordinari
                document.getElementById('minusvalenzeAlienazioni').value = testo[0].minusvalenzeAlienazioni
                document.getElementById('imposteRelativeEserciziPrecedenti').value = testo[0].imposteRelativeEserciziPrecedenti
                document.getElementById('totalePartiteStraordinarie').value = testo[0].totalePartiteStraordinarie

                // Risultato prima delle Imposte
                document.getElementById('risultatoPrimaImposte').value = testo[0].risultatoPrimaImposte
                // Imposte
                document.getElementById('imposteRedditoEsercizio').value = testo[0].imposteRedditoEsercizio
                // Utile (perdite) dell'esercizio
                document.getElementById('utilePerditeEsercizio').value = testo[0].utilePerditeEsercizio

                console.log("file aperto")
            })
        }
    })
})
