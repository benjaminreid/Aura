AURA.Player = function(image) {
  this.image    = image;
  this.width    = image.width;
  this.height   = image.height;
  this.width2   = this.width/2;
  this.position = new AURA.Vector2();  
};

AURA.Player.prototype = {
  init: function() {
    var x = ((AURA.Config.canvasWidth / 2) - this.width2),
        y = ((AURA.Config.canvasHeight - this.height) - 20);
    this.position.set(x,y);
    
    window.addEventListener('keydown', this.addControls, true);  
  },
  loop: function(ctx) {
    ctx.drawImage(this.image,this.position.x,this.position.y);
  },
  addControls: function(e) {
    var that = this.AURA.Player.prototype;
    switch(e.keyCode) {
      case 37:
        that.moveLeft();
          break;
      case 39:
        that.moveRight();
          break;
    }
  },
  moveLeft: function() {
    this.position  
  },
  moveRight: function() {
    console.log('Move player right');
  }
};