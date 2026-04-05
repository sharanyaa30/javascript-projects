let stored = localStorage.getItem('notes')
let notes = stored ? JSON.parse(stored) : []


let editingIndex = null

let textarea = document.querySelector('textarea')
let button = document.querySelector('button')
let container = document.querySelector('.notes')


button.addEventListener('click', function() {
    
    let text = textarea.value

    if (text.trim() === '') {
        return alert('Please enter a note')
    }
    if (editingIndex === null) {
    notes.push(text)
} else {
    notes[editingIndex] = text
}
    editingIndex = null
    textarea.value = ''
    button.textContent = 'Add Note'

    render()

    localStorage.setItem('notes', JSON.stringify(notes))

    

    })
    function render() {
        container.innerHTML = ''

        notes.forEach((note, index) => {
            let div = document.createElement('div')
            div.classList.add('note')

            let p = document.createElement('p')
            p.textContent = note

            let actions = document.createElement('div')
            
            let editBtn = document.createElement('button')
            editBtn.textContent = 'Edit'

            let deleteBtn = document.createElement('button')
            deleteBtn.textContent = 'Delete'

            deleteBtn.addEventListener('click', function() {
                notes.splice(index, 1)
localStorage.setItem('notes', JSON.stringify(notes))
render()
            })

            editBtn.addEventListener('click', function() {
                textarea.value = note
                editingIndex = index
                button.textContent = 'Update Note'
            })
            actions.appendChild(editBtn)
            actions.appendChild(deleteBtn)
            div.appendChild(p)
            div.appendChild(actions)
            container.appendChild(div)
        })
    }