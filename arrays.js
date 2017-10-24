chocolateBars = ["snickers","hundred grand","kitkat","skittles"];

function addElementToBeginningOfArray(array, element) {
  (...array, element)
  return array;
}

function destructivelyAddElementToBeginningOfArray(array, input) {
  array.unshift(element);
  return array;
}
