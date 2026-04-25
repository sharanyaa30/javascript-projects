let destination = document.querySelector('.destination')
let btn = document.querySelector('.generate-btn')
let result = document.querySelector('.packing-list')
let days = document.querySelector('.days')
let weather = document.querySelector('.weather')

btn.addEventListener('click', function(){
    
    let place = destination.value.toLowerCase()
    let numDays = parseInt(days.value)
    let weatherCondition = weather.value.toLowerCase()
    if(place.trim() === '' || isNaN(numDays) || weatherCondition.trim() === ''){
        return alert('Please fill in all fields')
    }
    let packingList = generatePackingList(place, numDays, weatherCondition)
    renderPackingList(packingList)

})

function generatePackingList(place, numDays, weatherCondition){
    let list = ['clothing', 'toiletries', 'medications', 'travel documents']
    if (place === 'beach') {
        list.push('swimsuit', 'sunscreen', 'beach towel')
    }
    if (place === 'mountains') {
        list.push('hiking boots', 'warm jacket', 'backpack')
    }
    if (weatherCondition === 'rainy') {
        list.push('umbrella', 'raincoat', 'waterproof shoes')
    }
    if (weatherCondition === 'cold') {
        list.push('thermal wear', 'gloves', 'woolen hat')
    }
    if (weatherCondition === 'hot') {
        list.push('light clothing', 'hat', 'sunglasses')
    }
    if(place === 'city'){
        list.push('comfortable walking shoes', 'city map', 'reusable water bottle')
    }
    if (place === 'countryside') {
        list.push('hiking boots', 'binoculars', 'insect repellent')
    }
    if (place === 'island') {
        list.push('swimsuit', 'snorkeling gear', 'light clothing')
    }
    if (place === 'desert') {
        list.push('light clothing', 'hat', 'sunscreen')
    }
    if (place === 'ski resort') {
        list.push('ski jacket', 'snow pants', 'thermal wear')
    }
    if (place === 'tropical') {
        list.push('light clothing', 'hat', 'sunscreen')
    }
    if (place === 'cultural') {
        list.push('comfortable walking shoes', 'city map', 'reusable water bottle')
    }
    if (place === 'adventure') {
        list.push('hiking boots', 'backpack', 'waterproof shoes')
    }
    if (place === 'relaxation') {
        list.push('comfortable clothing', 'book', 'reusable water bottle')
    }
    if (place === 'road trip') {
        list.push('snacks', 'road map', 'reusable water bottle')
    }
    if (place === 'cruise') {
        list.push('swimsuit', 'formal wear', 'comfortable shoes')
    }
    if (numDays > 7) {
        list.push('extra clothing', 'additional toiletries', 'entertainment for long trips')
    }
    if (numDays < 3) {
        list.push('essential clothes', 'basic toiletries', 'light entertainment')
    }
    return list

}





function renderPackingList(list){
    result.innerHTML = list.map(item => `<li>${item}</li>`).join('')
}


