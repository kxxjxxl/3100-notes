/*  
    @author: Amilcar Soares
    @version: 1.0
    @date: Jan 5, 2022

    This short script shows how to use Async
    and await calls
*/

let haveStudied3100 = true;
let haveSubmittedProject = true;
let haveSubmittedAnotherProject = true;

function promiseToStudyC3100() {
  return new Promise((resolve, reject) => {
    if (haveStudied3100){
        resolve('studied COMP 3100');
    } else {
        reject('not studied COMP 3100');
    }
  });
} 

function promiseToSubmitProject(){ 
  return new Promise((resolve, reject) => {
    if (haveSubmittedProject){
      resolve('submitted project');
    } else {
      reject('not submitted project');
    }
  });
}

function promiseToSubmitAnotherProject(){
  return new Promise((resolve, reject) => {
    if (haveSubmittedAnotherProject){
        resolve('submitted another project');
    } else {
        reject('not submitted another project');
    }
  });
}

async function f(){
  try{
    let res1 = await promiseToStudyC3100();
    console.log('1 - Waited for: '+res1);
    let res2 = await promiseToSubmitProject();
    console.log('2 - Waited for: '+res2);
    let res3 = await promiseToSubmitAnotherProject();
    console.log('3 - Waited for: '+res3);
  } catch(err){
    console.log('This function failed: '+err);
  }         
}
// Now let's execute our function
f();