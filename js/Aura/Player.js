AURA.Player = function(image) {
  this.image    = image;
  this.width    = image.width;
  this.height   = image.height;
  this.widthMax = (AURA.Config.canvasWidth - this.width);
  this.width2   = this.width/2;

  this.startX   = ((AURA.Config.canvasWidth / 2) - this.width2);
  this.startY   = ((AURA.Config.canvasHeight - this.height) - 20);

  this.initX    = this.startX;
  this.initY    = this.startY + 100;

  this.position = new AURA.Vector2(0,0);
  this.vel      = new AURA.Vector2(0,0);
  this.temp     = new AURA.Vector2(0,0);

  this.speed    = 0.4;
  this.drag     = 0.96;

  this.movingLeft   = false;
  this.movingRight  = false;
  this.isDragging   = false;

  this.pixelFix = true;
  this.fixedX   = 0;
};

AURA.Player.prototype = {
  init: function() {
    var that = this;

    that.position.reset(this.initX,this.initY);

    window.addEventListener('keydown', function(e) { that.keyDownHandler(e,that); }, true);
    window.addEventListener('keyup', function(e) { that.keyUpHandler(e,that); }, true);
    
    that.startTween = new AURA.tween.Tween(that.position).to({ x: that.startX, y: that.startY }, 500);
    that.startTween.easing(AURA.tween.Easing.Quadratic.EaseOut);
    that.startTween.start();
  },
  loop: function() {
    
    if ( this.movingLeft ) this.moveLeft();
    if ( this.movingRight ) this.moveRight();
    if ( this.isDragging ) this.applyDrag();

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
    this.drawShip();
  },
  drawShip: function() {
    this.fixedX = (this.pixelFix) ? Math.round(this.position.x) : this.position.x;
    AURA.renderer.ctx.drawImage(this.image,this.fixedX,this.position.y);
  },
  keyDownHandler: function(e,that) {
    switch(e.keyCode) {
      case 37:
        if ( this.position.x > 0 ) that.movingLeft = that.isDragging = true;
          break;
      case 39:
        if ( this.position.x < this.widthMax ) that.movingRight = that.isDragging = true;
          break;
    }
  },
  keyUpHandler: function(e,that) {
    switch (e.keyCode) {
      case 37:
      case 39:
        that.movingLeft   = false;
        that.movingRight  = false;
        that.isDragging   = true;
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
  applyDrag: function() {
    this.vel.multiplyEq(this.drag);  
  },
  stopShip: function(x) {
    this.position.reset(x,this.position.y);
    this.vel.reset(0,0);
    this.temp.reset(0,0); 
  }
};