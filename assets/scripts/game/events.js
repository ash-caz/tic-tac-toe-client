'use strict'




 const api = require('./api')
const ui = require('./ui')

 const onCreateGame = event => {
 console.log(marked)
 event.preventDefault()

const data-cell-index = event.target
 api.createGame(data-cell-index-data)
  .then(ui.createGameSuccessful)
.catch(ui.createGameError)
 }




module.exports = {
  onCreateGame

}
