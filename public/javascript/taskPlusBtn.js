function TaskFormHandler(event) {
  event.preventDefault();

  if (event.target.matches('#addTaskBtn')) {
    const addTaskBtn = event.target.getAttribute('data-addtaskbtn-id');

    const taskSubmitForm = document.querySelector(
      '[data-hiddentask-id="' + addTaskBtn + '"]'
    );

    taskSubmitForm.classList.remove('hidden');
  }
}

document.addEventListener('click', TaskFormHandler);
