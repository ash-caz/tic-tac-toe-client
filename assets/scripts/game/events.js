'use strict'

// require store in events file .
// set up way to keep track of who player is.
// const store = require('./store')

const api = require('./api')
const ui = require('./ui')

let player = 'x'

const onCreateGame = event => {
  event.preventDefault()
  api.createGame()
    .then(ui.createGameSuccessful)
    .catch(ui.createGameFailure)
}

const onUpdateGame = event => {

  if ($(event.target).text()) {
    console.log('invalid move!')
  } else {
    // check for win
    $(event.target).html(player)
    if (player === 'x') {
      player = 'o'
    } else if (player === 'o') {
      player = 'x'
    }
  }
}
module.exports = {
  onCreateGame,
  onUpdateGame,
  player

}
