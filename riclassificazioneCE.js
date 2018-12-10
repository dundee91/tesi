
var validate = function (e) {
    var t = e.value;
    e.value = (t.indexOf(".") >= 0) ? (t.substr(0, t.indexOf(".")) + t.substr(t.indexOf("."), 3)) : t;
}

function sommeRiclassificazioneCE() {
    // VALORE DELLA PRODUZIONE
    sommaValoreProduzione()
    var totaleValoreProduzione = document.getElementById('CEtotaleValoreProduzione').value

    // Consumi esterni
    sommaConsumiEsterni()
    var totaleConsumiEsterni = document.getElementById('CEtotaleConsumiEsterni').value

    // VALORE AGGIUNTO (VP - CONS)
    var valoreAggiunto = parseFloat(totaleValoreProduzione) + parseFloat(totaleConsumiEsterni)
    document.getElementById('CEvaloreAggiunto').value = valoreAggiunto.toFixed(2)

    // Costi del personale
    var costiPersonale = document.getElementById('CEcostiPersonale').value
    if(costiPersonale == ""){
        var totaleCostiPersonale = 0 
    }
    else{
        var totaleCostiPersonale = (parseFloat(costiPersonale)).toFixed(2)
    }
    
    // MARGINE OPERATIVO LORDO (VA - CP)
    var margineOperativoLordo = parseFloat(valoreAggiunto) + parseFloat(totaleCostiPersonale)
    document.getElementById('CEtotaleMargineOperativoLordo').value = margineOperativoLordo.toFixed(2)

    // Ammortamenti e svalutazioni
    sommaAmmortamentiSvalutazioni()
    var ammortamentiSvalutazioni = document.getElementById('CEtotaleAmmortamentiSvalutazioni').value
    
    // Altri proventi operativi e finanziari
    var altriProventiOperativiFinanziari = document.getElementById('CEaltriProventiOperativiFinanziari').value
    if(altriProventiOperativiFinanziari == ""){
        var totaleAltriProventiOperativiFinanziari = 0 
    }
    else{
        var totaleAltriProventiOperativiFinanziari = (parseFloat(altriProventiOperativiFinanziari)).toFixed(2)
    }
    
    // RISULTATO OPERATIVO
    var risultatoOperativo = parseFloat(margineOperativoLordo) + parseFloat(ammortamentiSvalutazioni) + parseFloat(totaleAltriProventiOperativiFinanziari)
    document.getElementById('CEtotaleRisultatoOperativo').value = risultatoOperativo.toFixed(2)
     
    // Oneri finanziari
    var oneriFinanziari = document.getElementById('CEoneriFinanziari').value
    if(oneriFinanziari == ""){
        var totaleOneriFinanziari = 0 
    }
    else{
        var totaleOneriFinanziari = (parseFloat(oneriFinanziari)).toFixed(2)
    }
    
    // RISULTATO LORDO
    var risultatoLordo = parseFloat(risultatoOperativo) + parseFloat(totaleOneriFinanziari)
    document.getElementById('CEtotaleRisultatoLordo').value = risultatoLordo.toFixed(2)
    
    // RISULTATO DELL'AREA STRAORDINARIA
    var risultatoAreaStraordinaria = document.getElementById('CErisultatoAreaStraordinaria').value
    if(risultatoAreaStraordinaria == ""){
        var totaleRisultatoAreaStraordinaria = 0 
    }
    else{
        var totaleRisultatoAreaStraordinaria = (parseFloat(risultatoAreaStraordinaria)).toFixed(2)
    }
    
    // RISULTATO ANTE IMPOSTE
    var risultatoAnteImposte = parseFloat(risultatoLordo) + parseFloat(totaleRisultatoAreaStraordinaria)
    document.getElementById('CEtotaleRisultatoAnteImposte').value = risultatoAnteImposte.toFixed(2)
    
    // Imposte sul reddito
    var imposteReddito = document.getElementById('CEimposteReddito').value
    if(imposteReddito == ""){
        var totaleImposteReddito = 0 
    }
    else{
        var totaleImposteReddito = (parseFloat(imposteReddito)).toFixed(2)
    }
    
    // RISULTATO NETTO
    var risultatoNetto = parseFloat(risultatoAnteImposte) + parseFloat(totaleImposteReddito)
    document.getElementById('CEtotaleRisultatoNetto').value = risultatoNetto.toFixed(2)
}

function sommaValoreProduzione() {
    var arr = document.getElementsByName('CEvaloreProduzione');
    var tot = 0;
    for (var i = 0; i < arr.length; i++) {
        if (parseFloat(arr[i].value))
            tot += parseFloat(arr[i].value);
    }
    document.getElementById('CEtotaleValoreProduzione').value = tot.toFixed(2)
}

function sommaConsumiEsterni() {
    var arr = document.getElementsByName('CEconsumiEsterni');
    var tot = 0;
    for (var i = 0; i < arr.length; i++) {
        if (parseFloat(arr[i].value))
            tot += parseFloat(arr[i].value);
    }
    document.getElementById('CEtotaleConsumiEsterni').value = tot.toFixed(2)
}

function sommaAmmortamentiSvalutazioni() {
    var arr = document.getElementsByName('CEammortamentiSvalutazioni');
    var tot = 0;
    for (var i = 0; i < arr.length; i++) {
        if (parseFloat(arr[i].value))
            tot += parseFloat(arr[i].value);
    }
    document.getElementById('CEtotaleAmmortamentiSvalutazioni').value = tot.toFixed(2)
}