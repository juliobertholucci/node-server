const { Router } = require("express")
const { getHabilidades, getHabilidadesPorId, postHabilidadeInsere, patchHabilidade, deletaHabilidade } = require("../controladores/habilidades") //controladores, para responder request, status, etc
const router = Router()

router.get("/", getHabilidades) //passa um controlador
router.get('/:identificador', getHabilidadesPorId)

router.post("/", postHabilidadeInsere)

router.patch("/:id", patchHabilidade)

router.delete("/:id", deletaHabilidade)
module.exports = router //export do backend