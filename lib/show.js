var utils = require('./utils');

module.exports = {
  status: "stopped",
  theater: null,
  skript: null,
  url: null,

  update: function(status, theater, skript, url) {
    if (["stopped", "running"].indexOf(status) == -1) {
      throw "Invalid Status";
    }

    this.status = status;
    this.theater = theater;
    this.skript = skript;
    this.url = url;
  },

  startShow: function(theater, skript, callback, endCallback) {
    theater.setup(skript.setup, function(){
        theater.run(skript.skript);
        this.update("running", theater, skript, "http://example.com");
        if (typeof callback === 'function') {
          callback(this);
        }
    }.bind(this), doneCallback);
  },

  export: function() {
    return {
      status: this.status,
      //theater: this.theater,
      skript: utils.stripSkript(this.skript),
      url: this.url
    };
  }
}

