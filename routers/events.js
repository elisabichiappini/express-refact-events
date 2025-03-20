const express = require('express');
const router = express.Router();

//importo il controller
const controllerEvents = require('../controllers/events.js');

//creo rotte
router.get('/', controllerEvents.index); // tutti gli eventi
router.get('/:id', controllerEvents.show); // aggiorna evento
router.post('/', controllerEvents.store); // creo nuovo evento
router.put('/:event', controllerEvents.update)

module.exports = router;