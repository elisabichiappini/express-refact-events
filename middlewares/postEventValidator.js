const postEventValidator = (req, res, next) => {
    const { title, description, date, maxSeat } = req.body;

    if(!title) {
        return res.status(404).json({error: "il campo 'title' è richiesto!"});
    } else if(typeof title !== 'string') {
        return res.status(400).json({error: "il campo 'title' deve esere una stringa"});
    }

    if(!description) {
        return res.status(404).json({error: "il campo 'description' è richiesto!"});
    } else if(typeof description !== 'string') {
        return res.status(400).json({error: "il campo 'description' deve esere una stringa"});
    }

    if(!date) {
        return res.status(404).json({error: "il campo 'date' è richiesto!"});
    } else if(typeof date !== 'string') {
        return res.status(400).json({error: "il campo 'date' deve esere una stringa"});
    }

    if(!maxSeat) {
        return res.status(404).json({error: "il campo 'date' è richiesto!"});
    } else if(typeof maxSeat !== 'number') {
        return res.status(400).json({error: "il campo 'date' deve esere un numero"});
    }

    next();
}

module.exports = postEventValidator;