;(function(){
    "use strict";

    function square(num){
        if (typeof(num) !== "number"){
            return "Argument is not a number.";
        }
        return num * num;
    }

    console.log("!!!");
    console.log("in main js !!l!?????! ");
    var p = document.getElementsByTagName("p")[0];
    console.log("p     ", p);
    p.innerHTML = "????? It's working !!!!!";

    var jacobObj = {
        square: square,
    };
    window.jacobObj = jacobObj;
})();
