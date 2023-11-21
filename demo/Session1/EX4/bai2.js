const DIGITS = [
    'không', 'một', 'hai', 'ba', 'bốn',
    'năm', 'sáu', 'bảy', 'tám', 'chín'
];
const units = ['', 'mươi', 'trăm', 'nghìn', 'vạn']

function readTwo(b, c, hasHundred) {
    const output = [];
    switch (b) {
        case 0: {
            if (hasHundred && c == 0)
                break;
            if (hasHundred)
                output.push("lẻ");
            output.push(DIGITS[c]);
            break;
        }
        case 1: {
            output.push("mười");
            if (c == 5)
                output.push("lăm");
            else if (c != 0)
                output.push(DIGITS[c]);
            break;
        }

        default: {
            output.push(DIGITS[b], "mươi");  // b mươi
            if (c == 1)
                output.push("mốt");
            else if (c == 4)
                output.push("tư");
            else if (c == 5)
                output.push("lăm");
            else if (c != 0)
                output.push(DIGITS[c]);
            break;
        }
    }
    return output;
}

function readThreeHundred(a, b, c, readZeroHundred) {
    const output = [];
    if (a != 0 || readZeroHundred)
        output.push(DIGITS[a], 'trăm');
    output.push(...readTwo(b, c, a != 0 || readZeroHundred));
    return output;
}

function demo(arr) {
    console.log("input: " + arr)
    let output = ''
    let hundred = arr % 1000
    let hundredString = hundred + ''
    console.log(hundred);
    for (let i = 4; i >= 3; i--) {
        let num = parseInt(arr / (Math.pow(10, i)))
        let temp = [...readTwo(parseInt(num / 10), num % 10)]
        temp.forEach((e) => output += " " + e)
        output += ' ' + units[i];
        arr = parseInt(arr % 10000)
    }
    if (hundred < 10) {
        let temp = [...readThreeHundred(0, 0, hundred, true)]
        temp.forEach((e) => output += " " + e)
        console.log(output);
    } else if (hundred >= 10 && hundred <= 99) {
        let temp = [...readThreeHundred(0, Number(hundredString[0]), Number(hundredString[1]), true)]
        temp.forEach((e) => output += " " + e)
        console.log(output);
    } else if (hundred >= 100)
    {
        let temp = [...readThreeHundred(Number(hundredString[0]), Number(hundredString[1]), Number(hundredString[2]), true)]
        temp.forEach((e) => output += " " + e)
        console.log(output);
    }
}
const bai2 = demo(5)