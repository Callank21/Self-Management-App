async function signupFormHandler(event) {
  event.preventDefault();

  const firstname = document.querySelector('#firstName').value.trim();
  const lastname = document.querySelector('#lastName').value.trim();
  const email = document.querySelector('#email').value.trim();
  const password = document.querySelector('#password').value.trim();

  if (firstname && lastname && email && password) {
    console.log(firstname);
    console.log(lastname);
    console.log(email);
    console.log(password);
    const response = await fetch('/api/users', {
      method: 'post',
      body: JSON.stringify({
        firstname,
        lastname,
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
