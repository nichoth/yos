var yo = require('yo-yo')
var List = require('./list')

var rootEl = yo`<div id="content"></div>`
document.body.appendChild(rootEl)

var state = List()

// ui state needs to be determinable purely from the state object
// any direct mutations to the dom would be lost
state(function onChange(data) {
  yo.update(rootEl, List.render(yo, data))
})

yo.update(rootEl, List.render(yo, state()))

