const express = require('express');
const app = express();

//variabili d'ambiente
const port = process.env.PORT || 3000;
const host = process.env.HOST || 'localhost';

//importo router
const routerEvents = require('./routers/events.js');

//lettura express json
app.use(express.json());

//prima pagina
app.get('/', (req, res) => {
    res.send('<h1>Gestore Events</h1>')
});

//rotte sono il router eventis
app.use('/events', routerEvents);

//avvio server  
app.listen(port, () => {
    console.log(`Server avviato su http://${host}:${port}`);
});