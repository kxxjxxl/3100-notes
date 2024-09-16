# JavaScript Promises and Async/Await Notes

## 1. Promises Basics

Promises are objects representing the eventual completion or failure of an asynchronous operation.

### Creating a Promise

```javascript
let promiseToStudyC3100 = new Promise((resolve, reject) => {
    if (haveStudied3100){
        resolve('studied COMP 3100');
    } else {
        reject('not studied COMP 3100');
    }
});
```

### Using a Promise

```javascript
promiseToStudyC3100
    .then((result) => {
        console.log('The student has ' + result);
    })
    .catch((err) => {
        console.log('The student has ' + err);
    });
```

### Chaining Promises

```javascript
promiseToStudyC3100
    .then((result) => {
        console.log('The student has ' + result);
        return promiseToSubmitProject;
    })
    .then((result) => { 
        console.log('The student has ' + result);      
    })
    .catch((err) => {
        console.log('The student has ' + err);
    });
```

## 2. Promise.all()

`Promise.all()` takes an iterable of promises and returns a single Promise that resolves when all of the passed promises have resolved, or rejects if any of the passed promises reject.

```javascript
const studentsPromises = [promiseToStudyC3100, promiseToSubmitProject]; 
Promise.all(studentsPromises)
    .then((result) => {
        console.log('All requirements fulfilled:', result);
    })
    .catch((err) => {
        console.log('At least one requirement failed:', err);
    });
```

## 3. Promise.race()

`Promise.race()` takes an iterable of promises and returns a promise that resolves or rejects as soon as one of the promises in the iterable resolves or rejects.

```javascript
const studentsPromises = [promiseToStudyC3100, promiseToSubmitProject]; 
Promise.race(studentsPromises)
    .then((result) => {
        console.log('First result returned:', result);
    })
    .catch((err) => {
        console.log('First promise rejected:', err);
    });
```

## 4. Async/Await

Async/await is syntactic sugar built on top of promises, making asynchronous code look and behave more like synchronous code.

### Creating Async Functions

Method 1: Using `new Promise()`
```javascript
function promiseToStudyC3100() {
  return new Promise((resolve, reject) => {
    if (haveStudied3100){
        resolve('studied COMP 3100');
    } else {
        reject('not studied COMP 3100');
    }
  });
}
```

Method 2: Using `async` keyword
```javascript
async function promiseToStudyC3100() {
  if (haveStudied3100){
    return 'studied COMP 3100';
  } else {
    throw new Error('not studied COMP 3100');
  }  
}
```

### Using Async/Await

```javascript
async function f(){
  try {
    let res1 = await promiseToStudyC3100();
    console.log('Waited for:', res1);
    let res2 = await promiseToSubmitProject();
    console.log('Waited for:', res2);
    let res3 = await promiseToSubmitAnotherProject();
    console.log('Waited for:', res3);
  } catch(err) {
    console.log('This function failed:', err);
  }         
}

// Execute the async function
f();
```

## Key Points

1. Promises have three states: pending, fulfilled, or rejected.
2. `.then()` is used for handling resolved promises, `.catch()` for rejected promises.
3. `Promise.all()` is useful for running multiple promises concurrently.
4. `Promise.race()` is helpful when you want to work with the first promise to resolve (or reject).
5. Async/await provides a more synchronous-looking way to work with promises.
6. Error handling in async/await is done using try/catch blocks.
7. There are multiple ways to create promises, including the Promise constructor and async functions.

These examples demonstrate various techniques for working with asynchronous operations in JavaScript, from basic Promise usage to more advanced concepts like `Promise.all()`, `Promise.race()`, and the modern async/await syntax.
