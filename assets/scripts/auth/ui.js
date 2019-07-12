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
  $('form').trigger('reset')
}
const signInSuccessful = responseData => {
  console.log('responseData is', responseData)
  successMessage('You signed in successfully')
  $('form').trigger('reset')
  // keeping track of the user, so we can have the token for the API
  // we use `store` so we can access the token in any file
  store.user = responseData.user
  $('.before-signin').hide()
  $('.after-signin').show()
}
const signOutSuccessful = responseData => {
  console.log('responseData is', responseData)
  successMessage('You signed out successfully!')
  $('form').trigger('reset')
  $('.after-signin').hide()
  $('.before-signin').show()
}

const changePasswordSuccessful = responseData => {
  console.log('responseData is', responseData)
  successMessage('You Changed Your Password!')
  $('form').trigger('reset')
}
module.exports = {
  signUpSuccessful,
  signInSuccessful,
  signOutSuccessful,
  changePasswordSuccessful

}
