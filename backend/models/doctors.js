const express = require('express');
const router = express.Router();
const doctorController = require('../controllers/doctors');

router.post('/', doctorController.createDoctor);
router.get('/', doctorController.getAllDoctors);
router.put('/:id', doctorController.updateDoctor);
router.delete('/:id', doctorController.deleteDoctor);

module.exports = router;
