AURA.EnemyBullet = function() {
  this.image = new AURA.Image(AURA.loader.resources[6]);

  this.width = this.image.width;
  this.height = this.image.height;
  
  this.alive = false;

  this.speed = 5;

  // position and movement
  this.position = new AURA.Vector2(0,0);
  this.vel      = new AURA.Vector2(0,this.speed);
  this.temp     = new AURA.Vector2(0,0);
};
AURA.EnemyBullet.prototype = {
  loop: function() {
    if ( this.checkOffScreen() && this.alive )
    {
      this.moveBullet();
      this.render();
      this.checkCollision();
    } 
  },
  launch: function(x,y) 
  {
    this.position.reset(x-this.width/2,y); 
    // set it's state to alive, this means it can fire!
    this.alive = true;
  },
  render: function() {
    AURA.renderer.ctx.drawImage(this.image.image, this.position.x, this.position.y);
  },
  kill: function() {
    // reset the bullets position, so it's not still off the screen
    this.alive = false;
    this.position.reset(0,0);
  },
  moveBullet: function() {
    // move bullet upwards based on the velocity
    this.position.plusEq(this.vel);
  },
  checkOffScreen: function() {
    // if the bullet is out of the screen, kill it
    if ( this.position.y > AURA.Config.canvasHeight )
    {
      this.kill();
      return false;
    }
    return true;
  },
  checkCollision: function() {
    var that = this;
    // need to add collison detection
    if (AURA.utils.squareHitTest(this,GAME_SCREEN.player))
    {
      this.kill(); 
      GAME_SCREEN.lives.looseLife();
    }
  }
};