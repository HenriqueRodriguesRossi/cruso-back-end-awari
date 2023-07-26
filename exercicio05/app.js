const express = require("express")
const app = express()
const bcrypt = require("bcrypt")

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.post("/criarConta", async(req, res)=>{
    const {email, senha, repitaSenha} = req.body

    if(!email || !senha || !repitaSenha){
        return res.status(400).send({
            mensagem: "Preencha todos os campos!"
        })
    }

    if(senha !== repitaSenha){
        return res.status(400).send({
            mensagem: "Senhas devem ser iguais!"
        })
    }

    const salt = await bcrypt.genSalt(12)
    const senhaHash = await bcrypt.hash(senha, salt)

    try{
        return res.status(200).send({
            mensagem: `Usuário cadastrado com sucesso: ${email}, ${senhaHash}`
        })
    }catch(error){
        return res.status(500).send({
            mensagem: "erro"
        })
    }
})

app.listen(8080, ()=>{
    console.log("Servidor rodando!")
})