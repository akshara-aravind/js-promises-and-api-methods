//GET: read or retrieve data
fetch('https://jsonplaceholder.typicode.com/posts')
.then(res => res.json())
.then(data => {
    console.log(data)
})

//POST:create a new data

fetch('https://jsonplaceholder.typicode.com/posts',{
    method:'POST',
    body:JSON.stringify({
        title:'foo',
        body:'bar',
        userId:10,
    }),
    headers:{
        'Content-type':'application/json'
    },
})
.then(res => res.json())
.then(data => console.log(data))

//PUT: update entire data

fetch('https://jsonplaceholder.typicode.com/posts/1' , {
    method:'PUT',
    body:JSON.stringify({
        id:1,
        title:'foo',
        body:'bar',
        userId:1,
    }),
    headers:{
        'Content-type':'application/json'
    },
})
.then(res => res.json())
.then(data => console.log(data))

//PATCH: update specific field

fetch('https://jsonplaceholder.typicode.com/posts/1', {
    method:'PATCH',
    body:JSON.stringify({
        title:'foo',
    }),
    headers:{
        'Content-type':'application/json'
    },
})
.then(res => res.json())
.then(data => console.log(data))

//DELETE: remove data
fetch('https://jsonplaceholder.typicode.com/posts/1' , {
    method:'DELETE',
})

//another api

// fetch('https://jsonplaceholder.typicode.com/albums/1/photos')
// .then(res => res.json())
// .then(data => {
//     console.log(data)
// })

// //post
// fetch('https://jsonplaceholder.typicode.com/albums/1/photos', {
//     method:'POST',
//     body:JSON.stringify({
//        title:'nature'
//     }),
//     headers:{
//         'Content-type':'application/json'
//     },
// })
// .then(res => res.json())
// .then(data => console.log(data))

// //put
// const result = document.querySelector('.result')
// fetch('https://jsonplaceholder.typicode.com/photos/1', {
//     method:'PATCH',
//     body:JSON.stringify({
//         title:'test',
//     }),
//     headers:{
//         'Content-type':'application/json'
//     },
// })
// .then(res => res.json())
// .then(data =>{
//     console.log(data.url)
//     result.innerHTML = `
//     <h3>${data.title}</h3>
//     <img src= "${data.url}">`
// })
// //

// fetch('https://jsonplaceholder.typicode.com/photos/1', {
//     method:'DELETE'
// })

//fetch always return promise