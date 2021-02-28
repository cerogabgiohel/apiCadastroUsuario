porta = 3000
const express = require('express')
const app = express()


function obterUsuario(id){
    for (var i in usuarios){      
        if(id == usuarios[i].id){
            return usuarios[i]
        }
        }
        return("O usuário buscado não está cadastrado")
}

app.use(express.json())

app.listen(porta, () => {
    console.log(`Inciado!`)
})

//Lista os usuários cadastrados
app.get('/users', (req, res) => {
    res.send(Object(usuarios))
})

//Apresenta o usuário buscado utilizando o ID
app.get('/users/:id', (req, res) => {
    res.send(obterUsuario(req.params.id))

}) 

const incremento = {
    _id: 0,
    get id() {
        return this._id++
    }

}

usuarios = []

function cadastraUsuario(id, nome, email, endereco){   
    usuarios.id = incremento.id
    usuarios[usuarios.id] = {id: usuarios.id, nome: nome, email: email, endereco: endereco}
}

function editarUsuario(id, nome, email, endereco){
    usuarios[id] = {id: id, nome: nome, email: email, endereco: endereco}
}

//Realiza o cadastramento dos usuários (com id, nome, email, endereço)
app.post('/users', (req, res) => {
    cadastraUsuario(req.body.id, req.body.nome, req.body.email, req.body.endereco)
    res.send(usuarios)
})

//Realiza a edição do nome, email e/ou endereço, através do ID
app.put('/users/:id', (req, res) => {
    if(obterUsuario(req.params.id) != "O usuário buscado não está cadastrado"){        
        editarUsuario(req.params.id, req.body.nome, req.body.email, req.body.endereco)
        res.send(usuarios)
    }else{
        res.send("Erro! Usuário não encontrado!")
    }
})


//Deleta um usuário através do ID
app.delete('/users/:id', (req, res) => {
    if(obterUsuario(req.params.id) != "O usuário buscado não está cadastrado"){        
        delete usuarios[req.params.id]
        res.send(usuarios)
    }else{
        res.send("Erro! Usuário não encontrado!")
    }
})