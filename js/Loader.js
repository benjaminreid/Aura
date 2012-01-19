AURA.Loader = function(loader) {
  this.do;
  this.assign(loader);
};

AURA.Loader.prototype = {
  assign: function(loader) {
    this.do = loader;
  }
};