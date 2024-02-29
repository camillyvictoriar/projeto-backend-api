const express = require("express") /*Chama pacote express */

const app = express()

const porta = 3333


function mostraPorta() {
    console.log(porta)
}

app.listen(porta, mostraPorta)