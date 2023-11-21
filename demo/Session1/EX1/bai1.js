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