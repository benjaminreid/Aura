AURA.Screen = function() {
  this.loop;
};

AURA.Screen.prototype = {
  addLoop: function(func) {
    this.loop = func;
  }
};