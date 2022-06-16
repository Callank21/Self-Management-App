function contextMenuParse(event) {
    event.preventDefault();

    var itemType = event.target.getAttribute('id');
    var itemId = event.target.getAttribute(`data-${itemType}-id`);

    localStorage.setItem("itemType", itemType);
    localStorage.setItem("itemId", itemId);
}
  
  document.addEventListener('contextmenu', contextMenuParse);

function editItem() {
  var itemType = localStorage.getItem("itemType");
  var itemId = localStorage.getItem("itemId");

  console.log(itemType);
  console.log(itemId);

  var divId = `#${itemType}EditForm${itemId}`;
  document.querySelector(divId).classList.remove('hidden');
}

async function editSubmit(event) {
  event.preventDefault();

  if (event.target.matches('#editSubmit')) {
      var itemType = localStorage.getItem("itemType");
      var itemId = localStorage.getItem("itemId");

      var submitId = `#${itemType}_edit`;
      var divId = `#${itemType}EditForm${itemId}`;

      if (itemType == "project") {
        const project_title = document.querySelector(submitId).value;
        const response = await fetch(`/api/projects/${itemId}`, {
          method: 'PUT',
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
      else if (itemType == "heading") {
        const heading_title = document.querySelector(submitId).value;
        const response = await fetch(`/api/headings/${itemId}`, {
          method: 'PUT',
          body: JSON.stringify({
            heading_title,
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
      else if (itemType == "task") {
        const desc = document.querySelector(submitId).value;
        const time = document.querySelector('#taskTime').value;
        const response = await fetch(`/api/tasks/${itemId}`, {
          method: 'PUT',
          body: JSON.stringify({
            desc,
            time
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
      document.querySelector(divId).classList.add('hidden');
    }
}

document
  .addEventListener('click', editSubmit);

function deleteItem() {
  var itemType = localStorage.getItem("itemType");
  var itemId = localStorage.getItem("itemId");
}

// async function ProjectTitleEdit(event) {
//     event.preventDefault();
  
//     if (event.target.matches('#project')) {
//       const projectId = event.target.getAttribute('data-headingsubmit-id');
  
//       const heading_title = document.querySelector(
//         '[data-headingtitle-id="' + projectId + '"]'
//       ).value;
  
//       if (heading_title) {
//         const response = await fetch(`/api/headings${projectId}`, {
//           method: 'PUT',
//           body: JSON.stringify({
//             heading_title
//           }),
//           headers: {
//             'Content-Type': 'application/json',
//           },
//         });
//         if (response.ok) {
//           document.location.replace('/dashboard');
//         } else {
//           alert(response.statusText);
//         }
//       }
//     }
//   }
  
//   document.addEventListener('dblclick', ProjectTitleEdit);