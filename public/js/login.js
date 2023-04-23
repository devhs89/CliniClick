window.addEventListener('load', () => {
  const emailELe = document.querySelector('#email');
  const passwordEle = document.querySelector('#password');
  const loginBtnEle = document.querySelector('#loginBtn');

  loginBtnEle.addEventListener('click', async () => {
    const loginPayload = {
      email: emailELe.value || 'hs.test.learn@gmail.com',
      password: passwordEle.value || 'Xyz12345'
    };

    console.log(loginPayload);

    await fetch('/login', {
      method: 'post', body: JSON.stringify(loginPayload), headers: {"Content-Type": "application/json"}
    }).then(async resp => {
      const loc = await resp.text();
      if (loc === '/home') {
        location.replace(loc);
      }
    }).catch(err => {
      console.log(err);
    });
  });
});