const express = require("express")
const axios = require('axios')

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get("/buscaCep", async (req, res) => {
    const cep = req.query.cep
    const cepRegex = /^\d{8}$/

    if (!cep) {
        return res.status(400).send({
            mensagem: "Digite um CEP para ser buscado!"
        });
    } else if (!cepRegex.test(cep)) {
        return res.status(400).send({
            mensagem: "O CEP deve ter apenas 8 caracteres numéricos!"
        })
    }

    try {
        const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`)
        const data = response.data

        if ("erro" in data) {
            return res.status(404).send({
                mensagem: "CEP não encontrado!"
            })
        }

        return res.status(200).send({
            mensagem: response.data
        })
    } catch (error) {
        return res.status(500).send({
            mensagem: "Erro ao fazer a consulta do CEP: " + error.message
        })
    }
})

app.listen(8080, () => {
    console.log("Servidor rodando na porta 8080")
})
