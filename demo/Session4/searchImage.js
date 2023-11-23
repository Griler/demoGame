const fs = require('fs');
const path = require('path');

const folderPath = './basics';
let imageFiles = []
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

findImageFilesRecursively(folderPath);
