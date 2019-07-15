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
  store.game = responseData.game
  $('.gameboard').removeClass('after-signingin')
  $('.gameboard').addClass('show')
}

const createGameFailure = () => {
failureMessage('Failure to create new game!')
}

module.exports = {
  createGameSuccessful,
  createGameFailure,
  gameEvents
}
