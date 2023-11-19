//* A Immediately Invoked Function Expression (IIFE)
//* Is a function that executes as soon as it is declared

const sayHello = (function() {
  console.log("Hello There")
})()

//* sayHello is just a example of that
//* If we run this code it will output in the console "Hello There" 
//* Even thougth we did not call it any other time 