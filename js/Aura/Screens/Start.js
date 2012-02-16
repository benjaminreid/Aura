var START_SCREEN = new AURA.Screen();

// init function is fired before the loop
START_SCREEN.addInit(function( callLoop ) {
  console.log('Starting start screen');

  this.bg = new AURA.Image(AURA.loader.resources[3]);

  this.startBtn = new AURA.Image(AURA.loader.resources[4]);
  this.startBtn.center();

  AURA.ui.addTo(this.startBtn, 'click', function() {
    console.log('Start game button clicked');
    GAME_SCREEN.init( function() { } );
    AURA.screenManager.changeScreens(1);
  });

  this.logo = new AURA.Image(AURA.loader.resources[5]);
  this.logo.centerHorz();
  this.logo.setPos(null,105);

  callLoop();
});

START_SCREEN.addDestroy(function() {
  console.log('This is a custom destroy', this);  
});

// the main game loop
START_SCREEN.addLoop(function() {
  that = START_SCREEN;
  that.bg.render();
  that.logo.render();
  that.startBtn.render();
});