const btn = document.querySelector('.btn')
btn.addEventListener('click',() =>{
    const input = document.querySelector('.inputBox')
    const file = input.files[0]
    if(!file){
        console.log('Select an file')
        return
    }
    const formData = new FormData()
    formData.append('image',file)
    fetch('https://httpbin.org/post',{
        method:'POST',
        body:formData,
    })
    .then(res => res.json())
    .then(data=>{
        console.log(data)
        input.value = ''
    })
})