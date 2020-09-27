const express = require('express');
const router = express.Router();


router.get('/', (req, res, next) => {
    res.status(200).send({
        mensagem:'Retorno de todos os cliente'
    });
});

router.post('/', (req, res, next) => {
    res.status(201).send({
        mensagem:'Cadastro de cliente'
    });
});

router.get('/:id_clientes', (req, res, next) => {
    const id = req.params.id_clientes
    res.status(200).send({
        mensagem:'Detalhe do cliente',
        id_clientes:id
    });
});

router.put('/:id_clientes', (req, res, next) => {
    const id = req.params.id_clientes
    res.status(405).send({
        mensagem:'Atualizando um cliente',
        id_clientes:id
    });
});

router.delete('/:id_clientes', (req, res, next) => {
    const id = req.params.id_clientes
    res.status(405).send({
        mensagem:'Deletando um cliente',
        id_clientes:id
    });
});

module.exports = router;