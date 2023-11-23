const fs = require('fs');
const path = require('path');

const duongDanNguon = './basics';

const duongDanDich = './test1';

let imageArrayName = []
let imageArrayPath= []
 function saoChepTep(duongDanNguon, duongDanDich, tenTep) {
    try {
        const duongDanTepNguon = path.join(duongDanNguon, tenTep);
        const duongDanTepDich = path.join(duongDanDich, tenTep);
         fs.copyFileSync(duongDanTepNguon, duongDanTepDich);
        console.log(`Tệp '${tenTep}' đã được sao chép từ '${duongDanNguon}' sang '${duongDanDich}'.`);
    } catch (err) {
        console.error(`Không thể sao chép tệp '${tenTep}':`, err.message);
    }
}

async function createFolder(pathToFolder) {
    if (!fs.existsSync(pathToFolder)) {
        fs.mkdirSync(pathToFolder);
        console.log('Thư mục đã được tạo.');
    } else {
        console.log('Thư mục đã tồn tại.');
    }
}

function checkImageFile(fileName) {
    const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.bmp'];
    const ext = path.extname(fileName).toLowerCase();
    return imageExtensions.includes(ext);
}

function findImageFilesRecursively(folderPath) {
    fs.readdir(folderPath, (err, files) => {
        if (err) {
            console.error('Error reading folder:', err);
            return;
        }
        imageFiles = files.filter(file => checkImageFile(file));
        console.log(`Image files in ${folderPath}:`);
        imageFiles.forEach(imageFile => {
            //imageArray.push(`${path.join(folderPath, imageFile)}`)
            imageArrayName.push(`${imageFile}`);
            imageArrayPath.push(`${folderPath}`);
            console.log(path.join(folderPath, imageFile));
        });
        files.forEach(file => {
            const filePath = path.join(folderPath, file);
            fs.stat(filePath, (err, stat) => {
                if (err) {
                    console.error('Error checking file stat:', err);
                    return;
                }
                if (stat.isDirectory()) {
                    findImageFilesRecursively(filePath);
                }
            });
        });
    });
}

function start() {
    findImageFilesRecursively(duongDanNguon)
    setTimeout(()=>{
        createFolder(duongDanDich);
        imageArrayName.forEach((e,idx)=>{
            saoChepTep(imageArrayPath[idx],duongDanDich,e);
        })
    }, 2000)
}

start()
