const express = require('express');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const port = process.env.port || 3000;

app.get('/', (req, res) => {
    res.send('ExpressJS running');
});

app.listen(port, () => {
    console.log(`server listen ${port}`);
});
