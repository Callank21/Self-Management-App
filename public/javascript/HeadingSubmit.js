async function HeadingTitleSubmit(event) {
  event.preventDefault();

  const heading_title = document.querySelector('#Heading_title').value;
  const projectId = document
    .querySelector('#project')
    .getAttribute('data-project-id');
  console.log(projectId);

  if (heading_title) {
    const response = await fetch(`/api/headings`, {
      method: 'POST',
      body: JSON.stringify({
        heading_title,
        project_id: projectId,
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

  // document.querySelector('#HeadingSubmitForm').style.display = 'none';
  // document.querySelector('#TaskDisplay').classList.remove('hidden');
}

document
  .querySelector('#HeadingSubmit')
  .addEventListener('click', HeadingTitleSubmit);
