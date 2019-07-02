'use strict'
const store = require('../store')

const successMessage = message => {
  $('#message').text(message)
  $('#message').removeClass('failure')
  $('#message').addClass('success')

  // Clear out our forms
  $('form').trigger('reset')
}

const signUpSuccessful = responseData => {
  successMessage('You signed up successfully!')
}
const signInSuccessful = responseData => {
  console.log('responseData is', responseData)
  successMessage('You signed in successfully')
  // keeping track of the user, so we can have the token for the API
  // we use `store` so we can access the token in any file
  store.user = responseData.user
  $('#sign-out').removeClass('hide')
  $('#change-password').removeClass('hide')
  $('.gameboard').removeClass('hide')
  $('#sign-in').addClass('hide')
  $('#sign-up').addClass('hide')
}
const signOutSuccessful = responseData => {
  console.log('responseData is', responseData)
  successMessage('You signed out successfully!')
}
module.exports = {
  signUpSuccessful,
  signInSuccessful,
  signOutSuccessful

}
