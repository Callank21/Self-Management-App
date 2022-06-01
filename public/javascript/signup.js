async function signupFormHandler(event) {
  event.preventDefault();

  const firstname = document.querySelector('#firstname').value.trim();
  const lasttname = document.querySelector('#lastname').value.trim();
  const email = document.querySelector('#email').value.trim();
  const password = document.querySelector('#password').value.trim();

  if (firstname && lasttname && email && password) {
    const response = await fetch('/api/users', {
      method: 'post',
      body: JSON.stringify({
        firstname,
        lasttname,
        email,
        password,
      }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert(response.statusText);
    }
  }
}

document
  .querySelector('.form-horizontal')
  .addEventListener('submit', signupFormHandler);
