let day = 2;
let hour = 23;
let min = 59;
let sec = 59;

day  = day  < 10 ? "0" + day  : day;
hour = hour < 10 ? "0" + hour : hour;
min  = min  < 10 ? "0" + min  : min;
sec  = sec  < 10 ? "0" + sec  : sec;

setInterval(attTime, 1000);

function attTime() {
    if(sec > 00) {
        sec--
        sec  = sec  < 10 ? "0" + sec  : sec;

    } else if (hour == 00) {
        day--
        hour = 23;
        day  = day  < 10 ? "0" + day  : day;
        hour = hour < 10 ? "0" + hour : hour; 
        
    } else if (min == 00) {
        hour--
        min = 60;
        min  = min  < 10 ? "0" + min  : min;
        hour = hour < 10 ? "0" + hour : hour;
   
    } else if (sec == 00) {
        min--
        sec = 59;
        sec  = sec  < 10 ? "0" + sec  : sec;
        min  = min  < 10 ? "0" + min  : min;
    } 

    let time = day + " : " + hour + " : " + min + " : " + sec;
    document.querySelector(".time").innerHTML = `<p class="time">${time}</p>`;
}

//---------------------//
//MODO DARK
let btn_dark = document.querySelector(".btn-dark");
let body = document.querySelector("body");
   
function dark_mode() {
    body.classList.toggle("bg-dark");
    document.querySelector("footer").classList.toggle("font-light");

    if(body.classList.contains("bg-dark")) {
        btn_dark.innerHTML = "Light-mode"
        btn_dark.classList.add("btn-light");
    } else {
        btn_dark.innerHTML = "Dark-mode"
        btn_dark.classList.remove("btn-light");
    }
}

btn_dark.addEventListener("click", dark_mode);

//---------------------//
//FORMULÁRIO DE INSCRIÇÃO