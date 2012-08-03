
# Confirmation

  Confirmation component with structural styling to give you a clean slate. Built on
  the [Dialog](http://github.com/component/dialog) component.

  ![js confirmation component](http://f.cl.ly/items/142j0B0d1E2K3z0r3h0i/Screen%20Shot%202012-08-03%20at%2011.37.49%20AM.png)
  ![confirm](http://f.cl.ly/items/0o0z3T2R0o1v3S1E3d2W/Screen%20Shot%202012-08-03%20at%2011.37.57%20AM.png)

## Installation

```
$ npm install confirmation-component
```

## Features

  - events for composition
  - structural CSS letting you decide on style
  - overlay, modal, escapable etc from Dialog
  - fluent API

## Events

  - `show` the confirmation is shown
  - `hide` the confirmation is hidden
  - `cancel` the user closed the confirmation or cancelled
  - `ok` the user accepted

## API
  
### confirm(msg)

  Display a confirmation dialog with a `msg` only.

### confirm(title, msg)

  Display a confirmation dialog with `title` and `msg`.

### Confirmation#focus(type)

  By default the "cancel" button is focused, however you
  may invoke `.focus('ok')`.

### Confirmation#cancel(text)

  Set cancel button `text`.

### Confirmation#ok(text)

  Set cancel ok `text`.

### Confirmation#show([fn])

  Show the confirmation and invoke `fn` with
  a boolean representing the user's choice.

  View the [Dialog](http://github.com/component/dialog) API for
  additional methods such as `.modal()`, `.closable()` etc.

## License

  MIT