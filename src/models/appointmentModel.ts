import mongoose from "mongoose";

const Schema = mongoose.Schema;
const appointmentSchema = new Schema({
  bookingDate: {type: String, required: true},
  healthCard: {type: String, required: true},
  clinic: {type: Schema.Types.ObjectId, ref: 'Facility', required: true},
  serviceType: {type: String, required: true},
  prefContactMethod: {type: String, required: true},
  prefDoctor: {type: Schema.Types.ObjectId, ref: 'Doctor'},
  notes: {type: String}
});

// Appointment model
export const appointmentModel = mongoose.model('appointment', appointmentSchema);