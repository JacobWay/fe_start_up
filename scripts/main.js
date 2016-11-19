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

    var jacobObj = {
        square: square,
    };
    window.jacobObj = jacobObj;
})();
