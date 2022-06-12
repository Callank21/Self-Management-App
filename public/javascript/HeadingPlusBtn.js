function headingFormHandler(event) {
  event.preventDefault();

  document.querySelector('#HeadingDisplay').style.display = 'none';
  document.querySelector('#HeadingSubmitForm').classList.remove('hidden');
}

document
  .querySelector('#HeadingPlusBtn')
  .addEventListener('click', headingFormHandler);