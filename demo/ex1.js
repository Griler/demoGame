function numberToString(a){
    let number = a;
    let mod = 0;
    let string2 = '';
    let arr;
    let stringNum = '' + number;
    arr = stringNum.split('.')
    number = arr[0]
    console.log(arr)
    while (number > Number(0)) {
        mod = (number % 1000);
        let string1;
        if (mod === 0) string1 = '000';
        else if (mod < 100) string1 = '0' + mod;
        else string1 = '' + mod;
        string2 = string1 + ',' + string2;
        number = parseInt(number / 1000)
    }
    string2 = string2.slice(0,-1)
    let final = string2 + '.' + arr[1]
    console.log(final)
}
const bai1 = numberToString(123232.3234)
//bai2
const object = {
    'K': 0,
    'M': 0,
    'B': 0,
}

function formatMoney(money){
    if(parseInt(money / 1000) >= 1) object.K = parseInt((money / 1000));
    if (parseInt((money / 1000000))>= 1) object.M = parseInt((money / 1000000));
    if (parseInt((money / 1000000000))>= 1) object.B = parseInt((money / 1000000000));
    let stringNumber = money +''
    console.log(object)
    if(object.B > 0){
        let string = object.B + '.' + stringNumber.slice(1,3) + 'B'
        console.log(string)
        return
    }
    else if(object.M > 0){
        let string = object.M + '.' + stringNumber.slice(1,3) + 'M'
        console.log(string)
        return
    }  
    else if(object.K > 0){
        let string = object.K + '.' + stringNumber.slice(1,3) + 'K'
        console.log(string)
        return
    }
}
const bai3 = formatMoney(1000)
//bai4
function getExtensionFile(a){
    let arr = a.split('.')
    console.log(arr[1])
}
const bai4 = getExtensionFile('image.png')
