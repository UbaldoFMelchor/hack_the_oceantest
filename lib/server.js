const creaturesController = require("./controllers/creatureController");
const req = require("express/lib/request");
const res = require("express/lib/response");
const express = require("express");
const app = express();
app.use(express.json());
const port = 3000;

const cors =require("cors")

const corsOptions ={
    origin:"http://127.0.0.1:5501"
}
app.use(cors(corsOptions))
app.get("/", (req, res) => {
    res.send("Hola mundo!");
});

app.get ("/v1/creature/species", (request, response) => {
    const species = request.params.species;
    const speciesList = creaturesController.getCreatures(species);
    response.json(speciesList);
});

app.get ("/v1/creature/:name", (request, response) => {
    const species = request.params.name;
    const speciesSelect = creaturesController.getCreturebyName(species);
    response.json(speciesSelect);
});

app.listen(port, () => {
    console.log(`Hachita API run in localhost:${port}`);
});
