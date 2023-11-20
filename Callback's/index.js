//* The concept of a callback is a function that executes right after the main function
//* It is received as an argument of the main function
//* It where used to handle asynchronous operations, but caused a problem named CallBack Hell
//* The CallBack Hell is caused when the app has so much callbacks being executed and called that the call stack is not clear to the engineer

function fn(arg, callback) {
  switch (typeof arg) {
    case "string":
      console.log("Handling string")
      break;
    case "number":
      console.log("Handling number")
      break;
    default:
      break;
  }
  return callback()
}

function Callback() {
  console.log("Done with main function")
}

console.log("=======================")
fn("string", Callback)
console.log("=======================")
fn(0, Callback)
console.log("=======================")
