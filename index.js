let ball = document.querySelector('.ball8')
let ask = document.getElementById('ask')
let answer = document.querySelector('.answer')
let array = Array = ['It is certain', 'It is decidedly so', 'Without a doubt', 'Yes definitely', 'You may rely on it', 'As I see it, yes', 'Most likely', 'Yes', 'Reply hazy, try again'
                     ,'Ask again later','Better not tell you now','Cannot predict now','Concentrate and ask again','Don’t count on it','My reply is no','My sources say no','Very doubtful','Outlook not so good']
let input = document.getElementById('question')
let isBool = false

window.onload = ()=>{
    document.getElementById('span').style.opacity='0'  
    answer.innerHTML = '8'
    answer.style.fontSize= '80px'

    const music = new Audio('music.mp3');
    music.play();
    music.muted = false
    music.autoplay = true
    music.loop =true;
    music.volume = 0.02

}

function getRandomInt(max){
    return Math.floor(Math.random()*max)
}


ask.onclick = ()=>{
    if(input.value === ''){
        document.getElementById('span').style.opacity='1'
    }

    if(input.value != ''){
        document.getElementById('span').style.opacity='0' 
        answer.classList.add('animation')
        ball.classList.add('shake')
        var index = getRandomInt(17) 
        answer.innerHTML = '8'
        answer.style.fontSize= '80px'
        input.value = ""

        setTimeout(()=>{
            ball.classList.remove('shake')
            answer.style.fontSize= '19px'
            if (window.matchMedia("(max-width: 700px)").matches) {
                answer.style.fontSize= '11px'
              }
            answer.innerHTML = array[index]
        },3000)

    }
      
}







// ask.onclick = ()=>{  
//     answer.classList.toggle('animation')
//     var index = getRandomInt(17) 
//     answer.innerHTML = array[index]
    
// }