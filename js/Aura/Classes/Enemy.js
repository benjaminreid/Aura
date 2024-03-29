AURA.Enemy = function() {
  this.image = new AURA.Image(AURA.loader.resources[1]);
  
  this.width = this.image.width;
  this.height = this.image.height;

  this.alive = false;

  this.speed = 0.2;

  // position and movement
  this.position = new AURA.Vector2(0,0);
  this.vel      = new AURA.Vector2(0,this.speed);
  this.temp     = new AURA.Vector2(0,0);

  this.to = new AURA.Vector2(0,0);

  this.finishedAnimatingOn = false;

  this.bullet = new AURA.EnemyBullet();
};
AURA.Enemy.prototype = {
  loop: function() {
    if ( this.finishedAnimatingOn ) this.moveEnemy();
    this.render();
    this.bullet.loop(); 
  },
  render: function() {
    AURA.renderer.ctx.drawImage(this.image.image, this.position.x, this.position.y);
  },
  kill: function() {
    // reset the bullets position, so it's not still off the screen
    this.alive = false;
    this.position.reset(0,0);
    GAME_SCREEN.enemyManager.killEnemy();
  },
  moveEnemy: function() {
    // move enemy downwards
    this.position.plusEq(this.vel);
  },
  animateIn: function(x,y) {
    var that = this;
    // for this, we're only animating y
    this.to.reset(x,y);
    // reset the position to the new x, and fix the y to the top
    this.position.reset(x, (0 - (this.image.height)) - AURA.utils.randomRange(50,200) );

    var tween = new AURA.tween.Tween(this.position).to({ x: this.to.x, y: this.to.y }, 1000);
    tween.easing(AURA.tween.Easing.Quadratic.EaseOut);
    tween.delay(750);
    tween.onComplete(function() {
      setTimeout(function() {
        that.finishedAnimatingOn = true;
      }, 500);
    });
    tween.start();
  },
  fireBullet: function()
  {
    if(this.finishedAnimatingOn)
      this.bullet.launch((this.position.x+this.width/2),(this.position.y+this.height));
  }
};