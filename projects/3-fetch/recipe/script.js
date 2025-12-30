const container = document.querySelector('.mainContainer')
const inputBox = document.getElementById('inputBox')
const btn = document.querySelector('.btn')
const overlay = document.querySelector('.overlay')
const popup = document.querySelector('.popup')
const closeBtn = document.querySelector('.close')
const randomBtn = document.querySelector('.randomBtn')

btn.addEventListener('click',()=>{
    let inputValue = inputBox.value
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${inputValue}`

    fetch(url)
    .then(res => res.json())
    .then(data =>{
        if(data.meals === null){
            alert('Recipe not found!!')
            return
        }
        let html = ''
        let pop = ''
        data.meals.forEach((item,index) =>{
            html += `
            <div class = "recipe recipe-${index+1}">
            <img src = "${item.strMealThumb}">
            <h3>${item.strMeal}</h3>
            </div>`;

            pop += `
            <div class="popupContainer popup-${index+1}">
                <button class="close">x</button>
                <h1>${item.strMeal}</h1>
                <img src= "${item.strMealThumb}" />
                <h3>${item.strCategory}</h3> 
                <h3>${item.strArea}</h3>
                <h3>Ingredients</h3>
                <div class ="ingre">
                    ${item.strIngredient1}
                    <br>${item.strIngredient2}
                    <br>${item.strIngredient3}
                    <br>${item.strIngredient4}
                    <br>${item.strIngredient5}
                    <br>${item.strIngredient6}
                    <br>${item.strIngredient7}
                    <br>${item.strIngredient8}
                    <br>${item.strIngredient9}
                    <br>${item.strIngredient10}
                    <br>${item.strIngredient11}
                    <br>${item.strIngredient12}
                    <br>${item.strIngredient13}
                    <br>${item.strIngredient14}
                    <br>${item.strIngredient15}
                    <br>${item.strIngredient16}
                </div>
                <h3>Instructions</h3>
                <div class = "instraction">${item.strInstructions}</div>
                <h3>Video Recipe<h3>
                <a href="${item.strYoutube}">Watch On YouTube</a>
            </div>
          `
        })
        container.innerHTML = html
        popup.innerHTML = pop

        document.querySelectorAll('[class *= "recipe-"]').forEach(el =>{
            el.addEventListener('click',() =>{
                document.querySelectorAll('[class *= "popup-"]').forEach(p =>{
                    p.style.display = 'none'
                })
                popup.style.display = 'block'
                overlay.style.display = 'block'
                document.body.classList.add('no-scroll')
                const index = [...el.classList]
                .find(cls => cls.startsWith('recipe-'))
                .split('-')[1];

                document.querySelector(`.popup-${index}`).style.display = 'block';
            })
        })
        document.querySelectorAll('.close').forEach(btn =>{
            btn.addEventListener('click',()=>{
              
                popup.style.display = 'none'
                overlay.style.display = 'none'
                document.body.classList.remove('no-scroll')
            })
        })     
    })
    .catch(err => console.log(err))
        if(inputValue === ''){
        container.style.display = 'none'
    }else{
        container.style.display = 'grid'
    }
})

//random btn
randomBtn.addEventListener('click',()=>{
    const randomUrl = 'https://www.themealdb.com/api/json/v1/1/random.php'

    fetch(randomUrl)
    .then(res => res.json())
    .then(data =>{
        let html = ''
        let pop = ''
        data.meals.forEach((item,index) =>{
            html += `
            <div class = "recipe recipe-${index+1}">
            <img src = "${item.strMealThumb}">
            <h3>${item.strMeal}</h3>
            </div>`;

            pop += `
            <div class="popupContainer popup-${index+1}">
                <button class="close">x</button>
                <h1>${item.strMeal}</h1>
                <img src= "${item.strMealThumb}" />
                <h3>${item.strCategory}</h3> 
                <h3>${item.strArea}</h3>
                <h3>Ingredients</h3>
                <div class ="ingre">
                    ${item.strIngredient1}
                    <br>${item.strIngredient2}
                    <br>${item.strIngredient3}
                    <br>${item.strIngredient4}
                    <br>${item.strIngredient5}
                    <br>${item.strIngredient6}
                    <br>${item.strIngredient7}
                    <br>${item.strIngredient8}
                    <br>${item.strIngredient9}
                    <br>${item.strIngredient10}
                    <br>${item.strIngredient11}
                    <br>${item.strIngredient12}
                    <br>${item.strIngredient13}
                    <br>${item.strIngredient14}
                    <br>${item.strIngredient15}
                    <br>${item.strIngredient16}
                </div>
                <h3>Instructions</h3>
                <div class = "instraction">${item.strInstructions}</div>
                <h3>Video Recipe<h3>
                <a href="${item.strYoutube}">Watch On YouTube</a>
            </div>
          `
        })
        container.innerHTML = html
        popup.innerHTML = pop

        document.querySelectorAll('[class *= "recipe-"]').forEach(el =>{
            el.addEventListener('click',() =>{
                document.querySelectorAll('[class *= "popup-"]').forEach(p =>{
                    p.style.display = 'none'
                })
                popup.style.display = 'block'
                overlay.style.display = 'block'
                document.body.classList.add('no-scroll')
                const index = [...el.classList]
                .find(cls => cls.startsWith('recipe-'))
                .split('-')[1];

                document.querySelector(`.popup-${index}`).style.display = 'block';
            })
        })
        document.querySelectorAll('.close').forEach(btn =>{
            btn.addEventListener('click',()=>{
              
                popup.style.display = 'none'
                overlay.style.display = 'none'
                document.body.classList.remove('no-scroll')
            })
        })
    })
    .catch(err => console.log(err))    
})