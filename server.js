const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(__dirname + '/public/'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.post('/', (req, res) => {
    console.log('post route working');
    res.sendFile(path.join(__dirname + '/index.html'));
});

const PORT = 3000;
const HOST = 'localhost';

app.listen(PORT, () => {
    console.log(`Server is running at http://${HOST}:${PORT}`);
});
