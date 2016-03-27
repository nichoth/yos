var List = require('./list')
var yo = require('yo-yo')

document.body.appendChild(List(yo, {
  onclick: console.log.bind(console, 'test')
}))
