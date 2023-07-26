"use strict";

function retornarDadosUsuario() { 
    return new Promise((resolve, reject) => {
        const usuario = { 'nome': 'Fulano de Tal', 'id': 10 };         
        return resolve(usuario);
    });
};

function retornarEndereco(usuario) {
    return new Promise((resolve, reject) => {
        usuario.endereco = [{ 'userId': usuario.id, 'descricao': 'Rua Tal, 0' }];
        return resolve(usuario);
    });
};
function retornarTelefone(usuario) {
    return new Promise((resolve, reject) => {
        usuario.telefone = [{ 'userId': usuario.id, 'numero': '(00) 00000-0000' }];
        return resolve(usuario);
    });
};

function retornarVeiculo(usuario) {
    return new Promise((resolve, reject) => {
        usuario.veiculo = { 'userId': usuario.id, 'descricao': 'Mercedes' };
        return resolve(usuario);
    });
};


// Chamada
retornarDadosUsuario()
    .then(retornarEndereco)
    .then(retornarTelefone)
    .then(retornarVeiculo)
    .then(
        (resultados) => {
            let mensagem = `
               Usuario: ${resultados.nome},
               Endereco: ${resultados.endereco[0].descricao}
               Telefone: ${resultados.telefone[0].numero}
               Veiculo: ${resultados.veiculo.descricao}                  `;
            console.log(mensagem);
        },
        (error) => {
            console.log(`Ocorreu um erro! [ ${error} ]`);
        });
/*
// Saída:
//         Usuario: Fulano de Tal,
//         Endereco: Rua Tal, 0
//         Telefone: (00) 00000-0000
//         Veiculo: Mercedes
//  */