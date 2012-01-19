window.onload = function() {

  // setup Aura's configuration
  var configuration = {
    canvas: 'game',
    canvasWidth: 480,
    canvasHeight: 640
  };
  AURA.Config = configuration;

  // create a new renderer
  var renderer = new AURA.Renderer();
  renderer.init();

};