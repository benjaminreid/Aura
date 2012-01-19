window.onload = function() {

  var renderer, loader, resourcesToLoad, resources = [];

  // setup Aura's configuration
  AURA.setConfig({
    canvas: 'game',
    canvasWidth: 480,
    canvasHeight: 640
  });

  // create a new renderer
  renderer = new AURA.Renderer();
  renderer.init();

  // define a loader and resources to load
  loader          = new AURA.Loader(new PxLoader),
  resourcesToLoad = ['images/bullet.png', 'images/enemy-ship.png', 'images/player-ship.png', 'images/space-background.jpg'];

  // add resources to loader
  for(var r = 0; r < resourcesToLoad.length; r++)
  {
    resources.push( loader.do.addImage(resourcesToLoad[r]) );
  }
  // when the loading is complete
  loader.do.addCompletionListener(function() {
    renderer.render();
    console.log('Resources loaded: ', resources);
  });
  // run the loader
  loader.do.start();

  console.log('Config setup: ', AURA.Config);
};