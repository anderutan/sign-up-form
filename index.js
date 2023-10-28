const pwd = document.querySelector('#pwd');
const pwdConfirm = document.querySelector('#pwd-confirm');
const pwdMatchMessage = document.querySelector('.pwdMatchMessage');

pwd.addEventListener('input', checkPwd);
pwdConfirm.addEventListener('input', checkPwd);

function checkPwd() {
  const firstPwd = pwd.value;
  const secondPwd = pwdConfirm.value;

  if (firstPwd === secondPwd) {
    pwdMatchMessage.textContent = '*Password match';
    pwdMatchMessage.style.color = 'green';
    pwd.style.border = '2px solid green';
    pwd.style.boxShadow = '2px 2px 5px rgba(0, 0, 0, 0.3)';
    pwdConfirm.style.border = '2px solid green';
    pwdConfirm.style.boxShadow = '2px 2px 5px rgba(0, 0, 0, 0.3)';
  } else {
    pwdMatchMessage.textContent = '*Password do not match';
    pwdMatchMessage.style.color = 'red';
    pwd.style.border = '2px solid red';
    pwd.style.boxShadow = '2px 2px 5px rgba(0, 0, 0, 0.3)';
    pwdConfirm.style.border = '2px solid red';
    pwdConfirm.style.boxShadow = '2px 2px 5px rgba(0, 0, 0, 0.3)';
  }
  pwdMatchMessage.style.fontSize = '0.9rem';
  pwdMatchMessage.style.position = 'absolute';
  pwdMatchMessage.style.top = '50px';
  pwdMatchMessage.style.fontWeight = '400';
}
