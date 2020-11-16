// Lista Cognomi
// Chiedere all’utente il cognome,
// inserirlo in un array con altri cognomi (Es: 'Pesce', ‘Castenetto’, 'Passaro', 'Grimaldi', ‘Rossi’, ‘Verdi’, ‘Bianchi’).
// Stampa la lista ordinata alfabeticamente.
// Scrivi anche la posizione "umana" della lista in cui il nuovo utente si trova.


// creo array iniziale
var databaseSurname = ["topolino", "pippo", "pluto", "minnie", "paperino", "clarabella", "paperina"];

// chiedo all'utente il cognome
var cognome = prompt("qual'è il tuo cognome?");
console.log("questo è il cognome: " + cognome);

// stampo i cognomi dell'array
for (var i = 0; i < databaseSurname.length; i++) {
  console.log(databaseSurname[i]);
}

// inserisco nell' arrey il mio cognome
databaseSurname.push(cognome);
console.log(databaseSurname);

// stampo la lista ordina alfabeticamente
var databaseAlphabeticalOrder = databaseSurname.sort();
console.log("questo è l'ordine alfabetico " + databaseAlphabeticalOrder);

// stampo su html
// document.getElementById('elenco').innerHTML = databaseAlphabeticalOrder;
