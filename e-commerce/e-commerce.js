let stored = localStorage.getItem('cart')
let cart = stored ? JSON.parse(stored) : []

let buttons = document.querySelectorAll('.products button')
let cartDiv = document.querySelector('.cart')
let totalDiv = document.querySelector('.total')

// ADD TO CART
buttons.forEach(btn => {
    btn.addEventListener('click', function() {

        let name = btn.dataset.name
        let price = Number(btn.dataset.price)

        let existing = cart.find(item => item.name === name)

        if (existing) {
            existing.quantity++
        } else {
            cart.push({
                name: name,
                price: price,
                quantity: 1
            })
        }

        renderCart()
    })
})

// RENDER CART
function renderCart() {
    cartDiv.innerHTML = ''
    let total = 0

    cart.forEach((item, index) => {
        total += item.price * item.quantity

        let div = document.createElement('div')


        let text = document.createElement('span')
        text.textContent = `${item.name} x${item.quantity} - ₹${item.price * item.quantity}`
        // let text = document.createElement('span')
        // text.textContent = `${item.name} x${item.quantity} - ₹${item.price * item.quantity}`

        // cartDiv.innerHTML += `
        //     <div>
        //         ${item.name} x${item.quantity} - ₹${item.price * item.quantity}
        //     </div>
        // `


        let plus = document.createElement('button')
        plus.textContent = '+'
        let minus = document.createElement('button')
        minus.textContent = '-'
        let remove = document.createElement('button')
        remove.textContent = 'Remove'
        
        
        
        plus.addEventListener('click', function() {
            item.quantity++
            renderCart()
            
        })
        minus.addEventListener('click', function() {
            if (item.quantity > 1) {
                item.quantity--
            } else {
                cart.splice(index, 1)
            }
            renderCart()
            
        })
        remove.addEventListener('click', function() {
            cart.splice(index, 1)
            renderCart()
            
        })
        cartDiv.appendChild(text)
        cartDiv.appendChild(plus)
        cartDiv.appendChild(minus)
        cartDiv.appendChild(remove)

        cartDiv.appendChild(div)


    })

    totalDiv.textContent = `Total: ₹${total}`

    localStorage.setItem('cart', JSON.stringify(cart))
}

renderCart()