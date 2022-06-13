function headingFormHandler(event) {
  event.preventDefault();

  if (event.target.matches('#headingBtn')) {
    const headingBtnId = event.target.getAttribute('data-headingbtn-id');

    const headingSubmit = document.querySelector(
      '[data-hiddenheading-id="' + headingBtnId + '"]'
    );

    headingSubmit.classList.remove('hidden');
  }
}

document.addEventListener('click', headingFormHandler);
