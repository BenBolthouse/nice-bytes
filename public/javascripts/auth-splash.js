document.addEventListener('DOMContentLoaded', evt => {

  const authForm = document.getElementById('authForm');

  const submittingOverlay = document.getElementById('submittingOverlay');
  
  const messageIcons = [
    document.getElementById('firstNameMessageIcon'),
    document.getElementById('lastNameMessageIcon'),
    document.getElementById('usernameMessageIcon'),
    document.getElementById('emailMessageIcon'),
    document.getElementById('passwordMessageIcon'),
    document.getElementById('confirmPasswordMessageIcon'),
  ];

  const messageLists = [
    document.getElementById('firstNameMessageList'),
    document.getElementById('lastNameMessageList'),
    document.getElementById('usernameMessageList'),
    document.getElementById('emailMessageList'),
    document.getElementById('passwordMessageList'),
    document.getElementById('confirmPasswordMessageList'),
  ];

  messageIcons.forEach((elem, i) => {
    if (elem) {
      const list = messageLists[i];
      elem.addEventListener('mouseover', evt => {
        list.classList.remove('auth-splash__form-messages--hide');
        list.classList.add('auth-splash__form-messages--show');
      });
      elem.addEventListener('mouseleave', evt => {
        list.classList.remove('auth-splash__form-messages--show');
        list.classList.add('auth-splash__form-messages--hide');
      });
    }
  });

  authForm.addEventListener('submit', evt => {
    console.log('submit event')
    submittingOverlay.classList.remove('auth-splash__submitting--hide');
    submittingOverlay.classList.add('auth-splash__submitting--show');
  });

});
