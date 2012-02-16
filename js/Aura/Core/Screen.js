AURA.Screen = function() {
  this.loop = new Array();
  this.init;
  this.destroy = function() { console.log('Destroying', this); };
};

AURA.Screen.prototype = {
  addLoop: function(func) {
    this.loop.push(func);
  },
  addInit: function(func) {
    this.init = func;
  },
  addDestroy: function(func)
  {
    this.destroy = func;
  },
  removeLoop: function(index)
  {
    this.loop.splice(index,1);
  }
};