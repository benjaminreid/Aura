AURA.Score = function() {
  this.numScore   = 0;
};
AURA.Score.prototype = {
  init: function() {
    this.numScore = 0;
  },
  addToScore: function(score)
  {
    this.numScore += score;
  },
  render: function() {
    var textScore = '';

    // set it so the score is always 4 digits, 0001, 0010, 0100, 1000
    if (this.numScore <= 9)
      textScore = '000' + this.numScore.toString();
    else if (this.numScore <= 99)
      textScore = '00' + this.numScore.toString();
    else if (this.numScore <= 999)
      textScore = '0' + this.numScore.toString();
    else if (this.numScore >= 1000)
      textScore = this.numScore.toString();
    
    AURA.renderer.ctx.save();
    AURA.renderer.ctx.font = '20px OCRAStdRegular';
    AURA.renderer.ctx.fillStyle = '#ffa94c';
    AURA.renderer.ctx.fillText('SCORE',20,35);
    AURA.renderer.ctx.fillStyle = 'white';
    AURA.renderer.ctx.fillText(textScore,95,35);
    AURA.renderer.ctx.restore();
  }
};