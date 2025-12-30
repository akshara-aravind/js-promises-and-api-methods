const inputBtn = document.querySelector('.addBtn')
const inputTask = document.querySelector('input')
const isCompleted = document.querySelector('#boolean')
const tasks  = document.querySelector('.lists')
const completedBtn = document.querySelectorAll('.Done')
const completedTask = document.querySelector('.completedTask')
const newTask = document.querySelector('.newTask')

fetch('https://jsonplaceholder.typicode.com/todos?_limit=10')
.then(res => res.json())
.then(data => {
    let html = '';
    data.forEach(item => {
        // console.log(item)
        html += `
        <div class = "itemContainer  class ="${item.completed ? "completedTask": "notCompleted"}">
            <h4>${item.title}</h4>
            <input type='checkbox' ${item.completed ? 'checked':''}>
            <button class ="${item.completed ? "Done": "Pending"}">${item.completed ? "Done": "Pending"}</button>
        </div>`
    })
    tasks.innerHTML = html
})

inputBtn.addEventListener('click',(e) =>{
    window.scrollTo(0,document.body.scrollHeight)
    let title = inputTask.value
    let completed = isCompleted.value === 'true'
    fetch('https://jsonplaceholder.typicode.com/todos', {
        method:'POST',
        body:JSON.stringify({
            title,completed
        }),
        headers:{
            'Content-type':'application/json'
        },
    })
    .then(res => res.json())
    .then(data => {
        let todo ='';
        if(data.title !== ''){
            todo += `
            <div class = "itemContainer  class ="${data.completed ? "completedTask": "notCompleted"}" ">
                <h4>${data.title}</h4>
                <input type='checkbox' ${data.completed ? 'checked':''}>
                <button class ="${data.completed ? "Done": "Pending"}">${data.completed ? "Done": "Pending"}</button>
            </div>`
            newTask.innerHTML += todo

        }
    })  
})