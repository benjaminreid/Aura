AURA.Enemy = function() {
  this.image = new AURA.Image(AURA.loader.resources[1]);
  
  this.alive = false;

  this.speed = 1;

  // position and movement
  this.position = new AURA.Vector2(0,0);
  this.vel      = new AURA.Vector2(0,this.speed);
  this.temp     = new AURA.Vector2(0,0);

};
AURA.Enemy.prototype = {
  loop: function() {
    //this.moveEnemy();
    this.render();  
  },
  render: function() {
    AURA.renderer.ctx.drawImage(this.image.image, this.position.x, this.position.y);
  },
  kill: function() {
    // reset the bullets position, so it's not still off the screen
    this.alive = false;
    this.position.reset(0,0);
  },
  moveEnemy: function() {
    // move enemy downwards
    this.position.plusEq(this.vel);
  },
  reposition: function(x,y) {
    this.position.x = x, this.position.y = y;
  }
};