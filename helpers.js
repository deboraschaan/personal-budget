const findById = (data, id) => data.find(item => item.id === Number(id)) || null;

const validateEnvelopeIds = (envelopes, ids) => { };

module.exports = { findById };