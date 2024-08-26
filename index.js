const express = require('express');
const fs = require('fs');
const path = require('path');


const app = express();

app.get(['/', '/index'], (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.get('/about', (req, res) => {
    res.sendFile(__dirname + '/about.html');
});

app.get('/contact-me', (req, res) => {
    res.sendFile(__dirname + '/contact-me.html');
});

app.use((req, res) => {
    res.status(404).sendFile(__dirname + '/404.html');
})

const PORT = 3000;
app.listen(PORT, () => console.log(`Express server is now listening on port ${PORT}`));