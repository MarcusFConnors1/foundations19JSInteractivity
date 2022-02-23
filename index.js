console.log('hello world')
const form  = document.querySelector('form')
const message = document.querySelector('#message')
const addMovie = (eve) => {
    eve.preventDefault()
    let inputField = document.querySelector('input');
    const movie = document.createElement('li');
    const movieTitle = document.createElement('span');
    movieTitle.textContent = inputField.value;
    movieTitle.addEventListener('click', crossOffMovie)
    movie.appendChild(movieTitle);
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'X';
    deleteBtn.addEventListener('click', deleteMovie)
    movie.appendChild(deleteBtn);
    message.textContent = `${movieTitle.textContent} Added`
    const ulist = document.querySelector('ul')
    ulist.appendChild(movie);
    inputField.value = ''
}
const deleteMovie = (eve) => {
    eve.target.parentNode.remove()
    message.textContent = `${eve.target.parentNode.firstChild.textContent} Deleted`
}
const crossOffMovie = (eve) => {
    eve.target.classList.toggle('checked')
    if(eve.target.classList.contains('checked')) {
        message.textContent = `${eve.target.textContent} Watched`
    } else {
        message.textContent = `${eve.target.textContent} added back`
    }
    revealMessage()
}
const revealMessage = () => {
    message.classList.remove('hide')
    setTimeout(() =>{
       message.classList.add('hide') 
    }, 1000)
}
form.addEventListener('submit', addMovie)