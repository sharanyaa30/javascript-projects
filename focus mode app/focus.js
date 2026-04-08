let timeLeft = 25 * 60
let timer = null
let isRunning = false
let storedTasks = localStorage.getItem('tasks')
let tasks = storedTasks ? JSON.parse(storedTasks) : []
let display = document.querySelector('.timer')
let startBtn = document.querySelector('.start')
let resetBtn = document.querySelector('.reset')
let stopBtn = document.querySelector('.stop')
stopBtn.disabled = true
let storedSessions = localStorage.getItem('sessions')
let sessions = storedSessions ? Number(JSON.parse(storedSessions)) : 0
let input = document.querySelector('.task')
let addTaskBtn = document.querySelector('.add')
let taskList = document.querySelector('.task-list')


let sessionDisplay = document.querySelector('.sessions')

function updateSessions() {
    sessions = Number(sessions)
    sessionDisplay.textContent = sessions
    localStorage.setItem('sessions', JSON.stringify(sessions))
}
addTaskBtn.addEventListener('click', function() {
    let task = input.value  
    if (task.trim() === '') {
        return alert('Please enter a task')
    }
    tasks.push({
        text: task,
        completed: false
    })
    input.value = ''
    renderTasks()
    
}
    )

function renderTasks() {
    taskList.innerHTML = '' 
    tasks.forEach((task, index) => {
        let div = document.createElement('div')
        div.className = 'task-item'
        let span = document.createElement('span')
        span.textContent = task.text
        
        
        let completeBtn = document.createElement('button')
        completeBtn.textContent = task.completed ? 'Undo' : 'Complete'
            completeBtn.addEventListener('click', function() {
                task.completed = !task.completed
                renderTasks()
            })
        div.appendChild(span)
        div.appendChild(completeBtn)
        taskList.appendChild(div)
        if (task.completed){
        span.style.textDecoration = 'line-through'
    }
    })
    localStorage.setItem('tasks', JSON.stringify(tasks))
    
}

renderTasks()


function updateDisplay() {
    let minutes = Math.floor(timeLeft / 60)
    let seconds = timeLeft % 60
    display.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
}

startBtn.addEventListener('click', function() {
    startBtn.disabled = true
    if (isRunning) return
    isRunning = true
    
    stopBtn.disabled = false
    timer = setInterval(function() {
        
       
        if (timeLeft === 0) {
            clearInterval(timer)
            isRunning = false

            sessions++    
                      
            updateSessions()
            setTimeout(function() {
                alert('session complete! Take a break.')
            }, 100)

            timeLeft = 25 * 60
            updateDisplay()
            startBtn.disabled = false
            stopBtn.disabled = true
            return
        }
        timeLeft--
        updateDisplay()
    }, 1000)
})

stopBtn.addEventListener('click', function() {
    stopBtn.disabled = true
        startBtn.disabled = false
    clearInterval(timer)
    isRunning = false
}
)

resetBtn.addEventListener('click', function() {
    startBtn.disabled = false
    stopBtn.disabled = true

    clearInterval(timer)
    timeLeft = 25 * 60
    updateDisplay()
    isRunning = false
})
updateDisplay()
updateSessions()

let clearbtn = document.querySelector('.clear')
clearbtn.addEventListener('click', function() {
    tasks = tasks.filter(task => !task.completed)
    renderTasks()
})
