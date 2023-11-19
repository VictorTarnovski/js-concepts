const count = function () {
  let _counter = 0

  /* 
    increaseCounter is a Closure
    Who's a inner function that has access of the properties of the count function scope
    The count function does not have access to the variables and scope of the increaseCounter function 
  */
 
  const increaseCounter = () => { 
    _counter += 1
    console.log(_counter)
  }

  return increaseCounter
}

//* Knowing that count returns a closure function
//* We need to add another () to trigger the increaseCounter function to execute
count()()