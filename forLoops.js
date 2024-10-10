// ==========================================
// Opdracht 1
// Schrijf een script dat iedere naam in onderstaande array vervangt door een koosnaampje, door er -"je" achter te plakken.
// Zorg ervoor dat dit ook zou werken als de array wel 100 of 200 namen zou bevatten!
// ==========================================

const names = ["Henk", "Piet", "Fred", "Joop"];

function maakVerkleinNamen(namesLijst) {
    let verkleinNamen = namesLijst.map(naam => naam + "je");
    return verkleinNamen;
}
let verkleinNamenLijst = maakVerkleinNamen(names);
console.log(verkleinNamenLijst);

// ==========================================
// Opdracht 2
// Schrijf een script dat ieder EVEN getal in onderstaande array met 2 vermenigvuldigd, en ieder ONEVEN getal met 3
// Zorg ervoor dat dit ook zou werken als de array wel 100 of 200 getallen zou bevatten!
// ==========================================

const numbers = [2, 4, 5, 29, 38];

function vermenigVuldig(numbersLijst) {
    let vermenigVuldig = numbersLijst.map(number => {
        if (number % 2 === 0) {
            return number * 2;
        } else {
            return number * 3;
        }
    });
    return vermenigVuldig;
}
let resultaat = vermenigVuldig(numbers);
console.log(resultaat);
// ==========================================
// Opdracht 3
// Schrijf een script dat voor de maat van ieder vierkant in onderstaande array, het volume uitrekent.
// Het volume van een vierkant is Lengte x Breedte x Hoogte
// Vervolgens moet de huidige waarde in de array overschreven worden met: "Het volume van [a] is [b]"
// Zorg ervoor dat dit ook zou werken als de array wel 100 of 200 getallen zou bevatten!
// ==========================================

const squares = [30, 2, 8, 24, 11];

function berekenVolume(squares) {

    for (let i = 0; i < squares.length; i++) {
        const lengte = squares[i];
        const volume = Math.pow(lengte, 3);
        squares[i] = `Het volume van ${lengte} is ${volume}`;
    }
}
berekenVolume(squares);
console.log(squares);



