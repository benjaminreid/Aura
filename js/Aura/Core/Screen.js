AURA.Screen = function(name) {
  this.name     = name;
  this.loop     = function() { console.log(this.name + ' loop');  };
  this.init     = function() { console.log(this.name + ' init'); };
  this.destroy  = function() { console.log('Destroying', this.name); };
};

AURA.Screen.prototype = {
};