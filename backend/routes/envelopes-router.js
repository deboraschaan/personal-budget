const express = require('express');
const envelopesRouter = express.Router();
const { findById, validateEnvelopeIds, generateNewId } = require('../utils/helpers.js');
let { envelopes } = require('../models/data.js');

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

module.exports = envelopesRouter;