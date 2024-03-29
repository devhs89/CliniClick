import mongoose from "mongoose";
import {emailValidator, passwordValidator, phoneValidator} from "../helpers/validators";
import {responseMsg} from "../constants/responseMsg";
import bcrypt from 'bcrypt';

const Schema = mongoose.Schema;
const doctorSchema = new Schema({
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
  license: {type: String, unique: true, required: true},
  specialization: {type: String, required: true},
  firstName: {type: String},
  lastName: {type: String},
  dob: {type: Date},
  patients: [{type: Schema.Types.ObjectId, ref: 'Account'}]
});

// Add data encryption to Password before save operations
doctorSchema.pre('save', function (next) {
  bcrypt.hash(this.password, 10, (error, hash) => {
    this.password = hash;
    next();
  });
});

// Doctor model
export const doctorModel = mongoose.model('doctor', doctorSchema);