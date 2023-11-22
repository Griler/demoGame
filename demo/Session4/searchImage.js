const fs = require('fs');
const path = require('path')
const pathFolder = '/Users/user/project/demo/Session4/basics'
function getImagesFromFolder(folderPath) {
    try {
        const files = fs.readdirSync(folderPath);
        const imageFiles = files.filter(file => {
            console.log(file)
            const fileExtension = path.extname(file).toLowerCase();
            return ['.jpg', '.jpeg', '.png', '.gif'].includes(fileExtension);
        });
        return imageFiles;
    } catch (error) {
        console.error('Error:', error);
        return [];
    }
}
console.log(getImagesFromFolder(pathFolder))