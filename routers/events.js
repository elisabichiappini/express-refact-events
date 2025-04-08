const express = require('express');
const router = express.Router();

//importo il controller
const controllerEvents = require('../controllers/events.js');
const controllerReservation = require('../controllers/reservations.js');
const postEventValidator = require('../middlewares/postEventValidator.js');

//creo rotte 
router.get('/', controllerEvents.index); // tutti gli eventi
router.post('/',postEventValidator, controllerEvents.store); // creo nuovo evento
router.get('/:id', controllerEvents.show);  //mostra specifico evento
router.put('/:event', controllerEvents.update);// aggiorna evento

//reservation rotte
router.get('/:event/reservations', controllerReservation.index);
router.post('/:event/reservations', controllerReservation.store);
router.delete('/:event/reservations/:reservation', controllerReservation.destroy);


module.exports = router;