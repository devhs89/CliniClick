import express from 'express';
import path from 'path';

export const router = express.Router();

// Controller Routes
// export const controllerRoutes = app => {
// };

// Partial Views Routes
export const partialViewsRoutes = () => {
  router.get('/partials/patient-view', (req, res, next) => {
    const options = {
      root: path.join(__dirname, 'views/partials'),
      dotfiles: 'deny'
    };
    res.sendFile('patientDetailsForm.ejs', options, function (err) {
      if (err) {
        next(err);
      }
    });
  });
};

// View Routes
export const viewRoutes = () => {
  router.get('/appointment', (req, res) => res.render('appointment'));

  router.get('/', (req, res) => res.render('index'));

  router.use('*', (req, res) => res.render('404'));
};
