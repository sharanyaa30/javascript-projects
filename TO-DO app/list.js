let input = document.querySelector('input')
let button = document.querySelector('button')
let ul = document.querySelector('ul')

// Load tasks
let storedTasks = localStorage.getItem('tasks')
let tasks = storedTasks ? JSON.parse(storedTasks) : []

// Function to create task
function createTaskElement(task) {
    let li = document.createElement('li')
    let deleteButton = document.createElement('button')

    deleteButton.textContent = 'Delete'

    // ✅ Show task text
    let span = document.createElement('span')
    span.textContent = task.text

    li.appendChild(span)
    li.appendChild(deleteButton)
    ul.appendChild(li)

    // ✅ Apply completed state
    if (task.completed) {
        li.classList.add('complete')
    }

    // Delete
    deleteButton.addEventListener('click', function(event) {
        event.stopPropagation()
        li.remove()

        tasks = tasks.filter(t => t !== task)
        localStorage.setItem('tasks', JSON.stringify(tasks))
    })

    // Complete toggle
    li.addEventListener('click', function() {
        li.classList.toggle('complete')
        task.completed = !task.completed
        localStorage.setItem('tasks', JSON.stringify(tasks))
    })
}

// Show stored tasks
tasks.forEach(function(task) {
    createTaskElement(task)
})

// Add new task
button.addEventListener('click', function() {
    let text = input.value

    if (text.trim() === '') {
        return alert('Please enter a value')
    }

    let newTask = {
        text: text,
        completed: false
    }

    tasks.push(newTask)
    localStorage.setItem('tasks', JSON.stringify(tasks))

    createTaskElement(newTask)

    input.value = ''
})