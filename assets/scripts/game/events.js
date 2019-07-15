'use strict'

const store = require('../store')
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
  if (store.game && store.game.over === false) {
    if ($(event.target).text()) {

    } else {
      const cell = $(event.target).data('cell-index')
      // console.log(cell)
      // if store.game.cell[0] = player
      $(event.target).html(player)
      if (player === 'x') {
        player = 'o'
      } else if (player === 'o') {
        player = 'x'
      }
    }
  }
}

module.exports = {
  onCreateGame,
  onUpdateGame,
  player
}
