const fs = require('fs')
const app = require('electron').remote
const dialog = app.dialog
const ipc = require('electron').ipcRenderer


function array() {

    //creo array per json
    let contenutoArray = []
    let testArray = {}
    let listaId = document.querySelectorAll("[id]")

    for (var i = 0; i < listaId.length; i++) {
        var newName = listaId[i].id
        var newValue = listaId[i].value
        testArray[newName] = newValue
    }
    contenutoArray.push(testArray)

    var json = JSON.stringify(contenutoArray);
    return json;
}

// salvataggio progetto
ipc.on('salva', function (ev, data) {

    //mostro finestra per salvataggio file
    dialog.showSaveDialog((filename) => {
        if (filename == undefined) {
            window.alert("non hai salvato il progetto...")
            return console.log("progetto non salvato")
        }
        //salvo file
        fs.writeFile(filename, array(), function (err) {
            if (err) {
                window.alert("Errore: " + err.message)
                alert.name()
                return console.log("Errore: " + err.message)
            }

            window.alert("Progetto Salvato!")
            console.log("progetto salvato")
        })
    })
})


// apertura progetto salvato
ipc.on('apri', function (ev, data) {

    //mostro finestra per apertura file
    dialog.showOpenDialog((filenames) => {
        if (filenames == undefined) {
            alert("Nessun file selezionato")
            console.log("Nessun file selezionato")
        }
        else {
            var filename = filenames[0]
            fs.readFile(filename, function (err, data) {
                if (err) {
                    window.alert("Errore durante la lettura del file: " + err.message)
                    return console.log("Errore durante la lettura del file: " + err.message)
                }
                let progetto = JSON.parse(data)

                for (var i in progetto) {
                    var prog = progetto[i]
                    for (var j in prog) {
                        // assegno i valori salvati nel progetto agli id presenti nel sistema
                        document.getElementById(j).value = prog[j]
                    }
                }

                console.log("file aperto")
            })
        }
    })
})


const printPDFbutton = document.getElementById('print-pdf')

printPDFbutton.addEventListener('click', event => {
    ipc.send('print-to-pdf')
})