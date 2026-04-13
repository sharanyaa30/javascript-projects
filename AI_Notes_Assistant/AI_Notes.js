let stored = localStorage.getItem('notes')
let notes = stored ? JSON.parse(stored) : []




let note = document.querySelector('.note-input')
let submit = document.querySelector('.submit')
let list = document.querySelector('.notes-list')
let search = document.querySelector('.search')

search.addEventListener('input', function(){
    render()
})
submit.addEventListener('click', function(){
    let text = note.value
    if (text.trim() === ""){
        return alert('enter notes')
    }
    
    notes.push({
        full: text,
        summary: summary(text),
        expanded: false
    })
    note.value = ''
    render()

    
})

function render(){
    list.innerHTML= ''
    let searchText = search.value.toLowerCase()
    notes.forEach((note, index) => {
        if (!note.full.toLowerCase().includes(searchText)){
            return
        }
    
    
        let notediv = document.createElement('div')
        notediv.textContent = note.expanded ? note.full : note.summary
        

        
        let delbtn = document.createElement('button')
        delbtn.textContent = 'Delete'
        
        delbtn.addEventListener('click',function(e){
            e.stopPropagation()
            notes.splice(index, 1)
            render()
        })
        notediv.addEventListener('click', function(){
            note.expanded = !note.expanded
            render()
        })
        notediv.appendChild(delbtn)
        list.appendChild(notediv)
        
    });

    localStorage.setItem('notes', JSON.stringify(notes))

    

}

function summary(text){
    let words = text.split(' ')
    let short = words.slice(0, 5)
    return short.join(' ')
}