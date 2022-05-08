"use strict"

/* Pirma užduotis

Parašykite scriptą, kuris paprašytų įvesti: prekės kainą, paklaustų ar reikalingas pristatymas, jei reikalingas - paklaustų miesto į kurį reiks pristatyti. Naudokit do while loop, kol kažką įrašys arba įrašys teisingai ir if bei else kad patikrintų ką įrašys.

"Įveskite prekės kainą";
"Ar reikalingas pristatymas į namus? (taip/ne)";
"Į kurį miestą reiks pristatyti?"

Galiausiai atspausdintų tokią informaciją:

---

1 variantas (be pristatymo)

Prekės kaina: xx.xx €
Prekę galite atsiimti nemokamai Vilniuje adresu Gedimino pr. 1a
---

2 variantas (su pristatymu)

Prekės kaina : xx.xx €
Pristatymas: xx.xx €
Iš viso: xx.xx €
Prekę pristatysime į "įvestas miestas" per 1-3 dienas.


Antra užduotis

Pasirinkite 5 pasaulio šalis. Suraskite (Google, Wikipedia) jų valstybės plotą (km²) ir gyventojų skaičių.

Sukurkite naują masyvą su penkių pasaulio šalių objektais, kuriuose būtų nurodyta: šalies pavadinimas, valstybės plotas ir gyventojų skaičius.

Suskaičiuokite ir suapvalinkite su toFixed(2) koks plotas tenka vienam gyventojui (m²) kiekvienoje šalyje. P.s. reikės padauginti nurodytą skaičių km2 iš 1000000, kad gautumėte m2.

Atspausdinkite tokią informaciją apie šalis per console.log naudodamiesi for looparba for/of loop pagal tokį šabloną:

Šalis: Portugalija, joje gyvena 10.26 mln. gyventojų.
Valstybės plotas: 92212 km², plotas tenkantis vienam gyventojui: 8987.52 m². */

var kaina = prompt("Įveskite prekės kainą");
kaina = Number(kaina);
var pristatymas = confirm("Ar reikalingas pristatymas į namus? (taip/ne)");
if (pristatymas) {
    var kur = prompt("Į kurį miestą reiks pristatyti?")
    var pristatymas1 = 10;
    pristatymas1 = Number(pristatymas1)
    alert (`Prekės kaina : ${kaina} € \nPristatymas: ${pristatymas1} € \nIš viso:  ${kaina + pristatymas1}€ \nPrekę pristatysime į ${kur} per 1-3 dienas.`)
} else {
   alert (`Prekės kaina: ${kaina} € \nPrekę galite atsiimti nemokamai Vilniuje adresu Gedimino pr. 1a `)
}
