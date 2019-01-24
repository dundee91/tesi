
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
    var arr = document.getElementsByName('valoreProduzione');
    var tot = 0;
    for (var i = 0; i < arr.length; i++) {
        if (parseFloat(arr[i].value))
            tot += parseFloat(arr[i].value);
    }
    document.getElementById('totaleValoreProduzione').value = tot.toFixed(2)
}

function sommaCostiProduzione() {
    var arr = document.getElementsByName('costiProduzione');
    var tot = 0;
    for (var i = 0; i < arr.length; i++) {
        if (parseFloat(arr[i].value))
            tot += parseFloat(arr[i].value);
    }
    document.getElementById('totaleCostiProduzione').value = tot.toFixed(2)
}

function sommaProventiOneriFinanziari() {
    var arr = document.getElementsByName('proventiOneriFinanziari');
    var tot = 0;
    for (var i = 0; i < arr.length; i++) {
        if (parseFloat(arr[i].value))
            tot += parseFloat(arr[i].value);
    }

    var arrMeno = document.getElementsByName('proventiOneriFinanziariMeno');
    var totMeno = 0;
    for (var i = 0; i < arrMeno.length; i++) {
        if (parseFloat(arrMeno[i].value))
            totMeno += parseFloat(arrMeno[i].value);
    }

    var totale = parseFloat(tot) - parseFloat(totMeno)
    document.getElementById('totaleProventiOneriFinanziari').value = totale.toFixed(2);
}

function sommaRettifiche() {
    var arrRiv = document.getElementsByName('rettificheRivalutazioni');
    var totRiv = 0;
    for (var i = 0; i < arrRiv.length; i++) {
        if (parseFloat(arrRiv[i].value))
        totRiv += parseFloat(arrRiv[i].value);
    }

    var arrSva = document.getElementsByName('rettificheSvalutazioni');
    var totSva = 0;
    for (var i = 0; i < arrSva.length; i++) {
        if (parseFloat(arrSva[i].value))
        totSva += parseFloat(arrSva[i].value);
    }

    var tot = parseFloat(totRiv) - parseFloat(totSva)
    document.getElementById('totaleRettifiche').value = tot.toFixed(2);
}

function sommaProventiOneriStraordinari() {
    var arrProventi = document.getElementsByName('proventiStraordinari');
    var totProventi = 0;
    for (var i = 0; i < arrProventi.length; i++) {
        if (parseFloat(arrProventi[i].value))
        totProventi += parseFloat(arrProventi[i].value);
    }
    var arrOneri = document.getElementsByName('oneriStraordinari');
    var totOneri = 0;
    for (var i = 0; i < arrOneri.length; i++) {
        if (parseFloat(arrOneri[i].value))
        totOneri += parseFloat(arrOneri[i].value);
    }
    var tot = parseFloat(totProventi) - parseFloat(totOneri)
    document.getElementById('totalePartiteStraordinarie').value = tot.toFixed(2);
}

const formatter = new Intl.NumberFormat('de-DE', {
    style:'currency', currency:'EUR'
})

function prova(e){
console.log("e :" + e.value)
console.log(new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(e.value));
// expected output: "123.456,79 €"
var t = e.value
e.value = formatter.format(t)
}