AURA.Utils = function() {
  
};
AURA.Utils.prototype = {
  randomRange: function(min,max) {
    return Math.random() * (max - min) + min;
  },
  squareHitTest: function(mouse,target) {
    if (
        (mouse.x >= target.x) &&
        (mouse.x <= (target.x + target.width) ) &&
        (mouse.y >= target.y) &&
        (mouse.y <= (target.y + target.height) )
      ) return true;

    return false;
  }
};