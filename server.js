const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const envelopesRouter = require('./routes/envelopes.js');

app.use(express.json());
app.use(express.static('public'));
app.use('/envelopes', envelopesRouter);

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));