
const multer = require("multer");
const path = require("path");
const fs = require("fs");

const saveImage =(file) =>{
    const newPath = `./uploads/${file.originalname}`;
    fs.renameSync(file.path , newPath);
    return newPath;
}





module.exports = {
    saveImage
}