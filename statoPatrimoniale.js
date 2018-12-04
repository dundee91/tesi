const ipc = require('electron').ipcRenderer

var validate = function (e) {
    var t = e.value;
    e.value = (t.indexOf(".") >= 0) ? (t.substr(0, t.indexOf(".")) + t.substr(t.indexOf("."), 3)) : t;
}

function somme() {
    // ATTIVO
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

    // D) Ratei e Risconti
    sommaRateiRisconti()
    var totaleRateiRiscontiAttivi = document.getElementById('totaleRateiRiscontiAttivi').value

    // TOTALE ATTIVO
    totaleAttivo = parseFloat(totaleCreditiVersoSoci) + parseFloat(totaleImmobilizzazioni) + parseFloat(totaleAttivoCircolante) + parseFloat(totaleRateiRiscontiAttivi)
    document.getElementById('totaleAttivo').value = totaleAttivo.toFixed(2)
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

function sommaRateiRisconti() {
    var arr = document.getElementsByName('rateiRisconti');
    var tot = 0;
    for (var i = 0; i < arr.length; i++) {
        if (parseFloat(arr[i].value))
            tot += parseFloat(arr[i].value);
    }
    document.getElementById('totaleRateiRiscontiAttivi').value = tot.toFixed(2);
}
