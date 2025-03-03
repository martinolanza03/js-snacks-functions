/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];

const initial = 'A';

// Dichiara la funzione qui.
function initialLetter (arrayNames, initial) {
    let firstInitial = [];
    for (let i = 0; i < arrayNames.length; i++) {
        let name = arrayNames[i];
        if (name[0] === initial) {
            firstInitial.push(name);
        }

    }
    return firstInitial;
}

// Invoca la funzione qui e stampa il risultato in console
console.log(initialLetter(names, initial));



//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]