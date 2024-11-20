const fs = require("fs")
function getTodasHabilidades() {
    return JSON.parse(fs.readFileSync("habilidades.json"))
}

function getHabilidadeService(identificador){
    const habilidades = JSON.parse(fs.readFileSync("habilidades.json"))
    const habilidadeFiltrada = habilidades.filter( habilidade => habilidade.id === identificador) [0]
    return habilidadeFiltrada
}

function modificaHabilidade(modificacoes, id){ //dados passados dos controladores
    let habilidadesAtuais = JSON.parse(fs.readFileSync("habilidades.json")) //lê todas as habilidades
    const indiceModificado = habilidadesAtuais.findIndex(habilidade => habilidade.id === id) //busca o primeiro resultado em que o id dentro do objeto é igual ao id passado em parâmetro e salva o indice desse objeto
    const conteudoMudado = {...habilidadesAtuais[indiceModificado], ...modificacoes} //concatena o objeto capturado com o indice encontrado com as modificações feitas
    habilidadesAtuais[indiceModificado] = conteudoMudado //recebe o conteudo mudado para passar ao fs.write
    fs.writeFileSync("habilidades.json", JSON.stringify(habilidadesAtuais)) //escreve no arquivo
}

function insereHabilidade(habilidadeNova){
    const habilidades = JSON.parse(fs.readFileSync("habilidades.json"))
    const novaListaHabilidades = [...habilidades, habilidadeNova]

    fs.writeFileSync("habilidades.json", JSON.stringify(novaListaHabilidades))
}

module.exports = {
    getTodasHabilidades,
    getHabilidadeService,
    insereHabilidade,
    modificaHabilidade
}