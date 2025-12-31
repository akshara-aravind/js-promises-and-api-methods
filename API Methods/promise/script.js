// //promise represents the result of an asynchronous operations
// //promise resolve after 2 seconds
// let task = new Promise((resolve) => {
//     setTimeout(() => {
//         resolve('Task completed')
//     },2000)
// })
// .then(data => console.log(data))

// //age check with resolve and reject

// function checkAge(age){
//    return new Promise((resolve,reject) =>{
//     if(age >= 18){
//         resolve('Eligible')
//     }else{
//         reject('InEligible')
//     }
//    })
// }
// checkAge(7)
// .then(res => console.log(res))
// .catch(err => console.log(err))

// //
// function loadData(){
//     return new Promise((resolve) => {
//         setTimeout(() =>{
//             resolve('Data loaded')
//         },2000)        
//     })
// }
// loadData()
// .then(data =>  console.log(data))

// //
// function order(){
//     return new Promise((resolve) => {
//         resolve('order Placed')
//     })
// }
// function cook(){
//     return new Promise((resolve) => {
//         resolve('food preparing')
//     })
// }
// function deliver(){
//     return new Promise((resolve) =>{
//         resolve('food deliverd')
//     })
// }
// order()
// .then(data => {
//     console.log(data)
//     return cook()
// })
// .then(data =>{
//     console.log(data)
//     return deliver()
// })
// .then(data => console.log(data))

// //promise all
//  const p1 = new Promise(res => setTimeout(() => {res('Task1')},1000));
//  const p2 = new Promise(res =>setTimeout(() => {res('Task2')},2000));
//  const p3 = new Promise(res =>setTimeout(()=>{res('Task3')},3000))

//  Promise.all([p1,p2,p3])
//  .then(result => console.log('All done:',result))

 //promise race : first promise that finish
 const api1 = new Promise(res => setTimeout(() => {res('api1')},3000))
 const api2 = new Promise(res => setTimeout(()=>{res('api2')},1000))

 Promise.race([api1,api2])
 .then(result => console.log(result)) // only get api2

 //Promise.any: ignore failures untill success appears.

 