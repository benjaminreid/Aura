AURA.Screen = function() {
  this.loop = new Array();
  this.init;
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