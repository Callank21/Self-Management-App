async function loginFormHandler(event) {
  event.preventDefault();

  const email = document.querySelector('#email').value.trim();
  const password = document.querySelector('#password').value.trim();

  if (email && password) {
    const response = await fetch('/api/users/login', {
      method: 'post',
      body: JSON.stringify({
        email,
        password,
      }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      console.log('okay')
      document.location.replace('/dashboard'); 
    } else {
      alert(response.statusText);
    }
  }
}

document
  .querySelector('.form-horizontal')
  .addEventListener('submit', loginFormHandler);
