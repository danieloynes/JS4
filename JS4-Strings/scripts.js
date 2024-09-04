//Oppgave 1
/*
function navneformattering() {
    let fornavn = prompt("Skriv ditt fornavn")
    let etternavn = prompt("Skriv ditt etternavn")
    
    fornavn = fornavn.substring(0,1).toUpperCase() + 
    fornavn.substring(1).toLowerCase();

    etternavn = etternavn.substring(0,1).toUpperCase() + 
    etternavn.substring(1).toLowerCase();
    return (`${fornavn} ${etternavn}`);
     
}

document.write(navneformattering());
*/

//Oppgave 2
/*
function tellOrd(setning) {
    setning = setning.trim();
    let ord = setning.trim();
    return ord.length;
}

let setning = prompt("Skriv en setning");
document.write("Det er " + tellOrd(setning) + " ord");
*/

//Opgave 3
/*
function aTilAlfa() {
    let setning = prompt("Skriv inn en setning: ");
    let endraSetning = setning.replace(/a/g, '@');
    document.write(endraSetning);
}

aTilAlfa();
*/

//Oppgave 4
/*
function finnLengsteOrdet() {
    const setning = prompt("Skriv en setning")
    const ord = setning.split(" ");
    let lengsteOrdet = ("");
    let maxLength = 0;
    
    ord.forEach(etOrd => {
        if (etOrd.length > maxLength) {
            lengsteOrdet = etOrd;
            maxLength = etOrd.length;
        }
    });

    document.write(`Det lengste ordet er "${lengsteOrdet}" med ${maxLength} bokstaver`);
}

finnLengsteOrdet();
*/

//Oppgave 5
/*
function finnMidtersteOrd() {
    let setning = prompt("Skriv en setning");
    let ord = setning.split(" "); 
    let antallOrd = ord.length;

    if (antallOrd % 2 === 0) {
        let midtersteOrd1 = ord[Math.floor(antallOrd / 2) - 1]
        let midtersteOrd2 = ord[Math.floor(antallOrd / 2)]
        document.write(`Midterste ord er "${midtersteOrd1}" og "${midtersteOrd2}"`); 
    } else {
        let midtersteOrd = ord[Math.floor(antallOrd / 2) - 1]
        document.write(`Det midterste ordet er: ${midtersteOrd}`);
    }
}

finnMidtersteOrd();
*/

//Oppgave 6
/*
function reverserOrd(input) {
    const ord = input.split(" ");
    const reverserOrd = ord.map(etOrd => {
        return etOrd.split("").reverse().join("");
    });
    
    const resultat = reverserOrd.join(", ");
    return resultat;
}

const userInput = prompt("Skriv tre ord");
const resultat = reverserOrd(userInput);
document.write(resultat);
*/