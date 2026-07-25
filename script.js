// =========================
// HOME PAGE
// =========================

function openSurprise() {
    window.location.href = "loading.html";
}

// =========================
// TYPING EFFECT
// =========================

const typing = document.getElementById("typing");

if (typing) {

    let message = "Today is your day... 💛";
    let i = 0;

    function type() {
        if (i < message.length) {
            typing.innerHTML += message.charAt(i);
            i++;
            setTimeout(type, 80);
        }
    }

    type();
}

// =========================
// LETTER PAGE
// =========================

function openLetter() {
    window.location.href = "letter.html";
}

function showLetter() {

    const letter = document.getElementById("letter");
    const envelope = document.getElementById("envelope");

    if(letter){
        letter.style.display = "block";
    }

    if(envelope){
        envelope.innerHTML = "📭";
    }

}

// =========================
// MEMORIES PAGE
// =========================

function nextPage() {
    window.location.href = "memories.html";
}

// =========================
// GIFT PAGE
// =========================

function showGift() {

    const gift = document.getElementById("giftContent");
    const button = document.getElementById("giftBtn");
    const finalMessage = document.getElementById("finalMessage");

    if(gift){
        gift.style.display = "block";
    }

    if(button){
        button.classList.add("shake");
        button.style.display = "none";
    }

    if(finalMessage){

        let text = "Happy Birthday Bajarbattu ❤️";
        let i = 0;

        finalMessage.innerHTML = "";

        function typingGift(){

            if(i < text.length){
                finalMessage.innerHTML += text.charAt(i);
                i++;
                setTimeout(typingGift,80);
            }

        }

        typingGift();

    }

}

// =========================
// WELCOME TEXT
// =========================

const welcomeText = document.getElementById("welcomeText");

if (welcomeText) {

    let text = "I'm so happy you're here... 🤍";
    let j = 0;

    function welcomeType() {

        if (j < text.length) {

            welcomeText.innerHTML += text.charAt(j);
            j++;
            setTimeout(welcomeType, 70);

        }

    }

    welcomeType();

}

// =========================
// FINAL SURPRISE
// =========================

function lastSurprise() {

    const final = document.getElementById("finalMessage");
    const ending = document.getElementById("ending");
    const endingText = document.getElementById("endingText");
    const images = document.getElementById("finalImages");

    if(final){
        final.innerHTML = "✨ Thank you for opening this little surprise... ❤️";
    }

    if(ending){
        ending.style.display = "block";
    }

    if(endingText){
        endingText.innerHTML = "Thank you for opening this surprise ❤️";
    }

    if(images){
        images.style.display = "flex";
    }

}
// =========================
// MUSIC
// =========================

let music = document.getElementById("bgMusic");
let btn = document.getElementById("musicBtn");

if (music) {

    const savedTime = localStorage.getItem("musicTime");

    if (savedTime) {
        music.currentTime = parseFloat(savedTime);
    }

    music.play().catch(() => {});

    setInterval(() => {
        localStorage.setItem("musicTime", music.currentTime);
    }, 1000);

}

function toggleMusic() {

    if (!music) return;

    if (music.paused) {
        music.play();
        if(btn) btn.innerHTML = "⏸️";
    } else {
        music.pause();
        if(btn) btn.innerHTML = "🎵";
    }

}

// =========================
// PASSWORD
// =========================

function checkPassword(){

    const pass = document.getElementById("password");
    const lock = document.getElementById("lockScreen");
    const main = document.getElementById("mainContent");
    const error = document.getElementById("error");

    if(!pass) return;

    if(pass.value === "yash123"){

        if(lock) lock.style.display="none";
        if(main) main.style.display="block";

    }else{

        if(error){
            error.innerHTML="❌ Wrong Password";
        }

    }

}

// =========================
// SCROLL
// =========================

function scrollDown(){

    window.scrollTo({
        top:document.body.scrollHeight,
        behavior:"smooth"
    });

}

// =========================
// PLAY MUSIC
// =========================

function playMusic(){

    const song=document.getElementById("birthdaySong");

    if(song){
        song.play();
    }

}
// =========================
// CELEBRATION PAGE
// =========================

const countdown = document.getElementById("countdown");
const cakeArea = document.getElementById("cake-area");

if (countdown && cakeArea) {

    let time = 10;

    cakeArea.style.display = "none";

    const timer = setInterval(() => {

        countdown.innerHTML = time;

        if (time <= 3 && time > 0) {

            countdown.classList.add("big-count");
            document.body.classList.add("shake-screen");

            setTimeout(() => {
                countdown.classList.remove("big-count");
                document.body.classList.remove("shake-screen");
            },300);

        }

        if (time === 0) {

            clearInterval(timer);

            countdown.style.display = "none";
            cakeArea.style.display = "block";

            const cake = document.querySelector(".cake");

            if(cake){
                cake.classList.add("cake-pop");
            }

            setTimeout(() => {

                const wish = document.getElementById("wishText");

                if(wish){
                    wish.innerHTML="✨ Make a Wish... ✨";
                    wish.classList.add("show");
                }

            },800);

            setTimeout(() => {

                const overlay=document.getElementById("magicOverlay");
                const sparkles=document.getElementById("sparkles");

                if(overlay) overlay.classList.add("show");
                if(sparkles) sparkles.classList.add("show");

            },1200);

            setTimeout(() => {

                const wish=document.getElementById("wishText");

                if(wish){
                    wish.classList.remove("show");
                }

                typeMagicLine();

            },3000);

            setTimeout(() => {

                const overlay=document.getElementById("magicOverlay");
                const sparkles=document.getElementById("sparkles");

                if(overlay) overlay.classList.remove("show");
                if(sparkles) sparkles.classList.remove("show");

            },4200);

            setTimeout(() => {

                document.querySelectorAll(".flame").forEach(flame=>{
                    flame.classList.add("blowing");
                });

            },1000);

            setTimeout(() => {

                document.querySelectorAll(".flame").forEach(flame=>{
                    flame.classList.remove("blowing");
                    flame.classList.add("off");
                });

            },4000);

        }

        time--;

    },1000);

}

// =========================
// MAGIC LINE
// =========================

function typeMagicLine(){

    const line=document.getElementById("magicLine");

    if(!line) return;

    line.innerHTML="";
    line.classList.add("show");

    const text="A wish made from the heart always finds its way... ✨💫";

    let i=0;

    function typing(){

        if(i<text.length){

            line.innerHTML+=text.charAt(i);
            i++;

            setTimeout(typing,50);

        }

    }

    typing();

    }
