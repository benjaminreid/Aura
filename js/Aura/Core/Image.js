AURA.Image = function(image) {
  this.x = 0;
  this.y = 0;
  this.image    = image;
  this.width    = image.width;
  this.height   = image.height;
  this.width2   = this.width/2;
  this.height2  = this.height/2;
};
AURA.Image.prototype = {
  center: function() {
    // center the image horizontally and vertically
    this.x = (AURA.Config.canvasWidth/2) - (this.width2);
    this.y = (AURA.Config.canvasHeight/2) - (this.height2);
  },
  centerHorz: function()
  {
    // center the image horizontally
    this.x = (AURA.Config.canvasWidth/2) - (this.width2);
  },
  centerVert: function() {
    // center the image vertically
    this.y = (AURA.Config.canvasHeight/2) - (this.height2);
  },
  setPos: function(x,y) {
    // set the x and y of the image, can pass null to only set one axis
    this.x = (x == null) ? this.x : x;
    this.y = (y == null) ? this.y : y;
  },
  render: function() {
    // render the image to the canvas
    AURA.renderer.ctx.drawImage(this.image, this.x, this.y);
  }
};