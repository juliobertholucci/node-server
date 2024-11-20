const fs = require("fs")
const { getTodasHabilidades, getHabilidadeService, insereHabilidade, modificaHabilidade, deletaHabilidadeService } = require("../servicos/habilidades")

function getHabilidades(req, res) {
    try{
        const habilidades = getTodasHabilidades()
        res.send(habilidades)
    }catch (error){
        res.status(500)
        res.send(error.message)
    }
}

function getHabilidadesPorId(req, res) {
    try{
        const id = req.params.identificador
        const habilidade = getHabilidadeService(id)
        res.send(habilidade)
    }catch (error){
        res.status(500)
        res.send(error.message)
    }
}

function deletaHabilidade(req, res){
    try{
        const id = req.params.id
        deletaHabilidadeService(id)
        res.send(`deletado usuário de id ${id}`)
    }catch(error){
        res.status(500)
        res.send(error.message)
    }
}

function patchHabilidade(req, res){
    try {
        const id = req.params.id //captura o id da url
        const body = req.body //captura os dados que serão atualizados
        modificaHabilidade(body, id) //passa os dados para o service
        res.send("modificado")
    } catch(error){
        res.status(500)
        res.send(error.message)
    }
}

function postHabilidadeInsere (req, res) {
    try {
        const habilidadeNova = req.body
        insereHabilidade(habilidadeNova)
        res.status(201)
        res.send("Criado")
    }catch(error){
        res.status(500)
        res.send(error.message)
    }
}

module.exports = {
    getHabilidades,
    getHabilidadesPorId,
    postHabilidadeInsere,
    patchHabilidade,
    deletaHabilidade
}