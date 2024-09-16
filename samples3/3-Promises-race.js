/*  
    @author: Amilcar Soares
    @version: 1.0
    @date: Jan 5, 2022

    This short script shows how to use Promise
    race
*/

let haveStudied3100 = false;
let haveSubmittedProject = true;

let promiseToStudyC3100 = new Promise((resolve, reject) => {
    if (haveStudied3100){
        resolve('studied COMP 3100');
    } else {
        reject('not studied COMP 3100');
    }
});

let promiseToSubmitProject = new Promise((resolve, reject) => {
    if (haveSubmittedProject){
        resolve('submitted project');
    } else {
        reject('not submitted project');
    }
});

const studentsPromises = [promiseToStudyC3100, promiseToSubmitProject]; 
// Promise race will only consider the promise that is finished first
Promise.race(studentsPromises)
    .then((result) => {
        console.log('1 - This is the first result returned: '+result);
    })
    .catch((err) => {
        console.log('2 - This promise was rejected: '+err);
    });

