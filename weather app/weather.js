let input = document.querySelector('input')
let button = document.querySelector('button')
let result = document.querySelector('.result')

button.addEventListener('click', function() {
    let city = input.value

    if (city.trim() === '') {
        return alert("Enter a city")
    }

    let url = `https://wttr.in/${city}?format=j1`

    result.innerHTML = "Loading..."

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (!data.current_condition) {
                result.innerHTML = "Invalid city ❌"
                return
            }

            let temp = data.current_condition[0].temp_C
            let condition = data.current_condition[0].weatherDesc[0].value

            result.innerHTML = `
                <h2>${city}</h2>
                <p>Temperature: ${temp}°C</p>
                <p>Condition: ${condition}</p>
            `
        })
        .catch(error => {
            result.innerHTML = "Error fetching data ❌"
        })
})