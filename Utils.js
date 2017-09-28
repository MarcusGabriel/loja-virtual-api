const campos_obrigatorios = [
    'nome',
    'valor',
    'imagem',
    'descricao'
];

class Utils {
    
    isProdutoValido(produto) {
        let valido = true;
        campos_obrigatorios.forEach(
            campo => {
                if(!produto.hasOwnProperty(campo)) {
                    valido = false;
                }
            }
        );

        return valido;
    }

    getCamposValidos(produto) {
        let novo = new Object();
        campos_obrigatorios.forEach(
            campo => {
                if(produto.hasOwnProperty(campo)) {
                    novo[campo] = produto[campo];
                }
            }
        );
        return novo;
    }

}

    module.exports = new Utils();