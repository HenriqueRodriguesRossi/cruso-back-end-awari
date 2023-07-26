const fs = require('fs')

const dados = fs.readFileSync('dados.txt', 'utf8')
console.log(dados)
console.log('2. Obrigado, até breve!')