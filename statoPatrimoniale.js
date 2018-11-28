var validate = function (e) {
    var t = e.value;
    e.value = (t.indexOf(".") >= 0) ? (t.substr(0, t.indexOf(".")) + t.substr(t.indexOf("."), 3)) : t;
}

function somme() {

    sommaImmobilizzazioniImmateriali()
    sommaImmobilizzazioniMateriali()
    sommaImmobilizzazioniFinanziarie()

    var totaleImmobilizzazioniImmateriali = document.getElementById('totaleImmobilizzazioniImmateriali').value
    var totaleImmobilizzazioniMateriali = document.getElementById('totaleImmobilizzazioniMateriali').value
    var totaleImmobilizzazioniFinanziarie = document.getElementById('totaleImmobilizzazioniFinanziarie').value
    document.getElementById('totaleImmobilizzazioni').value = parseFloat(totaleImmobilizzazioniImmateriali) + parseFloat(totaleImmobilizzazioniMateriali) + parseFloat(totaleImmobilizzazioniFinanziarie)
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