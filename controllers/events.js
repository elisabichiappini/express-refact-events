const eventModel = require('../models/event.js');

const index = (req, res) => {
    const events = eventModel.getEvents();
    if(!events) throw new Error('errore nella lettura degli eventi', 400);
    res.json(events);
};

const show = (req, res) => {
    try {
        const event = eventModel.getEventById(parseInt(req.params.id));
        if(!event) {
            return res.status(404).json({error: "evento non trovato"});
        }
        res.json(event);
    } catch(error) {
        console.error("errore durante il recuper dell'evento:", error);
        res.status(500).json({
            error: 'si è verificato un errore durante il recupero dell\'evento'
        });
    }
};

const store = (req, res) => {
    res.send('sono store')
}

const update = (req, res) => {
    res.send('sono update')
}

// esporto modulo
module.exports = {
    index,
    show,
    store,
    update
}