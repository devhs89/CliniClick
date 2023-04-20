import mongoose from "mongoose";

const Schema = mongoose.Schema;
const appointmentSchema = new Schema({
  dateTime: {type: String, required: true},
  location: {type: Schema.Types.ObjectId, ref: 'Facility', required: true},
  service: {type: String, required: true},
  notes: {type: String}
});

// Appointment model
export const appointmentModel = mongoose.model('appointment', appointmentSchema);