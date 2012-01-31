AURA.UI = function() {
  this.canvas = AURA.renderer.canvasEl;

  // object to hold the click positions, windowX is relative to the browser window and canvas is relative to the canvas element
  this.click = {
    windowX: 0,
    windowY: 0,
    canvasX: 0,
    canvasY: 0
  };

  this.uiLayer = [];

};
AURA.UI.prototype = {
  init: function() {
    console.log('Started the UI layer');
    var that = this;

    that.canvas.addEventListener('click', that.handleClick, true);
  },
  handleClick: function(e)
  {
    var that = AURA.ui;
    
    // set the last clicked postioned variables
    that.click.windowX = e.x,
    that.click.windowY = e.y,
    that.click.canvasX = e.x - this.offsetLeft,
    that.click.canvasY = e.y - this.offsetTop;

    that.scanUILayer('click');

    e.preventDefault();
  },
  addTo: function(obj, type, func) {
    this.uiLayer.push(obj);
    obj.type = type;
    obj.do = func;
    console.log('Added to UI layer', this.uiLayer, obj);
  },
  scanUILayer: function(type) {
    for (var i = 0; i < this.uiLayer.length; i++)
    {
      if (  (this.click.canvasX >= this.uiLayer[i].x) &&
            (this.click.canvasX <= (this.uiLayer[i].x + this.uiLayer[i].x) ) &&
            (this.click.canvasY >= this.uiLayer[i].y) &&
            (this.click.canvasY <= (this.uiLayer[i].y + this.uiLayer[i].height) ) )
      {
        if (this.uiLayer[i].type == type)
          this.uiLayer[i].do();
      }
    }
  }
};