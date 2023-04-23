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
  phone: {type: String, unique: true, validate: {validator: phoneValidator, message: responseMsg.invalidPhone}},
  firstName: {type: String, required: true},
  lastName: {type: String, required: true},
  address: {type: String, required: true},
  dob: {type: Date}
});

// Add data encryption to Password before save operations
patientSchema.pre('save', function (next) {
  bcrypt.hash(this.password, 10, (error, hash) => {
    this.password = hash;
    next();
  });
});

// Add data encryption to Password before update operations
patientSchema.pre('findOneAndUpdate', function (next) {
  bcrypt.hash(this['_update'].password, 10, (error, hash) => {
    this['_update'].password = hash;
    next();
  });
});

// Patient model
export const patientModel = mongoose.model('patient', patientSchema);