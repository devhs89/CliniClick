import {patientModel} from "../models/patientModel";

export const save = async (req, res, next) => {
  await patientModel.findOneAndUpdate({email: req.body.email}, req.body, {upsert: true, new: true})
    .then(dc => res.send(dc._id))
    .catch(next);
};