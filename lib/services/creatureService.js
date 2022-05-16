class CreatureService{
    static getCreatures(creatures){
        return creatures;
    }
    static getCreturebyName(creatures,name){
        const CreturebyName = creatures.filter(creature => creature.nombre == name );  
        return CreturebyName;
    }
}

module.exports = CreatureService;