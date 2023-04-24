import {facilityModel} from "../models/facilityModel";
import {doctorModel} from "../models/doctorModel";
import {accountModel} from "../models/accountModel";
import {appointmentModel} from "../models/appointmentModel";
import {responseMsg} from "../constants/responseMsg";

export const retrieveEntities = async (req, res) => {
  const facilities = await facilityModel.find({}, "_id name")
    .then(docs => docs)
    .catch(err => res.render('appointment', {resp: err}));

  const doctors = await doctorModel.find({}, "_id firstName lastName")
    .then(docs => docs)
    .catch(err => res.render('appointment', {resp: err}));

  res.render('appointment', {facilities: JSON.stringify(facilities), doctors: JSON.stringify(doctors)});
};

export const save = async (req, res) => {
  const payload = {
    patientId: req.body.appointmentBookBtn,
    bookingDate: req.body.bookingDate,
    healthCard: req.body.healthCard,
    clinic: req.body.clinic,
    prefDoctor: !req.body.prefDoctor || req.body.prefDoctor === 'none' ? undefined : req.body.prefDoctor,
    serviceType: req.body.serviceType,
    prefContactMethod: req.body.prefContactMethod
  };

  if (!payload.patientId) return res.render('appointment', {resp: responseMsg.unauthenticated});

  const patientExists = await accountModel.findById(payload.patientId).then(d => d);
  if (patientExists._id) {
    await appointmentModel.create(payload)
      .then(() => res.redirect('/invoice'))
      .catch(() => {
        res.render('appointment', {resp: responseMsg.internalServerError});
      });
  } else {
    res.render('appointment', {resp: responseMsg.unauthenticated});
  }
};
