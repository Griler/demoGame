function checkElement(arr1, arr2) {
    console.log("inPut:")
    console.log(arr1)
    console.log(arr2)
    let len2 = arr2.length
    let len1 = arr1.length
    let output = []
    let flag = 0;
    for (let i = 0; i < len2; i++) {
        for (let j = 0; j < len1; j++) {
            if (arr2[i] === arr1[j]) {
                flag = 0;
                break
            }
            flag++;
        }
        if (flag > 0) output.push(arr2[i])
    }
    console.log("outPut")
    return output;
}

let arr1 = [1, 2, 4, 5]
let arr2 = [1, 2, 3, 4]
const bai4 = checkElement(arr1, arr2)
console.log(bai4)