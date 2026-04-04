let stored = localStorage.getItem('expenses')
let expenses = stored ? JSON.parse(stored) : []

let nameInput = document.querySelector('#name')
let amountInput = document.querySelector('#amount')
let button = document.querySelector('button')
let list = document.querySelector('.list')
let totalDiv = document.querySelector('.total')

localStorage.setItem('expenses', JSON.stringify(expenses))
// 🔥 render function (CORE)
function render() {
    list.innerHTML = ""

    let total = 0

    expenses.forEach((expense, index) => {
        total += expense.amount

        let li = document.createElement('li')

        let span = document.createElement('span')
        span.textContent = `${expense.text} - ₹${expense.amount}`

        let del = document.createElement('button')
        del.textContent = '❌'

        del.addEventListener('click', function() {
            expenses.splice(index, 1)
            localStorage.setItem('expenses', JSON.stringify(expenses))
            render()
        })

        li.appendChild(span)
        li.appendChild(del)
        list.appendChild(li)
    })

    totalDiv.textContent = `Total: ₹${total}`
}

// 🔥 button click
button.addEventListener('click', function() {
    let text = nameInput.value
    let amount = amountInput.value

    if (text.trim() === '' || amount.trim() === '' || isNaN(amount)) {
        return alert('Enter valid data')
    }

    expenses.push({
        text: text,
        amount: Number(amount)
    })

    nameInput.value = ''
    amountInput.value = ''

    localStorage.setItem('expenses', JSON.stringify(expenses))
    render()
})