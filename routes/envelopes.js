const express = require('express');
const envelopesRouter = express.Router();
const { envelopes } = require('../data.js');

envelopesRouter.get('/', (req, res) => {
    console.log(req.params);
    res.send('Hello');
});

envelopesRouter.post('/:id', (req, res) => {
    const { category, budget } = req.body;
    if (category, budget) {
        const newEnvelope = { id: envelopes.length + 1, category: category, budget: budget };
        envelopes.push(newEnvelope);
        console.log(envelopes);
        res.status(201).send();
    } else {
        res.status(400).send('Error generating envelope.');
    }
});

module.exports = envelopesRouter;