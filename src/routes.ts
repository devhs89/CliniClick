import express from 'express';
import * as accountController from "./controllers/accountController";
import * as appointmentController from "./controllers/appointmentController";
import * as invoiceController from "./controllers/invoiceController";

const router = express.Router();

// Controller Routes
router.post('/register', accountController.register);
router.post('/login', accountController.login);
router.post('/appointment', appointmentController.save);

// View Routes
router.get('/logout', accountController.logout);
router.get('/appointment', appointmentController.retrieveEntities);
router.get('/invoice', invoiceController.showAll);
router.get('/invoice/print', invoiceController.printPdf);
router.get('/register', (req, res) => res.render('register'));
router.get('/login', (req, res) => res.render('login'));
router.get('/home', (req, res) => res.render('index'));
router.get('/', (req, res) => res.render('index'));
router.use('*', (req, res) => res.render('404'));

export {router};
