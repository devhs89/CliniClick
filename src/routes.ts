import express from 'express';
import * as appointmentController from "./controllers/appointmentController";
import * as patientController from "./controllers/patientController";
import * as prescriptionController from "./controllers/prescriptionController";

const router = express.Router();

// Controller Routes
router.post('/appointment/facilities', appointmentController.showFacilities);
router.post('/appointment/doctors', appointmentController.showDoctors);
router.post('/appointment/save', appointmentController.save);
router.post('/patient/save', patientController.save);
router.post('/prescription/show-all', prescriptionController.showAll);

// View Routes
router.get('/appointment', (req, res) => res.render('appointment'));
router.get('/prescription', (req, res) => res.render('prescription'));
router.get('/home', (req, res) => res.render('index'));
router.get('/', (req, res) => res.render('index'));
router.use('*', (req, res) => res.render('404'));

export {router};
