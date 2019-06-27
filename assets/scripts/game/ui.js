'use strict'
const store = require('../store')

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
const createGame = message => {
  $('#message').text(message)
  $('#message').removeClass('success')
  $('#message').addClass('failure')

  $('form').trigger('reset')
}

const createGameSuccessful = responseData => {
  successMessage('You created a new game!')
}
const createGameFailure = () => {
  failureMessage('You failed to create game!')
}

module.exports = {
  createGame,
  createGameSuccessful,
  createGameFailure
}
