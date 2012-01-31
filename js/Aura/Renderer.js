AURA.Renderer = function() {
  this.canvasID   = AURA.Config.canvas;
  this.canvasEl;
  this.width      = AURA.Config.canvasWidth;
  this.height     = AURA.Config.canvasHeight;
  this.ctx;
};

AURA.Renderer.prototype = {
  init: function() {
    // store a reference to the canvas element
    this.canvasEl = document.getElementById(this.canvasID);
    // set the size of the canvas element
    this.setSize(this.width, this.height);
    // get the canvas context
    this.getContext();

    console.log('Renderer initialising: ', this.canvasEl, this.width, this.height, this.ctx);
  },
  setSize: function(newWidth, newHeight) {
    // store the width and height for the canvas element
    this.width  = newWidth  || this.canvasEl.width;
    this.height = newHeight || this.canvasEl.height;
    // resize the canvas element
    this.canvasEl.width   = this.width;
    this.canvasEl.height  = this.height;

    AURA.Config.canvasWidth   = this.width;
    AURA.Config.canvasHeight  = this.height;

    console.log('Setting new canvas size: w:' + newWidth + ' h:' + newHeight);
  },
  getContext: function() {
    // get the context of the canvas element, need this to start drawing!
    this.ctx = (this.canvasEl.getContext) ? this.canvasEl.getContext('2d') : false;
  },
  render: function() {
    // start a loop to render onto the canvas, based on a screen
    var that = this,
        currentScreen = AURA.screenManager.screens[0], 
        loop = function() {
          requestAnimationFrame(loop);
          that.ctx.clearRect(0,0,that.width,that.height);
          for(var i = 0; i < currentScreen.loop.length; i++)
          {
            currentScreen.loop[i]();
          }
          AURA.tween.update();  
        };
    // pass the loop function to the screen's init
    currentScreen.init(loop);
  }
};