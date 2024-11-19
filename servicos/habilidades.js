const fs = require("fs")
function getTodasHabilidades() {
    return JSON.parse(fs.readFileSync("habilidades.json"))
}

function getHabilidadeService(identificador){
    const habilidades = JSON.parse(fs.readFileSync("habilidades.json"))
    const habilidadeFiltrada = habilidades.filter( habilidade => habilidade.id === identificador) [0]
    return habilidadeFiltrada
}

function insereHabilidade(habilidadeNova){
    const habilidades = JSON.parse(fs.readFileSync("habilidades.json"))
    const novaListaHabilidades = [...habilidades, habilidadeNova]

    fs.writeFileSync("habilidades.json", JSON.stringify(novaListaHabilidades))
}

module.exports = {
    getTodasHabilidades,
    getHabilidadeService,
    insereHabilidade
}