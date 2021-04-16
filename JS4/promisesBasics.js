console.log("Basics of promise in javascript");
/*
promise: 
    - resolve
    - reject
    - pending
*/

function func1() {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      const error = true;
      if (!error) {
        console.log("your promise hjas been resolved");
        resolve();
      } else {
        console.log("Your promise has not been resolved");
        reject(" sorry not fulfilled");
      }
    }, 2000);
  });
}

func1().then(function() {
    console.log("Thanks for resolving")
}).catch(function(error) {
    console.log("Very bad" +  error);
})
