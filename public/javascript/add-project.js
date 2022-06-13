function projectFormHandler(event) {
  event.preventDefault();

  document.querySelector('#projectDisplay').style.display = 'none';
  document.querySelector('#projectSubmitForm').classList.remove('hidden');
}

document
  .querySelector('#projectPlusBtn')
  .addEventListener('click', projectFormHandler);

async function projectTitleSubmit(event) {
  event.preventDefault();

  const project_title = document.querySelector('#project_title').value;

  if (project_title) {
    const response = await fetch(`/api/projects`, {
      method: 'POST',
      body: JSON.stringify({
        project_title,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert(response.statusText);
    }
  }
  document.querySelector('#projectSubmitForm').style.display = 'none';
  document.querySelector('#HeadingDisplay').classList.remove('hidden');
}

document
  .querySelector('#projectSubmit')
  .addEventListener('click', projectTitleSubmit);
