var chocolateBars = ["snickers","hundred grand","kitkat","skittles"];

function addElementToBeginningOfArray(array, input) {
  (...array, input)
  return array;
}

function destructivelyAddElementToBeginningOfArray(array, input) {
  array.unshift(input);
  return array;
}
