# loja-virtual-api

#Resumo das tecnologias usadas para criação da API

Express e Nedb
    -  O Express é um framework para aplicativo da web do Node.js mínimo e flexível que fornece um conjunto robusto de recursos para aplicativos web e móvel.
    - Nedb "[The JavaScript Database](https://github.com/louischatriot/nedb)" resumindo: É um banco de dados que não necessita de instalação, trabalha no formato json e é muito rapido! 

#Referência

Tive como referência uma API que foi usada pelo [Eder](https://github.com/ederfranco23) e criada pelo [Marcelo](https://github.com/lmmfranco).
A finalidade da API foi para utilização no curso Desenvolvimento front-end com Bootstrap e Angular JS.

[[Link Original]](https://github.com/ederfranco23/academy-store-api/blob/master/README.md)

#Instalação

1) Clone ou baixe este repositório e, estando no diretório do projeto, abra o console: 
`npm install`

1) Para executar, estando no diretório do projeto, abra o console: 
`npm start`

3) Para testar as requisições, utilize o software de sua preferência ([Postman](https://chrome.google.com/webstore/detail/postman/fhbjgbiflinjbdggehcddcbncdddomop), por exemplo) e acesse:
`http://localhost:8080`

## Exemplo de requisição (POST):

URL:
`localhost:8080/produto`

Body (JSON):
```
{
	"nome": "Nome do produto",
	"valor": "1.55",
	"imagem": "",
	"descricao": "Descrição do Produto"
}
```