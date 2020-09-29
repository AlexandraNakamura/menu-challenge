const express = require('express');
const router = express.Router();
    
let cliente = [
    { Nome:'Lucia', Localização: 'São Paulo', id_clientes: 1}
]

router.get('/', (req, res, next) => {
    return res.json(cliente);
});

router.post('/', (req, res, next) => {
    const body = req.body 

    if(!body)
        return res.status(400).end()
        
    
    cliente.push(body);
    return res.json(body);

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
    res.status(200).send({
        mensagem:'Atualizando um cliente',
        id_clientes:id
    });
});

router.delete('/:id_clientes', (req, res, next) => {
    const id = req.params.id_clientes
    res.status(200).send({
        mensagem:'Deletando um cliente',
        id_clientes:id
    });
});

module.exports = router;