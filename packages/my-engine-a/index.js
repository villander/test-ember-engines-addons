const EngineAddon = require('ember-engines/lib/engine-addon');

module.exports = EngineAddon.extend({
  name: 'my-engine-a',

  isDevelopingAddon() {
    return true;
  },

  lazyLoading: {
    enabled: true,
    includeRoutesInApplication: true
  }
});
