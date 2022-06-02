async function newFormHandler(event) {
    event.preventDefault();

    const project_title = document.querySelector('#project_title').value;
    const heading_title = document.querySelector('#heading_title').value;
    const desc = document.querySelector('#desc').value;
    const time = document.querySelector('#time').value;
    let projectResponse;
    if (project_title) {
        projectResponse = await fetch(`/api/projects`, {
           method: 'POST',
           body: JSON.stringify({
               project_title
           }),
           headers: {
               'Content-Type': 'application/json'
           } 
        });
        /*if (response.ok) {
            document.location.replace('/dashboard');
          } else {
            alert(response.statusText);
          }
          */
    }

    if (heading_title) {
        console.log(projectResponse);
        const response = await fetch(`/api/headings`, {
            method: 'POST',
            body: JSON.stringify({
                heading_title
            }),
            headers: {
                'Content-Type': 'application/json'
            } 
         });
         if (response.ok) {
            document.location.replace('/dashboard');
          } else {
            alert(response.statusText);
          }
    }
    if (desc && time) {
        const response = await fetch(`/api/tasks`, {
            method: 'POST',
            body: JSON.stringify({
                desc,
                time
            }),
            headers: {
                'Content-Type': 'application/json'
            } 
         });
         if (response.ok) {
            document.location.replace('/dashboard');
          } else {
            alert(response.statusText);
          }
    }
}

document.querySelector('#new-project-form').addEventListener('submit', newFormHandler);