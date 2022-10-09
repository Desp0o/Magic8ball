let start = document.querySelector('.button')
let header =  document.getElementById('header')


window.onload = ()=>{
    header.innerHTML='Choose Your Question Carefully, Its Not A Joke!'
}

start.onclick = ()=>{
    window.location.href = './magic8ball.html'

}