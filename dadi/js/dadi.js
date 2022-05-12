// Gioco dei dadi

// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
const numeroGiocatore = Math.floor(Math.random() * 6) +1;
console.log("numeroGiocatore"),numeroGiocatore);
const numeroPc = Math.floor(Math.random() * 6) +1;
console.log("numeroPc"),numeroPc);


// Stabilire il vincitore, in base a chi fa il punteggio più alto.
// Verificare il numero più alto
if (numeroGiocatore > numeroPc) {
    risultato = "Il giocatore ha vinto";
    else {
        risultato = "Il pc ha vinto";
    }
}

// Comunicare all'utente il prezzo finale da pagare in base ai chilometri e alla propria età
document.getElementById("biglietto_treno").innerHTML = `Il costro del suo biglietto è di: ${prezzoBiglietto.toFixed(2)} €`;

