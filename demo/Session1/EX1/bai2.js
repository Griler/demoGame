
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
const bai2 = formatMoney(1000)