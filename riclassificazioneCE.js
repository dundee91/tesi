function sommeRiclassificazioneCE() {
    
    // Ricavi delle vendite
    document.getElementById('CEricaviVendite').value = document.getElementById('ricaviVendite').value
    // Produzione interna 
    try{
        document.getElementById('CEproduzioneInterna').value = 
        parseFloat(document.getElementById('variazioniRimanenze').value) +
        parseFloat(document.getElementById('variazioniLavoriInCorso').value) +
        parseFloat(document.getElementById('incrementiImmobilizzazioniLavoriInterni').value)
    }
    catch(error){
        document.getElementById('CEproduzioneInterna').value = 0
    }    
    // VALORE DELLA PRODUZIONE
    sommaValoreProduzioneCE()
    var totaleValoreProduzione = document.getElementById('CEtotaleValoreProduzione').value

    // Consumo materie prime, sussidiarie di consumo e merci
    try{
        document.getElementById('CEconsumoMateriePrime').value = -
        parseFloat(document.getElementById('materiePrimeCE').value) -
        parseFloat(document.getElementById('variazioneRimanenzeMateriePrime').value)
    }
    catch(error){
        document.getElementById('CEconsumoMateriePrime').value = 0
    }
    // Costi per servizi
    document.getElementById('CEcostiServizi').value = - parseFloat(document.getElementById('servizi').value)
    // Altri costi operativi esterni
    try{
        document.getElementById('CEaltriCostiOperativiEsterni').value = -
        parseFloat(document.getElementById('godimentoBeniTerzi').value) -
        parseFloat(document.getElementById('oneriDiversiGestione').value)
    }
    catch(error){
        document.getElementById('CEaltriCostiOperativiEsterni').value = 0
    }
    // CONSUMI ESTERNI
    sommaConsumiEsterni()
    var totaleConsumiEsterni = document.getElementById('CEtotaleConsumiEsterni').value
    // VALORE AGGIUNTO (VP - CONS)
    var valoreAggiunto = parseFloat(totaleValoreProduzione) + parseFloat(totaleConsumiEsterni)
    document.getElementById('CEvaloreAggiunto').value = valoreAggiunto.toFixed(2)

    // Costi del personale 
    try{
        document.getElementById('CEcostiPersonale').value = -
        parseFloat(document.getElementById('salariStipendi').value) -
        parseFloat(document.getElementById('oneriSociali').value) -
        parseFloat(document.getElementById('trattamentoFineRapportoCE').value)  -
        parseFloat(document.getElementById('trattamentoQuiescenzaSimili').value) -
        parseFloat(document.getElementById('altriCosti').value)
    }
    catch(error){
        document.getElementById('CEcostiPersonale').value = 0
    }
    var totaleCostiPersonale = document.getElementById('CEcostiPersonale').value

    // MARGINE OPERATIVO LORDO (VA - CP)
    var margineOperativoLordo = parseFloat(valoreAggiunto) + parseFloat(totaleCostiPersonale)
    document.getElementById('CEtotaleMargineOperativoLordo').value = margineOperativoLordo.toFixed(2)   
    
    // Ammortamenti 
    try{
        document.getElementById('CEammortamenti').value = -
        parseFloat(document.getElementById('ammortamentoImmobilizzazioniImmateriali').value) -
        parseFloat(document.getElementById('ammortamentoImmobilizzazioniMateriali').value)
    }
    catch(error){
        document.getElementById('CEammortamenti').value = 0
    }
    // Canoni leasing
    document.getElementById('CEcanoniLeasing').value = - document.getElementById('diCuiCanoniLeasing').value
    // Accantonamenti e svalutazioni 
    try{
        document.getElementById('CEaccantonamentiSvalutazioni').value = -
        parseFloat(document.getElementById('altreSvalutazioniImmobilizzazioni').value) -
        parseFloat(document.getElementById('svalutazioniCreditiCompresiAttivoCircolante').value) -
        parseFloat(document.getElementById('accantonamentiPerRischi').value) -
        parseFloat(document.getElementById('altriAccantonamenti').value)
    }
    catch(error){
        document.getElementById('CEaccantonamentiSvalutazioni').value = 0
    } 

    // Ammortamenti e svalutazioni
    sommaAmmortamentiSvalutazioni()
    var ammortamentiSvalutazioni = document.getElementById('CEtotaleAmmortamentiSvalutazioni').value
    
    // Altri proventi operativi
    document.getElementById('CEaltriProventiOperativi').value = document.getElementById('altriRicaviProventi').value
    // Proventi finanziari
    try{
        document.getElementById('CEproventiFinanziari').value = 
        //15) Proventi da partecipazioni
        parseFloat(document.getElementById('proventiDaControllate').value) +
        parseFloat(document.getElementById('proventiDaCollegate').value) +
        parseFloat(document.getElementById('proventiDaControllanti').value) +
        //16) Altri proventi finanziari
        //a)
        parseFloat(document.getElementById('proventiCreditiIscrittiImmobilizzazioniControllate').value) +
        parseFloat(document.getElementById('proventiCreditiIscrittiImmobilizzazioniCollegate').value) +
        parseFloat(document.getElementById('proventiCreditiIscrittiImmobilizzazioniControllanti').value) +
        //b)
        parseFloat(document.getElementById('proventiTitoliIscrittiImmobilizzazioni').value) +
        //c)
        parseFloat(document.getElementById('proventiTitoliIscrittiAttivoCircolante').value) +
        //d)
        parseFloat(document.getElementById('proventiDiversiDaiPrecedentiControllate').value) +
        parseFloat(document.getElementById('proventiDiversiDaiPrecedentiCollegate').value) +
        parseFloat(document.getElementById('proventiDiversiDaiPrecedentiControllanti').value) +
        //17bis) Utili e perdite su cambi 
        parseFloat(document.getElementById('utiliPerditesuCambi').value)
      }
    catch(error){
        document.getElementById('CEproventiFinanziari').value = 0
    } 
    // Saldo gestione mobiliare
    document.getElementById('CEsaldoGestioneMobiliare').value = document.getElementById('totaleRettifiche').value   

    var totaleAltriProventiOperativiFinanziari = 
    parseFloat(document.getElementById('CEaltriProventiOperativi').value) + 
    parseFloat(document.getElementById('CEproventiFinanziari').value) + 
    parseFloat(document.getElementById('CEsaldoGestioneMobiliare').value)

    // RISULTATO OPERATIVO
    var risultatoOperativo = parseFloat(margineOperativoLordo) + parseFloat(ammortamentiSvalutazioni) + parseFloat(totaleAltriProventiOperativiFinanziari)
    document.getElementById('CEtotaleRisultatoOperativo').value = risultatoOperativo.toFixed(2)
     
    // Oneri finanziari 
    try{
        document.getElementById('CEoneriFinanziari').value = -
        (
            parseFloat(document.getElementById('interessiAltriOneriFinanziariDaControllate').value) +
            parseFloat(document.getElementById('interessiAltriOneriFinanziariDaCollegate').value) +
            parseFloat(document.getElementById('interessiAltriOneriFinanziariDaControllanti').value)
        )
    }
    catch(error){
        document.getElementById('CEoneriFinanziari').value = 0
    }
    var totaleOneriFinanziari = document.getElementById('CEoneriFinanziari').value
    
    // RISULTATO LORDO
    var risultatoLordo = parseFloat(risultatoOperativo) + parseFloat(totaleOneriFinanziari)
    document.getElementById('CEtotaleRisultatoLordo').value = risultatoLordo.toFixed(2)

    //Proventi straordinari 
    document.getElementById('CEproventiStraordinari').value = document.getElementById('proventiStraordinari').value 
    //Oneri straordinari 
    document.getElementById('CEoneriStraordinari').value = document.getElementById('oneriStraordinari').value 
    // RISULTATO DELL'AREA STRAORDINARIA
    document.getElementById('CErisultatoAreaStraordinaria').value = document.getElementById('totalePartiteStraordinarie').value
    var totaleRisultatoAreaStraordinaria = document.getElementById('CErisultatoAreaStraordinaria').value
    
    // RISULTATO ANTE IMPOSTE
    var risultatoAnteImposte = parseFloat(risultatoLordo) + parseFloat(totaleRisultatoAreaStraordinaria)
    document.getElementById('CEtotaleRisultatoAnteImposte').value = risultatoAnteImposte.toFixed(2)
    
    // Imposte sul reddito
    document.getElementById('CEimposteReddito').value = - document.getElementById('imposteRedditoEsercizio').value 
    var totaleImposteReddito = document.getElementById('CEimposteReddito').value    
    // RISULTATO NETTO
    var risultatoNetto = parseFloat(risultatoAnteImposte) + parseFloat(totaleImposteReddito)
    document.getElementById('CEtotaleRisultatoNetto').value = risultatoNetto.toFixed(2)

    
    // ATTIVO FUNZIONE FORECAST
    forecast()
}


function sommaValoreProduzioneCE() {
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

function sommaRettificheRivalutazioni() {
    var arr = document.getElementsByName('CErettificheRivalutazioni');
    var tot = 0;
    for (var i = 0; i < arr.length; i++) {
        if (parseFloat(arr[i].value))
            tot += parseFloat(arr[i].value);
    }
    document.getElementById('totaleRivalutazioni').value = tot.toFixed(2)
}

function sommaRettificheSvalutazioni() {
    var arr = document.getElementsByName('CErettificheSvalutazioni');
    var tot = 0;
    for (var i = 0; i < arr.length; i++) {
        if (parseFloat(arr[i].value))
            tot += parseFloat(arr[i].value);
    }
    document.getElementById('CEtotaleAmmortamentiSvalutazioni').value = tot.toFixed(2)
}