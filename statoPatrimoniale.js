
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
    // per riclassificazione finanziario e funzionale
    document.getElementById('SPFimmobilizzazioniImmateriali').value = parseFloat(totaleImmobilizzazioniImmateriali)
    document.getElementById('SPFimmobilizzazioniMateriali').value = parseFloat(totaleImmobilizzazioniMateriali)
    document.getElementById('SPFOimmobilizzazioniImmateriali').value = parseFloat(totaleImmobilizzazioniImmateriali)
    document.getElementById('SPFOimmobilizzazioniMateriali').value = parseFloat(totaleImmobilizzazioniMateriali)

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
    // per riclassificazione finanziario e funzionale
    document.getElementById('SPFmagazzino').value = parseFloat(totaleRimanenze)
    document.getElementById('SPFOmagazzino').value = parseFloat(totaleRimanenze)


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
    sommeRiclassificazioneSPF()
    sommeRiclassificazioneSPFO()
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

