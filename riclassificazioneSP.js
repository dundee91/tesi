
var validate = function (e) {
    var t = e.value;
    e.value = (t.indexOf(".") >= 0) ? (t.substr(0, t.indexOf(".")) + t.substr(t.indexOf("."), 3)) : t;
}

function sommeRiclassificazioneSP() {
    // A) TOTALE IMMOBILIZZAZIONI NETTE
    sommaImmobilizzazioniNette()
    var totaleImmobilizzazioniNette = document.getElementById('SPtotaleImmobilizzazioniNette').value

    // B) TOTALE ATTIVO CIRCOLANTE
    sommaAttivoCircolante()
    var totaleAttivoCircolante = document.getElementById('SPtotaleAttivoCircolante').value

    //  C) TOTALE ATTIVO (A+B)
    var totaleAttivo = parseFloat(totaleImmobilizzazioniNette) + parseFloat(totaleAttivoCircolante)
    document.getElementById('SPtotaleAttivo').value = totaleAttivo.toFixed(2)
    
    // F) PATRIMONIO NETTO
    sommaPatrimonioNettoSP()
    var totalePatrimonioNetto = document.getElementById('SPtotalePatrimonioNetto').value

    // E) PASSIVO A M/L TERMINE
    sommaPassivoMlTermine()
    var totalePassivoMlTermine = document.getElementById('SPtotalePassivoMlTermine').value

    // D) PASSIVO A BREVE TERMINE
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
