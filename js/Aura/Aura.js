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
  
  // setup Aura's configuration
  this.setConfig({
    canvas: 'game',
    canvasWidth: 480,
    canvasHeight: 640
  });

  // create a new screens manager
  this.screenManager = new AURA.ScreenManager();
  this.screenManager.addScreen(GAME_SCREEN);

  // create a new renderer
  this.renderer = new AURA.Renderer();
  this.renderer.init();

  // define a loader and resources to load
  this.loader = new AURA.Loader(new PxLoader);
  this.loader.queueImages( ['images/bullet.png', 'images/enemy-ship.png', 'images/player-ship.png', 'images/space-background.jpg'] );

  // when the loading is complete
  this.loader.onComplete(function() {
    that.renderer.render();
    console.log('Resources loaded: ', AURA.loader.resources);  
  });
  // run the loader
  this.loader.start();
};