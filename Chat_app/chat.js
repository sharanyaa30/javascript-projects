let messages = []

let chat = document.querySelector('.chat')
let input = document.querySelector('.input')
let send = document.querySelector('.send')


send.addEventListener('click', function(){
    let text = input.value

    if (text.trim() === ''){
        return alert('type message')
    }
    messages.push({
        text: text,
        sender: 'user'
    })
    setTimeout(() => {
        messages.push()
        messages.push({
        text: getBotReply(text),
        sender: 'bot'
    })
    render()
    }, 1000)
    input.value = ''
    render()
})

function render(){
    
    chat.innerHTML = ''

    messages.forEach(msg => {
        let div = document.createElement('div')
        div.textContent = msg.text

        div.classList.add('message')

        if (msg.sender === 'user'){
            div.classList.add('user')
        } else {
            div.classList.add('bot')
        }
        chat.appendChild(div)

        

    })
    chat.scrollTop = chat.scrollHeight

}

function getBotReply(userText){
    let text = userText.toLowerCase()

    if(text.includes('hello') || text.includes('hi')){
        return "Hey!"
    }
    else if (text.includes('how are you')){
        return "I'm doing great! How about you?"
    }
    else if (text.includes('bye')){
        return "Goodbye!"
    }
    else {
        return "I didnt understand that"
    }
}