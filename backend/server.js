const express = require('express');
const morgan = require('morgan');
const errorHandler = require('./middleware/errorHandler.js');
const cors = require('cors');
const envelopesRouter = require('./routes/envelopes-router.js');
const budgetRouter = require('./routes/budget-router.js');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(morgan('dev'));
app.use(errorHandler);
app.use(cors({ origin: "http://localhost/5173" }));

// Routes
app.use('/api/v1/envelopes', envelopesRouter);
app.use('/api/v1/budget', budgetRouter);

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));