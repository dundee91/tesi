
// FUNZIONI FORECAST

function forecast() {
    // Tab.1 - Ricavi e costi operativi

    // Ricavi vendite
    console.log("totale Valore Produzione = " + parseFloat(document.getElementById('CEtotaleValoreProduzione').value))
    document.getElementById('FCricaviVendite').value = parseFloat(document.getElementById('CEtotaleValoreProduzione').value)
    console.log("c'ho provato a fa la somma --> " + document.getElementById('FCricaviVendite').value)

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

}