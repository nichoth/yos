var List = require('./list')

var list = List({ onclick: ev => console.log('test') })
document.body.appendChild(list.el)
