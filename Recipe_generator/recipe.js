let recipes = [ { name: "omelette", ingredients:['eggs', 'onion'] }, { name: "pancakes", ingredients: ['flour', 'milk', 'eggs'] }, { name: "chocolate cake", ingredients: ['flour', 'sugar', 'coco'] }, { name: "banana pancakes", ingredients: ['ripebanana', 'flour', 'milk', 'eggs'] }, { name: "banana omelette", ingredients: ['ripebanana', 'eggs', 'onion'] }, { name: "banana chocolate cake", ingredients: ['ripebanana', 'flour', 'sugar', 'coco'] }, { name: "fried rice", ingredients: ['rice', 'egg', 'onion'] } ]

let favorites =
JSON.parse(localStorage.getItem('favorites')) || []

let input = document.querySelector('.ingredients-input')
let btn = document.querySelector('.generate-btn')
let result = document.querySelector('.recipes')

btn.addEventListener('click', function(){

    let text = input.value.toLowerCase()

    if(text.trim() === ''){
        return alert('Please enter ingredients')
    }

    let userItems = text.split(',').map(item => item.trim())

    let matchedRecipes = recipes.filter(recipe => {
        return recipe.ingredients.every(ingredient =>
            userItems.includes(ingredient)
        )
    })

    if(matchedRecipes.length > 0){

        result.innerHTML = matchedRecipes.map(recipe => `
            <div class="card">
                <h3>${recipe.name}</h3>
                <button onclick="saveRecipe('${recipe.name}')">
                    ❤️ Save
                </button>
            </div>
        `).join('')

    } else {
        result.innerHTML = 'No matching recipes found'
    }

})

function saveRecipe(name){

    if(!favorites.includes(name)){
        favorites.push(name)

        localStorage.setItem(
            'favorites',
            JSON.stringify(favorites)
        )
    }

}