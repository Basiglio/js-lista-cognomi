// Lista Cognomi
// Chiedere all’utente il cognome,
// inserirlo in un array con altri cognomi (Es: 'Pesce', ‘Castenetto’, 'Passaro', 'Grimaldi', ‘Rossi’, ‘Verdi’, ‘Bianchi’).
// Stampa la lista ordinata alfabeticamente.
// Scrivi anche la posizione "umana" della lista in cui il nuovo utente si trova.


// creo array iniziale
var databaseSurname = ["Topolino", "Pippo", "Pluto", "Minnie", "Paperino", "Clarabella", "Paperina"];

// chiedo all'utente il cognome
var cognome = prompt("qual'è il tuo cognome?");
// console.log("questo è il cognome: " + cognome);

// inserisco nell' arrey il mio cognome
databaseSurname.push(cognome);
// console.log(databaseSurname);

// ordina alfabeticamente
function confrontaS(a,b) {
  minA = a.toLowerCase();
  minB = b.toLowerCase();
  if (minA < minB) {
    return -1; }
      else {
        if (minA > minB) { return 1; }
        else { return 0; }
      }
  }
var databaseAlphabeticalOrder = databaseSurname.sort(confrontaS);
// console.log("questo è l'ordine alfabetico " + databaseAlphabeticalOrder);

// stampo la lista ordina alfabeticamente
for (var i = 0; i < databaseAlphabeticalOrder.length; i++) {
  document.getElementById('elenco').innerHTML += "<li>" + databaseAlphabeticalOrder[i] + "</li>"
}

// stampo posizione cognome
for (var i = 0; i < databaseAlphabeticalOrder.length; i++) {
  if (cognome == databaseAlphabeticalOrder[i]) {
    var position = document.getElementById('surname').innerHTML = i +1;
    // console.log(position);
  }
}
