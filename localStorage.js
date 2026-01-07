/**
 Local storage:- data stays even after closing the browser, dark mode, todo list
 Session storage:- data id deleted when the tab is closed, otp
 
 --> localstorage is a browser memory box, we can store data even after refresh, browse close,
     the data stays

 --> Basic method:-
     localStorage.setItem(key,value)
     localStorage.getItme(key)
     localStorage.removeItem(key)
     localStorage.clear()
 */
//PRACTISE
//save theme prefrence apply it after refresh
// localStorage.setItem('theme','dark')

// const theme = localStorage.getItem('theme')
// document.body.className = theme
// localStorage.removeItem('theme')

//save input value restore after refresh
const input = document.querySelector('input')
const value = document.querySelector('p')
input.addEventListener('input',()=>{
    localStorage.setItem('inputValue',input.value)
})
value.textContent += localStorage.getItem('inputValue') || ''

localStorage.removeItem('inputValue')