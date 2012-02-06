AURA.Utils = function() {
  
};
AURA.Utils.prototype = {
  randomRange: function(min,max) {
    return Math.random() * (max - min) + min;
  }
};