// create a new Aura object
var AURA = AURA || {};

// Aura's configuration
AURA.Config = AURA.Config || {};

AURA.setConfig = function(configuration) {
  if (typeof configuration == 'object') {
    this.Config = configuration;
  }
};