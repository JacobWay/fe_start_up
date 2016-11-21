console.log("in util ...");

function doUtil(){
    console.log("do util ...");
}

define("util_id", function(){
    return {
        doUtil: doUtil,
    };
});
