window.onload = function() {
  
  // setup Aura's configuration
  AURA.setConfig({
    canvas: 'game',
    canvasWidth: 480,
    canvasHeight: 640
  });

  // create a new screens manager
  screenManager = new AURA.ScreenManager();
  screenManager.addScreen(GAME_SCREEN);

  // create a new renderer
  renderer = new AURA.Renderer();
  renderer.init();

  // define a loader and resources to load
  loader = new AURA.Loader(new PxLoader);
  loader.queueImages( ['images/bullet.png', 'images/enemy-ship.png', 'images/player-ship.png', 'images/space-background.jpg'] );

  // when the loading is complete
  loader.onComplete(function() {
    renderer.render();
    console.log('Resources loaded: ', loader.resources);  
  });
  // run the loader
  loader.start();

  console.log('Config setup: ', AURA.Config);
};