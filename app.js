const express = require("express")
const rotaHabilidade = require("./rotas/habilidades") //importa um código feito em outra pasta

const app = express()

app.use(express.json())

app.use('/habilidades', rotaHabilidade) //define a rota (na url /habilidades) e passa o código que será utilizado nessa rota

const port = 8000 //3000 para front e 8000 para back

app.get('/', (req, res) => { //request / response: Faz um pedido e tem uma resposta. app.get('/') é a rota, na url que retornará a resposta (res)
    res.send("Hello World B")
})

app.listen(port, () => {
    console.log(`Escutando a porta ${port}`)
})