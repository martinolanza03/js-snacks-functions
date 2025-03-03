/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';


// Dichiara la funzione qui.
function vocalsCount (word) {
    let vocals = ['a', 'e', 'i', 'o', 'u'];
    let wordVocals = [];
    for (let i = 0; i < word.length; i++) {
        for (let index = 0; index < vocals.length; index++) {
            if (word[i] === vocals[index]){
                wordVocals.push(word[i]);
            }
        }
    }
    return wordVocals;
}

// Invoca la funzione qui e stampa il risultato in console
console.log(vocalsCount(word));


//Risultato atteso se si passa 'javascript': 3 (a, a, i)

