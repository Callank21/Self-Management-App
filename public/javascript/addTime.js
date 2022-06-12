async function addTaskTime() {
  var id = 5;
  // Retrieve task id from task div
  // Use .parentElement property to get heading id from heading div
  // Use .parentElement property to get project id from project div
    const response = await fetch(`/api/tasks/headings/${id}`, {
        method: 'GET'
      });
    response.json()
    .then((taskArray) => {
        var sum = 0;
        console.log(sum);
        for (let i = 0; i < taskArray.length; i++) {
            sum += taskArray[i].time;
        }
        console.log(sum);
        fetch(`/api/headings/time/${id}`, {
            method: 'PUT',
            body: JSON.stringify({
                time: sum
              }),
              headers: {
                'Content-Type': 'application/json'
              }
        })
    });
    await addHeadingTime();
}

async function addHeadingTime() {
  id = 2;
    const response = await fetch(`/api/headings/projects/${id}`, {
        method: 'GET'
      });
    response.json()
    .then((headingArray) => {
        var sum = 0;
        for (let i = 0; i < headingArray.length; i++) {
            sum += headingArray[i].time;
        }
        console.log(sum);
        fetch(`/api/projects/time/${id}`, {
            method: 'PUT',
            body: JSON.stringify({
                time: sum
              }),
              headers: {
                'Content-Type': 'application/json'
              }
        })
    });
}

document
  .querySelector('#edit-task')
  .addEventListener('click', addTaskTime);
  