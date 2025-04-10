const express = require('express');
const app = express();

//variabili d'ambiente
const port = process.env.PORT || 3000;
const host = process.env.HOST || 'localhost';

//middlewares
const errorsFormatter = require('./middlewares/errorFormatter.js');
const routerNotFound = require('./middlewares/routerNotFound.js');
const postEventValidator = require('./middlewares/postEventValidator.js');

//importo router
const routerEvents = require('./routers/events.js');

//lettura express json
app.use(express.json());

//prima pagina
app.get('/', (req, res) => {
    res.send(`
        <h1>Gestore Events</h1>
        <div>
        <a href="http://localhost:3000/events" target="_blank">Lista Eventi</a>
        </div
        `);
    }
);

//rotte sono il router eventis
app.use('/events', routerEvents);

//errors middlewares 
app.use(routerNotFound); //404
app.use(errorsFormatter); //500

//avvio server  
app.listen(port, () => {
    console.log(`Server avviato su http://${host}:${port}`);
});