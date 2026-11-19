// Traccia 02 · Il conto alla romana
// La consegna è nel README, alla voce "02 · Il conto alla romana".

/*
  STEPS
  1 -Preparo i prezzi
  2 -raccologo i dati dai clienti
  3 -elaboro i dati 
  4 -ottengo il risultato
*/

// # Fase di preparazione
const tips = 10; 



// # Fase di raccolta dati
let conto = parseInt(prompt("Quanto è il conto?"));
let totalePersone = parseInt(prompt("Quante persone devono pagare?"));

// # Fase di elaborazione
conto = conto + tips; 
let totalePerPersona = (conto / totalePersone);
// # Fase di output

alert(`A testa: ${totalePerPersona.toFixed(2)}€`);

