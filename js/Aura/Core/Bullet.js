AURA.Bullet = function() {
  this.image = new AURA.Image(AURA.loader.resources[0]);
  
  this.alive = true;

  // position and movement
  this.position = new AURA.Vector2(0,0);
  this.vel      = new AURA.Vector2(0,0);
  this.temp     = new AURA.Vector2(0,0);
};
AURA.Bullet.prototype = {
  loop: function() {
    this.image.render();
    console.log('loop bullet');
  }
};