/*  
    @author: Amilcar Soares
    @version: 1.0
    @date: Jan 5, 2022

    This short script shows how to use Async
    and await calls
*/

let haveStudied3100 = true;
let haveSubmittedProject = true;
let haveSubmittedAnotherProject = true ;

async function promiseToStudyC3100() {
  if (haveStudied3100){
    return 'studied COMP 3100';
  } else {
    throw new Error('not studied COMP 3100');
  }  
} 

async function promiseToSubmitProject(){ 
  if (haveSubmittedProject){
    return 'submitted project';
  } else {
    throw new Error('not submitted project');
  }  
}

async function promiseToSubmitAnotherProject(){
  if (haveSubmittedAnotherProject){
    return 'submitted another project';
  } else {
    throw new Error('Not submitted');
  }
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