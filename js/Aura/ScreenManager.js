AURA.ScreenManager = function() {
  this.screens = [];  
};

AURA.ScreenManager.prototype = {
  addScreen: function(screen) {
    if (screen instanceof AURA.Screen) this.screens.push(screen);
    console.log('Added a screen', this.screens);
  } 
};