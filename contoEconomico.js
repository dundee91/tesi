function sommeCE() {
    console.log("somme ce")
    // A) Valore della produzione
    sommaValoreProduzione()
    var totaleValoreProduzione = $('#totaleValoreProduzione').maskMoney('unmasked')[0]

    // B) Costo della produzione
    sommaCostiProduzione()
    var totaleCostiProduzione = $('#totaleCostiProduzione').maskMoney('unmasked')[0]

    // Differenza tra Valore e Costi di Produzione
    var differenzaValoreCostiProduzione = parseFloat(totaleValoreProduzione) - parseFloat(totaleCostiProduzione)
    $('#differenzaValoreCostiProduzione').maskMoney('mask',differenzaValoreCostiProduzione)[0]

    // C) Proventi e oneri finanziari
    sommaProventiOneriFinanziari()
    var totaleProventiOneriFinanziari = $('#totaleProventiOneriFinanziari').maskMoney('unmasked')[0]

    // D) Rettifiche di valore di attività finanziarie
    sommaRettifiche()
    var totaleRettifiche = $('#totaleRettifiche').maskMoney('unmasked')[0]

    // E) Proventi e oneri straordinari
    sommaProventiOneriStraordinari()
    var totalePartiteStraordinarie = $('#totalePartiteStraordinarie').maskMoney('unmasked')[0]

    // Risultato prima delle imposte
    var risultatoPrimaDelleImposte = parseFloat(totaleValoreProduzione) + parseFloat(totaleProventiOneriFinanziari) + 
    parseFloat(totaleRettifiche) + parseFloat(totalePartiteStraordinarie) - parseFloat(totaleCostiProduzione)
    $('#risultatoPrimaImposte').maskMoney('mask',risultatoPrimaDelleImposte)[0]

    // Imposte
    var totaleImposteRedditoEsercizio = $('#imposteRedditoEsercizio').maskMoney('unmasked')[0]

    // Utile (perdite) dell'esercizio
    var utilePerditeEsercizio = parseFloat(risultatoPrimaDelleImposte) - parseFloat(totaleImposteRedditoEsercizio)
    $('#utilePerditeEsercizio').maskMoney('mask', utilePerditeEsercizio)[0]
}

function sommaValoreProduzione() {
    var arr = $(document.getElementsByName('valoreProduzione')).maskMoney('unmasked');
    var tot = 0;
    for (var i = 0; i < arr.length; i++) {
            tot += arr[i]
    }
    $('#totaleValoreProduzione').maskMoney('mask', tot)[0]
}

function sommaCostiProduzione() {
    var arr = $(document.getElementsByName('costiProduzione')).maskMoney('unmasked');
    var tot = 0;
    for (var i = 0; i < arr.length; i++) {
            tot += arr[i]
    }
    $('#totaleCostiProduzione').maskMoney('mask', tot)[0]
}

function sommaProventiOneriFinanziari() {
    var arr = $(document.getElementsByName('proventiOneriFinanziari')).maskMoney('unmasked');
    var tot = 0;
    for (var i = 0; i < arr.length; i++) {
            tot += arr[i]
    }

    var arrMeno = $(document.getElementsByName('proventiOneriFinanziariMeno')).maskMoney('unmasked');
    var totMeno = 0;
    for (var i = 0; i < arrMeno.length; i++) {
            totMeno += arrMeno[i]
    }

    var totale = tot - totMeno
    $('#totaleProventiOneriFinanziari').maskMoney('mask', totale)[0]
}

function sommaRettifiche() {
    var arrRiv = $(document.getElementsByName('CErettificheRivalutazioni')).maskMoney('unmasked');
    var totRiv = 0;
    for (var i = 0; i < arrRiv.length; i++) {
        totRiv += arrRiv[i]
    }

    var arrSva = $(document.getElementsByName('CErettificheSvalutazioni')).maskMoney('unmasked');
    var totSva = 0;
    for (var i = 0; i < arrSva.length; i++) {
        totSva += arrSva[i]
    }

    var tot = totRiv - totSva
    $('#totaleRettifiche').maskMoney('mask', tot)[0]
}

function sommaProventiOneriStraordinari() {
    var arrProventi = $(document.getElementsByName('proventiStraordinari')).maskMoney('unmasked');
    var totProventi = 0;
    for (var i = 0; i < arrProventi.length; i++) {
        totProventi += arrProventi[i]
    }
    $('#proventiStraordinari').maskMoney('mask', totProventi)[0]

    var arrOneri = $(document.getElementsByName('oneriStraordinari')).maskMoney('unmasked');
    var totOneri = 0;
    for (var i = 0; i < arrOneri.length; i++) {
        totOneri += arrOneri[i]
    }
    $('#oneriStraordinari').maskMoney('mask', totOneri)[0]

    var tot = totProventi - totOneri
    $('#totalePartiteStraordinarie').maskMoney('mask', tot)[0]
}
