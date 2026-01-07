// const promise = new Promise((resolve,reject)=>{
//     // resolve(['Javascript','Java'])
//     reject('API Failed')
// })

// async function fetchData(){
//     try{
//         const response = await promise;
//         console.log(response)
//     }catch(err){
//         console.log(err)
//     }
// };
// fetchData();

// async function genericFetchData(url){
//   try{
//     const response = await fetch(url) 
//     const data = await response.json()
//     return data
//   }catch(err){
//     return err
//   }
// }

// async function fetchAPIData(){
//     try{
//         const response = await genericFetchData('https://v2.jokeapi.dev/joke/Any')
//         console.log(response)
//     }catch(err){
//         console.log(err)
//     }
// }
// fetchAPIData()

//
function getNum(num){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(num)
        },1000)
    })
}

async function data(){
    try{
    const a = await getNum(3);
    const b = await getNum(a+5);
    const c = await getNum(b+5);
    console.log(c)
    }catch(err){
        console.log(err)
    }
}
data()
//1. Write a function MonitorLongRunningTasks(tasks, threshold, onSlowTask) that monitors async tasks and invokes onSlowTask(taskIndex, elapsedTime) for any task taking longer than threshold ms.
//2 Write a function TimeoutWrapper(fn, ms) that wraps any async function fn and rejects if it takes longer than ms.

//2
function TimeoutWrapper(fn,ms){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('Operation times out')
        },ms)
    })
}
async function fetchData(){
    try{
        const response = await TimeoutWrapper(2000)
        console.log(response)
    }catch(err){
        console.log(err)
    }
}
fetchData()