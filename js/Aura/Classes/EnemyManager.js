AURA.EnemyManager = function() {
  this.maxEnemies = 0;
  this.enemies    = [];

  this.minX = 25;
  this.minY = 50;

  this.waves = 0;
  this.perWave = 0;

  this.currentWave = 1;

  this.perLine = 10;
  this.currentRow = 0;
};
AURA.EnemyManager.prototype = {
  init: function() {
    this.createLevel(1,20);
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
  },
  createLevel: function(numOfWaves, numPerWave) {
    this.waves      = numOfWaves,
    this.perWave    = numPerWave;
 
    this.maxEnemies = this.waves * this.perWave;

    this.createEnemies();

    this.createWave();
  },
  createWave: function() {
    var startSection  = (this.currentWave * this.perWave) - this.perWave, // get the point in the array where to start grabbing enemies
        enemySection  = (this.perWave * this.currentWave) - 1; // -1 for the 0 index array
    
    var enemiesMade = 0;
     
    // make the section of the enemies array alive for this wave
    for(var w = startSection; w <= enemySection; w++)
    {
      this.enemies[w].alive = true;

      // set the x and y position
      var x = this.minX + ((enemiesMade%this.perLine) * 45),
          y = this.minY + (this.currentRow * 50);
      
      this.enemies[w].animateIn(x,y);

      enemiesMade++;
      
      // if reach the end of the line, increment the row
      if (enemiesMade%this.perLine == 0)
        this.currentRow++; 
    }

    this.currentRow = 0;
  }   
};