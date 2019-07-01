'use strict'
const store = require('../store')
const gameEvents = require('./events')

const successMessage = message => {
  $('#message').text(message)
  $('#message').removeClass('failure')
  $('#message').addClass('success')

  // Clear out our forms
  $('form').trigger('reset')
}
const failureMessage = message => {
  $('#message').text(message)
  $('#message').removeClass('failure')

  $('form').trigger('reset')
}

const createGameSuccessful = responseData => {
  successMessage('You created a new game!')
  store.gameData = responseData.game
  console.log(store.gameData)
}

const createGameFailure = () => {
  failureMessage('You failed to create game!')
}
// const updateGameSuccessful = responseData =>
//   successMessage('You updated your game!')
// store.gameData = responseData.game
// console.log(store.gameData)

module.exports = {
  createGameSuccessful,
  createGameFailure,
  gameEvents
}
