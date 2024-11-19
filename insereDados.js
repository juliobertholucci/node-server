const fs = require("fs")

const dadosAtuais = JSON.parse(fs.readFileSync("habilidades.json")) //TRANSFORMA EM UM OBJETO QUE O JS PODE UTILIZAR
const novoDado = { id: '3', habilidade: 'HTML' } //novo dado a ser inserido

fs.writeFileSync("habilidades.json", JSON.stringify([...dadosAtuais, novoDado])) //transforma para JSON e mantém os dados anteriores

console.log(JSON.parse(fs.readFileSync("habilidades.json"))); //lê os dados atuais

