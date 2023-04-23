window.addEventListener('load', async () => {
  const toastEle = document.querySelector('.notificationsWrapper');
  const bookingDateEle = document.querySelector('#bookingDate ');
  const healthCardEle = document.querySelector('#healthCard');
  const clinicEle = document.querySelector('#clinic');
  const prefDoctorEle = document.querySelector('#prefDoctor');
  const serviceTypeEle = document.querySelector('#serviceType');
  const prefContactMethodEle = document.querySelector('#prefContactMethod');
  const emailEle = document.querySelector('#email');
  const passwordEle = document.querySelector('#password');
  const firstNameEle = document.querySelector('#firstName');
  const lastNameEle = document.querySelector('#lastName');
  const dobEle = document.querySelector('#dob');
  const phoneEle = document.querySelector('#phone');
  const addressEle = document.querySelector('#address');
  const patientDetailsBookBtnEle = document.querySelector('#patientDetailsBookBtn');

  const facilities = await fetch('appointment/facilities', {
    method: 'post', headers: {'Content-Type': 'application/json'}
  }).then(docs => {
    return docs.json();
  });

  facilities.forEach((dc) => {
    clinicEle.insertAdjacentHTML('beforeend', `<option value="${dc._id}">${dc.name}</option>`);
  });

  const doctors = await fetch('appointment/doctors', {
    method: 'post', headers: {'Content-Type': 'application/json'}
  }).then(docs => {
    return docs.json();
  });

  doctors.forEach((dc) => {
    prefDoctorEle.insertAdjacentHTML('beforeend', `<option value="${dc._id}">${dc.firstName} ${dc.lastName}</option>`);
  });

  patientDetailsBookBtnEle.addEventListener('click', async (evt) => {
    evt.preventDefault();
    evt.stopImmediatePropagation();

    const patientPayload = {
      email: emailEle.value || 'learn.hs89@gmail.com',
      password: passwordEle.value || 'Xyz12345',
      firstName: firstNameEle.value || 'Harpreet',
      lastName: lastNameEle.value || 'Singh',
      dob: dobEle.value,
      phone: phoneEle.value || '+1-433-344-2323',
      address: addressEle.value || '1 Some St, Some Suburb VIC 2020',
    };

    const ids = {patient: '', appointment: ''};
    await fetch('patient/save', {
      method: 'post', body: JSON.stringify(patientPayload), headers: {
        'Content-Type': 'application/json'
      }
    }).then(async (resp) => {
      const _pid = await resp.json();
      if (_pid) {
        ids.patient = _pid;
        const appointmentPayload = {
          patientId: _pid,
          bookingDate: bookingDateEle.value,
          healthCard: healthCardEle.value,
          clinic: clinicEle.value,
          prefDoctor: prefDoctorEle.value,
          serviceType: serviceTypeEle.value,
          prefContactMethod: prefContactMethodEle.value,
        };
        await fetch('appointment/save', {
          method: 'post', body: JSON.stringify(appointmentPayload), headers: {
            'Content-Type': 'application/json'
          }
        }).then(async resp => ids.appointment = await resp.json());
      }
    });

    console.log(ids);

    if (ids.patient && ids.appointment) {
      console.log(toastEle);
      const toast = new bootstrap.Toast(toastEle);
      console.log(toast);
      toast.show();
    }
  });
});