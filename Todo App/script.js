const inputBox = document.querySelector('.inputBox')
const addBtn = document.querySelector('.addBtn')
const taskContainer = document.querySelector('.taskContainer')
const isCompleted =document.querySelector('#boolean')

let tasks = JSON.parse(localStorage.getItem('tasks')) || []
let count =tasks.length;

tasks.forEach(item => {
    renderTask(item)
})
addBtn.addEventListener('click',()=>{
    window.scrollTo(0,document.body.scrollHeight)
    const inputValue = inputBox.value;
    const booleanValue = isCompleted.value === 'true'
    if(inputValue === '') return

    const task = {
        todo:inputValue,
        complete:booleanValue
    }
    tasks.push(task)

    localStorage.setItem('tasks',JSON.stringify(tasks))
    renderTask(task)
     inputBox.value =''
     isCompleted.value =''
     count++
})
function renderTask(task){
    let li = document.createElement('li')
    li.className = 'items'

    li.innerHTML =`
        <input type='checkbox' ${task.complete ? 'checked':''} class="checkBox">
        <h4>${task.todo}</h4>
        <button class ="deleteBtn">Delete</button>
    `
    taskContainer.appendChild(li)
}

taskContainer.addEventListener('click',(e)=>{
    if(e.target.classList.contains('deleteBtn')){
         const item  = e.target.closest('.items')
         const taskContent = item.querySelector('h4').textContent
        
        tasks = tasks.filter(el => el.todo !== taskContent)
        localStorage.setItem('tasks',JSON.stringify(tasks))
        item.remove()
    }
    if(e.target.classList.contains('checkBox')){
        const checked = e.target.checked
        const item  = e.target.closest('.items')
        const taskContent = item.querySelector('h4').textContent
 
        for(let i=0; i<tasks.length;i++){
            if(tasks[i].todo === taskContent){
                tasks[i].complete = checked
                break
            }
        }
        localStorage.setItem('tasks',JSON.stringify(tasks))
    }
})