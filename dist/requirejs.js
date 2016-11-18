;(function(){
    "use strict";

    function square(num){
        return num * num;
    }

    console.log("!!!");
    console.log("in main js !!l!?????! ");
    var p = document.querySelector("p");
    console.log("p     ", p);
    p.innerHTML = "????? It's working !!!!!";

    jacobObj = {
        square: square,
    };
    window.jacobObj = jacobObj;
})();
;console.log("in util ...");

function doUtil(){
    console.log("do util ...");
}
