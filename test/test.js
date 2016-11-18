module("Basci Tests");

//var square = jacobObj.square;
function square(num){
  return num * num;
}

test("square exists", function(){
  ok(square, "square exists");
});
