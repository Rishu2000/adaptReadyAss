const express = require('express');
const app = express();
const port = 4001;

app.get('/', (req, res) => {
    res.json('You are in root folder.');
})

app.listen(port, () => {
    console.log(`server started on port ${port}`);
})