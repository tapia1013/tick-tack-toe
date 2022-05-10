function startNewGame() {
  if (players[0].name === '' || players[1].name === '') {
    alert('Please set name for both players!')
    return;
  }

  activePlayerNameElement.textContent = players[activePlayer].name;

  gameAreaElement.style.display = 'block';
}


// to swith players when already clicked box
function switchPlayer() {
  if (activePlayer === 0) {
    activePlayer = 1;
  } else {
    activePlayer = 0;
  }

  activePlayerNameElement.textContent = players[activePlayer].name;
}


// We're looping through players and using this function eventListener
function selectGameField(e) {
  // check to see if gap is clicked
  if (e.target.tagName !== 'LI') {
    return;
  }

  e.target.textContent = players[activePlayer].symbol; // players[0]
  e.target.classList.add('disabled');

  switchPlayer()
}