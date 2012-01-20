AURA.Player = function(image) {
  this.image    = image;
  this.width    = image.width;
  this.height   = image.height;
  this.widthMax = (AURA.Config.canvasWidth - this.width);
  this.width2   = this.width/2;
  this.position = new AURA.Vector2(0,0);
  this.vel      = new AURA.Vector2(0,0);
  this.temp     = new AURA.Vector2(0,0);
  this.speed    = 5;
  this.drag     = 0.96;
};

AURA.Player.prototype = {
  init: function() {
    var x = ((AURA.Config.canvasWidth / 2) - this.width2),
        y = ((AURA.Config.canvasHeight - this.height) - 20),
        that = this;
    that.position.reset(x,y);
    window.addEventListener('keydown', function(e) { that.addControls(e,that); }, true);  
  },
  loop: function(ctx) {
    
    if ( this.position.x < 0)
    {
      this.stopShip(0);
    }
    else if ( this.position.x > this.widthMax )
    {
      this.stopShip( (AURA.Config.canvasWidth - this.width) );  
    }
    else
    {
      this.position.plusEq(this.vel);
    }
    ctx.drawImage(this.image,this.position.x,this.position.y);
  },
  addControls: function(e,that) {
    switch(e.keyCode) {
      case 37:
        if ( this.position.x > 0 ) that.moveLeft();
          break;
      case 39:
        if ( this.position.x < this.widthMax ) that.moveRight();
          break;
    }
  },
  moveLeft: function() {
    this.temp.reset(this.speed,0);
    this.vel.minusEq(this.temp);
  },
  moveRight: function() {
    this.temp.reset(this.speed,0);
    this.vel.plusEq(this.temp);
  },
  stopShip: function(x) {
    this.position.reset(x,this.position.y);
    this.vel.reset(0,0);
    this.temp.reset(0,0); 
  }
};