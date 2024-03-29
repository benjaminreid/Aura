var GAME_SCREEN = new AURA.Screen('GAME SCREEN');

// init function is fired before the loop
GAME_SCREEN.init = function() {
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

  this.lives = new AURA.Lives();
  this.lives.init();
};

GAME_SCREEN.destroy = function() {
  console.log('////////////////// DESTROY GAME SCREEN', this);
  this.enemyManager.destroy(); 
  this.enemyManager = null; 
  this.bg = null;
  
  this.player = null;

  this.bulletManager = null;

  this.enemyManager = null;

  this.score = null;

  this.lives = null; 
};

// the main game loop
GAME_SCREEN.loop = function() {
  GAME_SCREEN.bg.render();
  GAME_SCREEN.bulletManager.loop();
  GAME_SCREEN.enemyManager.loop();
  GAME_SCREEN.player.loop();
  GAME_SCREEN.score.render();
  GAME_SCREEN.lives.render();
};