var GAMEOVER_SCREEN = new AURA.Screen();

// init function is fired before the loop
GAMEOVER_SCREEN.addInit(function( callLoop ) {

  this.bg = new AURA.Image(AURA.loader.resources[3]);

  this.restartBtn = new AURA.Image(AURA.loader.resources[7]);
  this.restartBtn.center();

  AURA.ui.addTo(this.restartBtn, 'click', function() {
    console.log('Restart game button clicked');
    GAME_SCREEN.init( function() { } );
    AURA.screenManager.changeScreens(1);
  });

  this.gameOverText = new AURA.Text();
  
  callLoop();
});

// the main game loop
GAMEOVER_SCREEN.addLoop(function() {
  that = GAMEOVER_SCREEN;
  that.bg.render();
  that.gameOverText.write('GAME OVER',130,200,'white','33px OCRAStdRegular');
  that.restartBtn.render();
});