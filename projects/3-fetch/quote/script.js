const container = document.querySelector('.container')
fetch('https://jsonplaceholder.typicode.com/posts')
.then(res => res.json())
.then(data =>{
    let html =''
    data.forEach(el => {
        console.log(el)
        html += `
        <h2>${el.title}</h2>
        <p>${el.body}</p>`
    })
    container.innerHTML =html
})