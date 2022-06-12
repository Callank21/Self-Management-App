function projectFormHandler(event) {
  event.preventDefault();

  document.querySelector('#ProjectDisplay').style.display = 'none';
  document.querySelector('#ProjectSubmitForm').classList.remove('hidden');
}

document
  .querySelector('#ProjectPlusBtn')
  .addEventListener('click', projectFormHandler);

async function projectTitleSubmit(event) {
  event.preventDefault();

  //   const project_title = document.querySelector('#Project_title').value;

  //   if (project_title) {
  //     const response = await fetch(`/api/projects`, {
  //       method: 'POST',
  //       body: JSON.stringify({
  //         project_title,
  //       }),
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //     });
  //     if (response.ok) {
  //       document.location.replace('/dashboard');
  //     } else {
  //       alert(response.statusText);
  //     }
  //   }
  document.querySelector('#ProjectSubmitForm').style.display = 'none';
  document.querySelector('#HeadingDisplay').classList.remove('hidden');
}

document
  .querySelector('#ProjectSubmit')
  .addEventListener('click', projectTitleSubmit);

// async function newFormHandler(event) {
//   console.log('newformhandler');
//   event.preventDefault();

//   const project_title = document.querySelector('#project_title').value;
//   const heading_title = document.querySelector('#heading_title').value;
//   const desc = document.querySelector('#desc').value;
//   const time = document.querySelector('#time').value;

//   if (project_title) {
//     console.log(project_title);
//     const response = await fetch(`/api/projects`, {
//       method: 'POST',
//       body: JSON.stringify({
//         project_title,
//       }),
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     });
//     if (response.ok) {
//       document.location.replace('/dashboard');
//     } else {
//       alert(response.statusText);
//     }
//   }

//   if (heading_title) {
//     console.log(heading_title);
//     const response = await fetch(`/api/headings`, {
//       method: 'POST',
//       body: JSON.stringify({
//         heading_title,
//       }),
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     });
//     if (response.ok) {
//       document.location.replace('/dashboard');
//     } else {
//       alert(response.statusText);
//     }
//   }
//   if (desc && time) {
//     console.log(desc);
//     console.log(time);
//     const response = await fetch(`/api/tasks`, {
//       method: 'POST',
//       body: JSON.stringify({
//         desc,
//         time,
//       }),
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     });
//     if (response.ok) {
//       document.location.replace('/dashboard');
//     } else {
//       alert(response.statusText);
//     }
//   }
// }

// document
//   .querySelector('#new-project-form')
//   .addEventListener('submit', newFormHandler);
