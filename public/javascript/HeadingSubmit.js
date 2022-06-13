async function HeadingTitleSubmit(event) {
    event.preventDefault();
  
    document.querySelector('#HeadingSubmitForm').style.display = 'none';
    document.querySelector('#TaskDisplay').classList.remove('hidden');
  }
  
    document
    .querySelector('#parent_div')
    .addEventListener('click', HeadingTitleSubmit);
  