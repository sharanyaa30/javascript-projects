let music = {
happy: ['Happy - Pharrell', 'Best Day Ever'],
sad: ['Someone Like You', 'Fix You'],
focus: ['Lofi Beats', 'Deep Focus'],
chill: ['Sunset Vibes', 'Night Drive']
}
let favorites = JSON.parse(localStorage.getItem('favorites')) || []

let results = document.querySelector('.results')
let happybtn = document.querySelector('.happy')
let sadbtn = document.querySelector('.sad')
let focusbtn = document.querySelector('.focus')
let chillbtn = document.querySelector('.chill')


happybtn.addEventListener('click', function(){
    show('happy')
    document.body.style.background = 'yellow'
})

sadbtn.addEventListener('click', function(){
    show('sad')
    document.body.style.background = 'blue'
})
focusbtn.addEventListener('click', function(){
    show('focus')
    document.body.style.background = 'purple'
})
chillbtn.addEventListener('click', function(){ 
    show('chill')
    document.body.style.background = 'green'
})

function show(mood){
    results.innerHTML = ''
    music[mood].forEach(song => {

        let card = document.createElement('div')
        card.className = 'song-card'
        let text = document.createElement('span')
        text.textContent = song

        let favbtn = document.createElement('button')
        favbtn.textContent = 'fav'
        favbtn.addEventListener('click', function(){
            
             if (!favorites.includes(song)) {
        favorites.push(song)
        localStorage.setItem('favorites', JSON.stringify(favorites))
        renderFavorites()
    }
        })
                card.appendChild(text)
        card.appendChild(favbtn)
        results.appendChild(card)
    })
}
let favDiv = document.querySelector('.favorites')

function renderFavorites(){

    favDiv.innerHTML = '<h3>Favorites</h3>'

    favorites.forEach(song => {
        let p = document.createElement('p')
        p.textContent = song
        favDiv.appendChild(p)
    })
}
renderFavorites()