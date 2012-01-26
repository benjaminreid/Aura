AURA.Screen = function() {
  this.loop;
  this.init;
};

AURA.Screen.prototype = {
  addLoop: function(func) {
    this.loop = func;
  },
  addInit: function(func) {
    this.init = func;
  }
};