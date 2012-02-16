AURA.Screen = function(name) {
  this.name = name;
  this.loop = new Array();
  this.init;
  this.destroy = function() { console.log('Destroying', this.name); };
};

AURA.Screen.prototype = {
  addLoop: function(func) {
    this.loop.push(func);
  },
  addInit: function(func) {
    this.init = func;
  },
  removeLoop: function(index)
  {
    this.loop.splice(index,1);
  }
};