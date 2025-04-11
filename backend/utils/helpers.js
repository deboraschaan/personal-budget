const findById = (data, id) => data.find(item => item.id === Number(id)) || null;

const validateEnvelopeIds = (envelopes, ids) => {
    let foundEnvelopes = ids.map(id => findById(envelopes, id)).filter(Boolean);
    return foundEnvelopes.length === ids.length ? foundEnvelopes : null;
};

const calculateTotalDistribution = (distribution) => {
    return Object.values(distribution).reduce((acc, curr) => acc + curr, 0);
};

const generateNewId = (data) => {
    return data.length ? Math.max(...data.map(item => item.id)) + 1 : 1;
};

module.exports = { findById, validateEnvelopeIds, calculateTotalDistribution, generateNewId };