const express = require('express');
const app = express();

const port = process.env.PORT || 3000;
const host = process.env.HOST || 'localhost';

//avvio server  
app.listen(port, () => {
    console.log(`Server avviato su http://${host}:${port}`);
});