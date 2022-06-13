async function taskSubmit(event) {
  event.preventDefault();

  if (event.target.matches('#taskSubmit')) {
    const headingId = event.target.getAttribute('data-tasksubmit-id');

    const task_desc = document.querySelector(
      '[data-tasktitle-id="' + headingId + '"]'
    ).value;
    const task_time = document.querySelector(
      '[data-time-id="' + headingId + '"]'
    ).value;

    if (task_desc && task_time) {
      const response = await fetch(`/api/tasks`, {
        method: 'POST',
        body: JSON.stringify({
          desc: task_desc,
          time: task_time,
          heading_id: headingId,
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

document.addEventListener('click', taskSubmit);
