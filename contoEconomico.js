
var validate = function (e) {
    var t = e.value;
    e.value = (t.indexOf(".") >= 0) ? (t.substr(0, t.indexOf(".")) + t.substr(t.indexOf("."), 3)) : t;
}

function sommeCE() {
    // A) Valore della produzione
    sommaValoreProduzione()
    var totaleValoreProduzione = document.getElementById('totaleValoreProduzione').value

    // B) Costo della produzione
    sommaCostiProduzione()
    var totaleCostiProduzione = document.getElementById('totaleCostiProduzione').value

    // Differenza tra Valore e Costi di Produzione
    var differenzaValoreCostiProduzione = parseFloat(totaleValoreProduzione) - parseFloat(totaleCostiProduzione)
    document.getElementById('differenzaValoreCostiProduzione').value = differenzaValoreCostiProduzione.toFixed(2)

    // C) Proventi e oneri finanziari
    sommaProventiOneriFinanziari()
    var totaleProventiOneriFinanziari = document.getElementById('totaleProventiOneriFinanziari').value

    // D) Rettifiche di valore di attività finanziarie
    sommaRettifiche()
    var totaleRettifiche = document.getElementById('totaleRettifiche').value

    // E) Proventi e oneri straordinari
    sommaProventiOneriStraordinari()
    var totalePartiteStraordinarie = document.getElementById('totalePartiteStraordinarie').value

    // Risultato prima delle imposte
    var risultatoPrimaDelleImposte = parseFloat(totaleValoreProduzione) - parseFloat(totaleCostiProduzione) + 
    parseFloat(totaleProventiOneriFinanziari) + parseFloat(totaleRettifiche) + parseFloat(totalePartiteStraordinarie)
    document.getElementById('risultatoPrimaImposte').value = risultatoPrimaDelleImposte.toFixed(2)

    // Imposte
    var imposteRedditoEsercizio = document.getElementById('imposteRedditoEsercizio').value
    if(imposteRedditoEsercizio == ""){
        var totaleImposteRedditoEsercizio = 0 
    }
    else{
        var totaleImposteRedditoEsercizio = (parseFloat(imposteRedditoEsercizio)).toFixed(2)
    }

    // Utile (perdite) dell'esercizio
    var utilePerditeEsercizio = parseFloat(risultatoPrimaDelleImposte) - parseFloat(totaleImposteRedditoEsercizio)
    document.getElementById('utilePerditeEsercizio').value = utilePerditeEsercizio.toFixed(2)

}

function sommaValoreProduzione() {
    var arr = $(document.getElementsByName('valoreProduzione')).maskMoney('unmasked');
    var tot = 0;
    for (var i = 0; i < arr.length; i++) {
            tot += arr[i]
    }
    $(document.getElementById('totaleValoreProduzione')).maskMoney('mask', tot)
}

function sommaCostiProduzione() {
    var arr = $(document.getElementsByName('costiProduzione')).maskMoney('unmasked');
    var tot = 0;
    for (var i = 0; i < arr.length; i++) {
            tot += arr[i]
    }
    $(document.getElementById('totaleCostiProduzione')).maskMoney('mask', tot)
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

    var totale = parseFloat(tot) - parseFloat(totMeno)
    $(document.getElementById('totaleProventiOneriFinanziari')).maskMoney('mask', tot)
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

    var tot = parseFloat(totRiv) - parseFloat(totSva)
    $(document.getElementById('totaleRettifiche')).maskMoney('mask', tot)
}

function sommaProventiOneriStraordinari() {
    var arrProventi = $(document.getElementsByName('proventiStraordinari')).maskMoney('unmasked');
    var totProventi = 0;
    for (var i = 0; i < arrProventi.length; i++) {
        totProventi += arrProventi[i]
    }
    $(document.getElementById('proventiStraordinari')).maskMoney('mask', tot)

    var arrOneri = $(document.getElementsByName('oneriStraordinari')).maskMoney('unmasked');
    var totOneri = 0;
    for (var i = 0; i < arrOneri.length; i++) {
        totOneri += arrOneri[i]
    }
    $(document.getElementById('oneriStraordinari')).maskMoney('mask', tot)

    var tot = parseFloat(totProventi) - parseFloat(totOneri)
    $(document.getElementById('totalePartiteStraordinarie')).maskMoney('mask', tot)
}
