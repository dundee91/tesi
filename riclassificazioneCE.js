function sommeRiclassificazioneCE() {

    // Ricavi delle vendite
    var CEricaviVendite = $('#ricaviVendite').maskMoney('unmasked')[0]
    $('#CEricaviVendite').maskMoney('mask', CEricaviVendite)[0]

    // Produzione interna 

    var CEproduzioneInterna =
        $('#variazioniRimanenze').maskMoney('unmasked')[0] +
        $('#variazioniLavoriInCorso').maskMoney('unmasked')[0] +
        $('#incrementiImmobilizzazioniLavoriInterni').maskMoney('unmasked')[0]

    $('#CEproduzioneInterna').maskMoney('mask', CEproduzioneInterna)[0]


    // VALORE DELLA PRODUZIONE
    sommaValoreProduzioneCE()
    var totaleValoreProduzione = $('#CEtotaleValoreProduzione').maskMoney('unmasked')[0]

    // Consumo materie prime, sussidiarie di consumo e merci

    var CEconsumoMateriePrime = - $('#materiePrimeCE').maskMoney('unmasked')[0] - $('#variazioneRimanenzeMateriePrime').maskMoney('unmasked')[0]
    $('#CEconsumoMateriePrime').maskMoney('mask', CEconsumoMateriePrime)[0]

    // Costi per servizi
    var CEcostiServizi = $('#servizi').maskMoney('unmasked')[0]
    $('#CEcostiServizi').maskMoney('mask', CEcostiServizi)[0]

    // Altri costi operativi esterni

    var CEaltriCostiOperativiEsterni = - $('#godimentoBeniTerzi').maskMoney('unmasked')[0] - $('#oneriDiversiGestione').maskMoney('unmasked')[0]
    $('#CEaltriCostiOperativiEsterni').maskMoney('mask', CEaltriCostiOperativiEsterni)[0]

    // CONSUMI ESTERNI
    sommaConsumiEsterni()
    var totaleConsumiEsterni = $('#CEtotaleConsumiEsterni').maskMoney('unmasked')[0]

    // VALORE AGGIUNTO (VP - CONS)
    var valoreAggiunto = totaleValoreProduzione + totaleConsumiEsterni
    $('#CEvaloreAggiunto').maskMoney('mask', valoreAggiunto)[0]

    // Costi del personale
    var CEcostiPersonale = $('#salariStipendi').maskMoney('unmasked')[0] +
        $('#oneriSociali').maskMoney('unmasked')[0] +
        $('#trattamentoFineRapportoCE').maskMoney('unmasked')[0] +
        $('#trattamentoQuiescenzaSimili').maskMoney('unmasked')[0] +
        $('#altriCosti').maskMoney('unmasked')[0]

    $('#CEcostiPersonale').maskMoney('mask',CEcostiPersonale)[0]

    // MARGINE OPERATIVO LORDO (VA - CP)

    var CEtotaleMargineOperativoLordo = - valoreAggiunto - CEcostiPersonale
    $('#CEtotaleMargineOperativoLordo').maskMoney('mask', CEtotaleMargineOperativoLordo)[0]

    // Ammortamenti 

    var CEammortamenti = - $('#ammortamentoImmobilizzazioniImmateriali').maskMoney('unmasked')[0] -
        $('#ammortamentoImmobilizzazioniMateriali').maskMoney('unmasked')[0]

    $('#CEammortamenti').maskMoney('mask', CEammortamenti)[0]

    // Canoni leasing
    var CEcanoniLeasing = - $('#diCuiCanoniLeasing').maskMoney('unmasked')[0]
    $('#CEcanoniLeasing').maskMoney('mask', CEcanoniLeasing)[0]

    // Accantonamenti e svalutazioni 
    var CEaccantonamentiSvalutazioni = -
        $('#altreSvalutazioniImmobilizzazioni').maskMoney('unmasked')[0] -
        $('#svalutazioniCreditiCompresiAttivoCircolante').maskMoney('unmasked')[0] -
        $('#accantonamentiPerRischi').maskMoney('unmasked')[0] -
        $('#altriAccantonamenti').maskMoney('unmasked')[0]

    $('#CEaccantonamentiSvalutazioni').maskMoney('mask', CEaccantonamentiSvalutazioni)[0]

    // Ammortamenti e svalutazioni
    sommaAmmortamentiSvalutazioni()
    var CEtotaleAmmortamentiSvalutazioni = $('#CEtotaleAmmortamentiSvalutazioni').maskMoney('unmasked')[0]

    // Altri proventi operativi
    var CEaltriProventiOperativi = $('#altriRicaviProventi').maskMoney('unmasked')[0]
    $('#CEaltriProventiOperativi').maskMoney('mask', CEaltriProventiOperativi)[0]

    // Proventi finanziari
    var CEproventiFinanziari =
        //15) Proventi da partecipazioni
        $('#proventiDaControllate').maskMoney('unmasked')[0] +
        $('#proventiDaCollegate').maskMoney('unmasked')[0] +
        $('#proventiDaControllanti').maskMoney('unmasked')[0] +
        //16) Altri proventi finanziari
        //a)
        $('#proventiCreditiIscrittiImmobilizzazioniControllate').maskMoney('unmasked')[0] +
        $('#proventiCreditiIscrittiImmobilizzazioniCollegate').maskMoney('unmasked')[0] +
        $('#proventiCreditiIscrittiImmobilizzazioniControllanti').maskMoney('unmasked')[0] +
        //b)
        $('#proventiTitoliIscrittiImmobilizzazioni').maskMoney('unmasked')[0] +
        //c)
        $('#proventiTitoliIscrittiAttivoCircolante').maskMoney('unmasked')[0] +
        //d)
        $('#proventiDiversiDaiPrecedentiControllate').maskMoney('unmasked')[0] +
        $('#proventiDiversiDaiPrecedentiCollegate').maskMoney('unmasked')[0] +
        $('#proventiDiversiDaiPrecedentiControllanti').maskMoney('unmasked')[0] +
        //17bis) Utili e perdite su cambi 
        $('#utiliPerditesuCambi').maskMoney('unmasked')[0]

    $('#CEproventiFinanziari').maskMoney('mask', CEproventiFinanziari)[0]

    // Saldo gestione mobiliare
    var CEsaldoGestioneMobiliare = $('#totaleRettifiche').maskMoney('unmasked')[0]
    $('#CEsaldoGestioneMobiliare').maskMoney('mask', CEsaldoGestioneMobiliare)[0]

    var totaleAltriProventiOperativiFinanziari =
        $('#CEaltriProventiOperativi').maskMoney('unmasked')[0] +
        $('#CEproventiFinanziari').maskMoney('unmasked')[0] +
        $('#CEsaldoGestioneMobiliare').maskMoney('unmasked')[0]

    // RISULTATO OPERATIVO
    var CEtotaleRisultatoOperativo = CEtotaleMargineOperativoLordo + CEtotaleAmmortamentiSvalutazioni + totaleAltriProventiOperativiFinanziari
    $('#CEtotaleRisultatoOperativo').maskMoney('mask', CEtotaleRisultatoOperativo)[0]

    // Oneri finanziari 
    var CEoneriFinanziari =
        $('#interessiAltriOneriFinanziariDaControllate').maskMoney('unmasked')[0] +
        $('#interessiAltriOneriFinanziariDaCollegate').maskMoney('unmasked')[0] +
        $('#interessiAltriOneriFinanziariDaControllanti').maskMoney('unmasked')[0]

    $('#CEoneriFinanziari').maskMoney('mask', CEoneriFinanziari)[0]

    // RISULTATO LORDO
    var CEtotaleRisultatoLordo =
        $('#risultatoOperativo').maskMoney('unmasked')[0] +
        $('#totaleOneriFinanziari').maskMoney('unmasked')[0]

    $('#CEtotaleRisultatoLordo').maskMoney('mask', CEtotaleRisultatoLordo)[0]

    //Proventi straordinari 
    var CEproventiStraordinari = $('#proventiStraordinari').maskMoney('unmasked')[0]
    $('#CEproventiStraordinari').maskMoney('mask', CEproventiStraordinari)[0]

    //Oneri straordinari 
    var CEoneriStraordinari = $('#oneriStraordinari').maskMoney('unmasked')[0]
    $('#CEoneriStraordinari').maskMoney('mask', CEoneriStraordinari)[0]

    // RISULTATO DELL'AREA STRAORDINARIA
    var CErisultatoAreaStraordinaria = $('#totalePartiteStraordinarie').maskMoney('unmasked')[0]
    $('#CErisultatoAreaStraordinaria').maskMoney('mask', CErisultatoAreaStraordinaria)[0]

    // RISULTATO ANTE IMPOSTE
    var CEtotaleRisultatoAnteImposte =
        $('#CEtotaleRisultatoLordo').maskMoney('unmasked')[0] +
        $('#CErisultatoAreaStraordinaria').maskMoney('unmasked')[0]

    $('#CEtotaleRisultatoAnteImposte').maskMoney('mask', CEtotaleRisultatoAnteImposte)[0]

    // Imposte sul reddito
    var CEimposteReddito = - $('#imposteRedditoEsercizio').maskMoney('unmasked')[0]
    $('#CEimposteReddito').maskMoney('mask', CEimposteReddito)[0]

    // RISULTATO NETTO
    var CEtotaleRisultatoNetto = CEtotaleRisultatoAnteImposte + CEimposteReddito
    $('#CEtotaleRisultatoNetto').maskMoney('mask', CEtotaleRisultatoNetto)[0]
}


function sommaValoreProduzioneCE() {
    var arr = $(document.getElementsByName('CEvaloreProduzione')).maskMoney('unmasked');
    var tot = 0;
    for (var i = 0; i < arr.length; i++) {
        tot += arr[i];
    }
    $('#CEtotaleValoreProduzione').maskMoney('mask', tot)[0]
}

function sommaConsumiEsterni() {
    var arr = $(document.getElementsByName('CEconsumiEsterni')).maskMoney('unmasked');
    var tot = 0;
    for (var i = 0; i < arr.length; i++) {
        tot += arr[i];
    }
    $('#CEtotaleConsumiEsterni').maskMoney('mask', tot)[0]
}

function sommaAmmortamentiSvalutazioni() {
    var arr = $(document.getElementsByName('CEammortamentiSvalutazioni')).maskMoney('unmasked');
    var tot = 0;
    for (var i = 0; i < arr.length; i++) {
        tot += arr[i];
    }
    $('#CEtotaleAmmortamentiSvalutazioni').maskMoney('mask', tot)[0]
}

function sommaRettificheRivalutazioni() {
    var arr = $(document.getElementsByName('CErettificheRivalutazioni')).maskMoney('unmasked');
    var tot = 0;
    for (var i = 0; i < arr.length; i++) {
        tot += arr[i];
    }
    $('#totaleRivalutazioni').maskMoney('mask', tot)[0]
}

function sommaRettificheSvalutazioni() {
    var arr = $(document.getElementsByName('CErettificheSvalutazioni')).maskMoney('unmasked');
    var tot = 0;
    for (var i = 0; i < arr.length; i++) {
        tot += arr[i];
    }
    $('#CEtotaleAmmortamentiSvalutazioni').maskMoney('mask', tot)[0]
}
