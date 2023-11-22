const fs = require('fs');
let jsonString;
let jsonData;

const pathDataRead = 'data.json';
function readJsonFile(path){
    const data = fs.readFileSync(path);
    jsonData = JSON.parse(data);
    console.log("Before Adding data",JSON.stringify(jsonData, null, 4));
}
readJsonFile(pathDataRead);

