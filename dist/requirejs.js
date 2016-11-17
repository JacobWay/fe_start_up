requirejs(["util"], function(){
    "use strict";
    //doUtil();
    console.log("!!!");
    console.log("in main js !!l!?????! ");
    var p = document.querySelector("p");
    console.log("p     ", p);
    p.innerHTML = "?????? me";
});

console.log("in util ...");

function doUtil(){
    console.log("do util ...");
}
