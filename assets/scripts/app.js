
'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
const authEvents = require('./auth/events')
const gameEvents = require('./game/events')

$(() => {
  $('#sign-up').on('submit', authEvents.onSignUp)
  // $('#sign-up').on('submit', function (e) {
  //   e.preventDefault()
  //   console.log(authEvents)
  // })
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#sign-out').on('submit', authEvents.onSignOut)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#create-game').on('click', gameEvents.onCreateGame)
  $('.cell').on('click', gameEvents.onUpdateGame)
})
