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

const bonusVocalsCount = string => {
    let vocals = ['a', 'e', 'i', 'o', 'u'];
    let wordVocalsBonus = [];
    for (let i = 0; i < string.length; i++) {
        for (let index = 0; index < vocals.length; index++) {
            if (string[i] === vocals[index]){
                wordVocalsBonus.push(word[i]);
            }
        }
    }
    return wordVocalsBonus;
}

const anotherWord = 'paperino';
const anotherVocals = bonusVocalsCount(anotherWord);
console.log(anotherVocals);
