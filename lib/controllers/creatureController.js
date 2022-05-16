const Reader = require("./../utils/Reader");
const CreatureService = require("./../services/creatureService");

class CreatureController{
    static getCreatures(){
        const creatures = Reader.readJsonFile("creatures.json");
        return CreatureService.getCreatures(creatures);     
    }
    static getCreturebyName(name){
        const creatures = Reader.readJsonFile("creatures.json");
        return CreatureService.getCreturebyName(creatures,name);
    }
}


module.exports = CreatureController;