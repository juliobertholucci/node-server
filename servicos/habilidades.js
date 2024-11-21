const fs = require("fs")
function getTodasHabilidades() {
    return JSON.parse(fs.readFileSync("habilidades.json")) //lê todas as habilidades do arquivo
}

function getHabilidadeService(identificador){
    const habilidades = JSON.parse(fs.readFileSync("habilidades.json"))
    const habilidadeFiltrada = habilidades.filter( habilidade => habilidade.id === identificador) [0] //filtra a habilidade pelo id informado e retorna apenas o objeto ([0])
    return habilidadeFiltrada
}

function deletaHabilidadeService(id){
    const habilidades = JSON.parse(fs.readFileSync("habilidades.json")) //lê as habilidades
    const indiceDeletado = habilidades.filter(habilidade => habilidade.id !== id) //cria um novo array sem a habilidade informada no id
    fs.writeFileSync("habilidades.json", JSON.stringify(indiceDeletado)) //escreve o novo array no arquivo
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
    modificaHabilidade,
    deletaHabilidadeService
}