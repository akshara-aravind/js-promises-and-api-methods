// //callBacks
// //   Event loop

// //in here we get the function is undefined because not any content
// //in callback there is an asyn fn setTimeout so firstly this fn move 
// //to stack so this show undefined.
// // console.log('start')
// // function getData(){
// //     setTimeout(()=>{
// //         return 'asyn function'
// //     },3000)
// // }
// // console.log(getData())

// // console.log('End')

// //callback
// //here getData only distroy in stack so callback in queue after this move to stack then work.
// /*
// console.log('start')
// function getData(callback){
//     setTimeout(()=>{
//         callback('asyn function')
//     },3000)
// }
// getData((value) => {
//     console.log(value)
// })

// console.log('End')
// */
// //
// function data1(callback){
//     setTimeout(() =>{
//         callback(3)
//     },1000)
// }
// function data2(callback){
//     setTimeout(()=>{
//         callback(6)
//     },1000)
// }
// function data3(callback){
//     setTimeout(()=>{
//         callback(1)
//     },1000)
// }
// data1((value) =>{
//     data2((val2)=>{
//         data3((val3)=>{
//             console.log(val3+val2+value)
//         })
//     })
// })
// //avoid this callback hell, introduced promise

// //Promises
// //resolve,reject
// // console.log('----resolve/reject-----')
// let promise = new Promise((resolve,reject)=>{
//     reject('Failed')
// })
// promise.then((response)=>{
//     console.log(response)
// })
// .catch(err =>console.log(err))

// //
// function promiseData(num){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve(num)
//         },1000)
//     })
// }
// function promiseData2(num){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve(num)
//         },1000)
//     })
// }

// promiseData(16)
//    .then((response)=>{
//        return promiseData2(response + 5);
//    })
//    .then((response)=>{
//     console.log(response)
//    })

//promise all: runs promises in parallel, if any one fails all fail
// console.log('------all-----')
// const promise1 = new Promise((resolve,reject)=>{
//     resolve(['javascript','java']);
// });

// const promise2 = new Promise((resolve,reject)=>{
//     resolve(['react','angular'])
//     // reject('API Failed')
// })

// const allPromises = Promise.all([promise1,promise2])

// allPromises
// .then((res)=>{
//     console.log(res.flat(Infinity))
// })
// .catch(err => console.log(err))

//allSettled: using this not depend one api to another
// console.log('------allSettled-----')
// const promise3 = new Promise((resolve,reject)=>{
//     resolve(['javascript','java']);
// });

// const promise4 = new Promise((resolve,reject)=>{
//     // resolve(['react','angular'])
//     reject('API Failed')
// })

// const allSettled = Promise.allSettled([promise3,promise4])

// allSettled
// .then((res)=>{
//     console.log(res.flat(Infinity))
// })
// .catch(err => console.log(err))

// //any:- Returns a single promise after success, if everything fails 
// //      then it shows 'All promises were rejected'

// //race:- Return first , a single promise as soon as it fails or succeeds.

// //any
// const promise5 = new Promise((resolve,reject)=>{
//     // resolve(['javascript','java']);
//     reject('API Failed')
// });

// const promise6 = new Promise((resolve,reject)=>{
//     resolve(['react','angular'])
//     // reject('API Failed')
// })

// const any = Promise.any([promise5,promise6])

// any
// .then((res)=>{
//     console.log(res.flat(Infinity))
// })
// .catch(err => console.log(err))

// //race: run first data

// const promise7 = new Promise((resolve,reject)=>{
//     resolve(['javascript','java']);
//     // reject('API Failed')
// });

// const promise8 = new Promise((resolve,reject)=>{
//     // resolve(['react','angular'])
//     reject('API Failed')
// })

// const race = Promise.race([promise7,promise8])

// race
// .then((res)=>{
//     console.log(res.flat(Infinity))
// })
// .catch(err => console.log(err))

/**
 Macrotask Queue:- setTimeout,setInterval,DOM events
 Microtask Queue:- Promise.catch(),.then()
 Event loop :- check call stack is empty, run all microtasks and one macrotask 
 --> call stack empty --> run all microtasks --> run one macrotasks --> run all microtasks --> run one macrotask
 only one macrotasks is run because UI would freeze
 */

 //write a fn using a callback that returns data after 2sec
//  function fetchData(callback){
//     setTimeout(()=>{
//         callback('This message came after 2sec')
//     },2000)
//  }
//  fetchData((data)=>{
//     console.log(data)
//  })

 //1.Create a Promise that resolves with the message "Data loaded!" after 2 seconds. Then use .then() to log the message
 /*
    2. Create a Promise that rejects after 1 second with the error "Network error". Handle it with .catch() to log the error message.

    3. Create a Promise that resolves after 2 seconds with "Success". Use .finally() to log "Promise completed" after it's done (whether resolved or rejected).

    4. Create a Promise that resolves with the number 5. Chain it to multiply the number by 2, then add 10, and finally log the result (should be 20).

    5. Create three function which returns a Promise. All functions need to be called in parallel.

    6. Create a Promise which resolves in 3 seconds, after resolving log message "Login successful". Use async/await.

    7. Fetch data from two APIs sequentially:
        1. https://jsonplaceholder.typicode.com/posts
        2. https://jsonplaceholder.typicode.com/users
    Then merge both so that each post includes its author's name and email.
  */

    const promise1 = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('Data loaded!')
        },2000)
    })
    promise1
    .then(data =>console.log(data))
    .catch(err => console.log(err))

    //2
    const promise2 = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            reject('Network error')
        },1000)
    })
     promise2
     .then(data => console.log(data))
     .catch(err => console.log(err))

    //3
    const promise3 = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('Success')
        },2000)
    })
    promise3
    .then(data => console.log(data))
    .catch(err => console.log(err))
    .finally(()=> console.log('Promise completed'))

    //4
  function promise5(num){
    return new Promise((resolve,reject)=>{
        resolve(num)
    })
  }
  promise5(5)
  .then(data => promise5(data*2))
  .then(data => promise5(data+10))
  .then(data => console.log(data))
  .catch(err => console.log(err))

  //5
  function promise6(){
    return new Promise((resolve)=>[
        setTimeout(()=>{
            resolve('first message')
        },1000)
    ])
  }
  function promise7(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve('seconde message')
        },1500)
    })
  }
  function promise8(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve('third message')
        },2000)
    })
  }

   Promise.all([promise6(),promise7(),promise8()])
   .then(data => console.log(data))
   .catch(err => console.log(err))

   //6
   const promise9 = new Promise((resolve,reject)=>{
     setTimeout(()=>{
        resolve('Login successful')
     },3000)
   })
   async function asyncAwaitFn(){
    try{
        const response = await promise9;
        console.log(response)
    }catch(err){
        console.log(err)
    }
   }
   asyncAwaitFn()

   //7

async function sequentiallyFetch(){
    try{
        const fetchApi1 = await fetch('https://jsonplaceholder.typicode.com/posts')
        const fetchApi2 = await fetch('https://jsonplaceholder.typicode.com/users')
        const response1 = await fetchApi1.json()
        const response2 = await fetchApi2.json()
        const mergeData = []
        response1.forEach(userId =>{
            response2.forEach(id =>{
                if(userId.userId === id.id){
                 mergeData.push({
                    title:userId.title,
                    authorName:id.username,
                    authorEmail:id.email
                 })
                }
            })
        })
        console.log(mergeData)
    }catch(err){
        console.log(err)
    }
}
sequentiallyFetch()