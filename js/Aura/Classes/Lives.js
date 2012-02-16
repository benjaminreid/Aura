AURA.Lives = function() {
  this.initLives  = 1;
  this.numLives   = this.initLives;
  this.text       = new AURA.Text();
  this.incr       = 1;
};
AURA.Lives.prototype = {
  init: function() {
    this.numLives = this.initLives;
  },
  looseLife: function()
  {
    this.numLives -= this.incr;
    if (this.numLives == 0)
    {
      console.log('Game over');
      GAMEOVER_SCREEN.init(function() { });
      AURA.screenManager.changeScreens(2);
    }
  },
  render: function() {
    var x   = 365,
        sx  = x+75;
    this.text.write('LIVES',x,35,'#ffa94c','20px OCRAStdRegular');
    this.text.write(this.numLives.toString(),sx,35,'white');
  }
};