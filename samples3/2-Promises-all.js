/*  
    @author: Amilcar Soares
    @version: 1.0
    @date: Jan 5, 2022

    This short script shows how to use Promise
    all
*/

let haveStudied3100 = false;
let haveSubmittedProject = false;

// Here we explify the creation of a promise. 
// Note that you will always have two callbacks, called resolve and reject.
// The first should be applied on a success case.
// The other when your method fails. 
// One will be executed, never both. 
let promiseToStudyC3100 = new Promise((resolve, reject) => {
    if (haveStudied3100){
        resolve('studied COMP 3100');
    } else {
        reject('not studied COMP 3100');
    }
});

// Another promise
let promiseToSubmitProject = new Promise((resolve, reject) => {
    if (haveSubmittedProject){
        resolve('submitted project');
    } else {
        reject('not submitted project');
    }
});

// Promise.all will make the promises to be executed in parallel
const studentsPromises = [promiseToStudyC3100, promiseToSubmitProject]; 
Promise.all(studentsPromises)
    .then((result)=>{
        console.log('1 - The instructor can mark the project since all requirements were fullfiled.');
        console.log('2 - The variable result has all outcomes from the .all function: '+result)
    }).catch((err) => {
        console.log('3 - The instructor can NOT mark the project since at least one requirement failed.');
        console.log('4- Variable err contains: '+err);
    });
