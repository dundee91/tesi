
var validate = function (e) {
    var t = e.value;
    e.value = (t.indexOf(".") >= 0) ? (t.substr(0, t.indexOf(".")) + t.substr(t.indexOf("."), 3)) : t;
}

function sommeSP() {

    /* ATTIVO */

    // A) Crediti verso soci
    var creditiVersoSoci = document.getElementById('creditiVersoSoci').value
    if(creditiVersoSoci == ""){
        var totaleCreditiVersoSoci = 0 
    }
    else{
        var totaleCreditiVersoSoci = (parseFloat(creditiVersoSoci)).toFixed(2)
    }

    // B) Immobilizzazioni
    sommaImmobilizzazioniImmateriali()
    sommaImmobilizzazioniMateriali()
    sommaImmobilizzazioniFinanziarie()
    var totaleImmobilizzazioniImmateriali = document.getElementById('totaleImmobilizzazioniImmateriali').value
    var totaleImmobilizzazioniMateriali = document.getElementById('totaleImmobilizzazioniMateriali').value
    var totaleImmobilizzazioniFinanziarie = document.getElementById('totaleImmobilizzazioniFinanziarie').value
    var totaleImmobilizzazioni = parseFloat(totaleImmobilizzazioniImmateriali) + parseFloat(totaleImmobilizzazioniMateriali) + parseFloat(totaleImmobilizzazioniFinanziarie)
    document.getElementById('totaleImmobilizzazioni').value = totaleImmobilizzazioni.toFixed(2)
    // per riclassificazione
    document.getElementById('SPimmobilizzazioniImmateriali').value = parseFloat(totaleImmobilizzazioniImmateriali)
    document.getElementById('SPimmobilizzazioniMateriali').value = parseFloat(totaleImmobilizzazioniMateriali)

    // C) Attivo Circolante
    sommaRimanenze()
    sommaCrediti()
    sommaAttivitaFinanziarie()
    sommaDisponibilitaLiquide()
    var totaleRimanenze = document.getElementById('totaleRimanenze').value
    var totaleCrediti = document.getElementById('totaleCrediti').value
    var totaleAttivitaFinanziarie = document.getElementById('totaleAttivitaFinanziarie').value
    var totaleDisponibilitaLiquide = document.getElementById('totaleDisponibilitaLiquide').value
    var totaleAttivoCircolante = parseFloat(totaleRimanenze) + parseFloat(totaleCrediti) + parseFloat(totaleAttivitaFinanziarie) + parseFloat(totaleDisponibilitaLiquide)
    document.getElementById('totaleAttivoCircolante').value = totaleAttivoCircolante.toFixed(2)
    // per riclassificazione
    document.getElementById('SPmagazzino').value = parseFloat(totaleRimanenze)


    // D) Ratei e Risconti
    sommaRateiRiscontiAttivi()
    var totaleRateiRiscontiAttivi = document.getElementById('totaleRateiRiscontiAttivi').value

    // TOTALE ATTIVO
    totaleAttivo = parseFloat(totaleCreditiVersoSoci) + parseFloat(totaleImmobilizzazioni) + parseFloat(totaleAttivoCircolante) + parseFloat(totaleRateiRiscontiAttivi)
    document.getElementById('totaleAttivo').value = totaleAttivo.toFixed(2)

    /* PASSIVO */

    // A) Patrimonio netto
    sommaPatrimonioNetto()
    var totalePatrimonioNetto = document.getElementById('totalePatrimonioNetto').value

    // B) Fondi per rischi e oneri
    sommaFondiRischiOneri()
    var totaleFondiRischiOneri = document.getElementById('totaleFondiRischiOneri').value

    // C) Trattamento Fine Rapporto
    var trattamentoFineRapportoSP = document.getElementById('trattamentoFineRapportoSP').value
    if(trattamentoFineRapportoSP == ""){
        var totaleTrattamentoFineRapporto = 0 
    }
    else{
        var totaleTrattamentoFineRapporto = (parseFloat(trattamentoFineRapportoSP)).toFixed(2)
    }

    // D) Debiti
    sommaDebiti()
    var totaleDebiti = document.getElementById('totaleDebiti').value

    // E) Ratei e risconti
    sommaRateiRiscontiPassivi()
    var totaleRateiRiscontiAttivi = document.getElementById('totaleRateiRiscontiPassivi').value

    // TOTALE PASSIVO
    totalePassivo = parseFloat(totalePatrimonioNetto) + parseFloat(totaleFondiRischiOneri) + 
    parseFloat(totaleTrattamentoFineRapporto) + parseFloat(totaleDebiti) + parseFloat(totaleRateiRiscontiAttivi)
    
    document.getElementById('totalePassivo').value = totalePassivo.toFixed(2)
    
    // richiamo funzioni per riclassificazione
    sommeRiclassificazioneSP()
}

function sommaImmobilizzazioniImmateriali() {
    var arr = document.getElementsByName('immobilizzazioniImmateriali');
    var tot = 0;
    for (var i = 0; i < arr.length; i++) {
        if (parseFloat(arr[i].value))
            tot += parseFloat(arr[i].value);
    }
    document.getElementById('totaleImmobilizzazioniImmateriali').value = tot.toFixed(2);
}

function sommaImmobilizzazioniMateriali() {
    var arr = document.getElementsByName('immobilizzazioniMateriali');
    var tot = 0;
    for (var i = 0; i < arr.length; i++) {
        if (parseFloat(arr[i].value))
            tot += parseFloat(arr[i].value);
    }
    document.getElementById('totaleImmobilizzazioniMateriali').value = tot.toFixed(2);
}

function sommaImmobilizzazioniFinanziarie() {
    var arr = document.getElementsByName('immobilizzazioniFinanziarie');
    var tot = 0;
    for (var i = 0; i < arr.length; i++) {
        if (parseFloat(arr[i].value))
            tot += parseFloat(arr[i].value);
    }
    document.getElementById('totaleImmobilizzazioniFinanziarie').value = tot.toFixed(2);
}

function sommaRimanenze() {
    var arr = document.getElementsByName('rimanenze');
    var tot = 0;
    for (var i = 0; i < arr.length; i++) {
        if (parseFloat(arr[i].value))
            tot += parseFloat(arr[i].value);
    }
    document.getElementById('totaleRimanenze').value = tot.toFixed(2);
}

function sommaCrediti() {
    var arr = document.getElementsByName('creditiAttivoCircolante');
    var tot = 0;
    for (var i = 0; i < arr.length; i++) {
        if (parseFloat(arr[i].value))
            tot += parseFloat(arr[i].value);
    }
    document.getElementById('totaleCrediti').value = tot.toFixed(2);
}

function sommaAttivitaFinanziarie() {
    var arr = document.getElementsByName('attivitaFinanziarie');
    var tot = 0;
    for (var i = 0; i < arr.length; i++) {
        if (parseFloat(arr[i].value))
            tot += parseFloat(arr[i].value);
    }
    document.getElementById('totaleAttivitaFinanziarie').value = tot.toFixed(2);
}

function sommaDisponibilitaLiquide() {
    var arr = document.getElementsByName('disponibilitaLiquide');
    var tot = 0;
    for (var i = 0; i < arr.length; i++) {
        if (parseFloat(arr[i].value))
            tot += parseFloat(arr[i].value);
    }
    document.getElementById('totaleDisponibilitaLiquide').value = tot.toFixed(2);
}

function sommaRateiRiscontiAttivi() {
    var arr = document.getElementsByName('rateiRiscontiAttivo');
    var tot = 0;
    for (var i = 0; i < arr.length; i++) {
        if (parseFloat(arr[i].value))
            tot += parseFloat(arr[i].value);
    }
    document.getElementById('totaleRateiRiscontiAttivi').value = tot.toFixed(2);
}

function sommaPatrimonioNetto() {
    var arr = document.getElementsByName('patrimonioNetto');
    var tot = 0;
    for (var i = 0; i < arr.length; i++) {
        if (parseFloat(arr[i].value))
            tot += parseFloat(arr[i].value);
    }
    document.getElementById('totalePatrimonioNetto').value = tot.toFixed(2);
}

function sommaFondiRischiOneri() {
    var arr = document.getElementsByName('fondiRischiOneri');
    var tot = 0;
    for (var i = 0; i < arr.length; i++) {
        if (parseFloat(arr[i].value))
            tot += parseFloat(arr[i].value);
    }
    document.getElementById('totaleFondiRischiOneri').value = tot.toFixed(2);
}

function sommaRateiRiscontiPassivi() {
    var arr = document.getElementsByName('rateiRiscontiPassivo');
    var tot = 0;
    for (var i = 0; i < arr.length; i++) {
        if (parseFloat(arr[i].value))
            tot += parseFloat(arr[i].value);
    }
    document.getElementById('totaleRateiRiscontiPassivi').value = tot.toFixed(2);
}

function sommaDebiti() {
    var arr = document.getElementsByName('debiti');
    var tot = 0;
    for (var i = 0; i < arr.length; i++) {
        if (parseFloat(arr[i].value))
            tot += parseFloat(arr[i].value);
    }
    document.getElementById('totaleDebiti').value = tot.toFixed(2);
}


// FUNZIONI RICLASSIFICAZIONE

function sommeRiclassificazioneSP() {
    // A) TOTALE IMMOBILIZZAZIONI NETTE

    // Immobilizzazioni finanziarie e crediti infragruppo a m/l termine
    try{
        document.getElementById('SPimmobilizzazioniFinanziarie').value = 
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
        document.getElementById('SPimmobilizzazioniFinanziarie').value = 0
    }

    sommaImmobilizzazioniNette()
    var totaleImmobilizzazioniNette = document.getElementById('SPtotaleImmobilizzazioniNette').value

    // B) TOTALE ATTIVO CIRCOLANTE
    
    // crediti commerciali
    if((document.getElementById('creditiAttivoCircolanteClientiEntro12Mesi').value) != null &&
    (document.getElementById('accontiEntro12Mesi').value) != null){
        document.getElementById('SPcreditiCommerciali').value = 
        parseFloat(document.getElementById('creditiAttivoCircolanteClientiEntro12Mesi').value) - 
        parseFloat(document.getElementById('accontiEntro12Mesi').value)
    }
    else{
        document.getElementById('SPcreditiCommerciali').value = 0
    }
    // altri crediti
    try{
        console.log("try")
        document.getElementById('SPaltriCrediti').value = 
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
        document.getElementById('SPaltriCrediti').value = 0
        console.log("catch2")
        console.log(document.getElementById('SPaltriCrediti').value)
    }
    // ratei e risconti attivi
    document.getElementById('SPrateiRiscontiAttivi').value = document.getElementById('rateiRiscontiAttivo').value
    // liquidità
    try{
        document.getElementById('SPliquidita').value = 
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
        document.getElementById('SPliquidita').value = 0
        console.log(document.getElementById('SPliquidita').value)
    }


    sommaAttivoCircolante()
    var totaleAttivoCircolante = document.getElementById('SPtotaleAttivoCircolante').value

    //  C) TOTALE ATTIVO (A+B)
    var totaleAttivo = parseFloat(totaleImmobilizzazioniNette) + parseFloat(totaleAttivoCircolante)
    document.getElementById('SPtotaleAttivo').value = totaleAttivo.toFixed(2)
    
    // F) PATRIMONIO NETTO
    
    // capitale sociale
    try{
        document.getElementById('SPcapitaleSociale').value = 
        parseFloat(document.getElementById('creditiVersoSoci').value) -
        parseFloat(document.getElementById('azioniProprieImmobilizzazioniFinanziarie').value) -
        parseFloat(document.getElementById('azioniProprieAttivitaFinanziarie').value) +
        parseFloat(document.getElementById('capitale').value)
    }
    catch(error){
        document.getElementById('SPcapitaleSociale').value = 0
    }
    // riserve
    try{
        document.getElementById('SPriserve').value = 
        parseFloat(document.getElementById('riservaSovrapprezzoAzioni').value) +
        parseFloat(document.getElementById('riserveRivalutazione').value) +
        parseFloat(document.getElementById('riservaLegale').value) +
        parseFloat(document.getElementById('riservaAzioniProprie').value) +
        parseFloat(document.getElementById('riserveStatutarie').value) +
        parseFloat(document.getElementById('altreRiserve').value) +
        parseFloat(document.getElementById('utilePortatoNuovo').value)
    }
    catch(error){
        document.getElementById('SPriserve').value = 0
    }
    // reddito netto
    document.getElementById('SPredditoNetto').value = document.getElementById('utileEsercizio').value

    sommaPatrimonioNettoSP()
    var totalePatrimonioNetto = document.getElementById('SPtotalePatrimonioNetto').value


    // E) PASSIVO A M/L TERMINE
    
    // Debiti finanziari a medio - lungo termine
    try{
        document.getElementById('SPdebitiFinanziariMlTermine').value = 
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
        document.getElementById('SPdebitiFinanziariMlTermine').value = 0
    }
    // Altri debiti a medio - lungo termine
    try{
        document.getElementById('SPaltriDebiti').value = 
        parseFloat(document.getElementById('debitiVersoFornitoriOltre12Mesi').value) +
        parseFloat(document.getElementById('debitiRappresentatiTitoliCreditoOltre12Mesi').value) +
        parseFloat(document.getElementById('debitiTributariOltre12Mesi').value) +
        parseFloat(document.getElementById('debitiVersoIstituiPrevidenzaOltre12Mesi').value) +
        parseFloat(document.getElementById('altriDebitiOltre12Mesi').value)
    }
    catch(error){
        document.getElementById('SPaltriDebiti').value = 0
    }
    // fondo tfr
    document.getElementById('SPfondoTFR').value = document.getElementById('trattamentoFineRapportoSP').value
    // Altri fondi
    try{
        document.getElementById('SPaltriFondi').value = 
        parseFloat(document.getElementById('trattamentoQuiescenzaObblighiSimili').value) +
        parseFloat(document.getElementById('imposteAncheDifferite').value) +
        parseFloat(document.getElementById('altriFondi').value)
    }
    catch(error){
        document.getElementById('SPaltriFondi').value = 0
    }
    sommaPassivoMlTermine()
    var totalePassivoMlTermine = document.getElementById('SPtotalePassivoMlTermine').value

    // D) PASSIVO A BREVE TERMINE
    
    // Debiti finanziari a breve termine
    try{
        document.getElementById('SPdebitiFinanziariBreveTermine').value = 
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
        document.getElementById('SPdebitiFinanziariBreveTermine').value = 0
    }
    // Debiti commerciali verso fornitori
    try{
        document.getElementById('SPdebitiCommercialiFornitori').value = 
        parseFloat(document.getElementById('debitiVersoFornitoriEntro12Mesi').value) +
        parseFloat(document.getElementById('debitiRappresentatiTitoliCreditoEntro12Mesi').value)
    }
    catch(error){
        document.getElementById('SPdebitiCommercialiFornitori').value = 0
    }
    // Altri debiti non finanziari
    try{
        document.getElementById('SPaltriDebitiNonFinanziari').value = 
        parseFloat(document.getElementById('debitiTributariEntro12Mesi').value) +
        parseFloat(document.getElementById('debitiVersoIstituiPrevidenzaEntro12Mesi').value) +
        parseFloat(document.getElementById('altriDebitiEntro12Mesi').value)
    }
    catch(error){
        document.getElementById('SPaltriDebitiNonFinanziari').value = 0
    }
    // Ratei e risconti passivi
    document.getElementById('SPrateiRiscontiPassivi').value = document.getElementById('rateiRiscontiPassivo').value


    sommaPassivoBreveTermine()
    var totalePassivoBreveTermine = document.getElementById('SPtotalePassivoBreveTermine').value
    
    // (G) TOTALE PASSIVO E PATRIMONIO NETTO (D+E+F)
    var totalePassivoPatrimonioNetto = parseFloat(totalePatrimonioNetto) + parseFloat(totalePassivoMlTermine) + parseFloat(totalePassivoBreveTermine)
    document.getElementById('SPtotalePassivoPatrimonioNetto').value = totalePassivoPatrimonioNetto.toFixed(2)

    // EVENTUALE SQUADRATURA ATTIVO/PASS
    var eventualeSquadraturaAttivoPass = parseFloat(totaleAttivo) - parseFloat(totalePassivoPatrimonioNetto)
    document.getElementById('SPeventualeSquadraturaAttivoPass').value = eventualeSquadraturaAttivoPass.toFixed(2)
}

function sommaImmobilizzazioniNette() {
    var arr = document.getElementsByName('SPimmobilizzazioniNette');
    var tot = 0;
    for (var i = 0; i < arr.length; i++) {
        if (parseFloat(arr[i].value))
            tot += parseFloat(arr[i].value);
    }
    document.getElementById('SPtotaleImmobilizzazioniNette').value = tot.toFixed(2)
}

function sommaAttivoCircolante() {
    var arr = document.getElementsByName('SPattivoCircolante');
    var tot = 0;
    for (var i = 0; i < arr.length; i++) {
        if (parseFloat(arr[i].value))
            tot += parseFloat(arr[i].value);
    }
    document.getElementById('SPtotaleAttivoCircolante').value = tot.toFixed(2)
}

function sommaPatrimonioNettoSP() {
    var arr = document.getElementsByName('SPpatrimonioNetto');
    var tot = 0;
    for (var i = 0; i < arr.length; i++) {
        if (parseFloat(arr[i].value))
            tot += parseFloat(arr[i].value);
    }
    document.getElementById('SPtotalePatrimonioNetto').value = tot.toFixed(2)
}

function sommaPassivoMlTermine() {
    var arr = document.getElementsByName('SPpassivoMLTermine');
    var tot = 0;
    for (var i = 0; i < arr.length; i++) {
        if (parseFloat(arr[i].value))
            tot += parseFloat(arr[i].value);
    }
    document.getElementById('SPtotalePassivoMlTermine').value = tot.toFixed(2)
}

function sommaPassivoBreveTermine() {
    var arr = document.getElementsByName('SPpassivoBreveTermine');
    var tot = 0;
    for (var i = 0; i < arr.length; i++) {
        if (parseFloat(arr[i].value))
            tot += parseFloat(arr[i].value);
    }
    document.getElementById('SPtotalePassivoBreveTermine').value = tot.toFixed(2)
}
