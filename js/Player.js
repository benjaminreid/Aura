AURA.Player = function(image) {
  this.image    = image;
  this.width    = image.width;
  this.height   = image.height;
  this.widthMax = (AURA.Config.canvasWidth - this.width);
  this.width2   = this.width/2;
  this.position = new AURA.Vector2(0,0);
  this.vel      = new AURA.Vector2(0,0);
  this.temp     = new AURA.Vector2(0,0);
  this.speed    = 0.5;
  this.drag     = 0.96;
  this.movingLeft   = false;
  this.movingRight  = false;
};

AURA.Player.prototype = {
  init: function() {
    var x = ((AURA.Config.canvasWidth / 2) - this.width2),
        y = ((AURA.Config.canvasHeight - this.height) - 20),
        that = this;
    that.position.reset(x,y);
    window.addEventListener('keydown', function(e) { that.keyDownHandler(e,that); }, true);
    window.addEventListener('keyup', function(e) { that.keyUpHandler(e,that); }, true);  
  },
  loop: function(ctx) {
    
    if ( this.movingLeft ) this.moveLeft();
    if ( this.movingRight ) this.moveRight();

    if ( this.position.x < 0 )
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
  keyDownHandler: function(e,that) {
    switch(e.keyCode) {
      case 37:
        if ( this.position.x > 0 ) that.movingLeft = true;
          break;
      case 39:
        if ( this.position.x < this.widthMax ) that.movingRight = true;
          break;
    }
  },
  keyUpHandler: function(e,that) {
    switch (e.keyCode) {
      case 37:
      case 39:
        that.movingLeft   = false;
        that.movingRight  = false;
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