
/**
 * Module dependencies.
 */

var Dialog = require('dialog').Dialog;

/**
 * Expose `confirm()`.
 */

exports = module.exports = confirm;

/**
 * Expose `Confirmation`.
 */

exports.Confirmation = Confirmation;

/**
 * Return a new `Confirmation` with the given 
 * (optional) `title` and `msg`.
 *
 * @param {String} title or msg
 * @param {String} msg
 * @return {Confirmation}
 * @api public
 */

function confirm(title, msg) {
  switch (arguments.length) {
    case 2:
      return new Confirmation({ title: title, message: msg });
    case 1:
      return new Confirmation({ message: title });
  }
}

/**
 * Initialize a new `Confirmation` dialog.
 *
 * @param {Object} options
 * @api public
 */

function Confirmation(options) {
  Dialog.call(this, options);
  this.focus('cancel');
};

/**
 * Inherits from `Dialog.prototype`.
 */

Confirmation.prototype.__proto__ = Dialog.prototype;

/**
 * Focus `type`, either "ok" or "cancel".
 *
 * @param {String} type
 * @return {Confirmation}
 * @api public
 */

Confirmation.prototype.focus = function(type){
  this._focus = type;
  return this;
};

/**
 * Change "cancel" button `text`.
 *
 * @param {String} text
 * @return {Confirmation}
 * @api public
 */

Confirmation.prototype.cancel = function(text){
  this.el.find('.cancel').text(text);
  return this;
};

/**
 * Change "ok" button `text`.
 *
 * @param {String} text
 * @return {Confirmation}
 * @api public
 */

Confirmation.prototype.ok = function(text){
  this.el.find('.ok').text(text);
  return this;
};

/**
 * Show the confirmation dialog and invoke `fn(ok)`.
 *
 * @param {Function} fn
 * @return {Confirmation} for chaining
 * @api public
 */

Confirmation.prototype.show = function(fn){
  Dialog.prototype.show.call(this);
  this.el.find('.' + this._focus).focus();
  this.callback = fn || function(){};
  return this;
};

/**
 * Render with the given `options`.
 *
 * Emits "cancel" event.
 * Emits "ok" event.
 *
 * @param {Object} options
 * @api public
 */

Confirmation.prototype.render = function(options){
  var self = this
  var actions = $(render('confirmation'));
  Dialog.prototype.render.call(this, options);

  this.el.addClass('confirmation');
  this.el.append(actions);

  this.on('close', function(){
    self.emit('cancel');
    self.callback(false);
  });

  this.on('escape', function(){
    self.emit('cancel');
    self.callback(false);
  });

  actions.find('.cancel').click(function(e){
    e.preventDefault();
    self.emit('cancel');
    self.callback(false);
    self.hide();
  });

  actions.find('.ok').click(function(e){
    e.preventDefault();
    self.emit('ok');
    self.callback(true);
    self.hide();
  });
};
