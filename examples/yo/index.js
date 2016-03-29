var List = require('./list')
var yo = require('yo-yo')

var list = List(yo, {
  onclick: console.log.bind(console, 'test')
})

document.body.appendChild(list)
document.body.appendChild(List(yo))
