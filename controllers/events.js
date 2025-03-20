const fs = require('fs');
const path = require('path');

const index = (req, res) => {
    res.send('sono index')
}

const store = (req, res) => {
    res.send('sono store')
}

const update = (req, res) => {
    res.send('sono update')
}

// esporto modulo
module.exports = {
    index,
    store,
    update
}