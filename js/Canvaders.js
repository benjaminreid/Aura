window.onload = function() {

  // setup Aura's configuration
  AURA.setConfig({
    canvas: 'game',
    canvasWidth: 480,
    canvasHeight: 640
  });

  // create a new renderer
  var renderer = new AURA.Renderer();
  renderer.init();

  console.log('Config setup: ', AURA.Config);
};