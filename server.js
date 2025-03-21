const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static('public'));

app.get('/', (req, res) => {
    console.log(req.params);
    res.send('Hello World');
});

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));