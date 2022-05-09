function openPlayerConfig() {
  playerConfigOverlayElement.style.display = "block";
  backdropElement.style.display = "block";
}

function closePlayerConfig() {
  playerConfigOverlayElement.style.display = "none";
  backdropElement.style.display = "none";

  formElement.firstElementChild.classList.remove('error');

  errorsOutputElement.textContent = '';
}

function savePlayerConfig(e) {
  e.preventDefault();

  // grab the value
  const formData = new FormData(e.target);

  // gets the name attr in input and trim whitespaces in front or after value '    Lol   ' -> 'lol'
  const enteredPlayername = formData.get('playername').trim()

  // if enteredPlayername is false like it has nothing
  if (!enteredPlayername) {
    e.target.firstElementChild.classList.add('error')
    // show error
    errorsOutputElement.textContent = 'Please enter a valid name'
    // return stops execution code from continuing
    return;
  }


}