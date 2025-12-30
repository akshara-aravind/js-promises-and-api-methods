const container = document.querySelector('.mainContainer')
const inputBox = document.querySelector('.inputBox')
const btn = document.querySelector('.btn')
const error = document.querySelector('.error')
const active = document.querySelector('.active')

btn.addEventListener('click',(e)=>{
error.style.display = 'none'
active.style.display = 'none'
let inputValue = inputBox.value

const API_KEY = "348ce71605a67ed83960815f022c9856";
const url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${inputValue}`
fetch(url)
.then(res => res.json())
.then(data=>{
    let html = ''
    data.results.forEach(item =>{
        let img ='https://image.tmdb.org/t/p/w500' +`${item.poster_path}`
        html += `
        <div class = "boxContent">
            <h1>${item.title}</h1>
            <img src = ${img} alt = "${item.title}"/>
            <div>${item.overview}</div>
        </div>
        `
    })
    container.innerHTML = html
    if(data.results.length === 0){
       error.style.display = 'block'
       active.style.display = 'none'
    }
})
.catch(error =>console.log(error))
})
