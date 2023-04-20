import mongoose from "mongoose";

const Schema = mongoose.Schema;
const facilitySchema = new Schema({
  name: {type: String, required: true},
  address: {type: String, required: true}
});

export const facilityModel = mongoose.model('facility', facilitySchema);