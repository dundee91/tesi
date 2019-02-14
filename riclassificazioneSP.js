
// FUNZIONI RICLASSIFICAZIONE

function sommeRiclassificazioneSPF() {
    // A) TOTALE IMMOBILIZZAZIONI NETTE

    // Immobilizzazioni finanziarie e crediti infragruppo a m/l termine
    try{
        document.getElementById('SPFimmobilizzazioniFinanziarie').value = 
        parseFloat(document.getElementById('impreseControllate').value) +
        parseFloat(document.getElementById('impreseCollegate').value) +
        parseFloat(document.getElementById('impreseControllanti').value) +
        parseFloat(document.getElementById('altreImprese').value) +
        parseFloat(document.getElementById('creditiImmobilizzazioniImpreseControllateOltre12Mesi').value) +
        parseFloat(document.getElementById('creditiImmobilizzazioniImpreseCollegateOltre12Mesi').value) +
        parseFloat(document.getElementById('creditiImmobilizzazioniImpreseControllantiOltre12Mesi').value) +
        parseFloat(document.getElementById('creditiImmobilizzazioniAltreImpreseOltre12Mesi').value) +
        parseFloat(document.getElementById('altriTitoliImmobilizzazioni').value) +
        parseFloat(document.getElementById('creditiAttivoCircolanteClientiOltre12Mesi').value) +
        parseFloat(document.getElementById('creditiAttivoCircolanteImpreseControllateOltre12Mesi').value) +
        parseFloat(document.getElementById('creditiAttivoCircolanteImpreseCollegateOltre12Mesi').value) +
        parseFloat(document.getElementById('creditiAttivoCircolanteImpreseControllantiOltre12Mesi').value) +
        parseFloat(document.getElementById('creditiAttivoCircolanteCreditiTributariOltre12Mesi').value) +
        parseFloat(document.getElementById('creditiAttivoCircolanteImposteAnticipateOltre12Mesi').value) +
        parseFloat(document.getElementById('creditiAttivoCircolanteAltreImpreseOltre12Mesi').value) +
        parseFloat(document.getElementById('accontiOltre12Mesi').value)
    }
    catch(error){
        document.getElementById('SPFimmobilizzazioniFinanziarie').value = 0
    }

    RFIsommaImmobilizzazioniNette()
    var totaleImmobilizzazioniNette = document.getElementById('SPFtotaleImmobilizzazioniNette').value

    // B) TOTALE ATTIVO CIRCOLANTE
    
    // crediti commerciali
    if((document.getElementById('creditiAttivoCircolanteClientiEntro12Mesi').value) != null &&
    (document.getElementById('accontiEntro12Mesi').value) != null){
        document.getElementById('SPFcreditiCommerciali').value = 
        parseFloat(document.getElementById('creditiAttivoCircolanteClientiEntro12Mesi').value) - 
        parseFloat(document.getElementById('accontiEntro12Mesi').value)
    }
    else{
        document.getElementById('SPFcreditiCommerciali').value = 0
    }
    // altri crediti
    try{
        console.log("try")
        document.getElementById('SPFaltriCrediti').value = 
        parseFloat(document.getElementById('creditiImmobilizzazioniImpreseControllateEntro12Mesi').value) +
        parseFloat(document.getElementById('creditiImmobilizzazioniImpreseCollegateEntro12Mesi').value) +
        parseFloat(document.getElementById('creditiImmobilizzazioniImpreseControllantiEntro12Mesi').value) +
        parseFloat(document.getElementById('creditiImmobilizzazioniAltreImpreseEntro12Mesi').value) +
        parseFloat(document.getElementById('creditiAttivoCircolanteImpreseControllateEntro12Mesi').value) +
        parseFloat(document.getElementById('creditiAttivoCircolanteImpreseCollegateEntro12Mesi').value) +
        parseFloat(document.getElementById('creditiAttivoCircolanteImpreseControllantiEntro12Mesi').value) +
        parseFloat(document.getElementById('creditiAttivoCircolanteCreditiTributariEntro12Mesi').value) +
        parseFloat(document.getElementById('creditiAttivoCircolanteImposteAnticipateEntro12Mesi').value) +
        parseFloat(document.getElementById('creditiAttivoCircolanteAltreImpreseEntro12Mesi').value)
    }
    catch(error){
        console.log("catch1")
        document.getElementById('SPFaltriCrediti').value = 0
        console.log("catch2")
        console.log(document.getElementById('SPFaltriCrediti').value)
    }
    // ratei e risconti attivi
    document.getElementById('SPFrateiRiscontiAttivi').value = document.getElementById('rateiRiscontiAttivo').value
    // liquidità
    try{
        document.getElementById('SPFliquidita').value = 
        parseFloat(document.getElementById('partecipazioniImpreseControllate').value) +
        parseFloat(document.getElementById('partecipazioniImpreseCollegate').value) +
        parseFloat(document.getElementById('partecipazioniImpreseControllanti').value) +
        parseFloat(document.getElementById('altrePartecipazioni').value) +
        parseFloat(document.getElementById('altriTitoliAttivoCircolante').value) +
        parseFloat(document.getElementById('depositiBancariPostali').value) +
        parseFloat(document.getElementById('assegni').value) +
        parseFloat(document.getElementById('danaroValoriCassa').value)
    }
    catch(error){
        document.getElementById('SPFliquidita').value = 0
        console.log(document.getElementById('SPFliquidita').value)
    }


    RFIsommaAttivoCircolante()
    var totaleAttivoCircolante = document.getElementById('SPFtotaleAttivoCircolante').value

    //  C) TOTALE ATTIVO (A+B)
    var totaleAttivo = parseFloat(totaleImmobilizzazioniNette) + parseFloat(totaleAttivoCircolante)
    document.getElementById('SPFtotaleAttivo').value = totaleAttivo.toFixed(2)
    
    // F) PATRIMONIO NETTO
    
    // capitale sociale
    try{
        document.getElementById('SPFcapitaleSociale').value = 
        parseFloat(document.getElementById('creditiVersoSoci').value) -
        parseFloat(document.getElementById('azioniProprieImmobilizzazioniFinanziarie').value) -
        parseFloat(document.getElementById('azioniProprieAttivitaFinanziarie').value) +
        parseFloat(document.getElementById('capitale').value)
    }
    catch(error){
        document.getElementById('SPFcapitaleSociale').value = 0
    }
    // riserve
    try{
        document.getElementById('SPFriserve').value = 
        parseFloat(document.getElementById('riservaSovrapprezzoAzioni').value) +
        parseFloat(document.getElementById('riserveRivalutazione').value) +
        parseFloat(document.getElementById('riservaLegale').value) +
        parseFloat(document.getElementById('riservaAzioniProprie').value) +
        parseFloat(document.getElementById('riserveStatutarie').value) +
        parseFloat(document.getElementById('altreRiserve').value) +
        parseFloat(document.getElementById('utilePortatoNuovo').value)
    }
    catch(error){
        document.getElementById('SPFriserve').value = 0
    }
    // reddito netto
    document.getElementById('SPFredditoNetto').value = document.getElementById('utileEsercizio').value

    RFIsommaPatrimonioNettoSPF()
    var totalePatrimonioNetto = document.getElementById('SPFtotalePatrimonioNetto').value


    // E) PASSIVO A M/L TERMINE
    
    // Debiti finanziari a medio - lungo termine
    try{
        document.getElementById('SPFdebitiFinanziariMlTermine').value = 
        parseFloat(document.getElementById('obbligazioniOltre12Mesi').value) +
        parseFloat(document.getElementById('obbligazioniConvertibiliOltre12Mesi').value) +
        parseFloat(document.getElementById('debitiVersoSociFinanziamentiOltre12Mesi').value) +
        parseFloat(document.getElementById('debitiVersoBancheOltre12Mesi').value) +
        parseFloat(document.getElementById('debitiVersoAltriFinanziatoriOltre12Mesi').value) +
        parseFloat(document.getElementById('debitiVersoImpreseControllateOltre12Mesi').value) +
        parseFloat(document.getElementById('debitiVersoImpreseCollegateOltre12Mesi').value) +
        parseFloat(document.getElementById('debitiVersoControllantiOltre12Mesi').value)
    }
    catch(error){
        document.getElementById('SPFdebitiFinanziariMlTermine').value = 0
    }
    // Altri debiti a medio - lungo termine
    try{
        document.getElementById('SPFaltriDebiti').value = 
        parseFloat(document.getElementById('debitiVersoFornitoriOltre12Mesi').value) +
        parseFloat(document.getElementById('debitiRappresentatiTitoliCreditoOltre12Mesi').value) +
        parseFloat(document.getElementById('debitiTributariOltre12Mesi').value) +
        parseFloat(document.getElementById('debitiVersoIstituiPrevidenzaOltre12Mesi').value) +
        parseFloat(document.getElementById('altriDebitiOltre12Mesi').value)
    }
    catch(error){
        document.getElementById('SPFaltriDebiti').value = 0
    }
    // fondo tfr
    document.getElementById('SPFfondoTFR').value = document.getElementById('trattamentoFineRapportoSP').value
    // Altri fondi
    try{
        document.getElementById('SPFaltriFondi').value = 
        parseFloat(document.getElementById('trattamentoQuiescenzaObblighiSimili').value) +
        parseFloat(document.getElementById('imposteAncheDifferite').value) +
        parseFloat(document.getElementById('altriFondi').value)
    }
    catch(error){
        document.getElementById('SPFaltriFondi').value = 0
    }
    RFIsommaPassivoMlTermine()
    var totalePassivoMlTermine = document.getElementById('SPFtotalePassivoMlTermine').value

    // D) PASSIVO A BREVE TERMINE
    
    // Debiti finanziari a breve termine
    try{
        document.getElementById('SPFdebitiFinanziariBreveTermine').value = 
        parseFloat(document.getElementById('obbligazioniEntro12Mesi').value) +
        parseFloat(document.getElementById('obbligazioniConvertibiliEntro12Mesi').value) +
        parseFloat(document.getElementById('debitiVersoSociFinanziamentiEntro12Mesi').value) +
        parseFloat(document.getElementById('debitiVersoBancheEntro12Mesi').value) +
        parseFloat(document.getElementById('debitiVersoAltriFinanziatoriEntro12Mesi').value) +
        parseFloat(document.getElementById('debitiVersoImpreseControllateEntro12Mesi').value) +
        parseFloat(document.getElementById('debitiVersoImpreseCollegateEntro12Mesi').value) +
        parseFloat(document.getElementById('debitiVersoControllantiEntro12Mesi').value)
    }
    catch(error){
        document.getElementById('SPFdebitiFinanziariBreveTermine').value = 0
    }
    // Debiti commerciali verso fornitori
    try{
        document.getElementById('SPFdebitiCommercialiFornitori').value = 
        parseFloat(document.getElementById('debitiVersoFornitoriEntro12Mesi').value) +
        parseFloat(document.getElementById('debitiRappresentatiTitoliCreditoEntro12Mesi').value)
    }
    catch(error){
        document.getElementById('SPFdebitiCommercialiFornitori').value = 0
    }
    // Altri debiti non finanziari
    try{
        document.getElementById('SPFaltriDebitiNonFinanziari').value = 
        parseFloat(document.getElementById('debitiTributariEntro12Mesi').value) +
        parseFloat(document.getElementById('debitiVersoIstituiPrevidenzaEntro12Mesi').value) +
        parseFloat(document.getElementById('altriDebitiEntro12Mesi').value)
    }
    catch(error){
        document.getElementById('SPFaltriDebitiNonFinanziari').value = 0
    }
    // Ratei e risconti passivi
    document.getElementById('SPFrateiRiscontiPassivi').value = document.getElementById('rateiRiscontiPassivo').value


    RFIsommaPassivoBreveTermine()
    var totalePassivoBreveTermine = document.getElementById('SPFtotalePassivoBreveTermine').value
    
    // (G) TOTALE PASSIVO E PATRIMONIO NETTO (D+E+F)
    var totalePassivoPatrimonioNetto = parseFloat(totalePatrimonioNetto) + parseFloat(totalePassivoMlTermine) + parseFloat(totalePassivoBreveTermine)
    document.getElementById('SPFtotalePassivoPatrimonioNetto').value = totalePassivoPatrimonioNetto.toFixed(2)

    // EVENTUALE SQUADRATURA ATTIVO/PASS
    var eventualeSquadraturaAttivoPass = parseFloat(totaleAttivo) - parseFloat(totalePassivoPatrimonioNetto)
    document.getElementById('SPFeventualeSquadraturaAttivoPass').value = eventualeSquadraturaAttivoPass.toFixed(2)
}

function sommeRiclassificazioneSPFO() {
    
    // Immobilizzazioni finanziarie nette
    try{
        document.getElementById('SPFOimmobilizzazioniFinanziarieNette').value = 
        parseFloat(document.getElementById('impreseControllate').value) +
        parseFloat(document.getElementById('impreseCollegate').value) +
        parseFloat(document.getElementById('impreseControllanti').value) +
        parseFloat(document.getElementById('altreImprese').value) +
        parseFloat(document.getElementById('altriTitoliImmobilizzazioni').value) +
        parseFloat(document.getElementById('creditiAttivoCircolanteClientiOltre12Mesi').value) +
        parseFloat(document.getElementById('creditiAttivoCircolanteCreditiTributariOltre12Mesi').value) +
        parseFloat(document.getElementById('creditiAttivoCircolanteImposteAnticipateEntro12Mesi').value) +
        parseFloat(document.getElementById('creditiAttivoCircolanteAltreImpreseOltre12Mesi').value) - 
        parseFloat(document.getElementById('accontiOltre12Mesi').value) 
    }
    catch(error){
        document.getElementById('SPFOimmobilizzazioniFinanziarieNette').value = 0
    }

    // A) TOTALE IMMOBILIZZAZIONI NETTE
    RFOsommaImmobilizzazioniNette()

    // Crediti verso clienti
    try{
        document.getElementById('SPFOcreditiVersoClienti').value = 
        parseFloat(document.getElementById('creditiAttivoCircolanteClientiEntro12Mesi').value) - 
        parseFloat(document.getElementById('accontiEntro12Mesi').value) 
    }
    catch(error){
        document.getElementById('SPFOcreditiVersoClienti').value = 0
    }

    // Altri crediti
    try{
        document.getElementById('SPFOaltriCrediti').value = 
        parseFloat(document.getElementById('creditiAttivoCircolanteCreditiTributariEntro12Mesi').value) +
        parseFloat(document.getElementById('creditiAttivoCircolanteImposteAnticipateEntro12Mesi').value) +
        parseFloat(document.getElementById('creditiAttivoCircolanteAltreImpreseEntro12Mesi').value) 
    }
    catch(error){
        document.getElementById('SPFOaltriCrediti').value = 0
    }

    // Ratei e risconti attivi
    document.getElementById('SPFOrateiRiscontiAttivi').value = document.getElementById('totaleRateiRiscontiAttivi').value

    // B) ATTIVO COMMERCIALE
    RFOsommaAttivoCommerciale()

    // Altri crediti
    try{
        document.getElementById('SPFOaltriCrediti').value = 
        parseFloat(document.getElementById('creditiAttivoCircolanteCreditiTributariEntro12Mesi').value) +
        parseFloat(document.getElementById('creditiAttivoCircolanteImposteAnticipateEntro12Mesi').value) +
        parseFloat(document.getElementById('creditiAttivoCircolanteAltreImpreseEntro12Mesi').value) 
    }
    catch(error){
        document.getElementById('SPFOaltriCrediti').value = 0
    }

    // Debiti verso fornitori
    try{
        document.getElementById('SPFOdebitiVersoFornitori').value = 
        parseFloat(document.getElementById('debitiVersoFornitoriEntro12Mesi').value) +
        parseFloat(document.getElementById('debitiRappresentatiTitoliCreditoEntro12Mesi').value) 
    }
    catch(error){
        document.getElementById('SPFOdebitiVersoFornitori').value = 0
    }
    
    // Altri debiti non finanziari
    try{
        document.getElementById('SPFOaltriDebitiNonFinanziari').value = 
        parseFloat(document.getElementById('debitiVersoFornitoriOltre12Mesi').value) +
        parseFloat(document.getElementById('debitiRappresentatiTitoliCreditoOltre12Mesi').value) +
        parseFloat(document.getElementById('debitiTributariEntro12Mesi').value) +
        parseFloat(document.getElementById('debitiTributariOltre12Mesi').value) +
        parseFloat(document.getElementById('debitiVersoIstituiPrevidenzaEntro12Mesi').value) +
        parseFloat(document.getElementById('debitiVersoIstituiPrevidenzaOltre12Mesi').value) +
        parseFloat(document.getElementById('altriDebitiEntro12Mesi').value) +
        parseFloat(document.getElementById('altriDebitiOltre12Mesi').value) 
    }
    catch(error){
        document.getElementById('SPFOaltriDebitiNonFinanziari').value = 0
    }

    // Ratei e risconti passivi
    document.getElementById('SPFOrateiRiscontiPassivi').value = document.getElementById('totaleRateiRiscontiPassivi').value

    // C) PASSIVO COMMERCIALE
    RFOsommaPassivoCommerciale()
        
    // (D) CAPITALE D'ESERCIZIO (B-C)
    try{
        document.getElementById('SPFOcapitaleEsercizio').value = 
        parseFloat(document.getElementById('SPFOtotaleAttivoCommerciale').value) -
        parseFloat(document.getElementById('SPFOtotalePassivoCommerciale').value)
    }
    catch(error){
        document.getElementById('SPFOcapitaleEsercizio').value = 0
    }

    // Fondi rischi e oneri

    document.getElementById('SPFOfondiRischiOneri').value = document.getElementById('totaleFondiRischiOneri').value    
    // Fondo tfr
    document.getElementById('SPFOfondoTfr').value = document.getElementById('trattamentoFineRapportoSP').value    
        
    // (E) FONDI OPERATIVI
    RFOsommaFondiOperativi()
    
    // (F) CAPITALE INVESTITO NETTO (A+D-E)
    try{
        document.getElementById('SPFOcapitaleInvestitoNetto').value = 
        parseFloat(document.getElementById('SPFOtotaleImmobilizzazioniNette').value) +
        parseFloat(document.getElementById('SPFOcapitaleEsercizio').value) - 
        parseFloat(document.getElementById('SPFOtotaleFondiOperativi').value)
    }
    catch(error){
        document.getElementById('SPFOcapitaleInvestitoNetto').value = 0
    }
 
    // Debiti finanziari a breve termine
    try{
        document.getElementById('SPFOdebitiFinanziariBreveTermine').value = 
        parseFloat(document.getElementById('obbligazioniEntro12Mesi').value) +
        parseFloat(document.getElementById('obbligazioniConvertibiliEntro12Mesi').value) +
        parseFloat(document.getElementById('debitiVersoSociFinanziamentiEntro12Mesi').value) +
        parseFloat(document.getElementById('debitiVersoBancheEntro12Mesi').value) +
        parseFloat(document.getElementById('debitiVersoAltriFinanziatoriEntro12Mesi').value) +
        parseFloat(document.getElementById('debitiVersoImpreseControllateEntro12Mesi').value) +
        parseFloat(document.getElementById('debitiVersoImpreseCollegateEntro12Mesi').value) +
        parseFloat(document.getElementById('debitiVersoControllantiEntro12Mesi').value) 
    }
    catch(error){
        document.getElementById('SPFOdebitiFinanziariBreveTermine').value = 0
    }
        
    // Disponibilità liquide
    try{
        document.getElementById('SPFOdisponibilitaLiquide').value = -
        parseFloat(document.getElementById('partecipazioniImpreseControllate').value) -
        parseFloat(document.getElementById('partecipazioniImpreseCollegate').value) -
        parseFloat(document.getElementById('partecipazioniImpreseControllanti').value) -
        parseFloat(document.getElementById('altrePartecipazioni').value) -
        parseFloat(document.getElementById('altriTitoliAttivoCircolante').value) -
        parseFloat(document.getElementById('depositiBancariPostali').value) -
        parseFloat(document.getElementById('assegni').value) -
        parseFloat(document.getElementById('danaroValoriCassa').value) 
    }
    catch(error){
        document.getElementById('SPFOdisponibilitaLiquide').value = 0
    }

    // Crediti finanziari a breve termine
    try{
        document.getElementById('SPFOcreditiFinanziariBreveTermine').value = -
        parseFloat(document.getElementById('creditiImmobilizzazioniImpreseControllateEntro12Mesi').value) -
        parseFloat(document.getElementById('creditiImmobilizzazioniImpreseCollegateEntro12Mesi').value) -
        parseFloat(document.getElementById('creditiImmobilizzazioniImpreseControllantiEntro12Mesi').value) -
        parseFloat(document.getElementById('creditiImmobilizzazioniAltreImpreseEntro12Mesi').value) -
        parseFloat(document.getElementById('creditiAttivoCircolanteImpreseControllateEntro12Mesi').value) -
        parseFloat(document.getElementById('creditiAttivoCircolanteImpreseCollegateEntro12Mesi').value) -
        parseFloat(document.getElementById('creditiAttivoCircolanteImpreseControllantiEntro12Mesi').value)
    }
    catch(error){
        document.getElementById('SPFOcreditiFinanziariBreveTermine').value = 0
    }

    // (G) POSIZIONE FINANZIARIA A BREVE TERMINE
    RFOsommaPosizioneFinanziariaBreveTermine()

    // Debiti finanziari a m/l termine
    try{
        document.getElementById('SPFOdebitiFinanziariMedioLungoTermine').value = 
        parseFloat(document.getElementById('obbligazioniOltre12Mesi').value) +
        parseFloat(document.getElementById('obbligazioniConvertibiliOltre12Mesi').value) +
        parseFloat(document.getElementById('debitiVersoSociFinanziamentiOltre12Mesi').value) +
        parseFloat(document.getElementById('debitiVersoBancheOltre12Mesi').value) +
        parseFloat(document.getElementById('debitiVersoAltriFinanziatoriOltre12Mesi').value) +
        parseFloat(document.getElementById('debitiVersoImpreseControllateOltre12Mesi').value) +
        parseFloat(document.getElementById('debitiVersoImpreseCollegateOltre12Mesi').value) +
        parseFloat(document.getElementById('debitiVersoControllantiOltre12Mesi').value)
    }
    catch(error){
        document.getElementById('SPFOdebitiFinanziariMedioLungoTermine').value = 0
    } 
    
    // Crediti finanziari a m/l termine
    try{
        document.getElementById('SPFOcreditiFinanziariMedioLungoTermine').value = -
        parseFloat(document.getElementById('creditiImmobilizzazioniImpreseControllateOltre12Mesi').value) -
        parseFloat(document.getElementById('creditiImmobilizzazioniImpreseCollegateOltre12Mesi').value) -
        parseFloat(document.getElementById('creditiImmobilizzazioniImpreseControllantiOltre12Mesi').value) -
        parseFloat(document.getElementById('creditiImmobilizzazioniAltreImpreseOltre12Mesi').value) -
        parseFloat(document.getElementById('creditiAttivoCircolanteImpreseControllateOltre12Mesi').value) -
        parseFloat(document.getElementById('creditiAttivoCircolanteImpreseCollegateOltre12Mesi').value) -
        parseFloat(document.getElementById('creditiAttivoCircolanteImpreseControllantiOltre12Mesi').value)
    }
    catch(error){
        document.getElementById('SPFOcreditiFinanziariMedioLungoTermine').value = 0
    }

    // (E) POSIZIONE FINANZIARIA A M/L TERMINE
    RFOsommaPosizioneFinanziariaMLTermine()

    // (F) TOTALE POSIZIONE FINANZIARIA
    try{
        document.getElementById('SPFOtotalePosizioneFinanziaria').value = 
        parseFloat(document.getElementById('SPFOtotalePosizioneFinanziariaBreveTermine').value) +
        parseFloat(document.getElementById('SPFOtotalePosizioneFinanziariaMedioLungoTermine').value)
    }
    catch(error){
        document.getElementById('SPFOtotalePosizioneFinanziaria').value = 0
    }

    // Capitale sociale e finanziamenti in conto capitale
    try{
        document.getElementById('SPFOcapitaleSocialeFinanziamentiContoCapitale').value = 
        parseFloat(document.getElementById('capitale').value) -
        parseFloat(document.getElementById('creditiVersoSoci').value) -
        parseFloat(document.getElementById('azioniProprieImmobilizzazioniFinanziarie').value) -
        parseFloat(document.getElementById('azioniProprieAttivitaFinanziarie').value)
    }
    catch(error){
        document.getElementById('SPFOcapitaleSocialeFinanziamentiContoCapitale').value = 0
    }

    // Riserve
    try{
        document.getElementById('SPFOriserve').value = 
        parseFloat(document.getElementById('riservaSovrapprezzoAzioni').value) +
        parseFloat(document.getElementById('riserveRivalutazione').value) +
        parseFloat(document.getElementById('riservaLegale').value) +
        parseFloat(document.getElementById('riservaAzioniProprie').value) +
        parseFloat(document.getElementById('riserveStatutarie').value) +
        parseFloat(document.getElementById('altreRiserve').value) +
        parseFloat(document.getElementById('utilePortatoNuovo').value)
    }
    catch(error){
        document.getElementById('SPFOriserve').value = 0
    }

    // Reddito netto
    document.getElementById('SPFOredditonetto').value = document.getElementById('SPFredditoNetto').value

    // (H) PATRIMONIO NETTO
    RFOsommaPatrimonioNetto()

    // (I) TOTALE DEBITO FINANZIARIO E PATRIMONIO NETTO (F+H)
    try{
        document.getElementById('SPFOtotaleDebitoFinanziarioPatrimonioNetto').value = 
        parseFloat(document.getElementById('SPFOtotalePosizioneFinanziaria').value) +
        parseFloat(document.getElementById('SPFOtotalePatrimonioNetto').value)
    }
    catch(error){
        document.getElementById('SPFOtotaleDebitoFinanziarioPatrimonioNetto').value = 0
    }
}




/* RICLASSIFICATO FINANZIARIO */

function RFIsommaImmobilizzazioniNette() {
    var arr = document.getElementsByName('SPFimmobilizzazioniNette');
    var tot = 0;
    for (var i = 0; i < arr.length; i++) {
        if (parseFloat(arr[i].value))
            tot += parseFloat(arr[i].value);
    }
    document.getElementById('SPFtotaleImmobilizzazioniNette').value = tot.toFixed(2)
}

function RFIsommaAttivoCircolante() {
    var arr = document.getElementsByName('SPFattivoCircolante');
    var tot = 0;
    for (var i = 0; i < arr.length; i++) {
        if (parseFloat(arr[i].value))
            tot += parseFloat(arr[i].value);
    }
    document.getElementById('SPFtotaleAttivoCircolante').value = tot.toFixed(2)
}

function RFIsommaPatrimonioNettoSPF() {
    var arr = document.getElementsByName('SPFpatrimonioNetto');
    var tot = 0;
    for (var i = 0; i < arr.length; i++) {
        if (parseFloat(arr[i].value))
            tot += parseFloat(arr[i].value);
    }
    document.getElementById('SPFtotalePatrimonioNetto').value = tot.toFixed(2)
}

function RFIsommaPassivoMlTermine() {
    var arr = document.getElementsByName('SPFpassivoMLTermine');
    var tot = 0;
    for (var i = 0; i < arr.length; i++) {
        if (parseFloat(arr[i].value))
            tot += parseFloat(arr[i].value);
    }
    document.getElementById('SPFtotalePassivoMlTermine').value = tot.toFixed(2)
}

function RFIsommaPassivoBreveTermine() {
    var arr = document.getElementsByName('SPFpassivoBreveTermine');
    var tot = 0;
    for (var i = 0; i < arr.length; i++) {
        if (parseFloat(arr[i].value))
            tot += parseFloat(arr[i].value);
    }
    document.getElementById('SPFtotalePassivoBreveTermine').value = tot.toFixed(2)
}


/* RICLASSIFICATO FUNZIONALE (OPERATIVO) */

function RFOsommaImmobilizzazioniNette() {
    var arr = document.getElementsByName('SPFOimmobilizzazioniNette');
    var tot = 0;
    for (var i = 0; i < arr.length; i++) {
        if (parseFloat(arr[i].value))
            tot += parseFloat(arr[i].value);
    }
    document.getElementById('SPFOtotaleImmobilizzazioniNette').value = tot.toFixed(2)
}

function RFOsommaAttivoCommerciale(){
    var arr = document.getElementsByName('SPFOattivoCommerciale');
    var tot = 0;
    for (var i = 0; i < arr.length; i++) {
        if (parseFloat(arr[i].value))
            tot += parseFloat(arr[i].value);
    }
    document.getElementById('SPFOtotaleAttivoCommerciale').value = tot.toFixed(2)
}

function RFOsommaPassivoCommerciale(){
    var arr = document.getElementsByName('SPFOpassivoCommerciale');
    var tot = 0;
    for (var i = 0; i < arr.length; i++) {
        if (parseFloat(arr[i].value))
            tot += parseFloat(arr[i].value);
    }
    document.getElementById('SPFOtotalePassivoCommerciale').value = tot.toFixed(2)
}

function RFOsommaFondiOperativi(){
    var arr = document.getElementsByName('SPFOfondiOperativi');
    var tot = 0;
    for (var i = 0; i < arr.length; i++) {
        if (parseFloat(arr[i].value))
            tot += parseFloat(arr[i].value);
    }
    document.getElementById('SPFOtotaleFondiOperativi').value = tot.toFixed(2)
}

function RFOsommaPosizioneFinanziariaBreveTermine(){
    var arr = document.getElementsByName('SPFOPosizioneFinanziariaBreveTermine');
    var tot = 0;
    for (var i = 0; i < arr.length; i++) {
        if (parseFloat(arr[i].value))
            tot += parseFloat(arr[i].value);
    }
    document.getElementById('SPFOtotalePosizioneFinanziariaBreveTermine').value = tot.toFixed(2)
}

function RFOsommaPosizioneFinanziariaMLTermine(){
    var arr = document.getElementsByName('SPFOPosizioneFinanziariaMedioLungoTermine');
    var tot = 0;
    for (var i = 0; i < arr.length; i++) {
        if (parseFloat(arr[i].value))
            tot += parseFloat(arr[i].value);
    }
    document.getElementById('SPFOtotalePosizioneFinanziariaMedioLungoTermine').value = tot.toFixed(2)
}

function RFOsommaPatrimonioNetto(){
    var arr = document.getElementsByName('SPFOPatrimonioNetto');
    var tot = 0;
    for (var i = 0; i < arr.length; i++) {
        if (parseFloat(arr[i].value))
            tot += parseFloat(arr[i].value);
    }
    document.getElementById('SPFOtotalePatrimonioNetto').value = tot.toFixed(2)
}



