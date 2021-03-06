const express = require('express');
const router = express.Router();


router.get('/', (req, res, next) => {
    res.status(200).send({
        mensagem:'Retorno de todos os pedido'
    });
});

router.post('/', (req, res, next) => {
    const pedido = {
        nomePedido: req.body.nomePedido,
        quantidade: req.body.quantidade,
        preco: req.body.preco,
        data: req.body.data,
    }
    res.status(201).send({
        mensagem:'Cadastro de pedido',
        pedidoCadastrado: pedido
    });
});

router.get('/:id_pedidos', (req, res, next) => {
    const id = req.params.id_pedidos
    res.status(200).send({
        mensagem:'Detalhes do pedido',
        id_pedidos:id
    });
});

router.put('/:id_pedidos', (req, res, next) => {
    const id = req.params.id_pedidos
    res.status(200).send({
        mensagem:'Atualizando pedido',
        id_pedidos:id
    });
});

router.delete('/:id_pedidos', (req, res, next) => {
    const id = req.params.id_pedidos
    res.status(200).send({
        mensagem:'Deletando pedido',
        id_pedidos:id
    });
});

module.exports = router;