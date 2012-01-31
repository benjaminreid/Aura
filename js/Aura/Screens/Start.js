var START_SCREEN = new AURA.Screen();

// init function is fired before the loop
START_SCREEN.addInit(function( callLoop ) {
  console.log('Starting start screen');

  this.startBtn = new AURA.Image(AURA.loader.resources[4]);
  this.startBtn.center();

  this.logo     = AURA.loader.resources[5];

  AURA.ui.addTo(this.startBtn);

  callLoop();
});

// the main game loop
START_SCREEN.addLoop(function() {
  that = START_SCREEN;
  AURA.renderer.ctx.drawImage(AURA.loader.resources[3],0,0);
  AURA.renderer.ctx.drawImage(that.logo, (AURA.Config.canvasWidth/2) - (that.logo.width/2) , 105);
  that.startBtn.render();
});