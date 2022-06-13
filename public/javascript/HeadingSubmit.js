async function HeadingTitleSubmit(event) {
  event.preventDefault();

  if (event.target.matches('#headingSubmit')) {
    const projectId = event.target.getAttribute('data-headingsubmit-id');

    const heading_title = document.querySelector(
      '[data-headingtitle-id="' + projectId + '"]'
    ).value;

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
  }
}

document.addEventListener('click', HeadingTitleSubmit);
