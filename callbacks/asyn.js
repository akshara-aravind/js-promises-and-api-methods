
// // const promise = new Promise((resolve,reject)=>{
// //     // resolve(['Javascript','Java'])
// //     reject('API Failed')
// // })



// // async function fetchData(){
// //     try{
// //         const response = await promise;
// //         console.log(response)
// //     }catch(err){
// //         console.log(err)
// //     }
// // };
// // fetchData();

// // async function genericFetchData(url){
// //   try{
// //     const response = await fetch(url) 
// //     const data = await response.json()
// //     return data
// //   }catch(err){
// //     return err
// //   }
// // }

// // async function fetchAPIData(){
// //     try{
// //         const response = await genericFetchData('https://v2.jokeapi.dev/joke/Any')
// //         console.log(response)
// //     }catch(err){
// //         console.log(err)
// //     }
// // }
// // fetchAPIData()

// //
// function getNum(num){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve(num)
//         },1000)
//     })
// }

// async function data(){
//     try{
//     const a = await getNum(3);
//     const b = await getNum(a+5);
//     const c = await getNum(b+5);
//     console.log(c)
//     }catch(err){
//         console.log(err)
//     }
// }
// data()
// //1. Write a function MonitorLongRunningTasks(tasks, threshold, onSlowTask) that monitors async tasks and invokes onSlowTask(taskIndex, elapsedTime) for any task taking longer than threshold ms.
 async function MonitorLongRunningTasks(tasks,threshold,onSlowTask){
    let results =[]
    for(let i=0; i<tasks.length;i++){
        let startTime = Date.now()
        let task =await tasks[i]()
        let endTime = Date.now()
        let fullTime = endTime - startTime
        console.log(fullTime)
        
        if(fullTime > threshold){
            onSlowTask(i,fullTime)
        }
    }
 }
 const tasks = [
     () => new Promise(item => setTimeout(() => item('A'),500)),
     () => new Promise(item => setTimeout(() => item('B'),1000)),
     () => new Promise(item => setTimeout(() => item('C'),1500))
    ]
    function onSlowTask(index,time){
        console.log(`Task ${index} is slow: ${time}ms`)
    }
MonitorLongRunningTasks(tasks,1000,onSlowTask)
 
// //2 Write a function TimeoutWrapper(fn, ms) that wraps any async function fn and rejects if it takes longer than ms.

// //2
// function TimeoutWrapper(fn,ms){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve('Operation times out')
//         },ms)
//     })
// }
// async function fetchData(){
//     try{
//         const response = await TimeoutWrapper(2000)
//         console.log(response)
//     }catch(err){
//         console.log(err)
//     }
// }
// fetchData()

// //Write a function Waterfall(tasks) that chains an array of async functions where each function's output is passed to the next one.
// /*
// Example:
// const add = async x => x + 2;
// const square = async x => x * x;
// await Waterfall([add, square])(2) → 16
// */

// function Waterfall(tasks){
//     return async function (intitialValue){
//         let result = intitialValue

//         for(let task of tasks){
//             result = await task(result)
//         }
//         return result;
//     }
// }
// const add = async x => x+2
// const square = async x => x*x
// const result = await Waterfall([add,square])(2);
// console.log(result)

// //
// const sub = async x => x-1
// const result2 = await Waterfall([add,square,sub])(3)
// console.log(result2)

// //convert promise chain to async await
// function task(x){
//     return new Promise((resolve)=>{
//         resolve(x+5)
//     })
// }
// async function tasks(){
//     try{
//         const response = await task(2)
//         const res2 = await response * 2
//         console.log(res2)
//     }catch(err){
//         console.log(err)
//     }
// }
// tasks()

// //promise vs async fn
// async function A(){
//     return 10;
// }
// function B(){
//     return Promise.resolve(10)
// }
// //both resolve promise , async fn always return a promise.

// function newPromise(fn,ms){
//     return (...args)=>
//      new Promise((resolve)=>{
//         setTimeout(async ()=>{
//             const result = await fn(...args)
//             resolve(result)
//         },ms)
//     })
// }
// const fn = async x => x+10
// async function eg(){
//    try{
//     const res = await newPromise(fn,2000)(3)
//     console.log(res)
//    }catch(err){
//     console.log(err)
//    }
// }
// eg()

//difference of var and let , var is global scope and let is functional scope so 
// async function run(){
//     for(var i=0; i<=3; i++){
//         setTimeout(()=>{
//             console.log(i)
//         },1000)
//     }
// }
// run() // 

// async function runLet(){
//     for(let i=0; i<3;i++){
//         setTimeout(()=>{
//             console.log(i)
//         },1000)
//     }
// }
// runLet()

//sequentialy fetch
async function sequentiallyFetch(){
  try{
   const api1 = await fetch('https://jsonplaceholder.typicode.com/posts')
   const api2 = await fetch('https://jsonplaceholder.typicode.com/users')
   const resp1 = await api1.json()
   const resp2 = await api2.json()
   const arr =[]
   resp1.forEach(posts=>{
    resp2.forEach(user =>{
        if(posts.userId === user.id){
           arr.push({
            author:user.username,
            email:user.email,
            title:posts.title
           })
        }
    })
   })
   console.log(arr)
 }catch(err){
    console.log(err)
 }
}
// sequentiallyFetch()

//using lookup object for : to avoid repeated searching and make access fast.
/*
async function sequential(){
   try{
    const api1 = await fetch('https://jsonplaceholder.typicode.com/posts')
    const api2 = await fetch('https://jsonplaceholder.typicode.com/users')
    const res1 = await api1.json()
    const res2 = await api2.json()

    const userLookup ={}
    res2.forEach(user =>{
        userLookup[user.id] = user
    })
    // console.log(userLookup)

    //map
    const arr = res1.map(post =>{
        const user = userLookup[post.userId]
        return{
            id:user.id,
            author:user.username,
            email:user.email,
            title:post.title
        }
    })
    console.log(arr)
   }catch(err){
    console.log(err)
   }
}
sequential()
*/
/**
 Write a function ParallelLimit(tasks, limit) where tasks is an array of functions that return Promises. Run only limit promises concurrently until all are resolved.
Example:
const tasks = [
 () => fetch('/api/1'),
 () => fetch('/api/2'),
 () => fetch('/api/3')
];
await ParallelLimit(tasks, 2);
 */
// async function ParallelLimit(tasks,limit){
//     const results = []
//     let index = 0

//     async function runTasks(){
//         if (index >= tasks.length) return;
//         const currnetIndex = index++;
//         results[currnetIndex] = await tasks[currnetIndex]()

//         await runTasks()
//     }
//     const runners =[]
//     for(let i=0; i<limit;i++){
//         runners.push(runTasks())
//     }
//     await Promise.all(runners)
//     return results
// }
// let tasks = [
//     () => fetch('https://jsonplaceholder.typicode.com/posts'),
//     () => fetch('https://jsonplaceholder.typicode.com/users'),
//     () => fetch('https://jsonplaceholder.typicode.com/todos')
// ]
// const result2 = await ParallelLimit(tasks,2)
// console.log(result2)
//2.Implement a function withTimeout(promise, ms). If the promise does not resolve within ms, reject with "Timeout"
// function withTimeout(promise,ms){
//     return new Promise((resolve,reject)=>{
//         setTimeout(() =>{
//             reject('Timeout')
//         },ms)
//         promise
//         .then(value =>{
//             resolve(value)
//         })
//         .catch(err =>{
//             reject(err)
//         })
//     })
// }

/*
 3.Write a function ComposeAsync(...fns) that allows composition of asynchronous
functions (Promise-returning). Execution order should be right-to-left.
Example:
const addOne = async x => x+1;
const double = async x => x*2;
const fn = ComposeAsync(addOne, double);
await fn(3) → 7
 */

//3
// function ComposeAsync(...fns){
//     return async function (value){
//         let tasks = fns.reverse()
//          let result = value;
//          for(let fn of tasks){
//             result =  await fn(result)
//          }
//          return result
//     }
// }
// const addOne = async x =>x+1
// const double = async x =>x*2
// const result = await ComposeAsync(addOne,double)(3)
// console.log(result)