var GAME_SCREEN = new AURA.Screen();

// init function is fired before the loop
GAME_SCREEN.addInit(function( callLoop ) {
  console.log('Starting game screen');

  this.bg = new AURA.Image(AURA.loader.resources[3]);
  
  this.player = new AURA.Player(AURA.loader.resources[2]);
  this.player.init();

  this.bulletManager = new AURA.BulletManager();
  this.bulletManager.init();

  this.enemyManager = new AURA.EnemyManager();
  this.enemyManager.init();

  this.score = new AURA.Score();
  this.score.init();

  callLoop();
});

// the main game loop
GAME_SCREEN.addLoop(function() {
  GAME_SCREEN.bg.render();
  GAME_SCREEN.bulletManager.loop();
  GAME_SCREEN.enemyManager.loop();
  GAME_SCREEN.player.loop();
  GAME_SCREEN.score.render();
});