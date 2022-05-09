function openPlayerConfig(e) {
  // grab custom data-<set> attr we added in html, {poplated with data}
  const selectedPlayerId = +e.target.dataset.playerid; // +'1' -> 1

  editedPlayer = selectedPlayerId;

  playerConfigOverlayElement.style.display = "block";
  backdropElement.style.display = "block";
}



function closePlayerConfig() {
  playerConfigOverlayElement.style.display = "none";
  backdropElement.style.display = "none";

  formElement.firstElementChild.classList.remove('error');

  errorsOutputElement.textContent = '';

  // reset input if confirm btn clicked or modal is closed
  formElement.firstElementChild.lastElementChild.value = '';
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

  // player-{1}-data player-{2}-data
  const updatedPlayerDataElement = document.getElementById('player-' + editedPlayer + '-data')
  // update player name, returns []
  updatedPlayerDataElement.children[1].textContent = enteredPlayername;

  players[editedPlayer - 1].name = enteredPlayername;

  // close modal if confirm btn clicked
  closePlayerConfig();
}