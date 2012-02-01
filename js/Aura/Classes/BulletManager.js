AURA.BulletManager = function() {
  this.maxBullets = 20;
  this.bullets    = [];
};
AURA.BulletManager.prototype = {
  init: function() {
    this.createBullets();
  },
  createBullets: function() {
    // add bullets to the bullets array
    for(var i = 0; i < this.maxBullets; i++)
    {
      this.bullets.push(new AURA.Bullet());  
    }
    console.log(this.bullets[0]);
  },
  loop: function() {
    // loop through the bullets array and call their loop if they are alive 
    for(var i = 0; i < this.maxBullets; i++)
    {
      if (this.bullets[i].alive)
        this.bullets[i].loop();  
    }
  }   
};