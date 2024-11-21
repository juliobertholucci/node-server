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
        if(id && Number(id)){ //se id receber algo e id = número é valido, se id for texto retorna NaN e não completa o &&
            const habilidade = getHabilidadeService(id)
            res.send(habilidade)
        }
        else{
            res.status(422)
            res.send("Id inválido")
        }
    }catch (error){
        res.status(500)
        res.send(error.message)
    }
}

function deletaHabilidade(req, res){
    try{
        const id = req.params.id

        if(id && Number(id)){
            deletaHabilidadeService(id)
            res.send(`deletado usuário de id ${id}`)
        }
        else{
            res.message(422)
            res.send("ID Inválido")
        }
        
    }catch(error){
        res.status(500)
        res.send(error.message)
    }
}

function patchHabilidade(req, res){
    try {
        const id = req.params.id //captura o id da url

        if(id && Number(id)){
            const body = req.body //captura os dados que serão atualizados
            modificaHabilidade(body, id) //passa os dados para o service
            res.send("modificado")
        }
        else{
            res.status(422)
            res.send("ID inválido")
        }
       
    } catch(error){
        res.status(500)
        res.send(error.message)
    }
}

function postHabilidadeInsere (req, res) {
    try {
        const habilidadeNova = req.body
        if(req.body.habilidade && req.body.id){
            insereHabilidade(habilidadeNova)
            res.status(201)
            res.send("Criado")
        }
        else{
            res.status(422)
            res.send("Revise os campos obrigatórios Nome e ID!")
        }
        
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