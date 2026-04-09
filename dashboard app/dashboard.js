let input = document.querySelector('.search')
let cityDiv = document.querySelector('.city')
let tempDiv = document.querySelector('.temp')
let conditionDiv = document.querySelector('.condition')
let list = document.querySelector('.search-list')
let searches = JSON.parse(localStorage.getItem('searches')) || []
let searchBtn = document.querySelector('.search-btn')
let loadingDiv = document.querySelector('.loading')

searchBtn.addEventListener('click', function() {
    let city = input.value
    if (city.trim() === '') {
        return alert("Enter a city")
    }
    
    fetchWeather(city)
})

input.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {

        let city = input.value
        if (city.trim() === '') return alert("Enter a city")    
        fetchWeather(city)
    }
})


function fetchWeather(city) {
    input.value = ''
    loadingDiv.textContent = "Loading..."
    let url = `https://wttr.in/${city}?format=j1`
    fetch(url)
        .then(res => res.json())
        .then(data => {
            if (!data.current_condition) {
                throw new Error("Invalid city")
            }
            let temp = data.current_condition[0].temp_C
            let condition = data.current_condition[0].weatherDesc[0].value
            updateUI(city, temp, condition)
            saveSearch(city)

            loadingDiv.textContent = ""
        })
        .catch(err => {
            loadingDiv.textContent = "Error fetching data ❌"
        })
        
        

    }

function updateUI(city, temp, condition) {
    cityDiv.textContent = city.charAt(0).toUpperCase() + city.slice(1)
    tempDiv.textContent = `Temperature: ${temp}°C`
    conditionDiv.textContent = `Condition: ${condition}`
}

// function saveSearch(city) {
//     if (!searches.includes(city)) {
//         searches.push(city)
//         localStorage.setItem('searches', JSON.stringify(searches))
//         renderSearches()
//     }   
// }

function renderSearches() {
    list.innerHTML = ''
    searches.forEach(city => {
        let li = document.createElement('li')
        li.textContent = city

        li.addEventListener('click', function() {
            input.value = city
            fetchWeather(city)
        })
        list.appendChild(li)
    })
}

function saveSearch(city) {
    city = city.toLowerCase()
    if (!searches.includes(city)) {
        searches.push(city)
        localStorage.setItem('searches', JSON.stringify(searches))
        renderSearches()
    }
}
renderSearches()