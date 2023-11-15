//bai1
function giaithua(a) {
    if (a === 1) return 1;
    return a * giaithua(a - 1)
}

const num = giaithua(5)

function cKn(k, n) {
    let tuso = giaithua(n)
    let mauso = giaithua(n - k) * giaithua(k)
    return tuso / mauso
}

console.log(cKn(5, 9))

//bài2
function randomBetween(min, max) { // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min)
}

const rndInt = randomBetween(1, 6)
console.log(rndInt)

//bai3
function randomBetweenElement(arr) {
    let len = arr.length
    let randomIndex = randomBetween(0, len)
    console.log(arr[randomIndex])
}

let arr = [12, 4, 6, 3, 6]
const bai3 = randomBetweenElement(arr)

//bai4
function checkElement(arr1, arr2) {
    let ElementMissing = new Array(arr2.length);
    let maxLength = (arr1.length < arr2.length) ? arr2.length : arr1.length
    let mixLength = (arr1.length < arr2.length) ? arr1.length : arr2.length
    for (let i = 0; i < arr2.length; i++) {
        for (let j = 0; j < arr1.length; j++) {
            if (arr1[i] !== arr2[j]) {
                ElementMissing[j] = 1
                break;
            }
        }
        console.log(ElementMissing)
    }
    return ElementMissing;
}

let arr1 = [1, 2, 3, 4]
let arr2 = [6, 4, 3, 4]
const bai4 = checkElement(arr1, arr2)
console.log(bai4)