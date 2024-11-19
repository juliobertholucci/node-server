const fs = require("fs")
function getTodasHabilidades() {
    return JSON.parse(fs.readFileSync("habilidades.json"))
}
module.exports = {
    getTodasHabilidades
}