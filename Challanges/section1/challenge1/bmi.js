let markMass = 78;
let johnMass = 92;
let markHeight = 1.69;
let johnHeight = 1.95;

function bmi(mass, height) {
    bbmi = mass / height ** 2
    return bbmi
}
let markBmi = bmi(markMass, markHeight);
let johnBmi = bmi(johnMass, markHeight);

console.log(markBmi)
console.log(johnBmi)

function isHigh(one, two) {
    if (one > two) {
        console.log(true)
    } else {
        console.log(false)
    }
}
isHigh(markBmi, johnBmi)