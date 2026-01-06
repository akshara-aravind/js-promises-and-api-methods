// //Write a function that returns a Promise which resolves a number after 1 second.
// // function resolvePromise(num){
// //     return new Promise((resolve,reject)=>{
// //         resolve(num)
// //     },1000)
// // }

// // resolvePromise(8)
// // .then(res => console.log(res))

// //2.write an async fn that calls the promise 

// function resolvePromise(num){
//     return new Promise((resolve,reject)=>{
//         resolve(num)
//     },1000)
// }

// async function data(){
//     try{
//       const response = await resolvePromise(10);
//       console.log(response)
//     }catch(err){
//         console.log(err)
//     }
// }
// data()

// //3.using async/await : get number 5, add 5, add another 5 and log it 

// function getNum(num){
//     return new Promise((resolve,reject)=>{
//         resolve(num)
//     },2000)
// }
// async function getvalue(){
//     try{
//         const a = await getNum(5)
//         const b = await getNum(a + 5)
//         const c = await getNum(b+5)
//         console.log(c)
//     }catch(err){
//         console.log(err)
//     }
// }
// getvalue();

// //4.write a promise that rejects if the no is negative other wise resolve 
// function getNum2(num){
//    return new Promise((resolve,reject)=>{
//        if(num < 0){
//         setTimeout(() =>{
//             reject('Invalid number')
//         },1000)
//        }
//        setTimeout(()=>{
//         resolve(num)
//        },1000)
//    })
// }
// async function getValue2(){
//     try{
//         const value = await getNum2(-7)
//         console.log(value)
//     }catch(err){
//         console.log(err)
//     }
// }
// getValue2()

// //5. write an generic async function that fetches data from a given URL and returns the JSON response.
// async function genericFn(url){
//     try{
//     const fetchUrl = await fetch(url)
//     const data = await fetchUrl.json()
//     return data
//     }catch(err){
//         console.log(err)
//     }
// }

// async function fetchData(){
//     const value = await genericFn('https://v2.jokeapi.dev/joke/Any')
//     console.log(value)
// }
// fetchData()

// //6.write async code to exceute two promises in parallel and log the sum of their results.

// const a = new Promise((resolve,reject)=>{
//     resolve(5)
// })
// const b = new Promise((resolve,reject)=>{
//     resolve(20)
// })

// const all = Promise.all([a,b])

// all.then(data =>{
//     const sum = data[0]+data[1]
//     console.log(sum)
// })

//7.write async code using Promise.all() that stops execution if any promise fails

// const p1 = new Promise((resolve,reject)=>{
//     resolve('1')
// })
// const p2 = new Promise((resolve,reject)=>{
//     reject('Failed')
// })
// const p3 = new Promise((resolve,reject)=>{
//     resolve('2')
// })

// async function exceutePromises(){
//     try{
//         const all = await Promise.all([p1,p2,p3])
//         console.log(all)
//     }catch(err){
//         console.log(err)
//     }
// }
// exceutePromises()

//8. write async code using Promise.any() to return the first successful promise.
// const p1 = new Promise((resolve,reject)=>{
//     resolve('1')
//     // reject('Failed any')
// })
// const p2 = new Promise((resolve,reject)=>{
//     reject('Failed any')
// })
// const p3 = new Promise((resolve,reject)=>{
//     resolve('2')
// })

// async function exceutePromises(){
//     try{
//         const any = await Promise.any([p1,p2,p3]);
//         console.log(any)
//     }catch(err){
//         console.log(err)
//     }
// }
// exceutePromises()

//9.write async code promise.race() to get the fastest response
// const p1 = new Promise((resolve,reject)=>{
//     // resolve('1')
//     reject('Failed race')
// })
// const p2 = new Promise((resolve,reject)=>{
//     reject('Failed any')
// })
// const p3 = new Promise((resolve,reject)=>{
//     resolve('2')
// })

// async function exceutePromises(){
//     try{
//         const any = await Promise.race([p1,p2,p3]);
//         console.log(any)
//     }catch(err){
//         console.log(err)
//     }
// }
// exceutePromises()

//10.write an async fn that returns a value instead of logging it.

function returnFn(num){
    return new Promise((resolve,reject)=>{
        resolve(num)
    })
}
async function returnValue(){
    const a = await returnFn(100)
    return a + 100
}
returnValue()
.then(data =>{
    console.log(data)
})

//11. an async fn that calls another async fn and logs the result.
function first(){
    return '&'
}
async function second(){
    try{
        const result = await first()
        console.log(result)
    }catch(err){
        console.log(err)
    }
}
second()

//12. conver promise chain to async/await
/**
 getNum(3)
 .then(a => getNum(a+5))
 .then(b => getNum(b+5))
 .then(console.log)
 */

 function getNum(num){
    return new Promise((resolve,reject)=>{
        resolve(num)
    })
 }
 async function value(){
    try{
        const a = await getNum(3)
        const b = await getNum(a+5)
        const c = await getNum(b+5)
        console.log(c)
    }catch(err){
        console.log(err)
    }
 }
 value()

 //write an async fn that throws an error manually and handle it

 async function run(){
    throw 'something went wrong'
 }
 run()
.catch(err =>{
    console.log(err)
})
