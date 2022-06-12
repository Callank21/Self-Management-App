function headingFormHandler(event) {
  event.preventDefault();

  document.querySelector('#HeadingDisplay').style.display = 'none';
  document.querySelector('#HeadingSubmitForm').classList.remove('hidden');
}

document
  .querySelector('#HeadingPlusBtn')
  .addEventListener('click', headingFormHandler);

async function HeadingTitleSubmit(event) {
  event.preventDefault();

  document.querySelector('#HeadingSubmitForm').style.display = 'none';
  document.querySelector('#TaskDisplay').classList.remove('hidden');
}

document
  .querySelector('#HeadingSubmit')
  .addEventListener('click', HeadingTitleSubmit);
