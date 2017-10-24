var chocolateBars = ["snickers","hundred grand","kitkat","skittles"];

function addElementToBeginningOfArray(input) {
  var array=[];
  (...array, input)
  return array;
}

function destructivelyAddElementToBeginningOfArray(input) {
var array=[];
  array.unshift(input);
  return array;
}
