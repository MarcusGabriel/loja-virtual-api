const express = require('express');
const bodyParser = require('body-parser');
const nedb = require('nedb-promise');
const cors = require('cors');

const utils = require('./utils');

const db = nedb('banco.db');
const app = express();

db.loadDatabase();

app.use(bodyParser.json());
app.use(cors());

const MSG_OK  = "OK";
const MSG_ERROR  = "O formato do produto é inválido!";
const MSG_404  = "Nenhum produto encontrado";

// GET ALL
app.get('/produto', (req, res) => {
    db.find({}).then(produto => {
        if(!produto || !produto.length) {
            res.status(404).send(MSG_404);
            return;
        }
        res.send(produto);
    }).catch(() => res.status(500).end())
});

// GET ONE
app.get('/produto/:id', (req, res) => {
    db.find({ _id: req.params.id }).then(produto => {
        if(!produto || !produto.length) {
            res.status(404).send(MSG_404);
            return;
        }
        res.send(produto);
    }).catch(() => res.status(500).end())
});

// INSERT
app.post('/produto', (req, res) => {
    if(utils.isProdutoValido(req.body)) {
        db.insert(utils.getCamposValidos(req.body)).then(() => {
            res.send(MSG_OK);
        }).catch(() => res.MSG_ERROR(500).end());
    } else {
        res.status(400).send(MSG_ERROR);
    }
});

// UPDATE
app.put('/produto/:id', (req, res) => {
    if(utils.isProdutoValido(req.body)) {
        db.update({ _id: req.params.id }, utils.getCamposValidos(req.body)).then(() => {
            res.send(MSG_OK);
        }).catch(() => res.MSG_ERROR(500).end());
    } else {
        res.status(400).send(MSG_ERROR);
    }    
});

// DELETE
app.delete('/produto/:id', (req, res) => {
    db.remove({ _id: req.params.id }).then(() => {
        res.send(MSG_OK);
    }).catch(() => res.MSG_ERROR(500).end());
});

console.log("Servidor iniciado na porta 8080...")
app.listen(8080, '0.0.0.0');