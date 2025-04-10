const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const errorHandler = require('errorhandler');
const cors = require('cors');
const envelopesRouter = require('./routes/envelopes-router.js');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(errorHandler());
app.use(cors({ origin: "http://localhost/5173" }));

// Routes
app.use('/api/v1/envelopes', envelopesRouter);

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));