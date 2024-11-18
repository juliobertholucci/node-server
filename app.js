const express = require("express")

const app = express()

const port = 8000 //3000 para front e 8000 para back

app.get('/', (req, res) => { //request / response: Faz um pedido e tem uma resposta. app.get('/') é a rota, na url que retornará a resposta (res)
    res.send("Hello World B")
})

app.listen(port, () => {
    console.log(`Escutando a porta ${port}`)
})