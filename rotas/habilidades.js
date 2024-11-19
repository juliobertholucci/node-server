const { Router } = require("express")
const { getHabilidades, getHabilidadesPorId, postHabilidadeInsere } = require("../controladores/habilidades") //controladores, para responder request, status, etc
const router = Router()

router.get("/", getHabilidades) //passa um controlador
router.get('/:identificador', getHabilidadesPorId)

router.post("/", postHabilidadeInsere)

router.patch("/", (req, res) => {
    res.send("Você fez uma requisição do tipo PATCH")
})

router.delete("/", (req, res) => {
    res.send("Você fez uma requisição do tipo DELETE")
})
module.exports = router //export do backend