const express = require('express');
const budgetRouter = express.Router();
const { findById, validateEnvelopeIds, calculateTotalDistribution } = require('../utils/helpers.js');
let { envelopes } = require('../models/data.js');


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

module.exports = budgetRouter;