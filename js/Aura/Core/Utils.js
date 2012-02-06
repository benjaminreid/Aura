AURA.Utils = function() {
  
};
AURA.Utils.prototype = {
  randomRange: function(min,max) {
    return Math.random() * (max - min) + min;
  },
  mouseHit: function(mouse,target) {
    if (
        (mouse.x >= target.x) &&
        (mouse.x <= (target.x + target.width) ) &&
        (mouse.y >= target.y) &&
        (mouse.y <= (target.y + target.height) )
      ) return true;

    return false;
  },
  squareHitTest: function(that,target) {
    if (
      ((that.position.x + that.width) >= target.position.x) &&
      (that.position.x <= (target.position.x + target.width)) &&
      (that.position.y <= (target.position.y + target.height)) &&
      (that.position.y >= target.position.y)
      ) return true;
    return false;
  }
};