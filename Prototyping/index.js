//* In JavaScript everything is a prototype of another thing
//* Class based programming is managed by prototype inheritance
//* Here is one example of how to implement prototyping

//* This would be the same as declaring a class and its constructor method 
function Circle(size, color = "red") {
  this.size = size;
  this.color = color;
}

//* This is the same as declaring a method to the Circle class
Circle.prototype.getSize = function() {
  return this.size;
}

const c = new Circle(10)
console.log(c.getSize())