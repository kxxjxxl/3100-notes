/*  
    Dr Soares' code is good for first concepts with Promises, but the 
    more common pattern is to give the promise its own context: a function 
    that returns a promise.
*/

// The declaration of a promise. 
// Note that you will always have two callbacks, resolve and reject.
// The first should be invoked on a success case.
// The other when your method fails.

let promiseToStudyC3100 = function(context){
    // context for promise operations here
    return new Promise((resolve, reject) => {
        if (context=="COMP 3100"){
            resolve('studied COMP 3100');
        } else {
            reject('not studied COMP 3100');
        }
    });
}

// Now let's use it!
promiseToStudyC3100("COMP 3100").
    then((result) => {
        console.log('1 - The student has '+result)
    }).catch((err) => {
        console.log('2 - The student has '+err)
    });

// Another example of a promise
let promiseToSubmitProject = function(projectStatus){

    let haveSubmittedProject = projectStatus == "Done" || projectStatus == "Archived"

    return new Promise((resolve, reject) => {
        if (haveSubmittedProject){
            resolve('submitted project');
        } else {
            reject('not submitted project');
        }
    });
}

// An example of how to use nested(chained) promises. 
// Is this code easy to read? Think about it. 
promiseToStudyC3100("COMP 3100").
    then((result) => {
        console.log('3 - The student has '+result+".");
        return promiseToSubmitProject("Under Review");
    }).then((result) => { 
        console.log('4 - The student has '+result+".");      
    }).catch((err) => {
        console.log('5 - The student has '+err);
    });