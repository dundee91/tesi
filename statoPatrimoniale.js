function sommeSP() {

    /* ATTIVO */

    // A) Crediti verso soci
    var totaleCreditiVersoSoci = ('#creditiVersoSoci').value
    $('#totaleCreditiVersoSoci').maskMoney('mask', totaleCreditiVersoSoci)[0]

    // B) Immobilizzazioni
    sommaImmobilizzazioniImmateriali()
    sommaImmobilizzazioniMateriali()
    sommaImmobilizzazioniFinanziarie()
    var totaleImmobilizzazioniImmateriali = $('#totaleImmobilizzazioniImmateriali').maskMoney('unmasked')[0]
    var totaleImmobilizzazioniMateriali = $('#totaleImmobilizzazioniMateriali').maskMoney('unmasked')[0]
    var totaleImmobilizzazioniFinanziarie = $('#totaleImmobilizzazioniFinanziarie').maskMoney('unmasked')[0]
    var totaleImmobilizzazioni = totaleImmobilizzazioniImmateriali + totaleImmobilizzazioniMateriali + totaleImmobilizzazioniFinanziarie
    $('#totaleImmobilizzazioni').maskMoney('mask', totaleImmobilizzazioni)[0]
    // per riclassificazione finanziario e funzionale
    $('#SPFimmobilizzazioniImmateriali').maskMoney('mask', totaleImmobilizzazioniImmateriali)[0]
    $('#SPFimmobilizzazioniMateriali').maskMoney('mask', totaleImmobilizzazioniMateriali)[0]
    $('#SPFOimmobilizzazioniImmateriali').maskMoney('mask', totaleImmobilizzazioniImmateriali)[0]
    $('#SPFOimmobilizzazioniMateriali').maskMoney('mask', totaleImmobilizzazioniMateriali)[0]

    // C) Attivo Circolante
    sommaRimanenze()
    sommaCrediti()
    sommaAttivitaFinanziarie()
    sommaDisponibilitaLiquide()
    var totaleRimanenze = $('#totaleRimanenze').maskMoney('unmasked')[0]
    var totaleCrediti = $('#totaleCrediti').maskMoney('unmasked')[0]
    var totaleAttivitaFinanziarie = $('#totaleAttivitaFinanziarie').maskMoney('unmasked')[0]
    var totaleDisponibilitaLiquide = $('#totaleDisponibilitaLiquide').maskMoney('unmasked')[0]
    var totaleAttivoCircolante = totaleRimanenze + totaleCrediti + totaleAttivitaFinanziarie + totaleDisponibilitaLiquide
    $('#totaleAttivoCircolante').maskMoney('mask', totaleAttivoCircolante)[0]
    // per riclassificazione finanziario e funzionale
    $('#SPFmagazzino').maskMoney('mask', totaleRimanenze)[0]
    $('#SPFOmagazzino').maskMoney('mask', totaleRimanenze)[0]


    // D) Ratei e Risconti
    sommaRateiRiscontiAttivi()
    var totaleRateiRiscontiAttivi = $('#totaleRateiRiscontiAttivi').maskMoney('unmasked')[0]

    // TOTALE ATTIVO
    totaleAttivo = totaleCreditiVersoSoci + totaleImmobilizzazioni + totaleAttivoCircolante + totaleRateiRiscontiAttivi
    $('#totaleAttivo').maskMoney('mask', totaleAttivo)[0]

    /* PASSIVO */

    // A) Patrimonio netto
    sommaPatrimonioNetto()
    var totalePatrimonioNetto = $('#totalePatrimonioNetto').maskMoney('unmasked')[0]

    // B) Fondi per rischi e oneri
    sommaFondiRischiOneri()
    var totaleFondiRischiOneri = $('#totaleFondiRischiOneri').maskMoney('unmasked')[0]

    // C) Trattamento Fine Rapporto
    var trattamentoFineRapportoSP = $('#trattamentoFineRapportoSP').maskMoney('unmasked')[0]
    var totaleTrattamentoFineRapporto = trattamentoFineRapportoSP

    // D) Debiti
    sommaDebiti()
    var totaleDebiti = $('#totaleDebiti').maskMoney('unmasked')[0]

    // E) Ratei e risconti
    sommaRateiRiscontiPassivi()
    var totaleRateiRiscontiAttivi = $('#totaleRateiRiscontiPassivi').maskMoney('unmasked')[0]

    // TOTALE PASSIVO
    totalePassivo = totalePatrimonioNetto + totaleFondiRischiOneri + totaleTrattamentoFineRapporto + totaleDebiti + totaleRateiRiscontiAttivi
    $('#totalePassivo').maskMoney('mask', totalePassivo)[0]    
}

function sommaImmobilizzazioniImmateriali() {
    var arr = $(document.getElementsByName('immobilizzazioniImmateriali')).maskMoney('unmasked')
    var tot = 0;
    for (var i = 0; i < arr.length; i++) {
      tot += arr[i];
    }
    $('#totaleImmobilizzazioniImmateriali').maskMoney('mask', tot)[0];
  }

function sommaImmobilizzazioniMateriali() {
    var arr = $(document.getElementsByName('immobilizzazioniMateriali')).maskMoney('unmasked');
    var tot = 0;
    for (var i = 0; i < arr.length; i++) {
            tot += arr[i]
    }
    $('#totaleImmobilizzazioniMateriali').maskMoney('mask', tot)[0];
}

function sommaImmobilizzazioniFinanziarie() {
    var arr = $(document.getElementsByName('immobilizzazioniFinanziarie')).maskMoney('unmasked');
    var tot = 0;
    for (var i = 0; i < arr.length; i++) {
            tot += arr[i]
    }
    $('#totaleImmobilizzazioniFinanziarie').maskMoney('mask', tot)[0]
}

function sommaRimanenze() {
    var arr = $(document.getElementsByName('rimanenze')).maskMoney('unmasked');
    var tot = 0;
    for (var i = 0; i < arr.length; i++) {
            tot += arr[i]
    }
    $('#totaleRimanenze').maskMoney('mask', tot)[0];
}

function sommaCrediti() {
    var arr = $(document.getElementsByName('creditiAttivoCircolante')).maskMoney('unmasked');
    var tot = 0;
    for (var i = 0; i < arr.length; i++) {
            tot += arr[i];
    }
    $('#totaleCrediti').maskMoney('mask', tot)[0];
}

function sommaAttivitaFinanziarie() {
    var arr = $(document.getElementsByName('attivitaFinanziarie')).maskMoney('unmasked');
    var tot = 0;
    for (var i = 0; i < arr.length; i++) {
            tot += arr[i]
    }
    $('#totaleAttivitaFinanziarie').maskMoney('mask', tot)[0];
}

function sommaDisponibilitaLiquide() {
    var arr = $(document.getElementsByName('disponibilitaLiquide')).maskMoney('unmasked');
    var tot = 0;
    for (var i = 0; i < arr.length; i++) {
            tot += arr[i];
    }
    $('#totaleDisponibilitaLiquide').maskMoney('mask', tot)[0];
}

function sommaRateiRiscontiAttivi() {
    var arr = $(document.getElementsByName('rateiRiscontiAttivo')).maskMoney('unmasked');
    var tot = 0;
    for (var i = 0; i < arr.length; i++) {
            tot += arr[i];
    }
    $('#totaleRateiRiscontiAttivi').maskMoney('mask', tot)[0];
}

function sommaPatrimonioNetto() {
    var arr = $(document.getElementsByName('patrimonioNetto')).maskMoney('unmasked');
    var tot = 0;
    for (var i = 0; i < arr.length; i++) {
            tot += arr[i]
    }
    $('#totalePatrimonioNetto').maskMoney('mask', tot)[0];
}

function sommaFondiRischiOneri() {
    var arr = $(document.getElementsByName('fondiRischiOneri')).maskMoney('unmasked');
    var tot = 0;
    for (var i = 0; i < arr.length; i++) {
            tot += arr[i]
    }
    $('#totaleFondiRischiOneri').maskMoney('mask', tot)[0];
}

function sommaRateiRiscontiPassivi() {
    var arr = $(document.getElementsByName('rateiRiscontiPassivo')).maskMoney('unmasked');
    var tot = 0;
    for (var i = 0; i < arr.length; i++) {
            tot += arr[i]
    }
    $('#totaleRateiRiscontiPassivi').maskMoney('mask', tot)[0];
}

function sommaDebiti() {
    var arr = $(document.getElementsByName('debiti')).maskMoney('unmasked');
    var tot = 0;
    for (var i = 0; i < arr.length; i++) {
            tot += arr[i]
    }
    $('#totaleDebiti').maskMoney('mask', tot)[0];
}
