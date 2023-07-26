
export default class Usuario {

    retornarDadosUsuario(callback) {
        setTimeout(() => {
            return callback(null, {nome:    'Fulano de Tal', id: 123 })
        });
    };

    retornarEndereco(idUser, callback) {
        setTimeout(() => {
            return callback(null, {'rua': 'Rua Tal', idUser: idUser});
        });
    };

    retornarTelefone(idUser, callback) {
        setTimeout(() => {
            return callback(null, {'numero': '(00) 00000-0000', idUser: idUser});
        });
    };

    retornarVeiculo(idUser, callback) {
         setTimeout(() => {
            return callback(null, {'carro': 'BMW', idUser: idUser});
        });
    };
}