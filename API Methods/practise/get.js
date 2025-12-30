const result = document.querySelector('.result')
fetch('https://jsonplaceholder.typicode.com/users')
.then(res => res.json())
.then(data => {
  let html = '';
  data.forEach(item => {
     html += `
     <h3>${item.name}</h3>
     <p>${item.email}</p>`
  });
  result.innerHTML = html
})
.catch(err => console.log(err))