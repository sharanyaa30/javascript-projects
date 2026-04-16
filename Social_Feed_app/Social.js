let posts = JSON.parse(localStorage.getItem('posts')) || []


let postinput = document.querySelector('.post')
let postbtn = document.querySelector('.btn-post')
let feed = document.querySelector('.feed')


postbtn.addEventListener('click', function(){
    let input = postinput.value
    if (input.trim() === ''){
        return alert('enter post')
    }
    posts.push({
        text: input,
        likes: 0,
        comments :[]
    })
    postinput.value = ''
    render()

})

function render(){
    feed.innerHTML = ""
    posts.forEach((post, index)=>{
        let div = document.createElement('div')
        div.style.background = 'white'
        div.style.padding = '10px'
        div.style.marginTop = '10px'
        div.style.border = '1px solid #ddd'
        div.style.borderRadius = '8px'
        

        let textDiv = document.createElement('p')
        textDiv.textContent = post.text
        let likebtn = document.createElement('button')
        likebtn.textContent = ` Like (${post.likes})`      


        let delbtn = document.createElement('button')
        delbtn.textContent = 'Delete'
        
        let commentinput = document.createElement('input')
        commentinput.placeholder = 'write comment...'

        let commentbtn = document.createElement('button')
        commentbtn.textContent = 'comment'



        likebtn.addEventListener('click', function(){
            post.likes++
            render()
        })

        delbtn.addEventListener('click', function(){
            posts.splice(index, 1)
            render()
        })


        commentbtn.addEventListener('click', function(){
            let text = commentinput.value
                if (text.trim() === ''){
                    return
                }

                post.comments.push(text)
                render()
            })

            div.appendChild(textDiv)
            div.appendChild(likebtn)
            div.appendChild(delbtn)
            div.appendChild(commentinput)
            div.appendChild(commentbtn)
            post.comments.forEach(comment => {
                
                let p = document.createElement('p')
                p.textContent = comment

                div.appendChild(p)
                

        
        })
        feed.appendChild(div)
    })
    localStorage.setItem('posts', JSON.stringify(posts))
}

render()