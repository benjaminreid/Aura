AURA.ScreenManager = function() {
  this.screens = [];
  this.currentScreen;  
};

AURA.ScreenManager.prototype = {
  addScreen: function(screen) {
    if (screen instanceof AURA.Screen) this.screens.push(screen);
    console.log('Added a screen', this.screens);
  },
  changeScreens: function(i)
  {
    this.currentScreen = this.screens[i];
  } 
};