'use strict'

// require store in events file .
// set up way to keep track of who player is.
// const store = require('./store')

const api = require('./api')
const ui = require('./ui')

const onCreateGame = event => {
  event.preventDefault()
  api.createGame()
    .then(ui.createGameSuccessful)
    .catch(ui.createGameFailure)
}

const onUpdateGame = event => {
$(event.target).html('x')
}

module.exports = {
  onCreateGame,
  onUpdateGame
}
