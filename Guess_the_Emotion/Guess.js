let questions = [
    { text: "I got my dream job", emotion: "happy" },
    { text: "I lost my wallet", emotion: "sad" },
    { text: "Someone yelled at me", emotion: "angry" },
    { text: "I heard a strange noise at night", emotion: "fear" }
]
let currentquestion = null
let score = 0 
let answered = false


let happy = document.querySelector('.happy')
let sad = document.querySelector('.sad')
let angry = document.querySelector('.angry')
let fear = document.querySelector('.fear')
let sentence = document.querySelector('.sentence')
let score1 = document.querySelector('.score')
let next = document.querySelector('.next')


function showQuestion() {
    let index = Math.floor(Math.random() * questions.length) 
    currentquestion = questions[index]
    sentence.textContent = currentquestion.text

    answered = false

    let buttons = [happy, sad, angry, fear]
    buttons.forEach(btn => {
        btn.style.background = ''
    })
}

function checkAnswer(selected) {
    if (answered) return 
    answered = true 
    if (selected == currentquestion.emotion){
        score ++
    }
    
    score1.textContent = `Score: ${score}`
    
    highlightAnswer(selected)
}

happy.addEventListener('click', () => checkAnswer('happy'))
sad.addEventListener('click', () => checkAnswer('sad'))
angry.addEventListener('click', () => checkAnswer('angry'))
fear.addEventListener('click', () => checkAnswer('fear'))


next.addEventListener('click', () => showQuestion())

function highlightAnswer(selected){
    let buttons = [happy, sad, angry, fear]
    
        buttons.forEach(btn => {
            let emotion = btn.className

            if (emotion === currentquestion.emotion){
                btn.style.background = 'green'
            }
            else if (emotion ===  selected){
                btn.style.background = 'red'
            }
        })
    
}


showQuestion()