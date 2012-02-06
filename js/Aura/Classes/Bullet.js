AURA.Bullet = function() {
  this.image = new AURA.Image(AURA.loader.resources[0]);

  this.width = this.image.width;
  this.height = this.image.height;
  
  this.alive = false;

  this.speed = 10;

  // position and movement
  this.position = new AURA.Vector2(0,0);
  this.vel      = new AURA.Vector2(0,this.speed);
  this.temp     = new AURA.Vector2(0,0);

};
AURA.Bullet.prototype = {
  loop: function() {
    if ( this.checkOffScreen() )
    {
      this.moveBullet();
      this.render();
      this.checkCollision();
    } 
  },
  launch: function() 
  {
    var ship = GAME_SCREEN.player;
    // reposition the bullet based of the player/ship's position
    this.position.reset( (ship.position.x + ship.width2) - this.image.width2, ship.position.y - 20 ); 
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
    this.position.minusEq(this.vel);
  },
  checkOffScreen: function() {
    // if the bullet is out of the screen, kill it
    if ( this.position.y <= 0 )
    {
      this.kill();
      return false;
    }
    return true;
  },
  checkCollision: function() {
    var that = this;
    for (var i = 0; i < GAME_SCREEN.enemyManager.enemies.length; i++)
    {
      var enemy = GAME_SCREEN.enemyManager.enemies[i];
      if (enemy.alive)
      {
        if (AURA.utils.squareHitTest(that,enemy))
        {
          enemy.kill();
          that.kill();
          break;  
        }
      }
    }
  }
};