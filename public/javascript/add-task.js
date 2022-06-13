function TaskFormHandler(event) {
  event.preventDefault();

  //   document.querySelector('#TaskDisplay').style.display = 'none';
  //   document.querySelector('#TaskSubmitForm').classList.remove('hidden');
}

document
  .querySelector('#TaskPlusBtn')
  .addEventListener('click', TaskFormHandler);

async function TaskTitleSubmit(event) {
  event.preventDefault();

  //   document.querySelector('#TaskSubmitForm').classList.add('hidden');
  //   document.querySelector('#TaskDisplay').style.display = '';
}

document
  .querySelector('#TaskSubmit')
  .addEventListener('click', TaskTitleSubmit);
