var cl = console.log;



// Promise >> Promise is a javaScript object which gives some values in future.
// It is used to handle Async operations in js.

// States of promise
// 1. Pending >> Waiting for result
// 2. Fullfilled >> The action related to the promise is succeed
// 3. Reject >> The action related to the promise is rejected 
// 4. Settled >> Promise either fullfilled or reject

// Benefits of promise
// 1. Improve readability of code
// 2. Better handling Async operations
// 3. Better error handling
// 4. Better flow of control definations

let promise = new Promise((resolve, reject) => {
    // api call
    setTimeout(() => {
        let error = Math.random() >= .5 ? false : true;
        cl(error);
        if(!error){
            resolve(`Successfully Login!!!`);
        } else {
            reject(`Invalid username or password`);
        }
    }, 3000);
});

promise
    .then((res) => {
        cl(res);
    })
    .catch((err) => {
        cl(err);
    })
