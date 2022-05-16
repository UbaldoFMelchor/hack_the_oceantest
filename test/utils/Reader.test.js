const Reader = require("./../../lib/utils/Reader");

describe("Prueba de Archivos",()=>{
    test("1. Leyendo archivos",() =>{
        file = Reader.readJsonFile("creatures.json");
        expect(file).not.toBeUndefined();
    });
});