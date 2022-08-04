window.addEventListener('load', () => {
  document.getElementById('login-form').onsubmit = event => {
    event.preventDefault();

    const password = document.getElementById('password-input').value;
    const error = document.getElementById('form-error');

    if (!password || !password.length) {
      document.getElementById('password-input').focus();
      return error.innerHTML = 'Lütfen admin şifresini yazın.';
    }

    serverRequest('/admin/login', 'POST', {
      password
    }, res => {
      if (!res.success) {
        document.getElementById('password-input').focus();
        return error.innerHTML = 'Admin şifresi yanlış, lütfen tekrar deneyin.';
      }

      return location.href = '/admin';
    });
  }
});
