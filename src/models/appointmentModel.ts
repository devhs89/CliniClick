import mongoose from "mongoose";

const Schema = mongoose.Schema;
const appointmentSchema = new Schema({
  patientId: {type: Schema.Types.ObjectId, ref: 'Account', required: true},
  clinic: {type: Schema.Types.ObjectId, ref: 'Facility', required: true},
  prefDoctor: {type: Schema.Types.ObjectId, ref: 'Doctor'},
  bookingDate: {type: String, required: true},
  healthCard: {type: String, required: true},
  serviceType: {type: String, required: true},
  prefContactMethod: {type: String, required: true},
  notes: {type: String}
});

// Appointment model
export const appointmentModel = mongoose.model('appointment', appointmentSchema);