document.write("Lev1_3")

let i = 1;
let lastName = "Johnson";
let j = "2";
let status = true;
let hello = "hello";
let helloWorld = "hello";

console.log(typeof (i))
console.log(typeof (lastName))
console.log(typeof (j))
console.log(typeof (status))
console.log(typeof (hello))
console.log(typeof (helloWorld))

document.write("Lev1_4")

console.log(typeof ("John"))
console.log(typeof (3.14))
console.log(typeof (NaN))
console.log(typeof (false))
console.log(typeof ([1, 2, 3, 4]))
console.log(typeof ({ name: 'John', age: 34 }))
console.log(typeof (new Date()))
console.log(typeof (function () { }))
console.log(typeof (null))
console.log(typeof (""))
console.log(typeof (3 + 2 == 5))
console.log(typeof (3 + "3"))

document.write("Lev1_8")
let x = 20
let y = 30


console.log(x + y)
console.log(x - y)
console.log(y - x)
console.log(x * y)

let z = 10
console.log(x * y / z)
let resultOne = x * y / z;

console.log(resultOne * 20)
// 1200

// Deklariere zwei Variablen a mit dem Wert 15 und b mit dem Wert 9. Zeige den Rest an, wenn a durch b geteilt wird. Nutze Remainder(%).
let a = 15
let b = 9
// console.log(a / b )
console.log(a % b)

// Deklariere eine weitere Variable c mit dem Wert 20. Addiere a und b und multipliziere das Ergebnis mit c. Speichere das Ergebnis in der Variable resultTwo. Gib resultTwo in der Konsole aus.

let c = 20
let resultTwo = (a + b) * c;
console.log(resultTwo)
// 480
// Inkrementiere a. Gib das Ergebnis in der Konsole aus.
a++
console.log(a)
// Dekrementiert b. Gib das Ergebnis in der Konsole aus.
b--
console.log(b)
// Subtrahiere b von a und speichere das Ergebnis in einer neuen Variablen resultThree.
let resultThree = a - b
console.log(resultThree)
// Gib den Rest aus wenn resultOne durch resultTwo geteilt wird in der Konsole aus.
// Nutze Remainder(%).
console.log(resultOne % resultTwo )