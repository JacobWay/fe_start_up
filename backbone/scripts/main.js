;(function(){
  "use strict";

  Backbone.sync = function(method, model){
    document.write(method + " : " + JSON.stringify(model));
  };

  var my_collection = new Backbone.Collection({
    "example": "Backbone Sync",
    "title": "Learning with easy"
  });

  my_collection.fetch();
})();
