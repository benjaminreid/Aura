var GAME_SCREEN = new AURA.Screen();

// init function is fired before the loop
GAME_SCREEN.addInit(function( callLoop ) {
  console.log('Starting game screen');
  
  this.player = new AURA.Player(AURA.loader.resources[2]);
  this.player.init();

  callLoop();
});

GAME_SCREEN.addLoop(function() {
  GAME_SCREEN.player.animateOnScreen(0);
});

// the main game loop
GAME_SCREEN.addLoop(function() {
  AURA.renderer.ctx.drawImage(AURA.loader.resources[3],0,0);
  GAME_SCREEN.player.loop();
});