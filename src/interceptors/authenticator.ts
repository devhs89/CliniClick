// Authentication Middlewares

import {appointmentModel} from "../models/appointmentModel";

export const userExists = (req, res, next) => {
  appointmentModel.findById(req.session.userId, 'email', (amErr, amDoc) => {
    if (amErr || !amDoc) res.redirect('/404');
    next();
  }).clone();
};
