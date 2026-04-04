let input = document.querySelector('input')
let button = document.querySelector('button')
let results = document.querySelector('.results')

button.addEventListener('click', function(){
    let movie = input.value
    
    let url = `https://www.omdbapi.com/?s=${movie}&apikey=thewdb`
    
    fetch(url)
        .then(response => response.json())
        .then(data => {

        if (data.Response === "False") {
        results.innerHTML = "No movies found ❌"
        return
        }
            console.log(data.Search);
        results.innerHTML = "Loading..."

        data.Search.forEach(movie => {
        console.log(movie)

        let div = document.createElement('div')
        div.classList.add('movie')

        let img = document.createElement('img')
        img.src = movie.Poster !== "N/A" 
    ? movie.Poster 
    : "https://via.placeholder.com/150"

        let title = document.createElement('h2')
        title.textContent = movie.Title

        let year = document.createElement('p')
        year.textContent = `Year: ${movie.Year}`

        this.appendChild(img)
        this.appendChild(title)
        this.appendChild(year)

        results.appendChild(div)
        })

    
})
        
})