AURA.Text = function() {
  this.lastFont;
};
AURA.Text.prototype = {
  write: function(text,x,y,colour,font) {
    var _colour = colour || 'white',
        _font   = this.lastFont = font || this.lastFont || 'Arial,san-serif';
    AURA.renderer.ctx.save();
    AURA.renderer.ctx.fillStyle = _colour;
    AURA.renderer.ctx.font = _font;
    AURA.renderer.ctx.fillText(text,x,y);
    AURA.renderer.ctx.restore();
  }
};