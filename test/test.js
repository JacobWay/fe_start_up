/*
 * it should 
 *  be a function
 *  that returns the square of a number argument
 *  and... -oh - it shoud also tell the user he is
 *  a jerk if he passes NaN
 */
module("Basci Tests");

var square = jacobObj.square;
//function square(num){
  //return num * num;
//}

test("square exists", function(){
  ok(square, "square exists");
});

test("square is function", function(){
  ok(typeof square === "function", "square is a function");
});

test("square returns", function(){
  for (var i=0; i<5; i++){
    equal(square(i), i*i, "Argument of " + i + " returned " + i*i);
  }
});

test("argument is a number", function(){
  equal(square("this is a string"), "Argument is not a number.", "Argument shoud be a number type");
});
