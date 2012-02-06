AURA.Score = function() {
  this.numScore = 0;
  this.text     = new AURA.Text();
  this.incr     = 10;
};
AURA.Score.prototype = {
  init: function() {
    this.numScore = 0;
  },
  addToScore: function()
  {
    this.numScore += this.incr;
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
    
    this.text.write('SCORE',20,35,'#ffa94c','20px OCRAStdRegular');
    this.text.write(textScore,95,35,'white');
  }
};