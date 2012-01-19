AURA.Renderer = function(canvasID, width, height) {
  this.canvasID   = canvasID;
  this.canvasEl;
  this.width      = width;
  this.height     = height;
};

AURA.Renderer.prototype = {
  init: function() {
    // store a reference to the canvas element
    this.canvasEl = document.getElementById(this.canvasID);
    // set the size of the canvas element
    this.setSize(this.width, this.height);

    console.log('Renderer initialising: ', this.canvasEl, this.width, this.height);
  },
  setSize: function(newWidth, newHeight) {
    // store the width and height for the canvas element
    this.width  = newWidth  || this.canvasEl.width;
    this.height = newHeight || this.canvasEl.height;
    // resize the canvas element
    this.canvasEl.width   = this.width;
    this.canvasEl.height  = this.height;

    console.log('Setting new canvas size: w:' + newWidth + ' h:' + newHeight);
  }
};