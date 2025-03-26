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

// Transfer budgets from different envelopes (POST)
// This request would take in a header value and update the balances 
// of both envelopes by subtracting it from one and adding it to the other.
envelopesRouter.post('/transfer/:from/:to', (req, res) => {
    const { from, to } = req.params;
    const { amount } = req.body;
    console.log("fromId:", from, "toId:", to, "amount:", amount);

    // Find correspondent IDs
    const giver = envelopes.find(envelope => envelope.id === Number(from));
    const receiver = envelopes.find(envelope => envelope.id === Number(to));
    console.log("giver:", giver, "receiver:", receiver);

    // Check if they exist
    if (!giver || !receiver || !amount) {
        return res.status(404).send({ message: "Envelope not found." });
    }

    // Check if budget from giver has enough to retrieve from
    if (giver.budget < amount) {
        return res.status(400).send({
            message: "Not enough to retrieve from selected envelope."
        });
    }

    // Subtract from giver and add to receiver
    giver.budget -= Number(amount);
    receiver.budget += Number(amount);

    return res.status(200).send(giver);

});

// Next Steps
// Add an API endpoint allowing user to add a single balance that’s distributed to multiple envelopes
// Feel free to also add any libraries or refactor your code as you see fit! (Router libraries)
// Create a frontend that displays envelopes and balances, and allows users to update each envelop balance
module.exports = envelopesRouter;