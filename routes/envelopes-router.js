const express = require('express');
const envelopesRouter = express.Router();
let { envelopes } = require('../data.js');

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
envelopesRouter.post('/', (req, res) => {
    const { category, budget, limit } = req.body;
    if (category && budget && limit) {
        const newEnvelope = { id: envelopes.length + 1, category: category, budget: budget, limit: limit };
        envelopes.push(newEnvelope);
        res.status(201).send({ envelope: newEnvelope });
    } else {
        res.status(400).send('Error generating envelope.');
    }
});

// Update budget or envelope info
envelopesRouter.put('/:id', (req, res) => {
    const id = Number(req.params.id);
    const { category, budget, limit } = req.body;

    if (!id || !category || !budget || !limit) {
        return res.status(400).send({ error: 'Missing required fields' });
    }

    const index = envelopes.findIndex(envelope => envelope.id === id);

    if (index !== -1) {
        envelopes[index] = { id, category, budget, limit };
        return res.status(200).send({ envelope: envelopes[index] });

    } else {
        return res.status(404).send({ error: 'Envelope not found' });
    }
});

// Delete envelope
envelopesRouter.delete('/:id', (req, res) => {
    const id = Number(req.params.id);
    if (!id) {
        return res.status(404).send({ error: "Envelope not found." });
    }
    envelopes = envelopes.filter(envelope => envelope.id !== id);
    return res.status(200).send(envelopes);
});

// Transfer budgets from different envelopes
envelopesRouter.post('/transfer/:from/:to', (req, res) => {
    const fromId = Number(req.params.from);
    const toId = Number(req.params.to);
    const { amount } = req.body;

    // Find correspondent IDs
    const giver = envelopes.find(envelope => envelope.id === fromId);
    const receiver = envelopes.find(envelope => envelope.id === toId);

    // Check if they exist
    if (!giver || !receiver || !amount) {
        return res.status(404).send({ message: "Invalid transfer details." });
    }

    // Check if budget from giver has enough to retrieve from
    if (giver.budget < amount) {
        return res.status(400).send({
            message: "Not enough budget."
        });
    }

    // Subtract from giver and add to receiver
    giver.budget -= Number(amount);
    receiver.budget += Number(amount);

    res.status(200).send({ giver, receiver });
});

// Add a single balance that’s distributed to multiple envelopes

// Add any libraries

// Create a frontend that displays envelopes and balances, and allows users to update each envelop balance

module.exports = envelopesRouter;