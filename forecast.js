
// FUNZIONI FORECAST

function forecast() {
    /* Tab. 1 - Ricavi e costi operativi */

    // Ricavi vendite
    document.getElementById('FCricaviVendite').value = parseFloat(document.getElementById('CEtotaleValoreProduzione').value)

    // Consumi di merci
    document.getElementById('FCconsumiMerci').value = parseFloat(document.getElementById('CEconsumoMateriePrime').value)

    // Inc. % sul valore produzione
    var incValProdConsumiMerci = 
    (
    parseFloat(document.getElementById('CEconsumoMateriePrime').value) / 
    parseFloat(document.getElementById('CEtotaleValoreProduzione').value)
    ) * 100

    document.getElementById('FCincValProdConsumiMerci').value = incValProdConsumiMerci.toFixed(2)

    // di cui canoni in leasing
    document.getElementById('FCdiCuiCanoniLeasing').value = - parseFloat(document.getElementById('CEcanoniLeasing').value)

    // Costi del personale
    document.getElementById('FCcostiDelPersonale').value = - parseFloat(document.getElementById('CEcostiPersonale').value)

    // Inc. % sul valore produzione
    var FCincValProdCostiPersonale = 
    (
    parseFloat(document.getElementById('FCcostiDelPersonale').value) / 
    parseFloat(document.getElementById('CEtotaleValoreProduzione').value)
    ) * 100

    document.getElementById('FCincValProdCostiPersonale').value = FCincValProdCostiPersonale.toFixed(2)

    // Inc. % su costo personale
    var FCincCostoPersonale = 
    (
    parseFloat(document.getElementById('FCaccantonamentoTFR').value) / 
    parseFloat(document.getElementById('FCincValProdCostiPersonale').value)
    ) * 100

    document.getElementById('FCincCostoPersonale').value = FCincCostoPersonale.toFixed(2)

    // utilizzi fondo TFR
    document.getElementById('FCutilizziFondoTFR').value = 
    parseFloat(document.getElementById('FCaccantonamentoTFR').value) - 
    parseFloat(document.getElementById('SPFfondoTFR').value) 

    // utilizzi altri fondi
    document.getElementById('FCutilizziAltriFondi').value = 
    parseFloat(document.getElementById('FCaccantonamenti').value) - 
    parseFloat(document.getElementById('SPFaltriFondi').value)   

    /* Tab. 2 - Capitale circolante */
    // crediti verso clienti
    document.getElementById('FCcreditiVersoClienti').value =
    (parseFloat(document.getElementById('SPFcreditiCommerciali').value) /
    (parseFloat(document.getElementById('CEricaviVendite').value) / 365)).toFixed(2)  
    
    // Debiti verso fornitori
    document.getElementById('FCdebitiVersoFornitori').value =
    (parseFloat(document.getElementById('SPFdebitiCommercialiFornitori').value) /
    ((parseFloat(document.getElementById('CEconsumoMateriePrime').value) + parseFloat(document.getElementById('CEtotaleConsumiEsterni').value)) / 365)).toFixed(2)

    // Magazzino materie prime
    try{
        console.log(parseFloat(document.getElementById('SPFmateriePrime').value))
        document.getElementById('FCmagazzinoMateriePrime').value =
        (parseFloat(document.getElementById('SPFmateriePrime').value) /
        (parseFloat(document.getElementById('CEconsumoMateriePrime').value) / 365)).toFixed(2)   
    }
    catch(error){
        console.log("catch")
        console.log(error)
    }

    // Magazzino prodotti finiti
    document.getElementById('FCmagazzinoProdottiFiniti').value = 
    (parseFloat(document.getElementById('SPFprodottiFiniti').value) /
    (parseFloat(document.getElementById('CEproduzioneInterna').value) / 365)).toFixed(2) 
    
    // Altri crediti e Liquidità
    document.getElementById('FCaltriCreditiLiquidita').value =
    (parseFloat(document.getElementById('SPFaltriCrediti').value) + parseFloat(document.getElementById('SPFliquidita').value)).toFixed(2)
}