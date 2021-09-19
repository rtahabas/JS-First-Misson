let userName = prompt('Adınız Nedir')

let userInfo = document.querySelector('#userinfo')

userInfo.innerHTML = `${userName}`


let clock = document.querySelector('#clock1')


function myTimer() {
    let getDate = new Date();
    let localDate = getDate.toLocaleTimeString();
    clock.innerHTML = localDate;
}

let clock1 = setInterval(myTimer, 1000)



var days = new Date()

var weekday = new Array(7)

weekday[0] = "Pazar "
weekday[1] = "Pazartesi "
weekday[2] = "Salı "
weekday[3] = "Çarşamba "
weekday[4] = "Perşembe "
weekday[5] = "Cuma "
weekday[6] = "Cumartesi "

var trdays = weekday[days.getDay()];

let day1 = document.querySelector('#Day')

day1.innerHTML = `${trdays}`