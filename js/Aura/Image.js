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
    this.x = (AURA.Config.canvasWidth/2) - (this.width2);
    this.y = (AURA.Config.canvasHeight/2) - (this.height2)
  },
  setPos: function(x,y) {
    this.x = x;
    this.y = y;
  },
  render: function() {
    AURA.renderer.ctx.drawImage(this.image, this.x, this.y);
  }
};