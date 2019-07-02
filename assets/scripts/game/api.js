'use strict'


const config = require('../config')
const store = require('../store')

const signUp = formData => {
  return $.ajax({
    url: config.apiUrl + '/sign-up',
    data: formData,
    method: 'POST'
  })
}

const signIn = formData => {
  return $.ajax({
    url: config.apiUrl + '/sign-in',
    data: formData,
    method: 'POST'
  })
}
const gameCellIndex = () => {
return $.ajax({
    url: config.api.url + '/games',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}


const createGame = () => {
  return $.ajax({
    url: config.apiUrl + '/games',
    data: {},
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const updateGame = cellIndexData => {
  return $.ajax({
    url: config.apiUrl + '/games/' + store.gameData.id,
    data: {
      'game': {
        'cell': {
          'index': 0,
          'value': 'x'
        },
        'over': false
      }
    },
    method: 'GET'
  })
}

// to update move use patch.

module.exports = {
  signUp,
  signIn,
  createGame,
  updateGame,
  gameCellIndex
}
