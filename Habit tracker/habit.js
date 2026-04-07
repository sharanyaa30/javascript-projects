let stored = localStorage.getItem('habits')
let habits = stored ? JSON.parse(stored) : []

let input = document.querySelector('.habit-input')
let button = document.querySelector('.add-habit-btn')
let list = document.querySelector('.habits-list')

button.addEventListener('click', function() {
    let habit = input.value

    if (habit.trim() === '') {
        return alert('Please enter a habit')
    }
    habits.push({
        name: habit,
        streak: 0,
        lastcompleted: null
    })
    input.value = ''
    render()
})

function render() {
    list.innerHTML = ''
    habits.forEach(habit => {
        let div = document.createElement('div')
        div.className = 'habit-item'
        div.textContent = habit.name + ' - Streak: ' + habit.streak

        let completeBtn = document.createElement('button')
        completeBtn.textContent = 'Complete'    
        div.appendChild(completeBtn)
        completeBtn.addEventListener('click', function() {
            let today = new Date()
            let todaystr = today.toDateString()
            if (habit.lastcompleted === todaystr) {
                return alert('Already completed today')
            }
            let yesterday = new Date()
            yesterday.setDate(yesterday.getDate() - 1)
            let yesterdaystr = yesterday.toDateString()
            if (habit.lastcompleted === yesterdaystr) {
                habit.streak++
            } else{
                habit.streak = 1
            }
            habit.lastcompleted = todaystr
            render()
        })
        list.appendChild(div)
    })
    localStorage.setItem('habits', JSON.stringify(habits))
}       

render()