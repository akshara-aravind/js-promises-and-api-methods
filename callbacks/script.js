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
console.log('------all-----')
const promise1 = new Promise((resolve,reject)=>{
    resolve(['javascript','java']);
});

const promise2 = new Promise((resolve,reject)=>{
    resolve(['react','angular'])
    // reject('API Failed')
})

const allPromises = Promise.all([promise1,promise2])

allPromises
.then((res)=>{
    console.log(res.flat(Infinity))
})
.catch(err => console.log(err))

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
