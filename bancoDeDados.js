const mongoose = require('mongoose')
require('dotenv').config()

async function conectaBancoDeDados() {
    try {
        console.log('Conexão com BD iniciada')

        await mongoose.connect(process.env.MONGO_URL)

        console.log('Conexão com BD realizado com sucesso!')
    } catch(erro) {
        console.log(erro)
    }
}

module.exports = conectaBancoDeDados 