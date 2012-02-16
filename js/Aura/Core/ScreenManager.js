AURA.ScreenManager = function() {
  this.screens = [];
  this.currentScreen;  
};

AURA.ScreenManager.prototype = {
  addScreen: function(screen) {
    // add a new screen to the screens array
    if (screen instanceof AURA.Screen) this.screens.push(screen);
    console.log('Adding new screen', screen);
  },
  changeScreens: function(i)
  {
    // if there's a current screen, call it's destory method
    if (typeof this.currentScreen != 'undefined')
      this.currentScreen.destroy();
     
    // set the new screen   
    this.currentScreen = this.screens[i];
  } 
};