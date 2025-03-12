/*
🏆 Snack 1
Crea una funzione che somma due numeri.
Crea una funzione dichiarativa chiamata somma che accetta due numeri e restituisce la loro somma.
Poi, definisci la stessa funzione somma ma come funzione anonima assegnata a una variabile
Quindi, riscrivi la funzione somma con la sintassi delle arrow functions.

*/


// function somma(num1, num2) {
//     return num1 + num2
// }

// console.log(somma(2, 3))

// const somma2 = function (num1, num2) {
//     return num1 + num2
// }

// console.log(somma2(4, 5))

// const somma3 = (num1, num2) => num1 + num2

// console.log(somma3(6, 2))

/*


🏆 Snack 2
Crea una arrow function che calcola il quadrato di un numero.
Definisci una funzione chiamata quadrato che accetta un numero e restituisce il suo quadrato in una sola riga.
*/

// const quadrato = (num) => num * num
// console.log(quadrato(5))

/*
🏆 Snack 3
Crea una funzione eseguiOperazione
Definisci una funzione eseguiOperazione che accetta tre parametri: due numeri e una funzione operatore (callback). La funzione deve eseguire l'operazione fornita sui due numeri.

Esempio d’uso:
const somma = (a, b) => a + b;
const moltiplica = (a, b) => a * b;

const eseguiOperazione = (a, b, operazione) => operazione(a, b);

console.log(eseguiOperazione(3, 4, somma)); // 7
console.log(eseguiOperazione(3, 4, moltiplica)); // 12
*/

// function eseguiOperazione(num1, num2, operatore) {
//     return operatore(num1, num2)
// }

// const sottrazione = (num1, num2) => num1 - num2
// const divisione = (num1, num2) => num1 / num2

// console.log(eseguiOperazione(8, 2, sottrazione))
// console.log(eseguiOperazione(9, 3, divisione))

/*

🏆 Snack 4
Crea un generatore di funzioni creaTimer
Scrivi una funzione creaTimer che accetta un tempo (in ms) e restituisce una nuova funzione che avvia un setTimeout per stampare "Tempo scaduto!".
*/
// function creaTimer(time) {
//     return () => {
//         setTimeout(() => {
//         console.log(`"Tempo scaduto!"`)
//     }, time);
//}
// };
//
// const time2s = creaTimer(2000);
// time2s();

/*
🏆 Snack 5
Crea una funzione stampaOgniSecondo con setInterval.
Definisci una funzione che accetta un messaggio e lo stampa ogni secondo.



Nota: Questa funzione creerà un loop infinito. Interrompilo manualmente o usa clearInterval() in un altro script.
*/

// function stampaOgniSecondo(messaggio) {
//     return setInterval(() => {
//         console.log(messaggio)
//     }, 1000)
// }
// stampaOgniSecondo("stampo ogni secondo")

/*
🏆 Snack 6
Crea un contatore automatico con setInterval
Definisci una funzione creaContatoreAutomatico che accetta un intervallo di tempo e restituisce una funzione che avvia un setInterval, incrementando un contatore e stampandolo.
*/

// function creaContatoreAutomatico(intervallo) {
//     let contatore = 0
//     return function avviaContatore() {
//         setInterval(() => {
//             contatore++
//             console.log(`contatore:${contatore}`)
//         }, intervallo)
//     }
// }
// const contatore1 = creaContatoreAutomatico(1000)
// contatore1()


/*
🏆 Snack 7
Crea una funzione che ferma un timer dopo un certo tempo
Scrivi una funzione eseguiEferma che accetta un messaggio, un tempo di avvio e un tempo di stop. Il messaggio deve essere stampato a intervalli regolari, ma si deve fermare dopo il tempo di stop.
*/

// function eseguiEferma(messaggio, avvio, stop) {
//     return function Avvia() {
//         const intervalId = setInterval(() => {
//             console.log(messaggio);
//         }, avvio);

//         setTimeout(() => {
//             clearInterval(intervalId);
//             console.log("Tempo stoppato!");
//         }, stop);
//     };
// }

// const avviaTimer = eseguiEferma("Ciao!", 1000, 5000);
// avviaTimer();

/*
🎯 Snack 8 (Bonus)
Crea una funzione che simula un conto alla rovescia
Scrivi una funzione contoAllaRovescia che accetta un numero n e stampa il conto alla rovescia da n a 0, con un intervallo di 1 secondo tra ogni numero. Quando arriva a 0, stampa "Tempo scaduto!" e interrompe il timer.
Esempio di utilizzo:
contoAllaRovescia(5)
Output atteso:
5
4
3
2
1
Tempo scaduto!
*/

// function contoAllaRovescia(num) {
//     let contatore = num;

//     const intervalId = setInterval(() => {
//         console.log(contatore);
//         contatore--;

//         if (contatore < 0) {
//             clearInterval(intervalId);
//             console.log("Tempo scaduto!");
//         }
//     }, 1000);
// }

// contoAllaRovescia(5);

/*
🎯 Snack 9 (Bonus)
Creare una funzione che esegue una sequenza di operazioni con ritardi
Scrivi una funzione sequenzaOperazioni che accetta un array di operazioni (funzioni) e un tempo di intervallo.

Ogni operazione deve essere eseguita in sequenza con un ritardo uguale al tempo di intervallo.
Esempio di utilizzo:
sequenzaOperazioni([
  () => console.log("Operazione 1"),
  () => console.log("Operazione 2"),
  () => console.log("Operazione 3")
], 2000);
Output atteso:
Operazione 1
Operazione 2
Operazione 3
*/







/*
🎯 Snack 10 (Bonus)
Creare un throttler per limitare l’esecuzione di una funzione
Scrivi una funzione creaThrottler che accetta una funzione e un tempo `limite`.

Restituisce una nuova funzione che, quando chiamata ripetutamente, esegue l'operazione originale al massimo una volta ogni n millisecondi.
Esempio di utilizzo:
const throttledLog = creaThrottler(() => console.log("Eseguito!"), 2000);
​
throttledLog(); // ✅ "Eseguito!"
throttledLog(); // ❌ Ignorato (chiamato troppo presto)
setTimeout(throttledLog, 2500); // ✅ "Eseguito!" (dopo 2.5 secondi)
 */