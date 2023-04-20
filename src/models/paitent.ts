import mongoose from "mongoose";
import {emailValidator, passwordValidator, phoneValidator} from "../helpers/validators";
import {responseMsg} from "../constants/responseMsg";
import bcrypt from 'bcrypt';

const Schema = mongoose.Schema;
const patientSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    validate: {validator: emailValidator, message: responseMsg.invalidEmail}
  },
  password: {
    type: String, required: true, validate: {validator: passwordValidator, message: responseMsg.invalidPassword}
  },
  phone: {type: Number, unique: true, validate: {validator: phoneValidator, message: responseMsg.invalidPhone}},
  firstName: {type: String},
  lastName: {type: String},
  dob: {type: Date},
  address: {type: String, required: true},
  prefContactMethod: {type: String, required: true},
  prefDoctor: {type: Schema.Types.ObjectId, ref: 'Doctor'}
});

// Add data encryption to Password before save operations
patientSchema.pre('save', function (next) {
  const u = this;
  bcrypt.hash(u.password, 10, (error, hash) => {
    u.password = hash;
    next();
  });
});

// Patient model
export const patientModel = mongoose.model('patient', patientSchema);