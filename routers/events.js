const express = require('express');
const router = express.Router();

//importo il controller
const controllerEvents = require('../controllers/events.js');
const controllerReservation = require('../controllers/reservations.js');

//creo rotte 
router.get('/', controllerEvents.index); // tutti gli eventi
router.get('/:id', controllerEvents.show); // aggiorna evento
router.post('/', controllerEvents.store); // creo nuovo evento
router.put('/:event', controllerEvents.update)

//reservation rotte
router.get('/:event/reservations', controllerReservation.index);
router.post('/:event/reservations', controllerReservation.store);
router.delete('/:event/reservations/:reservation', controllerReservation.destroy);


module.exports = router;