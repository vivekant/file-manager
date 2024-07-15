

// this code will rearangge all file such that making folder with extenstion name 
// and putting the file in that folder which has same extenstion like in pdf folder
// they put pdf file from you folder


// if you want to use await without async function they you have to change the type 
// in package.json to   "type: module"
const fs = require('fs').promises;



// to return promise from readdir you have to import fs with promise
async function readfile(path) {
    filenames = await fs.readdir(path);
    return filenames
}


async function createDirectoryIfNotExists(directoryPath) {
    try {
        await fs.mkdir(directoryPath);

    } catch (err) {

    }
}



async function main() {
    let file = await readfile("files")
    for (i = 0; i < file.length; i++) {
        element = file[i]
        extenstion = element.split(".").slice(-1)[0]
        await createDirectoryIfNotExists(`orgnfile/${extenstion}`)
        await fs.copyFile(`files/${element}`, `orgnfile/${extenstion}/${element}`)
    };

}
main()