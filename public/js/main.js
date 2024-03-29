window.addEventListener('load', () => {
  const navBtnEleArr = document.querySelectorAll('.navBtn');

  const showLoginBtn = () => {
    if (window.innerWidth > 992) {
      navBtnEleArr.forEach(btn => {
        btn.classList.add('btn', 'btn-primary', 'ms-3', 'px-3', 'text-dark');
      });
    } else {
      navBtnEleArr.forEach(btn => {
        btn.classList.remove('btn', 'btn-primary', 'ms-3', 'px-3', 'text-dark');
      });
    }
  };

  // Check and show login btn at start, if window width smaller
  showLoginBtn();

  // Listen to window resize event afterward to toggle between login button and link
  window.addEventListener('resize', () => {
    showLoginBtn();
  });
});