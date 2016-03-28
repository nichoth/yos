var update = require('./update')
var xtend = require('xtend')

module.exports = renderList

function renderList(yo, opts, prevEl) {
  var className = 'example'
  opts = xtend({
    items: [],
    onclick: function(){}
  }, opts)

  var el = yo`<div class=${className}>
    Random Numbers
    <ul>
      ${opts.items.map(function (item) {
        return yo`<li>${item}</li>`
      })}
    </ul>
    <button onclick=${onClick.bind(null, prevEl)}>Add Random Number</button>
  </div>`

  function onClick(prevEl, ev) {
    prevEl = prevEl || el
    var newEl = renderList(yo, xtend(opts, {
      items: opts.items.concat(Math.random())
    }), prevEl)
    update(prevEl, newEl)
    opts.onclick(ev)
  }

  return el
}

