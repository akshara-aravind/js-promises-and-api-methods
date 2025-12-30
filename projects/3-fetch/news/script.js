const container = document.querySelector('.mainContainer')
const apiKey = 'https://newsapi.org/v2/everything?q=tesla&from=2025-11-17&sortBy=publishedAt&pageSize=10&apiKey=d5f0e52787bd4250bd50599696b2563e'

fetch(apiKey)
.then(res => res.json())
.then(data=>{
    let html = ''
    const content = data.articles
    content.forEach(item =>{
        console.log(item)
        html += `
        <div class = "boxContent">
            <h4>${item.title}</h4>
            <img src = ${item.urlToImage} />
            <div>${item.content}</div>
        </div>
        `
    })
    container.innerHTML = html
})
.catch(error =>console.log(error))