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

  const selectedField = e.target;

  // get gameData fields.. -1 is to start at 0 index and converts to Number
  const selectedColumn = selectedField.dataset.col - 1;
  const selectedRow = selectedField.dataset.row - 1;

  // if box already selected then value is either 1 or 2 and we cant click on it anymore cause its already been asssigned
  if (gameData[selectedRow][selectedColumn] > 0) {
    alert('Please Select and Empty Field')
    return;
  }

  selectedField.textContent = players[activePlayer].symbol; // players[0]
  selectedField.classList.add('disabled');


  // Update gameData fields
  gameData[selectedRow][selectedColumn] = activePlayer + 1;
  // console.log(gameData);

  const winnerId = checkForGameOver();
  console.log(winnerId);

  // increment to check if its a draw in checkForGameOver
  currentRound++;

  switchPlayer()
}




function checkForGameOver() {
  // Checking the rows for equality
  for (i = 0; i < 3; i++) {
    if (
      gameData[i][0] > 0 &&
      gameData[i][0] === gameData[i][1] &&
      gameData[i][1] === gameData[i][2]
    ) {
      return gameData[i][0];
    }
  }

  // Checking Columns for equality
  for (i = 0; i < 3; i++) {
    if (
      gameData[0][i] > 0 &&
      gameData[0][i] === gameData[1][i] &&
      gameData[0][i] === gameData[2][i]
    ) {
      return gameData[0][i];
    }
  }

  // Diaganol: Top Left to Bottom Right
  if (
    gameData[0][0] > 0 &&
    gameData[0][0] === gameData[1][1] &&
    gameData[1][1] === gameData[2][2]
  ) {
    return gameData[0][0]
  }

  // Diaganol: Bottom Left to Top Right
  if (
    gameData[2][0] > 0 &&
    gameData[2][0] === gameData[1][1] &&
    gameData[1][1] === gameData[0][2]
  ) {
    return gameData[2][0]
  }


  // check if its a draw
  if (currentRound === 9) {
    return -1;
  }


  return 0;
}