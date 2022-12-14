document.querySelector("form").addEventListener('submit', addMovie)
const message = document.querySelector("#message")



function addMovie (event){
    event.preventDefault()
    const inputField = document.querySelector("input")
    const movie = document.createElement('li')
    const movieTitle = document.createElement('span')
    movieTitle.textContent = inputField.value
    movieTitle.addEventListener('click', crossOffMovie)
    movie.appendChild(movieTitle)

    const deleteBtn = document.createElement('button')
    deleteBtn.textContent = "X"
    deleteBtn.addEventListener('click', deleteMovie)
    movie.appendChild(deleteBtn)

    document.querySelector('ul').appendChild(movie)
    inputField.value = ''

    message.textContent = 'Movie Added'
    reavealMessage()
}


function deleteMovie(event){
    event.target.parentNode.remove()
    message.textContent = `${event.target.parentNode.firstChild.textContent} deleted!`
    
    reavealMessage()
}


function crossOffMovie(event){
    event.target.classList.toggle("checked")

    if(event.target.classList.contains('checked')){
        message.textContent = `${event.target.textContent} watched!`
    }else {
        message.textContent = `${event.target.textContent} added back!`
    }

    reavealMessage()
}



function reavealMessage(){
    message.classList.remove('hide')
    setTimeout(() => message.classList.add('hide'),1000)
}