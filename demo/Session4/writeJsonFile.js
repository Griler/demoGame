const fs = require('fs');
let jsonString;
let jsonData;
const object = {
    name: "Loc Nguyen",
    email: "hello.123@example.com"
}
const pathDataWrite = 'data.json';

function writeJsonFile(path) {
    fs.writeFileSync(path, jsonString, 'utf-8', (err) => {
        if (err) throw err;
        console.log('Data added to file');
    });
    const update_data = fs.readFileSync('data.json');
    const updated_jsonData = JSON.parse(update_data);
    console.log("After Adding data", JSON.stringify(updated_jsonData, null, 4));
}

function readJsonFile(path) {
    const data = fs.readFileSync(path);
    jsonData = JSON.parse(data)
}

function addObject() {
    jsonData.push(object);
    jsonString = JSON.stringify(jsonData);
}

function start() {
    readJsonFile(pathDataWrite);
    addObject();
    writeJsonFile(pathDataWrite);
}

start()