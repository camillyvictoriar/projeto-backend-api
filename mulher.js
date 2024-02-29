const express = require("express") /*Chama pacote express */
const router = express.Router()
const { v4: uuidv4 } = require('uuid');
const cors = require('cors')
const conectaBancoDeDados = require('./bancoDeDados')
conectaBancoDeDados()

const Mulher = require('./mulherModel')
const app = express()
const porta = 3333

app.use(cors())
app.use(express.json())

const mulheres = [
    {
        id: '1',
        nome: 'Simara Conceição',
        imagem: 'https://bit.ly/3LJIyOF',
        bio: 'Desenvolvedora e instrutora',
    },
    {
        id: '2',
        nome: 'Iana Chan',
        imagem: 'https://bit.ly/3JCXBqP',
        bio: 'CEO & Founder da PrograMaria',
    },
    {
        id: '3',
        nome: 'Luana Pimentel',
        imagem: 'https://bit.ly/3FKpFaz',
        minibio: 'Senior Staff Software Engineer',
    }
]

function mostraPorta() {
    console.log(porta)
}

async function mostraMulher(request, response) {
    try {
        const mulheresDoBancoDeDados = await Mulher.find()
        response.json(mulheresDoBancoDeDados)

    } catch (erro) {
        console.log(erro)
    }
}

async function criaMulher(request, response) {

    const novaMulher = new Mulher ({
        nome: request.body.nome,
        imagem: request.body.imagem,
        citacao: request.body.citacao,
        bio: request.body.bio
    }) 

    try{
        const mulherCriada = await novaMulher.save()
        response.status(201).json(mulherCriada)
    } catch(err) {
        console.log(err)
    }}

async function corrigeMulher(request, response) {
    try {
        const mulherEncontrada = await Mulher.findById(request.params.id)
        if(request.body.nome){
            mulherEncontrada.nome = request.body.nome
        }
    
        if(request.body.bio){
            mulherEncontrada.bio = request.body.bio
        }
    
        if(request.body.imagem){
            mulherEncontrada.imagem = request.body.imagem
        }

        const mulherAtualidaNoBancoDeDados = await mulherEncontrada.save()
        response.json(mulherAtualidaNoBancoDeDados)
    
    } catch (erro){
        console.log(erro)
    }
}

async function deletaMulher(request, response) {
    try {
        await Mulher.findByIdAndDelete(request.params.id)
        response.json({ messagem: 'Mulher deletada com sucesso'})
    } catch(erro) {
        console.log(console.erro)
    }
    
}

app.listen(porta, mostraPorta)
app.use(router.get('/mulher', mostraMulher))
app.use(router.post('/mulher', criaMulher))
app.use(router.patch('/mulher/:id', corrigeMulher))
app.use(router.delete('/mulher/:id', deletaMulher))

