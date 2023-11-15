function randomBetween(max) { // min and max included
    return Math.floor(Math.random() * max)
}
function randomBetweenElement(arr) {
    let len = arr.length
    let randomIndex = randomBetween(len)
    console.log(arr[randomIndex])
}

let arr = [12, 4, 6, 3, 16]
const bai3 = randomBetweenElement(arr)
