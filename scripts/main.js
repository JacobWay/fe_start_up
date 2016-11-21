;
(function() {
    "use strict";


    requirejs.config({
        paths: {
            jquery: "../bower_components/jquery/dist/jquery",
            backbone: "../bower_components/backbone/backbone",
            underscore: "../bower_components/underscore/underscore",
        }
    });

    function log() {
        return console.log.apply(null, arguments);
    }

    require(["util"], function(util) {
        console.log("util..... ", util);
    });

    require(["jquery", "underscore", "backbone"], function(jq, _, Backbone) {
        Backbone.sync = function(method, model) {
            $("p").html(JSON.stringify(model));
        };

        var my_collection = new Backbone.Collection({
            "backone": "in the main file",
        });
        my_collection.fetch();

    });

})();
