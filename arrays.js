var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, element) {
  const arrayTwo = [element, ...array];
  return arrayTwo;
}

function addElementToEndOfArray(array, element) {
  const arrayTwo = [...array, element];
  return arrayTwo;
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element);
  return array;
}

function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element);
  return array;
}

function accessElementInArray(array, index) {
  return array[index];
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
   array.shift();
   return array;
}

function removeElementFromBeginningofArray(array) {
  array = array.slice(1);
  return array;
} 

function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop();
  return array;
}