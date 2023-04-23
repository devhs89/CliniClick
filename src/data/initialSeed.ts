import {facilityModel} from "../models/facilityModel";
import {doctorModel} from "../models/doctorModel";

export const seedFacilities = async () => {
  const facilitiesCount = await facilityModel.count({});
  if (facilitiesCount > 0) return;

  const facilities = [{
    name: 'Eaton Place Medical Centre',
    address: '333 St Mary Ave Unit 81, Winnipeg, MB R3C 4A5'
  }, {
    name: 'Winnipeg Beach Primary Care Clinic',
    address: '54, 60 Main St Unit J, Winnipeg Beach, MB R0C 3G0'
  }, {
    name: 'Ontario Health Clinics - Brantford FHO',
    address: '347 Colborne Street East, Brantford, ON N3S 3N2'
  }, {
    name: 'Don Mills Medical Clinic',
    address: '825 Don Mills Rd., North York, ON M3C 1V4'
  }, {
    name: 'Queen City Medical Specialists',
    address: '1120 11th Ave, Regina, SK S4P 0G3'
  }, {
    name: 'Southey Health Action Centre',
    address: '290 Keats St, Southey, SK S0G 4P0'
  }, {
    name: 'Brentwood Medical Clinic',
    address: '4567 Lougheed Hwy., Burnaby, BC V5C 3Z6'
  }, {
    name: 'WELL Health - Care Place Fleetwood Medical Clinic',
    address: '9014 152 St Suite 306, Surrey, BC V3R 4E5'
  }, {
    name: 'Medicentres Family Care Clinics',
    address: '1032 17 Ave SW #3, Calgary, AB T2T 0A5'
  }, {
    name: 'Links Medical Clinic',
    address: '11910 111 Ave NW Unit 104, Edmonton, AB T5G 3G6'
  }, {
    name: 'Rachel Medical Clinic',
    address: '4084 St Laurent Blvd, Montreal, Quebec H2W 1Y8'
  }, {
    name: 'Centre Medical Bethanie',
    address: '5645 Grande Allée #50, Brossard, Quebec J4Z 3G3'
  }];

  await facilityModel.insertMany(facilities);
};

export const seedDoctors = async () => {
  const doctorsCount = await doctorModel.count({});
  if (doctorsCount > 0) return;

  const doctors = [{
    email: 'abdulrahman001@gmail.com',
    password: 'Xyz12345',
    phone: '+1-443-443-4343',
    license: 'ABCD123',
    specialization: 'Psychiatry',
    firstName: 'Suleiman Yinka',
    lastName: 'Abdulrahman',
    dob: new Date().toISOString(),
    patients: []
  }, {
    email: 'jolly001@gmail.com',
    password: 'Xyz12345',
    phone: '+1-289-835-0217',
    license: '73905',
    specialization: 'Family Medicine',
    firstName: 'Rajnee Kumari',
    lastName: 'Jolly',
    dob: new Date().toISOString(),
    patients: []
  }, {
    email: 'jabbar001@yahoo.com',
    password: 'Xyz12345',
    phone: '+1-416-521-4090',
    license: '68332',
    specialization: 'Geriatric Medicine, Internal Medicine',
    firstName: 'Amina Mohammedi',
    lastName: 'Jabbar',
    dob: new Date().toISOString(),
    patients: []
  }, {
    email: 'smith001@outlook.com',
    password: 'Xyz12345',
    phone: '+1-306-655-1847',
    license: '28728',
    specialization: 'Family practice',
    firstName: 'Daniele Mary Behn',
    lastName: 'Smith',
    dob: new Date().toISOString(),
    patients: []
  }, {
    email: 'nasmith001@outlook.com',
    password: 'Xyz12345',
    phone: '+1-604-822-5431',
    license: '29453',
    specialization: 'Family practice',
    firstName: 'Louise Lillian',
    lastName: 'Nasmith',
    dob: new Date().toISOString(),
    patients: []
  }];

  await doctorModel.insertMany(doctors);
};