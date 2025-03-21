const express = require('express');
const envelopesRouter = express.Router();
const { envelopes } = require('../data.js');

// Fetch all envelopes or specific envelope
envelopesRouter.get('/', (req, res) => {
    const id = Number(req.query.id);
    if (id !== undefined) {
        const envelope = envelopes.filter(envelope => envelope.id === id);
        res.status(200).send({
            envelope: envelope
        })
    } else {
        res.status(200).send({
            envelopes: envelopes
        })
    }
});

// Create an envelope
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