function openPlayerConfig() {
  playerConfigOverlayElement.style.display = "block";
  backdropElement.style.display = "block";
}

function closePlayerConfig() {
  playerConfigOverlayElement.style.display = "none";
  backdropElement.style.display = "none";
}

function savePlayerConfig(e) {
  e.preventDefault();

  // grab the value
  const formData = new FormData(e.target);

  // gets the name attr in input
  const enteredPlayername = formData.get('playername');

  console.log(enteredPlayername);
}