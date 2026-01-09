const inputBox = document.querySelector('.inputBox');
const addBtn = document.querySelector('.addBtn');
const taskContainer = document.querySelector('.taskContainer');

let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

// render saved tasks
tasks.forEach(task => renderTask(task));

// add task
addBtn.addEventListener('click',()=>{
    const inputValue = inputBox.value.trim();
    if(inputValue === '') return;

    const task = {
        todo: inputValue,
        complete: false
    };

    tasks.push(task);
    localStorage.setItem('tasks',JSON.stringify(tasks));
    renderTask(task);

    inputBox.value ='';
});

// render task
function renderTask(task){
    const li = document.createElement('li');
    li.className = 'items';

    li.innerHTML =`
        <input type='checkbox' ${task.complete ? 'checked':''} class="checkBox">
        <input type ="text" class ="taskInput" value ="${task.todo}">
        <br><br>
        <button class ="deleteBtn">Delete</button>
        <button class = "edit">Edit</button>
    `;

    taskContainer.appendChild(li);
}


taskContainer.addEventListener('click',(e)=>{

    const item = e.target.closest('.items');
    if(!item) return;

    const input = item.querySelector('.taskInput');

    // delete
    if(e.target.classList.contains('deleteBtn')){
        const taskContent = input.value;

        tasks = tasks.filter(el => el.todo !== taskContent);
        localStorage.setItem('tasks',JSON.stringify(tasks));
        item.remove();
    }

    // checkbox
    if(e.target.classList.contains('checkBox')){
        const checked = e.target.checked;

        for(let i=0; i<tasks.length;i++){
            if(tasks[i].todo === input.value){
                tasks[i].complete = checked;
                break;
            }
        }
        localStorage.setItem('tasks',JSON.stringify(tasks));
    }

    // EDIT
    if(e.target.classList.contains('edit')){
        startEdit(item);
    }

    // SAVE
    if(e.target.classList.contains('saveBtn')){
        saveEdit(item);
    }

    // CANCEL
    if(e.target.classList.contains('cancelBtn')){
        cancelEdit(item);
    }
});
//edit
function startEdit(item){
    const input = item.querySelector('.taskInput');

    input.defaultValue = input.value;

    const saveBtn = document.createElement('button');
    saveBtn.className = 'saveBtn';
    saveBtn.textContent = 'Save';

    const cancelBtn = document.createElement('button');
    cancelBtn.className = 'cancelBtn';
    cancelBtn.textContent = 'Cancel';

    item.querySelector('.edit').replaceWith(saveBtn);
    item.querySelector('.deleteBtn').replaceWith(cancelBtn);

    input.focus();
    input.value = input.value;
}

function saveEdit(item){
    const input = item.querySelector('.taskInput');
    const oldValue = input.defaultValue

    for(let i=0;i<tasks.length;i++){
        if(tasks[i].todo === oldValue){
            tasks[i].todo = input.value.trim();
            break;
        }
    }

    localStorage.setItem('tasks', JSON.stringify(tasks));
    showTask();
}

function cancelEdit(item){
    const input = item.querySelector('.taskInput');
    input.value = input.defaultValue
    showTask();
}


function showTask(){
    taskContainer.innerHTML = '';
    tasks.forEach(task => renderTask(task));
}
