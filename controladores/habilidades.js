const fs = require("fs")
const { getTodasHabilidades } = require("../servicos/habilidades")

function getHabilidades(req, res) {
    try{
        const habilidades = getTodasHabilidades()
        res.send(habilidades)
    }catch (error){
        res.status(500)
        res.send(error.message)
    }
}
module.exports = {
    getHabilidades
}