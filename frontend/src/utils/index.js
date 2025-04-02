function updateEnvelope(id) {
    fetch(`/envelopes/${id}`)
}


class Envelope {
    constructor(id, category, budget) {
        this.id = id;
        this.category = category;
        this.budget = budget;
    }

    // set limit
    // set expenses
    // get bugdet
}

export { updateEnvelope };