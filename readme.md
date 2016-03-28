# yos

Trying out yo-yo


## use the examples

    $ wzrd examples/yo/index.js

## mercury

Unidirectional normal `observ` style state tree

## yo

Whenever the UI state changes, the component calls `yo.update(oldEl, newEl)`

You don't have a central state tree like in mercury, redux, etc. Component state is completely encapsulated.
