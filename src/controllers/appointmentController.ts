import {appointmentModel} from "../models/appointmentModel";
import {facilityModel} from "../models/facilityModel";
import {doctorModel} from "../models/doctorModel";
import {patientModel} from "../models/patientModel";

export const showFacilities = async (req, res, next) => {
  await facilityModel.find({}, "_id name")
    .then(docs => res.send(docs))
    .catch(next);
};

export const showDoctors = async (req, res, next) => {
  await doctorModel.find({}, "_id firstName lastName")
    .then(docs => res.send(docs))
    .catch(next);
};

export const save = async (req, res, next) => {
  const payload = {
    patientId: req.body.patientId,
    bookingDate: req.body.bookingDate,
    healthCard: req.body.healthCard,
    clinic: req.body.clinic,
    prefDoctor: !req.body.prefDoctor || req.body.prefDoctor === 'none' ? null : req.body.prefDoctor,
    serviceType: req.body.serviceType,
    prefContactMethod: req.body.prefContactMethod
  };

  const patientExists = await patientModel.count({_id: payload.patientId});
  switch (patientExists) {
    case 1:
      await appointmentModel.create(payload)
        .then(doc => res.send(doc._id))
        .catch(next);
      break;
    default:
      Promise.resolve().then(() => {
        throw new Error('Invalid record(s) found');
      }).catch(next);
  }
};
