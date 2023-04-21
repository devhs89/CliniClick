window.onload = async function () {
  const appointmentFormWrapper = document.querySelector('#appointmentFormWrapper');
  await fetch('/partials/patient-view', {
    method: 'get'
  }).then(async r => appointmentFormWrapper.innerHTML = await r.text());

  const patientDetailsNextBtnEle = document.querySelector('#patientDetailsNextBtn');
  patientDetailsNextBtnEle.addEventListener('click', (evt) => {
    evt.preventDefault();
    evt.stopImmediatePropagation();

    console.log(evt);
  });
};