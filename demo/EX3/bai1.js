function boom(myArray) {
    let allLane = [[]]
    let saveIndex = [];
    console.log("input: ")
    for (let i = 0; i < myArray.length; i++) {
        let len = myArray[i].length
        console.log(myArray[i])
        for (let j = 0; j < len; j++) {
            if (myArray[i][j] === 0) {
                saveIndex.push(j)
            }
        }
        allLane = pushArray(saveIndex, allLane)
        saveIndex = []
    }
    console.log('output: ')
    console.log(allLane)
}
let myArray = [[0, 2, 0], [1, 0, 1], [0, 1, 1], [0, 1, 1], [0, 0, 0]]
function pushArray(saveIndex, final) {
    let len = saveIndex.length;
    //let final = [[0,1,1],[0,1,0]]
    let lane = [...final]
    final = []
    let lenA = lane.length;
    for (let j = 0; j < lenA; j++) {
        let temp = [...lane.pop()]
        for (let i = 0; i < len; i++) {
            let temp2 = [...temp]
            temp2.push(saveIndex[i])
            final.push(temp2)
            //console.log(temp2)
        }
    }
    return final
}
const boomSave = boom(myArray);

