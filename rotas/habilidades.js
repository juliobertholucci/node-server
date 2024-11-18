const { Router } = require("express")
const { getHabilidades } = require("../controladores/habilidades") //controladores, para responder request, status, etc
const router = Router()

router.get("/", getHabilidades) //passa um controlador

router.post("/", (req, res) =>{
    res.send("Você fez uma requisição do tipo POST")
})

router.patch("/", (req, res) => {
    res.send("Você fez uma requisição do tipo PATCH")
})

router.delete("/", (req, res) => {
    res.send("Você fez uma requisição do tipo DELETE")
})
module.exports = router //export do backend