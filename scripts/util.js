console.log("in util ...");

function doUtil(){
    console.log("do util ...");
}

define(function(require){
    var helper = require('helper');
    helper.messages();
    return {
        doUtil: doUtil,
        helper: helper,
    };
});
