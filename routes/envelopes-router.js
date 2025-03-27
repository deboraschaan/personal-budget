const express = require('express');
const envelopesRouter = express.Router();
const { findById, validateEnvelopeIds, calculateTotalDistribution, generateNewId } = require('../helpers.js');
let { envelopes } = require('../data.js');

// GET all envelopes
envelopesRouter.get('/', (req, res) => {
    res.status(200).send({ envelopes });
});

// GET specific envelope by ID
envelopesRouter.get('/:id', (req, res, next) => {
    const id = Number(req.params.id);

    // Data validation
    if (!validateEnvelopeIds(envelopes, [id])) {
        res.status(404).send({ error: "Envelope not found." })
    }

    // Get logic
    const envelope = findById(envelopes, id);
    res.status(200).send({ envelope: envelope });
});

// POST: Create a new envelope
envelopesRouter.post('/', (req, res, next) => {
    // Request info
    const { category, budget } = req.body;

    // Data validation
    if (!category || !budget) {
        res.status(400).send('Missing required fields.');
    }

    // Post logic
    const newEnvelope = { id: generateNewId(envelopes), category: category, budget: Number(budget) };
    envelopes.push(newEnvelope);
    res.status(201).send({ envelope: newEnvelope });
});

// PUT: Update an envelope
envelopesRouter.put('/:id', (req, res, next) => {
    // Request info
    const id = Number(req.params.id);
    const { category, budget } = req.body;
    const envelope = findById(envelopes, id);

    // Data validation
    if (!envelope) {
        return res.status(404).send({ error: 'Envelope not found.' });
    }

    if (!category || !budget) {
        return res.status(400).send({ error: 'Missing required fields.' });
    }

    // Put logic
    envelope.category = category;
    envelope.budget = Number(budget);
    res.status(200).send({ envelope: envelope });
});

// DELETE: Remove an envelope
envelopesRouter.delete('/:id', (req, res, next) => {
    const id = Number(req.params.id);

    // Data validation
    if (!id) {
        return res.status(400).send({ error: "Id required." });
    }

    const envelope = validateEnvelopeIds(envelopes, [id]);
    if (!envelope) {
        return res.status(404).send({ error: "Envelope not found." });
    }

    envelopes = envelopes.filter(envelope => envelope.id !== id);
    res.status(200).send(envelopes);
});

// POST: Transfer budget between envelopes
envelopesRouter.post('/transfer/:from/:to', (req, res, next) => {
    // Request info
    const fromId = Number(req.params.from);
    const toId = Number(req.params.to);
    const { amount } = req.body;

    // Data validation
    const giver = findById(envelopes, fromId);
    const receiver = findById(envelopes, toId);

    if (!giver || !receiver || !amount) {
        return res.status(404).send({ message: "Invalid transfer details." });
    }

    if (giver.budget < amount) {
        return res.status(400).send({
            message: "Not enough budget."
        });
    }

    // Transfer logic
    giver.budget -= Number(amount);
    receiver.budget += Number(amount);
    res.status(200).send({ message: "Transfer successful", envelopes });
});

// POST: Distribute balance across multiple envelopes
envelopesRouter.post('/distribute', (req, res, next) => {
    // Request info
    const { balance, chosenEnvelopesIds, distribution } = req.body;

    // Data validation
    if (!balance || (!chosenEnvelopesIds && !distribution)) {
        return res.status(400).send({ message: "Invalid request. Provide balance and either chosenEnvelopesIds or distribution." });
    }

    let foundEnvelopes = chosenEnvelopesIds ? validateEnvelopeIds(envelopes, chosenEnvelopesIds) : null;

    if (chosenEnvelopesIds && !foundEnvelopes) {
        return res.status(404).json({ error: "One or more envelopes not found." });
    }

    // Rules of distribution
    // Specific amounts
    if (distribution) {
        let totalAmount = calculateTotalDistribution(distribution);

        // Check if total amount doesn't match the sum of distributed amounts
        if (balance !== totalAmount) {
            return res.status(400).send({ message: "Balance doesn't match the sum of distributed amounts" });
        }

        Object.entries(distribution).forEach(([id, amount]) => {
            let envelope = findById(envelopes, Number(id));
            if (envelope) {
                envelope.budget += amount;
            }
        })
    }
    // Equal parts
    else {
        let amountPerEnvelope = balance / chosenEnvelopesIds.length;
        foundEnvelopes.forEach(envelope => envelope.budget += amountPerEnvelope);
    }
    res.status(200).json({ message: "Balance distributed successfully", envelopes });
});

module.exports = envelopesRouter;