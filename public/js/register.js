window.addEventListener('load', () => {
  const emailELe = document.querySelector('#email');
  const passwordEle = document.querySelector('#password');
  const firstNameEle = document.querySelector('#firstName');
  const lastNameEle = document.querySelector('#lastName');
  const dobEle = document.querySelector('#dob');
  const phoneEle = document.querySelector('#phone');
  const addressEle = document.querySelector('#address');
  const registerBtnEle = document.querySelector('#registerBtn');

  registerBtnEle.addEventListener('click', async () => {
    const registerPayload = {
      email: emailELe.value || 'hs.test.learn@gmail.com',
      password: passwordEle.value || 'Xyz12345',
      firstName: firstNameEle.value || 'Harpreet',
      lastName: lastNameEle.value || 'Singh',
      dob: dobEle.value || new Date().toISOString(),
      phone: phoneEle.value || '+1-443-334-3333',
      address: addressEle.value || '1 Some St, Melbourne VIC 3030'
    };

    console.log(registerPayload);

    await fetch('/register', {
      method: 'post', body: JSON.stringify(registerPayload), headers: {"Content-Type": "application/json"}
    }).then(async resp => {
      const loc = await resp.text();
      if (loc === '/login') {
        location.replace(loc);
      }
    }).catch(err => {
      console.log(err);
    });
  });
});