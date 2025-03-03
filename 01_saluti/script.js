/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito (es. "Ciao [nome]") */

const userName = 'Mario';


// Dichiara la funzione qui.
function greeting (name) {
    return `Ciao ${name}`;
}

// Invoca la funzione qui e stampa il risultato in console
console.log(greeting(userName))


//Risultato atteso se si passa 'Mario': // ciao Mario


// Bonus

const secondName = 'Pippo';

const greetingTwo = anotherName => {
    const greet = 'Ciao' + ' ' + anotherName;
    return greet;
}

console.log(greetingTwo(secondName));