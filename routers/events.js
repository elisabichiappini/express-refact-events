const express = require('express');
const router = express.Router();

//importo il controller
const controllerEvents = require('../controllers/events.js');

//creo rotte
router.get('/', controllerEvents.index); // tutti gli eventi
router.post('/', controllerEvents.store); // creo nuovo evento
router.put('/:id', controllerEvents.update); // aggiorna evento

module.exports = router;