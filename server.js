const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const envelopesRouter = require('./routes/envelopes-router.js');

app.use(express.json());
app.use(express.static('public'));
app.use('/api/v1/envelopes', envelopesRouter);

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));