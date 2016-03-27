var update = require('./update')
var xtend = require('xtend')

module.exports = renderList

function renderList(yo, opts) {
  var className = 'example'
  opts = xtend({
    items: [],
    onclick: false
  }, opts)

  var el = yo`<div class=${className}>
    Random Numbers
    <ul>
      ${opts.items.map(function (item) {
        return yo`<li>${item}</li>`
      })}
    </ul>
    <button onclick=${onClick}>Add Random Number</button>
  </div>`

  function onClick(ev) {
    var newEl = renderList(yo, xtend(opts, {
      items: opts.items.concat(Math.random())
    }))
    update('.'+className, newEl)
    if (opts.onclick) opts.onclick(ev)
  }

  return el
}

