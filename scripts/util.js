console.log("in util ...");

function doUtil(){
    console.log("do util ...");
}

define(function(){
    return {
        doUtil: doUtil,
    };
});
