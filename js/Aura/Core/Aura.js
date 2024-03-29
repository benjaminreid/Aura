// create a new Aura object
var AURA = AURA || {};

// Aura's configuration
AURA.Config = AURA.Config || {};

AURA.setConfig = function(configuration) {
  if (typeof configuration == 'object') {
    this.Config = configuration;
  }
};

AURA.init = function() {
  console.log('Starting AURA');

  var that = this;
  this.time = 0;
  
  // setup Aura's configuration
  this.setConfig({
    canvas: 'game',
    canvasWidth: 480,
    canvasHeight: 640
  });

  this.utils = new AURA.Utils();

  // create a new screens manager
  this.screenManager = new AURA.ScreenManager();
  this.screenManager.addScreen(START_SCREEN);
  this.screenManager.addScreen(GAME_SCREEN);
  this.screenManager.addScreen(GAMEOVER_SCREEN);
  this.screenManager.changeScreens(0); // change to 0 to boot start screen first, 1 for testing the game

  // create a new renderer
  this.renderer = new AURA.Renderer();
  this.renderer.init();

  // creat a new ui handler
  this.ui = new AURA.UI();
  this.ui.init();

  // assign the tween library to aura
  this.tween = TWEEN;

  // define a loader and resources to load
  this.loader = new AURA.Loader(new PxLoader);
  this.loader.queueImages( ['images/bullet.png', 'images/enemy-ship.png', 'images/player-ship.png', 'images/space-background-1.jpg', 'images/btn-play.png', 'images/logo.png', 'images/enemy-bullet.png', 'images/btn-restart.png'] );

  // when the loading is complete
  this.loader.onComplete(function() {
    console.log('Resources loaded: ', AURA.loader.resources);
    START_SCREEN.init();
    //GAME_SCREEN.init();
    //GAMEOVER_SCREEN.init();
    that.renderer.render();  
  });
  // run the loader
  this.loader.start();
};