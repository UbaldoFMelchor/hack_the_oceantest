const CreatureController = require("./../../lib/controllers/creatureController");

describe("Class CreatureController",()=> {
    test("1. Metodo getCreatures",()=>{
        const Creatures = CreatureController.getCreatures();
        expect(Creatures).not.toBeUndefined();
    });
    test("2. Metodo getCreturebyName",()=>{
        const CreaturebyName =  CreatureController.getCreturebyName("Totoaba");
        expect(CreaturebyName).not.toBeUndefined();
    });
});