//* The Promise API was created as a solution for the Callback Hell
//* Following this principle, the Promise API brought a simpler way to manipulate asynchronous programming
//* So when creating a new Promise, we handle the results based on the then, catch, finally built-in methods

//* The resolve callback function is called with the returned value
//* If something goes wrong the reject callback is called with the rejection cause

//* After the execution of the then/catch methods the finally method is called
const promise = new Promise( (resolve, reject) => Math.random() > 0.5 ? resolve("Promise Resolved") : reject("Promise Rejected") )

promise
  .then((resolvedValue) => console.log(resolvedValue))
  .catch((err) => console.error(err))
  .finally(() => console.log("Promise finished"))