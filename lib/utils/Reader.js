const fs= require("fs");

class Reader{
    static readJsonFile(filePath){
        const data = fs.readFileSync(filePath);
        const dataJson= JSON.parse(data);

        return dataJson;
    }
}

module.exports= Reader;