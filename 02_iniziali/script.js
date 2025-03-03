/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];


// Dichiara la funzione qui.
function nameInitial (arrayNames) {
    let namesInitial = [];
    let name = '';
    for (let i = 0; i < arrayNames.length; i++) {
        name = arrayNames[i];
        namesInitial.push(name[0]);
    }
    return namesInitial;
}

// Invoca la funzione qui e stampa il risultato in console
console.log(nameInitial(names));

//Risultato atteso: ["A", "L", "M", "A", "G", "A"]