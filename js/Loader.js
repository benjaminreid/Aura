AURA.Loader = function(loader) {
  this.do = loader;
  this.resourcesToLoad;
  this.resources = [];
};

AURA.Loader.prototype = {
  setResources: function(resources) {
    this.resourcesToLoad = resources;
  },
  queueImages: function(resources) {
    this.setResources(resources);
    // add resources to loader
    for(var r = 0; r < this.resourcesToLoad.length; r++)
    {
      this.resources.push( this.do.addImage( this.resourcesToLoad[r] ) );
    }
  },
  onComplete: function(func) {
    this.do.addCompletionListener(func);
  },
  start: function() {
    this.do.start();
  }
};