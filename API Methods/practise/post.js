const container = document.querySelector('.container')
const status = document.querySelector('#status')

container.addEventListener('submit', (e) => {
    e.preventDefault()
    const data = {
        name:document.getElementById('name').value,
        email:document.getElementById('email').value,
        message:document.getElementById('message').value,
    }
fetch('https://jsonplaceholder.typicode.com/users', {
    method:'POST',
    body:JSON.stringify(
        data
    ), 
    headers:{
        'Content-type':'application/json'
    },
})
.then(res => res.json())
.then(data =>{
    console.log(data)
    status.textContent = 'submitted successfully'
})
.catch(err => {
    status.textContent = 'something went wrong'
})
})
