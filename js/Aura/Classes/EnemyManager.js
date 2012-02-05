AURA.EnemyManager = function() {
  this.maxEnemies = 20;
  this.enemies    = [];
};
AURA.EnemyManager.prototype = {
  init: function() {
    this.createEnemies();
  },
  createEnemies: function() {
    // add bullets to the bullets array
    for(var i = 0; i < this.maxEnemies; i++)
    {
      this.enemies.push(new AURA.Enemy());  
    }
  },
  loop: function() {
    // loop through the bullets array and call their loop if they are alive 
    for(var i = 0; i < this.maxEnemies; i++)
    {
      if (this.enemies[i].alive)
        this.enemies[i].loop();  
    }
  }   
};