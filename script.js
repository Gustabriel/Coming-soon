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
let btn_signup = document.querySelector(".btn-signup");
let btn_close = document.querySelector(".btn--close-modal");
let btn_close_confirm = document.querySelector(".btn--close-modal-confirm");
let btn_confirm_sub = document.querySelector(".btn-sub");


//Inscrição
btn_signup.addEventListener("click", () => {
    document.querySelector(".modal").style.display = "block";
    document.querySelector(".content-modal").style.display = "block";
    document.querySelector("#name").focus();
});


//fechar form de inscrição
btn_close.addEventListener("click", () => {
    document.querySelector(".modal").style.display = "none";
    
});


//aviso de inscrição confirmada
btn_confirm_sub.addEventListener("click", () => {

    let name = document.querySelector("#name");
    let cel = document.querySelector("#cel");
    let email = document.querySelector("#email");
    let error = document.querySelector(".error");
    let checkbox = document.querySelector('#terms');

    if (name.value == "" || cel.value == "" || email.value == "" || email.value == "" || email.value.indexOf("@") == false) {
        error.innerHTML = "Há campo(s) invalido(s), verifique os campos acima e tente novamente.";
    } else if (checkbox.checked != true) {
        error.innerHTML = "É preciso aceitar os termos de uso."
    } else {
    document.querySelector(".content-modal").style.display = "none";
    document.querySelector(".modal-confirm").style.display = "block";
    } 
});


//fechar tudo
    btn_close_confirm.addEventListener("click", () => {
    document.querySelector(".modal-confirm").style.display = "none";
    document.querySelector(".modal").style.display = "none";
    document.querySelector(".signup").innerHTML = `<p class="tky">Obrigado por se inscrever ${document.querySelector("#name").value}, 5 minutos antes do lançamento você será notificado via email &#x1F605 &#x1F680`;
});


/* AUTENTICAÇÕES INSCRIÇÃO */
function mascara(cel){ 
    if(cel.value.length == 0)
        cel.value = '(' + cel.value; 
    if(cel.value.length == 3)
        cel.value = cel.value + ') '; 
    if(cel.value.length == 10)
        cel.value = cel.value + '-';
}

