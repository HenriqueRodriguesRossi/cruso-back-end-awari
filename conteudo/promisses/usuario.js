import Usuario from "./classeUsuario"

// Chamada
let usuario = new Usuario();
usuario.retornarDadosUsuario(function (erro, dadosUsuario) {
    let id = dadosUsuario.id;
    usuario.retornarEndereco(id, function (erro, endereco) {
        usuario.retornarTelefone(id, function (erro, telefone) {
            usuario.retornarVeiculo(id, function (erro, veiculo) {
                let user = { nome: dadosUsuario.nome, endereco, telefone, veiculo };
                console.log(user);
            });
        });
    });
});
/**
 * Saida
 * { nome: 'Fulano de Tal',
  endereco: { rua: 'Rua Tal', idUser: 123 },
  telefone: { numero: '(00) 00000-0000', idUser: 123 },
  veiculo: { carro: 'BMW', idUser: 123 } } 
 */