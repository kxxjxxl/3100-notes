/*  
    @author: Amilcar Soares
    @version: 1.0
    @date: Jan 5, 2022

    This short script shows the basic manipulation 
    of Promises
*/
// Let's declare two variables to play with the code flow
let haveStudied3100 = true;
let haveSubmittedProject = false;

// The declaration of a promise. 
// Note that you will always have two callbacks, resolve and reject.
// The first should be invoked on a success case.
// The other when your method fails.
let promiseToStudyC3100 = new Promise((resolve, reject) => {
    if (haveStudied3100){
        resolve('studied COMP 3100');
    } else {
        reject('not studied COMP 3100');
    }
});
// Now let's use it!
promiseToStudyC3100.
    then((result) => {
        console.log('1 - The student has '+result)
    }).catch((err) => {
        console.log('2 - The student has '+err)
    });

// Another example of a promise
let promiseToSubmitProject = new Promise((resolve, reject) => {
    if (haveSubmittedProject){
        resolve('submitted project');
    } else {
        reject('not submitted project');
    }
});

// An example of how to use nested(chained) promises. 
// Is this code easy to read? Think about it. 
promiseToStudyC3100.
    then((result) => {
        console.log('3 - The student has '+result+".");
        return promiseToSubmitProject;
    }).then((result) => { 
        console.log('4 - The student has '+result+".");      
    }).catch((err) => {
        console.log('5 - The student has '+err);
    });