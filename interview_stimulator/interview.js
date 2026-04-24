let questions = {
    hr: [
        "tell me about ur self",
        "why should i hire u"
    ],
    javascript: [
        "wht is this key word",
        "wht is js "
    ],
    frontend: [
        "wht is html",
        "wht is css"
    ],
    behavioral: [
        "tell me about ur routine",
        "how to greet someone whn u see them"
    ]
}

let category = document.querySelector('.category')
let questionDiv = document.querySelector('.question')
let nextBtn = document.querySelector('.next-btn')
let answerInput = document.querySelector('.answer-input')
let submitBtn = document.querySelector('.submit-btn')
let feedback = document.querySelector('.feedback')


function showQuestion(){
    let selected = category.value
    let list = questions[selected]
    let index = Math.floor(Math.random() * list.length)

    questionDiv.textContent = list[index]


}
    category.addEventListener('change', showQuestion)
    nextBtn.addEventListener('click', showQuestion)
    submitBtn.addEventListener('click', function(){
        let text = answerInput.value.toLowerCase()
        if (text.trim() === '')
            return alert ('Enter answer')

        let score = 0
        let tips = []

        if (text.length > 20){
            score += 30
        } else {
            tips.push('Give a more detailed answer')
        }
        if (
   text.includes('built') ||
   text.includes('managed') ||
   text.includes('created') ||
   text.includes('led') ||
   text.includes('improved')
){
   score += 30
} else {
   tips.push('Use stronger action words')
}
if (
   text.includes('i can') ||
   text.includes('i will') ||
   text.includes('i have')
){
   score += 20
} else {
   tips.push('Show more confidence')
}
if (
   text.includes('for example') ||
   text.includes('for instance')
){
   score += 20
} else {
   tips.push('Add examples to support your answer')
}
feedback.innerHTML = `
<h3>Score: ${score}/100</h3>
<p>${tips.join('<br>')}</p>
`
    })
showQuestion()