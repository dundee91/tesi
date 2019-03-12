
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
    
}

function sommaImmobilizzazioniImmateriali() {
    var arr = $(document.getElementsByName('immobilizzazioniImmateriali')).maskMoney('unmasked')
    var tot = 0;
    for (var i = 0; i < arr.length; i++) {
      tot += arr[i];
    }
    console.log('tot = ' + tot)
    //$('#totaleImmobilizzazioniImmateriali').maskMoney('mask', tot);
    var test = $('#totaleImmobilizzazioniImmateriali').maskMoney('mask', tot);
    console.log('tot finale = ' + test)
    $(document.getElementById('totaleImmobilizzazioniImmateriali')).maskMoney('mask', tot)
  }

function sommaImmobilizzazioniMateriali() {
    var arr = $(document.getElementsByName('immobilizzazioniMateriali')).maskMoney('unmasked');
    var tot = 0;
    for (var i = 0; i < arr.length; i++) {
            tot += arr[i]
    }
    $(document.getElementById('totaleImmobilizzazioniMateriali')).maskMoney('mask', tot)
}

function sommaImmobilizzazioniFinanziarie() {
    var arr = $(document.getElementsByName('immobilizzazioniFinanziarie')).maskMoney('unmasked');
    var tot = 0;
    for (var i = 0; i < arr.length; i++) {
            tot += arr[i]
    }
    $(document.getElementById('totaleImmobilizzazioniFinanziarie')).maskMoney('mask', tot)
}

function sommaRimanenze() {
    var arr = $(document.getElementsByName('rimanenze')).maskMoney('unmasked');
    var tot = 0;
    for (var i = 0; i < arr.length; i++) {
            tot += arr[i]
    }
    $(document.getElementById('totaleRimanenze')).maskMoney('mask', tot);
}

function sommaCrediti() {
    var arr = $(document.getElementsByName('creditiAttivoCircolante')).maskMoney('unmasked');
    var tot = 0;
    for (var i = 0; i < arr.length; i++) {
            tot += arr[i];
    }
    $(document.getElementById('totaleCrediti')).maskMoney('mask', tot);
}

function sommaAttivitaFinanziarie() {
    var arr = $(document.getElementsByName('attivitaFinanziarie')).maskMoney('unmasked');
    var tot = 0;
    for (var i = 0; i < arr.length; i++) {
            tot += arr[i]
    }
    $(document.getElementById('totaleAttivitaFinanziarie')).maskMoney('mask', tot);
}

function sommaDisponibilitaLiquide() {
    var arr = $(document.getElementsByName('disponibilitaLiquide')).maskMoney('unmasked');
    var tot = 0;
    for (var i = 0; i < arr.length; i++) {
            tot += arr[i];
    }
    $(document.getElementById('totaleDisponibilitaLiquide')).maskMoney('mask', tot);
}

function sommaRateiRiscontiAttivi() {
    var arr = $(document.getElementsByName('rateiRiscontiAttivo')).maskMoney('unmasked');
    var tot = 0;
    for (var i = 0; i < arr.length; i++) {
            tot += arr[i];
    }
    $(document.getElementById('totaleRateiRiscontiAttivi')).maskMoney('mask', tot);
}

function sommaPatrimonioNetto() {
    var arr = $(document.getElementsByName('patrimonioNetto')).maskMoney('unmasked');
    var tot = 0;
    for (var i = 0; i < arr.length; i++) {
            tot += arr[i]
    }
    $(document.getElementById('totalePatrimonioNetto')).maskMoney('mask', tot);
}

function sommaFondiRischiOneri() {
    var arr = $(document.getElementsByName('fondiRischiOneri')).maskMoney('unmasked');
    var tot = 0;
    for (var i = 0; i < arr.length; i++) {
            tot += arr[i]
    }
    $(document.getElementById('totaleFondiRischiOneri')).maskMoney('mask', tot);
}

function sommaRateiRiscontiPassivi() {
    var arr = $(document.getElementsByName('rateiRiscontiPassivo')).maskMoney('unmasked');
    var tot = 0;
    for (var i = 0; i < arr.length; i++) {
            tot += arr[i]
    }
    $(document.getElementById('totaleRateiRiscontiPassivi')).maskMoney('mask', tot);
}

function sommaDebiti() {
    var arr = $(document.getElementsByName('debiti')).maskMoney('unmasked');
    var tot = 0;
    for (var i = 0; i < arr.length; i++) {
            tot += arr[i]
    }
    $(document.getElementById('totaleDebiti')).maskMoney('mask', tot);
}
