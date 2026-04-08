let firstcard = null
let secondcard = null
let lockboard = false
let move = 0
let movesDIV = document.querySelector('.moves')
let restartBtn = document.querySelector('.restart')
restartBtn.addEventListener('click', restartGame)
function restartGame() {
    firstcard = null
    secondcard = null
    lockboard = false
    move = 0
    updateMoves()
    values.sort(() => Math.random() - 0.5)
    cards.forEach((card,index) => {
        card.dataset.value = values[index]
        card.textContent = '?'
        card.classList.remove('matched')
    })
}
function updateMoves() {
    movesDIV.textContent = `Moves: ${move}`
}
let cards = document.querySelectorAll('.card')
let values = ['A', 'A', 'B', 'B', 'C', 'C', 'D', 'D', 'E', 'E', 'F', 'F']

// Shuffle values
values.sort(() => Math.random() - 0.5)

cards.forEach((card,index) => {
    card.dataset.value = values[index]
    card.textContent = '?'
    card.addEventListener('click', function() {
        if (lockboard) return
        if (card === firstcard) return
        if (card.classList.contains('matched')) return

        card.textContent = card.dataset.value
        
        if (!firstcard) {
            firstcard = card
            return
        }

        secondcard = card
        move++
        updateMoves()
        checkmatch()

        
    })
})

function checkmatch() {
    if (firstcard.dataset.value === secondcard.dataset.value) {
        firstcard.classList.add('matched')
        secondcard.classList.add('matched')
        let matchedcards = document.querySelectorAll('.matched')
        if (matchedcards.length === cards.length) {
            setTimeout(() => {
                alert('You won! 🎉')
                
            }, 300)
        }
         resetboard()
    } else {
            lockboard = true
            setTimeout(() => {
                firstcard.textContent = '?'
                secondcard.textContent = '?'
                resetboard()
            }, 1000)
        }
    }


function resetboard() {
    [firstcard, secondcard, lockboard] = [null, null, false]
}
