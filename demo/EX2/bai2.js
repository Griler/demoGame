function randomBetween(min, max) { // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min)
}
const rndInt = randomBetween(1, 6)
console.log(rndInt)