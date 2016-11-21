;(function(){
  "use strict";

  requirejs.config({
    paths: {
      "jquery": "../../bower_components/jquery/dist/jquery",
      "underscore": "../../bower_components/underscore/underscore",
      "backbone": "../../bower_components/backbone/backbone",
    }
  });

  require(['views/app'], function(AppView){
    new AppView();
  });

})();
