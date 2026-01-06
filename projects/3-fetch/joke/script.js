const jokes = document.querySelector('.result')
const button = document.querySelector('button')
button.addEventListener('click',() =>{
    fetch('https://v2.jokeapi.dev/joke/Any')
    .then(res => res.json())
    .then(data => {
        const p = document.createElement('p');
        if(data.type === 'single'){
            p.textContent = data.joke;
        }else{
            p.textContent = `${data.setup}-${data.delivery}`
        }
        jokes.appendChild(p)
    })
    .catch(err => console.log(err))
})

//
const jo = document.querySelector('.resultt')
const btn = document.querySelector('button')
btn.addEventListener('click',() =>{
    fetch('https://v2.jokeapi.dev/joke/Any')
    .then(res => res.json())
    .then(data => {
        console.log(data)
        if(data.type === 'single'){
            p.textContent = `${data.type}`
        }else{
            p.textContent = `${data.setup} - ${data.delivery}`
        }
    })
})