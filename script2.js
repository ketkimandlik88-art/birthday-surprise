Function openSurprise() {
    window.location.href = "loading.html";
}
const typing = document.getElementById("typing");

if(typing){

let message="Today is your day... 💛";

let i=0;

function type(){

if(i<message.length){

typing.innerHTML+=message.charAt(i);

i++;

setTimeout(type,80);

}

}

type();

}
function openLetter(){
    window.location.href="letter.html";
}

function showLetter(){

    document.getElementById("letter").style.display="block";

}
function showLetter(){

    document.getElementById("letter").style.display="block";

    document.getElementById("envelope").innerHTML="📭";

}
function nextPage(){
    window.location.href="memories.html";
}
function showGift() {

}
function showGift(){
    alert("🎉 Surprise abhi baaki hai mere dost❤️");
}
function showGift() {
document.getElementById("giftContent").style.display = "block";
let btn = document.getElementById("giftBtn");

btn.classList.add("shake");
document.querySelector("button").style.display = "none";
let text = "Happy Birthday Bajarbattu ❤️";

let i = 0;

function typeFinal() {

    if (i < text.length) {

        document.getElementById("finalMessage").innerHTML += text.charAt(i);

        i++;

        setTimeout(typeFinal, 80);

    }

}

typeFinal();
}
const welcomeText = document.getElementById("welcomeText");

if(welcomeText){

let text = "I'm so happy you're here... 🤍";

let j = 0;

function welcomeType(){

    if(j < text.length){

        welcomeText.innerHTML += text.charAt(j);

        j++;

        setTimeout(welcomeType,70);

    }

}

welcomeType();

}
function lastSurprise(){

    document.getElementById("finalMessage").innerHTML =
    "✨ Thank you for opening this little surprise... ❤️";
    document.getElementById("ending").style.display = "block";

let ending =
"Thank you for opening this surprise ❤️";

document.getElementById("endingText").innerHTML = ending;
document.getElementById("finalImages").style.display="flex";
}
function playMusic(){

    document.getElementById("birthdaySong").play();

}
function scrollDown(){
    window.scrollTo({
        top: document.body.scrollHeight,
        behavior: "smooth"
    });
}
let music = document.getElementById("bgMusic");
let btn = document.getElementById("musicBtn");

function toggleMusic(){
    if(music.paused){
        music.play();
        btn.innerHTML="⏸️";
    }
    else{
        music.pause();
        btn.innerHTML="🎵";
    }
}
function checkPassword(){

let pass = document.getElementById("password").value;

if(pass === "yash123"){
    document.getElementById("lockScreen").style.display="none";
    document.getElementById("mainContent").style.display="block";
}
else{
    document.getElementById("error").innerHTML="Wrong Password 😅";
}

}

const cake = document.querySelector(".cake");

if(cake){
    cake.classList.add("blow");
}
setTimeout(() => {
    document.querySelector(".cake").classList.add("cut");
}, 6000);
const countdown = document.getElementById("countdown");
const cakeArea = document.getElementById("cake-area");

if(countdown && cakeArea){

    cakeArea.style.display="none";

let time = 10;

cakeArea.style.display = "none";

const timer = setInterval(() => {

    countdown.innerText = time;

    if (time === 0) {
        clearInterval(timer);

        countdown.style.display = "none";
        cakeArea.style.display = "block";
        setTimeout(() => {

    const wish = document.getElementById("wishText");
    wish.innerHTML = "✨ Make a Wish... ✨";
    wish.classList.add("show");

}, 800);
setTimeout(()=>{

document.getElementById("magicOverlay").classList.add("show");
document.getElementById("sparkles").classList.add("show");

},1200);
setTimeout(() => {

    document.getElementById("wishText").classList.remove("show");

}, 3000);
setTimeout(() => {
    typeMagicLine();
}, 3000);
setTimeout(()=>{

document.getElementById("magicOverlay").classList.remove("show");
document.getElementById("sparkles").classList.remove("show");

},3200);
        setTimeout(()=>{

document.querySelectorAll(".flame").forEach(flame=>{
    flame.classList.add("blowing");
});

},1000);


setTimeout(()=>{

document.querySelectorAll(".flame").forEach(flame=>{
    flame.classList.remove("blowing");
    flame.classList.add("off");
});
setTimeout(()=>{

    document.querySelector(".cake").classList.add("cake-cut");

},1500);
},4000);
    }
    const cake = document.querySelector(".cake");

if(cake){
    cake.classList.add("cake-pop");
}
if(time<=3 && time>0){

    countdown.classList.add("big-count");
    document.body.classList.add("shake-screen");

    setTimeout(()=>{
        countdown.classList.remove("big-count");
        document.body.classList.remove("shake-screen");
    },300);

}
    time--;

}, 1000);
setTimeout(() => {

    const wish=document.getElementById("wishText");
    wish.innerHTML="✨ Make a Wish... ✨";
    wish.classList.add("show");

},2000);
function typeMagicLine(){
document.getElementById("magicLine").classList.add("show");
    const text = "A wish made from the heart always finds its way... ✨💫";
    const line = document.getElementById("magicLine");

    line.innerHTML = "";
    line.classList.add("show");

    let i = 0;

    function typing(){

        if(i < text.length){
            line.innerHTML += text.charAt(i);
            i++;
            setTimeout(typing, 50);
        }

    }

    typing();

}