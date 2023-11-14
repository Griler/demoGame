let number = 1555555.0003;
let mod = 0;
let string2 = '';
let stringNum = '' + number;
console.log(stringNum)
for (let i = 0; i < stringNum.length; i++) {
    if (stringNum[i] === '.') {
        string2 = stringNum.slice(i, string2.length)
        console.log(string2)
    }
}
while (number > Number(0)) {
    mod = number % 1000;
    let string1;
    if (mod === 0) string1 = '000';
    else string1 = '' + mod;
    string2 = string1 + ',' + string2;
    // console.log(string2);
    number = parseInt(number / 1000)
}
let x = string2.slice(0, -1)
console.log(let)
