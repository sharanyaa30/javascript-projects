let para = document.querySelector('.paragraph')
let paragraphText = "The quick brown fox jumps over the lazy dog."
para.innerHTML = ''

paragraphText.split('').forEach(char => {
    let span = document.createElement('span')
    span.textContent = char
    para.appendChild(span)
})

let input = document.querySelector('.input')
let timerDiv = document.querySelector('.timer')
let accuracyDiv = document.querySelector('.accuracy')
let wpmDiv = document.querySelector('.wpm')
let spans = para.querySelectorAll('span') 
let resetBtn = document.querySelector('.reset')

resetBtn.addEventListener('click', function() {
    let typedText = input.value
    if (typedText.length === paragraphText.length) return

    if (!isStarted) {
        isStarted = true
        startTimer()

    }

    let correct = 0
    for (let i = 0; i < typedText.length; i++) {
        if (typedText[i] === paragraphText[i]) {
            correct++
        }
    }
    let accuracy = 0
    if (typedText.length > 0) {
        accuracy = (correct / typedText.length) * 100
    }
    accuracyDiv.textContent = `Accuracy: ${accuracy.toFixed(2)}%`
    let timeElapsed = 60 - timeLeft
    let words = correct / 5
    let wpm = 0
    if (timeElapsed > 0) {
        wpm = (words / timeElapsed) * 60
    }
    wpmDiv.textContent = `WPM: ${wpm.toFixed(2)}`
    spans.forEach((span, index) => {
        let typedChar = typedText[index]
        if (typedChar == null) {
            span.style.color = ''
        }   
        else if (typedChar === span.textContent) {
            span.style.color = 'green'
        }
        else {
            span.style.color = 'red'
        }
    })

    
    })

function startTimer() {

    interval = setInterval(function() {
        timeLeft--
        timerDiv.textContent = timeLeft

        if (timeLeft <= 0){
            clearInterval(interval)
            input.disabled = true
        }
                          
        }, 1000)    
    }




