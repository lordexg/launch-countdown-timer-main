let seconds = document.querySelector('.seconds .num p')
let minutes = document.querySelector('.minutes .num p')
let hours = document.querySelector('.hours .num p')
let days = document.querySelector('.days .num p')
let time = document.querySelectorAll(".container .num p")

let then = new Date("2 23 2023 23:59:59").getTime()

let counter = setInterval(() =>{
    let now = new Date().getTime()
    let deff = then - now;

    let Tdays = Math.floor(deff / (1000*60*60*24))
    let Thours = Math.floor(deff % (1000*60*60*24) / (1000*60*60))
    let Tminutes = Math.floor(deff % (1000*60*60)  / (1000* 60))
    let Tseconds = Math.floor(deff % (1000*60)  / (1000))

    days.innerHTML = Tdays < 10? `0${Tdays}`:Tdays;
    hours.innerHTML = Thours < 10? `0${Thours}`:Thours;
    minutes.innerHTML = Tminutes < 10? `0${Tminutes}`:Tminutes;
    seconds.innerHTML = Tseconds < 10? `0${Tseconds}`:Tseconds;
    
    if(deff < 0){
        clearInterval(counter)
    }

}, 1000)