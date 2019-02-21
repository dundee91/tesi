const fs = require('fs')
const path = require('path')
const pdf = require('pdfkit')
const app = require('electron').remote
const dialog = app.dialog
const ipc = require('electron').ipcRenderer
const webContents = require('electron')


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
    let organoControllo = document.getElementById('organoControllo').value
    let descrizioneAttuale = document.getElementById('descrizioneAttuale').value
    let prodottiCommercializzati = document.getElementById('prodottiCommercializzati').value
    let mercatoRiferimento = document.getElementById('mercatoRiferimento').value
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
    var azioniProprieImmobilizzazioniFinanziarie = document.getElementById('azioniProprieImmobilizzazioniFinanziarie').value
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
    var creditiAttivoCircolanteCreditiTributariEntro12Mesi = document.getElementById('creditiAttivoCircolanteCreditiTributariEntro12Mesi').value
    var creditiAttivoCircolanteCreditiTributariOltre12Mesi = document.getElementById('creditiAttivoCircolanteCreditiTributariOltre12Mesi').value
    var creditiAttivoCircolanteImposteAnticipateEntro12Mesi = document.getElementById('creditiAttivoCircolanteImposteAnticipateEntro12Mesi').value
    var creditiAttivoCircolanteImposteAnticipateOltre12Mesi = document.getElementById('creditiAttivoCircolanteImposteAnticipateOltre12Mesi').value
    var creditiAttivoCircolanteAltreImpreseEntro12Mesi = document.getElementById('creditiAttivoCircolanteAltreImpreseEntro12Mesi').value
    var creditiAttivoCircolanteAltreImpreseOltre12Mesi = document.getElementById('creditiAttivoCircolanteAltreImpreseOltre12Mesi').value
    var totaleCrediti = document.getElementById('totaleCrediti').value
    // III. Attività finanziarie che non costituiscono immobilizzazioni
    var partecipazioniImpreseControllate = document.getElementById('partecipazioniImpreseControllate').value
    var partecipazioniImpreseCollegate = document.getElementById('partecipazioniImpreseCollegate').value
    var partecipazioniImpreseControllanti = document.getElementById('partecipazioniImpreseControllanti').value
    var altrePartecipazioni = document.getElementById('altrePartecipazioni').value
    var azioniProprieAttivitaFinanziarie = document.getElementById('azioniProprieAttivitaFinanziarie').value
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
    var utilePortatoNuovo = document.getElementById('utilePortatoNuovo').value
    var utileEsercizio = document.getElementById('utileEsercizio').value
    var riservaAzioniProprie = document.getElementById('riservaAzioniProprie').value
    var totalePatrimonioNetto = document.getElementById('totalePatrimonioNetto').value

    // B. Fondi per rischi e oneri
    var trattamentoQuiescenzaObblighiSimili = document.getElementById('trattamentoQuiescenzaObblighiSimili').value
    var imposteAncheDifferite = document.getElementById('imposteAncheDifferite').value
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
    var debitiRappresentatiTitoliCreditoOltre12Mesi = document.getElementById('debitiRappresentatiTitoliCreditoOltre12Mesi').value
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
    var variazioniLavoriInCorso = document.getElementById('variazioniLavoriInCorso').value
    var incrementiImmobilizzazioniLavoriInterni = document.getElementById('incrementiImmobilizzazioniLavoriInterni').value
    var altriRicaviProventi = document.getElementById('altriRicaviProventi').value
    var totaleValoreProduzione = document.getElementById('totaleValoreProduzione').value

    // B) Costi della produzione
    var materiePrimeCE = document.getElementById('materiePrimeCE').value
    var servizi = document.getElementById('servizi').value
    var godimentoBeniTerzi = document.getElementById('godimentoBeniTerzi').value
    var diCuiCanoniLeasing = document.getElementById('diCuiCanoniLeasing').value
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
    var proventiDaControllanti = document.getElementById('proventiDaControllanti').value
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
    var utiliPerditesuCambi = document.getElementById('utiliPerditesuCambi').value
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
    var altriProventi = document.getElementById('altriProventi').value
    var oneriStraordinari = document.getElementById('oneriStraordinari').value
    var minusvalenzeAlienazioni = document.getElementById('minusvalenzeAlienazioni').value
    var altriOneri = document.getElementById('altriOneri').value
    var totalePartiteStraordinarie = document.getElementById('totalePartiteStraordinarie').value

    // Risultato prima delle imposte
    var risultatoPrimaImposte = document.getElementById('risultatoPrimaImposte').value
    // Imposte
    var imposteRedditoEsercizio = document.getElementById('imposteRedditoEsercizio').value
    // Utile (perdite) dell'esercizio
    var utilePerditeEsercizio = document.getElementById('utilePerditeEsercizio').value

    /* RICLASSIFICAZIONE STATO PATRIMONIALE FUNZIONALE (OPERATIVO) */
    var SPFOimmobilizzazioniImmateriali = document.getElementById('SPFOimmobilizzazioniImmateriali').value
    var SPFOimmobilizzazioniMateriali = document.getElementById('SPFOimmobilizzazioniMateriali').value
    var SPFOimmobilizzazioniFinanziarieNette = document.getElementById('SPFOimmobilizzazioniFinanziarieNette').value
    var SPFOtotaleImmobilizzazioniNette = document.getElementById('SPFOtotaleImmobilizzazioniNette').value
    var SPFOmagazzino = document.getElementById('SPFOmagazzino').value
    var SPFOcreditiVersoClienti = document.getElementById('SPFOcreditiVersoClienti').value
    var SPFOaltriCrediti = document.getElementById('SPFOaltriCrediti').value
    var SPFOrateiRiscontiAttivi = document.getElementById('SPFOrateiRiscontiAttivi').value
    var SPFOtotaleAttivoCommerciale = document.getElementById('SPFOtotaleAttivoCommerciale').value
    var SPFOdebitiVersoFornitori = document.getElementById('SPFOdebitiVersoFornitori').value
    var SPFOaltriDebitiNonFinanziari = document.getElementById('SPFOaltriDebitiNonFinanziari').value
    var SPFOrateiRiscontiPassivi = document.getElementById('SPFOrateiRiscontiPassivi').value
    var SPFOtotalePassivoCommerciale = document.getElementById('SPFOtotalePassivoCommerciale').value
    var SPFOcapitaleEsercizio = document.getElementById('SPFOcapitaleEsercizio').value
    var SPFOfondiRischiOneri = document.getElementById('SPFOfondiRischiOneri').value
    var SPFOfondoTfr = document.getElementById('SPFOfondoTfr').value
    var SPFOtotaleFondiOperativi = document.getElementById('SPFOtotaleFondiOperativi').value
    var SPFOcapitaleInvestitoNetto = document.getElementById('SPFOcapitaleInvestitoNetto').value
    var SPFOdebitiFinanziariBreveTermine = document.getElementById('SPFOdebitiFinanziariBreveTermine').value
    var SPFOdisponibilitaLiquide = document.getElementById('SPFOdisponibilitaLiquide').value
    var SPFOcreditiFinanziariBreveTermine = document.getElementById('SPFOcreditiFinanziariBreveTermine').value
    var SPFOtotalePosizioneFinanziariaBreveTermine = document.getElementById('SPFOtotalePosizioneFinanziariaBreveTermine').value
    var SPFOdebitiFinanziariMedioLungoTermine = document.getElementById('SPFOdebitiFinanziariMedioLungoTermine').value
    var SPFOcreditiFinanziariMedioLungoTermine = document.getElementById('SPFOcreditiFinanziariMedioLungoTermine').value
    var SPFOtotalePosizioneFinanziariaMedioLungoTermine = document.getElementById('SPFOtotalePosizioneFinanziariaMedioLungoTermine').value
    var SPFOtotalePosizioneFinanziaria = document.getElementById('SPFOtotalePosizioneFinanziaria').value
    var SPFOcapitaleSocialeFinanziamentiContoCapitale = document.getElementById('SPFOcapitaleSocialeFinanziamentiContoCapitale').value
    var SPFOriserve = document.getElementById('SPFOriserve').value
    var SPFOredditonetto = document.getElementById('SPFOredditonetto').value
    var SPFOtotalePatrimonioNetto = document.getElementById('SPFOtotalePatrimonioNetto').value
    var SPFOtotaleDebitoFinanziarioPatrimonioNetto = document.getElementById('SPFOtotaleDebitoFinanziarioPatrimonioNetto').value

    /* RICLASSIFICAZIONE STATO PATRIMONIALE FINANZIARIO */
    var SPFimmobilizzazioniImmateriali = document.getElementById('SPFimmobilizzazioniImmateriali').value
    var SPFimmobilizzazioniMateriali = document.getElementById('SPFimmobilizzazioniMateriali').value
    var SPFimmobilizzazioniFinanziarie = document.getElementById('SPFimmobilizzazioniFinanziarie').value
    var SPFtotaleImmobilizzazioniNette = document.getElementById('SPFtotaleImmobilizzazioniNette').value
    var SPFmagazzino = document.getElementById('SPFmagazzino').value
    var SPFcreditiCommerciali = document.getElementById('SPFcreditiCommerciali').value
    var SPFaltriCrediti = document.getElementById('SPFaltriCrediti').value
    var SPFrateiRiscontiAttivi = document.getElementById('SPFrateiRiscontiAttivi').value
    var SPFliquidita = document.getElementById('SPFliquidita').value
    var SPFtotaleAttivoCircolante = document.getElementById('SPFtotaleAttivoCircolante').value
    var SPFtotaleAttivo = document.getElementById('SPFtotaleAttivo').value
    var SPFcapitaleSociale = document.getElementById('SPFcapitaleSociale').value
    var SPFriserve = document.getElementById('SPFriserve').value
    var SPFredditoNetto = document.getElementById('SPFredditoNetto').value
    var SPFtotalePatrimonioNetto = document.getElementById('SPFtotalePatrimonioNetto').value
    var SPFdebitiFinanziariMlTermine = document.getElementById('SPFdebitiFinanziariMlTermine').value
    var SPFaltriDebiti = document.getElementById('SPFaltriDebiti').value
    var SPFfondoTFR = document.getElementById('SPFfondoTFR').value
    var SPFaltriFondi = document.getElementById('SPFaltriFondi').value
    var SPFtotalePassivoMlTermine = document.getElementById('SPFtotalePassivoMlTermine').value
    var SPFdebitiFinanziariBreveTermine = document.getElementById('SPFdebitiFinanziariBreveTermine').value
    var SPFdebitiCommercialiFornitori = document.getElementById('SPFdebitiCommercialiFornitori').value
    var SPFaltriDebitiNonFinanziari = document.getElementById('SPFaltriDebitiNonFinanziari').value
    var SPFrateiRiscontiPassivi = document.getElementById('SPFrateiRiscontiPassivi').value
    var SPFtotalePassivoBreveTermine = document.getElementById('SPFtotalePassivoBreveTermine').value
    var SPFtotalePassivoPatrimonioNetto = document.getElementById('SPFtotalePassivoPatrimonioNetto').value
    var SPFeventualeSquadraturaAttivoPass = document.getElementById('SPFeventualeSquadraturaAttivoPass').value

    /* RICLASSIFICAZIONE CONTO ECONOMICO VALORE AGGIUNTO */
    var CEricaviVendite = document.getElementById('CEricaviVendite').value
    var CEproduzioneInterna = document.getElementById('CEproduzioneInterna').value
    var CEtotaleValoreProduzione = document.getElementById('CEtotaleValoreProduzione').value
    var CEconsumoMateriePrime = document.getElementById('CEconsumoMateriePrime').value
    var CEcostiServizi = document.getElementById('CEcostiServizi').value
    var CEaltriCostiOperativiEsterni = document.getElementById('CEaltriCostiOperativiEsterni').value
    var CEtotaleConsumiEsterni = document.getElementById('CEtotaleConsumiEsterni').value
    var CEvaloreAggiunto = document.getElementById('CEvaloreAggiunto').value
    var CEcostiPersonale = document.getElementById('CEcostiPersonale').value
    var CEtotaleMargineOperativoLordo = document.getElementById('CEtotaleMargineOperativoLordo').value
    var CEammortamenti = document.getElementById('CEammortamenti').value
    var CEcanoniLeasing = document.getElementById('CEcanoniLeasing').value
    var CEaccantonamentiSvalutazioni = document.getElementById('CEaccantonamentiSvalutazioni').value
    var CEtotaleAmmortamentiSvalutazioni = document.getElementById('CEtotaleAmmortamentiSvalutazioni').value
    var CEaltriProventiOperativi = document.getElementById('CEaltriProventiOperativi').value
    var CEproventiFinanziari = document.getElementById('CEproventiFinanziari').value
    var CEsaldoGestioneMobiliare = document.getElementById('CEsaldoGestioneMobiliare').value
    var CEtotaleRisultatoOperativo = document.getElementById('CEtotaleRisultatoOperativo').value
    var CEoneriFinanziari = document.getElementById('CEoneriFinanziari').value
    var CEtotaleRisultatoLordo = document.getElementById('CEtotaleRisultatoLordo').value
    var CEproventiStraordinari = document.getElementById('CEproventiStraordinari').value
    var CEoneriStraordinari = document.getElementById('CEoneriStraordinari').value
    var CErisultatoAreaStraordinaria = document.getElementById('CErisultatoAreaStraordinaria').value
    var CEtotaleRisultatoAnteImposte = document.getElementById('CEtotaleRisultatoAnteImposte').value
    var CEimposteReddito = document.getElementById('CEimposteReddito').value
    var CEtotaleRisultatoNetto = document.getElementById('CEtotaleRisultatoNetto').value
    /*
    var  = document.getElementById('').value
    var  = document.getElementById('').value
    var  = document.getElementById('').value
    var  = document.getElementById('').value
    */

    //creo array per json
    let contenuto = [
        /* ANAGRAFICA AZIENDALE */
        {
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
            "note": note
        },
        /* ANALISI QUANTITATIVA */
        {
            "storiaAzienda": storiaAzienda,
            "titolari": titolari,
            "organoControllo": organoControllo,
            "descrizioneAttuale": descrizioneAttuale,
            "prodottiCommercializzati": prodottiCommercializzati,
            "mercatoRiferimento": mercatoRiferimento,
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
            "conclusioni": conclusioni
        },
        /* STATO PATRIMONIALE ATTIVO */
        {
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
            "azioniProprieImmobilizzazioniFinanziarie": azioniProprieImmobilizzazioniFinanziarie,
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
            "creditiAttivoCircolanteCreditiTributariEntro12Mesi": creditiAttivoCircolanteCreditiTributariEntro12Mesi,
            "creditiAttivoCircolanteCreditiTributariOltre12Mesi": creditiAttivoCircolanteCreditiTributariOltre12Mesi,
            "creditiAttivoCircolanteImposteAnticipateEntro12Mesi": creditiAttivoCircolanteImposteAnticipateEntro12Mesi,
            "creditiAttivoCircolanteImposteAnticipateOltre12Mesi": creditiAttivoCircolanteImposteAnticipateOltre12Mesi,
            "creditiAttivoCircolanteAltreImpreseEntro12Mesi": creditiAttivoCircolanteAltreImpreseEntro12Mesi,
            "creditiAttivoCircolanteAltreImpreseOltre12Mesi": creditiAttivoCircolanteAltreImpreseOltre12Mesi,
            "totaleCrediti": totaleCrediti,
            // III. Attività finanziarie che non costituiscono immobilizzazioni
            "partecipazioniImpreseControllate": partecipazioniImpreseControllate,
            "partecipazioniImpreseCollegate": partecipazioniImpreseCollegate,
            "partecipazioniImpreseControllanti": partecipazioniImpreseControllanti,
            "altrePartecipazioni": altrePartecipazioni,
            "azioniProprieAttivitaFinanziarie": azioniProprieAttivitaFinanziarie,
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
            "utilePortatoNuovo": utilePortatoNuovo,
            "utileEsercizio": utileEsercizio,
            "riservaAzioniProprie": riservaAzioniProprie,
            "totalePatrimonioNetto": totalePatrimonioNetto,

            // B. Fondi per rischi e oneri
            "trattamentoQuiescenzaObblighiSimili": trattamentoQuiescenzaObblighiSimili,
            "imposteAncheDifferite": imposteAncheDifferite,
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
            "debitiRappresentatiTitoliCreditoOltre12Mesi": debitiRappresentatiTitoliCreditoOltre12Mesi,
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
            "totalePassivo": totalePassivo
        },
        /* CONTO ECONOMICO */
        {
            // A) Valore della produzione
            "ricaviVendite": ricaviVendite,
            "variazioniRimanenze": variazioniRimanenze,
            "variazioniLavoriInCorso": variazioniLavoriInCorso,
            "incrementiImmobilizzazioniLavoriInterni": incrementiImmobilizzazioniLavoriInterni,
            "altriRicaviProventi": altriRicaviProventi,
            "totaleValoreProduzione": totaleValoreProduzione,

            // B) Costi della produzione
            "materiePrimeCE": materiePrimeCE,
            "servizi": servizi,
            "godimentoBeniTerzi": godimentoBeniTerzi,
            "diCuiCanoniLeasing": diCuiCanoniLeasing,
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
            "proventiDaControllanti": proventiDaControllanti,
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
            "utiliPerditesuCambi": utiliPerditesuCambi,
            "totaleProventiOneriFinanziari": totaleProventiOneriFinanziari,

            // D) Rettifiche di valore di attività finanziarie
            "rivalutazioniPartecipazioni": rivalutazioniPartecipazioni,
            "rivalutazioniImmobilizzazioniFinanziarie": rivalutazioniImmobilizzazioniFinanziarie,
            "rivalutazioniTitoliIscrittiAttivoCircolante": rivalutazioniTitoliIscrittiAttivoCircolante,
            "rivalutazioniStrumentiFinanziariDerivati": rivalutazioniStrumentiFinanziariDerivati,
            "svalutazioniPartecipazioni": svalutazioniPartecipazioni,
            "svalutazioniImmobilizzazioniFinanziarie": svalutazioniImmobilizzazioniFinanziarie,
            "svalutazioniTitoliIscrittiAttivoCircolante": svalutazioniTitoliIscrittiAttivoCircolante,
            "svalutazioniStrumentiFinanziariDerivati": svalutazioniStrumentiFinanziariDerivati,
            "totaleRettifiche": totaleRettifiche,

            // E) Proventi e oneri straordinari
            "proventiStraordinari": proventiStraordinari,
            "plusvalenzeAlienazioni": plusvalenzeAlienazioni,
            "altriProventi": altriProventi,
            "oneriStraordinari": oneriStraordinari,
            "minusvalenzeAlienazioni": minusvalenzeAlienazioni,
            "altriOneri": altriOneri,
            "totalePartiteStraordinarie": totalePartiteStraordinarie,

            // Risultato prima delle imposte
            "risultatoPrimaImposte": risultatoPrimaImposte,
            // Imposte
            'imposteRedditoEsercizio': imposteRedditoEsercizio,
            // Utile (perdite) dell'esercizio
            'utilePerditeEsercizio': utilePerditeEsercizio
        },
        /* RICLASSIFICAZIONE STATO PATRIMONIALE FUNZIONALE (OPERATIVO) */
        {
            'SPFOimmobilizzazioniImmateriali': SPFOimmobilizzazioniImmateriali,
            'SPFOimmobilizzazioniMateriali': SPFOimmobilizzazioniMateriali,
            'SPFOimmobilizzazioniFinanziarieNette': SPFOimmobilizzazioniFinanziarieNette,
            'SPFOtotaleImmobilizzazioniNette': SPFOtotaleImmobilizzazioniNette,
            'SPFOmagazzino': SPFOmagazzino,
            'SPFOcreditiVersoClienti': SPFOcreditiVersoClienti,
            'SPFOaltriCrediti': SPFOaltriCrediti,
            'SPFOrateiRiscontiAttivi': SPFOrateiRiscontiAttivi,
            'SPFOtotaleAttivoCommerciale': SPFOtotaleAttivoCommerciale,
            'SPFOdebitiVersoFornitori': SPFOdebitiVersoFornitori,
            'SPFOaltriDebitiNonFinanziari': SPFOaltriDebitiNonFinanziari,
            'SPFOrateiRiscontiPassivi': SPFOrateiRiscontiPassivi,
            'SPFOtotalePassivoCommerciale': SPFOtotalePassivoCommerciale,
            'SPFOcapitaleEsercizio': SPFOcapitaleEsercizio,
            'SPFOfondiRischiOneri': SPFOfondiRischiOneri,
            'SPFOfondoTfr': SPFOfondoTfr,
            'SPFOtotaleFondiOperativi': SPFOtotaleFondiOperativi,
            'SPFOcapitaleInvestitoNetto': SPFOcapitaleInvestitoNetto,
            'SPFOdebitiFinanziariBreveTermine': SPFOdebitiFinanziariBreveTermine,
            'SPFOdisponibilitaLiquide': SPFOdisponibilitaLiquide,
            'SPFOcreditiFinanziariBreveTermine': SPFOcreditiFinanziariBreveTermine,
            'SPFOtotalePosizioneFinanziariaBreveTermine': SPFOtotalePosizioneFinanziariaBreveTermine,
            'SPFOdebitiFinanziariMedioLungoTermine' : SPFOdebitiFinanziariMedioLungoTermine,
            'SPFOcreditiFinanziariMedioLungoTermine' : SPFOcreditiFinanziariMedioLungoTermine,
            'SPFOtotalePosizioneFinanziariaMedioLungoTermine' : SPFOtotalePosizioneFinanziariaMedioLungoTermine,
            'SPFOtotalePosizioneFinanziaria' : SPFOtotalePosizioneFinanziaria,
            'SPFOcapitaleSocialeFinanziamentiContoCapitale' : SPFOcapitaleSocialeFinanziamentiContoCapitale,
            'SPFOriserve' : SPFOriserve,
            'SPFOredditonetto' : SPFOredditonetto,
            'SPFOtotalePatrimonioNetto' : SPFOtotalePatrimonioNetto,
            'SPFOtotaleDebitoFinanziarioPatrimonioNetto' : SPFOtotaleDebitoFinanziarioPatrimonioNetto
        },
        /* RICLASSIFICAZIONE STATO PATRIMONIALE FINANZIARIO */
        {
            'SPFimmobilizzazioniImmateriali': SPFimmobilizzazioniImmateriali,
            'SPFimmobilizzazioniMateriali': SPFimmobilizzazioniMateriali,
            'SPFimmobilizzazioniFinanziarie': SPFimmobilizzazioniFinanziarie,
            'SPFtotaleImmobilizzazioniNette': SPFtotaleImmobilizzazioniNette,
            'SPFmagazzino': SPFmagazzino,
            'SPFcreditiCommerciali': SPFcreditiCommerciali,
            'SPFaltriCrediti': SPFaltriCrediti,
            'SPFrateiRiscontiAttivi': SPFrateiRiscontiAttivi,
            'SPFliquidita': SPFliquidita,
            'SPFtotaleAttivoCircolante': SPFtotaleAttivoCircolante,
            'SPFtotaleAttivo': SPFtotaleAttivo,
            'SPFcapitaleSociale': SPFcapitaleSociale,
            'SPFriserve': SPFriserve,
            'SPFredditoNetto': SPFredditoNetto,
            'SPFtotalePatrimonioNetto': SPFtotalePatrimonioNetto,
            'SPFdebitiFinanziariMlTermine': SPFdebitiFinanziariMlTermine,
            'SPFaltriDebiti': SPFaltriDebiti,
            'SPFfondoTFR': SPFfondoTFR,
            'SPFaltriFondi': SPFaltriFondi,
            'SPFtotalePassivoMlTermine': SPFtotalePassivoMlTermine,
            'SPFdebitiFinanziariBreveTermine': SPFdebitiFinanziariBreveTermine,
            'SPFdebitiCommercialiFornitori': SPFdebitiCommercialiFornitori,
            'SPFaltriDebitiNonFinanziari': SPFaltriDebitiNonFinanziari,
            'SPFrateiRiscontiPassivi': SPFrateiRiscontiPassivi,
            'SPFtotalePassivoBreveTermine': SPFtotalePassivoBreveTermine,
            'SPFtotalePassivoPatrimonioNetto': SPFtotalePassivoPatrimonioNetto,
            'SPFeventualeSquadraturaAttivoPass': SPFeventualeSquadraturaAttivoPass
        },
        /* RICLASSIFICAZIONE CONTO ECONOMICO VALORE AGGIUNTO */
        {
            "CEricaviVendite": CEricaviVendite,
            "CEproduzioneInterna": CEproduzioneInterna,
            "CEtotaleValoreProduzione": CEtotaleValoreProduzione,
            "CEconsumoMateriePrime": CEconsumoMateriePrime,
            "CEcostiServizi": CEcostiServizi,
            "CEaltriCostiOperativiEsterni": CEaltriCostiOperativiEsterni,
            "CEtotaleConsumiEsterni": CEtotaleConsumiEsterni,
            "CEvaloreAggiunto": CEvaloreAggiunto,
            "CEcostiPersonale": CEcostiPersonale,
            "CEtotaleMargineOperativoLordo": CEtotaleMargineOperativoLordo,
            "CEammortamenti": CEammortamenti,
            "CEcanoniLeasing": CEcanoniLeasing,
            "CEaccantonamentiSvalutazioni": CEaccantonamentiSvalutazioni,
            "CEtotaleAmmortamentiSvalutazioni": CEtotaleAmmortamentiSvalutazioni,
            "CEaltriProventiOperativi": CEaltriProventiOperativi,
            "CEproventiFinanziari": CEproventiFinanziari,
            "CEsaldoGestioneMobiliare": CEsaldoGestioneMobiliare,
            "CEtotaleRisultatoOperativo": CEtotaleRisultatoOperativo,
            "CEoneriFinanziari": CEoneriFinanziari,
            "CEtotaleRisultatoLordo": CEtotaleRisultatoLordo,
            "CEproventiStraordinari": CEproventiStraordinari,
            "CEoneriStraordinari": CEoneriStraordinari,
            "CErisultatoAreaStraordinaria": CErisultatoAreaStraordinaria,
            "CEtotaleRisultatoAnteImposte": CEtotaleRisultatoAnteImposte,
            "CEimposteReddito": CEimposteReddito,
            "CEtotaleRisultatoNetto": CEtotaleRisultatoNetto
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
    if (mese <10){
        meseString = "0" + mese.toString()
    }
    else{
        meseString = mese.toString()
    }
    var giorno = oggi.getDate()
    var azienda = document.getElementById('ragioneSociale').value
    
    // creo file con denominazione prestabilita "yyyymmdd - nomeAzienda.pdf"
    myDoc.pipe(fs.createWriteStream(anno.toString() + meseString + giorno.toString() + ' - ' + azienda + '.pdf'));

    myDoc.info.Title("Analisi di bilancio")
    myDoc.info.Author("Danilo Paoletti")

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
