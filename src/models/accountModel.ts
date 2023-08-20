import mongoose from "mongoose";
import {emailValidator, passwordValidator, phoneValidator} from "../helpers/validators";
import {responseMsg} from "../constants/responseMsg";
import bcrypt from 'bcrypt';

const Schema = mongoose.Schema;
const accountSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    validate: {validator: emailValidator, message: responseMsg.invalidEmail}
  },
  password: {
    type: String, required: true, validate: {validator: passwordValidator, message: responseMsg.invalidPassword}
  },
  firstName: {type: String, required: true},
  lastName: {type: String, required: true},
  dob: {type: String},
  phone: {
    type: String,
    unique: true,
    sparse: true,
    validate: {validator: phoneValidator, message: responseMsg.invalidPhone}
  },
  address: {type: String}
});

// Add data encryption to Password before save operations
accountSchema.pre('save', function (next) {
  bcrypt.hash(this.password, 10, (error, hash) => {
    this.password = hash;
    next();
  });
});

// Appointment model
export const accountModel = mongoose.model('account', accountSchema);