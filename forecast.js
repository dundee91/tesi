
// FUNZIONI FORECAST

function calcoloForecast() {
    /* Tab. 1 - Ricavi e costi operativi */

    // Ricavi vendite
    var FCricaviVendite = $('#CEtotaleValoreProduzione').maskMoney('unmasked')[0]
    $('#FCricaviVendite').maskMoney('mask',FCricaviVendite)[0]

    // Consumi di merci
    var FCconsumiMerci = $('#CEconsumoMateriePrime').maskMoney('unmasked')[0]
    $('#FCconsumiMerci').maskMoney('mask',FCconsumiMerci)[0]

    // Inc. % sul valore produzione
    var SPFfondoTFR = 
    (
        $('#CEconsumoMateriePrime').maskMoney('unmasked')[0] /
        $('#CEtotaleValoreProduzione').maskMoney('unmasked')[0]
    ) * 100

    $('#SPFfondoTFR').maskMoney({suffix:" %"},SPFfondoTFR)[0]

    // di cui canoni in leasing
    var FCdiCuiCanoniLeasing = $('#CEcanoniLeasing').maskMoney('unmasked')[0]
    $('#FCdiCuiCanoniLeasing').maskMoney('mask',FCdiCuiCanoniLeasing)[0]

    // Costi del personale
    var FCcostiDelPersonale = $('#CEcostiPersonale').maskMoney('unmasked')[0]
    $('#FCcostiDelPersonale').maskMoney('mask',FCcostiDelPersonale)[0]

    // Inc. % sul valore produzione    
    var FCincValProdCostiPersonale = 
    (
        $('#FCcostiDelPersonale').maskMoney('unmasked')[0] /
        $('#CEtotaleValoreProduzione').maskMoney('unmasked')[0]
    ) * 100

    $('#FCincValProdCostiPersonale').maskMoney({suffix:" %"},FCincValProdCostiPersonale)[0]

    // Inc. % su costo personale
    var FCincCostoPersonale = 
    (
        $('#FCaccantonamentoTFR').maskMoney('unmasked')[0] /
        $('#FCincValProdCostiPersonale').maskMoney('unmasked')[0]
    ) * 100

    $('#FCincCostoPersonale').maskMoney({suffix:" %"},FCincCostoPersonale)[0]

    // utilizzi fondo TFR
    var FCutilizziFondoTFR =
    $('#FCaccantonamentoTFR').maskMoney('unmasked')[0] -
    $('#SPFfondoTFR').maskMoney('unmasked')[0]

    $('#FCutilizziFondoTFR').maskMoney('mask',FCutilizziFondoTFR)[0]

    // utilizzi altri fondi
    var FCutilizziAltriFondi =
    $('#FCaccantonamenti').maskMoney('unmasked')[0] -
    $('#SPFaltriFondi').maskMoney('unmasked')[0]

    $('#FCutilizziAltriFondi').maskMoney('mask',FCutilizziAltriFondi)[0]

    /* Tab. 2 - Capitale circolante */
    // crediti verso clienti
    var FCcreditiVersoClienti = 
    $('#SPFcreditiCommerciali').maskMoney('unmasked')[0] /
    ($('#CEricaviVendite').maskMoney('unmasked')[0] / 365)

    $('#FCcreditiVersoClienti').maskMoney('mask',FCcreditiVersoClienti)[0]
    
    // Debiti verso fornitori
    var FCdebitiVersoFornitori = 
    $('#SPFdebitiCommercialiFornitori').maskMoney('unmasked')[0] /
    (($('#CEconsumoMateriePrime').maskMoney('unmasked')[0] + $('#CEtotaleConsumiEsterni').maskMoney('unmasked')[0]) / 365)
    $('#FCdebitiVersoFornitori').maskMoney('mask',FCdebitiVersoFornitori)[0]

    // Magazzino materie prime
    var FCmagazzinoMateriePrime = 
    $('#SPFmateriePrime').maskMoney('unmasked')[0] /
    ($('#CEconsumoMateriePrime').maskMoney('unmasked')[0] / 365)

    $('#FCmagazzinoMateriePrime').maskMoney('mask',FCmagazzinoMateriePrime)[0]

    // Magazzino prodotti finiti
    var FCmagazzinoProdottiFiniti = 
    $('#SPFprodottiFiniti').maskMoney('unmasked')[0] /
    ($('#CEproduzioneInterna').maskMoney('unmasked')[0] / 365)

    $('#FCmagazzinoProdottiFiniti').maskMoney('mask',FCmagazzinoProdottiFiniti)[0]
    
    // Altri crediti e Liquidità
    var FCaltriCreditiLiquidita =
    $('#SPFaltriCrediti').maskMoney('unmasked')[0] +
    $('#SPFliquidita').maskMoney('unmasked')[0]

    $('#FCaltriCreditiLiquidita').maskMoney('mask',FCaltriCreditiLiquidita)[0]

    // Acquisto netto di immob. Finaziarie
    var FCacquistoNettoImmobFinanziarie = $('#SPFimmobilizzazioniFinanziarie').maskMoney('unmasked')[0]
    $('#FCacquistoNettoImmobFinanziarie').maskMoney('mask',FCacquistoNettoImmobFinanziarie)[0]

    // Debiti non finanziari a L.T.
    var FCdebitiNonFinanziariLT = 
    $('#SPFaltriDebiti').maskMoney('unmasked')[0] +
    $('#SPFrateiRiscontiPassivi').maskMoney('unmasked')[0]
    
    $('#FCdebitiNonFinanziariLT').maskMoney('mask',FCdebitiNonFinanziariLT)[0]
    
}