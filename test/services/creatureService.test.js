const CreatureService = require("./../../lib/services/creatureService");
const Reader = require("./../../lib/utils/Reader");
describe("Class CreatureService",()=>{
    test("Metodo getCreatures",()=>{
        const creatures = Reader.readJsonFile("creatures.json");
        const getCreatures = CreatureService.getCreatures(creatures);
        expect(getCreatures).not.toBeUndefined();
    });
    test("2. Metodo CreaturebyName",()=>{
        const creatures = Reader.readJsonFile("creatures.json");
        const CreaturebyName= CreatureService.getCreturebyName(creatures,"Totoaba");
        expect(CreaturebyName).not.toBeUndefined();
    });
});