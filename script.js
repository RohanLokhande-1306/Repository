function nextPage(pageNumber) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.getElementById('page' + pageNumber).classList.add('active');

    if (pageNumber === 2) typeText();
}

function typeText() {
    let text = `Happy Birthday Shivani 🎂

I just wanted to wish you today.

I hope your NEET prep is going good,
and I really believe this time you’ll crack it.

You’ve worked hard for it,
you deserve it.

Things may have changed,
but still… I wish the best for you always.

And if possible,
then we’ll definitely meet someday.

And haa...I am Extremly Sorry yarr piliz🥹
Bass Jhal Unblock pn kar ata...😡🥺
If you ever need my help please let me know I am Forever here

Take care`;

    let i = 0;
    let target = document.getElementById("typedText");
    target.innerHTML = "";

    function typing() {
        if (i < text.length) {
            target.innerHTML += text.charAt(i);
            i++;
            setTimeout(typing, 15);
        }
    }
    typing();
}

function createButterfly() {
    let div = document.createElement("div");
    div.className = "butterfly";
    div.style.left = Math.random() * 100 + "vw";
    div.style.top = "60vh";
    div.style.animationDuration = (Math.random() * 2 + 3) + "s";

    div.innerHTML = `
    <svg viewBox="0 0 64 64">
        <path d="M32 32 C20 10,0 20,20 40 C30 50,32 32,32 32Z" fill="#ff6b81"/>
        <path d="M32 32 C44 10,64 20,44 40 C34 50,32 32,32 32Z" fill="#ff6b81"/>
    </svg>`;
    return div;
}

function openGift() {
    let container = document.getElementById("butterflyContainer");

    for (let i = 0; i < 30; i++) {
        let b = createButterfly();
        container.appendChild(b);
        setTimeout(() => b.remove(), 4000);
    }

    document.getElementById("finalImg").style.display = "block";
    document.getElementById("videoBtn").style.display = "inline-block";
}

function openVideoPopup() {
    let popup = document.getElementById("videoPopup");
    let video = document.getElementById("popupVideo");

    popup.style.display = "block";
    video.play();
}

function closeVideo() {
    let popup = document.getElementById("videoPopup");
    let video = document.getElementById("popupVideo");

    video.pause();
    video.currentTime = 0;
    popup.style.display = "none";
}

/* Background hearts */
const canvas = document.getElementById("loveCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let hearts = [];

class Heart {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = canvas.height;
        this.size = Math.random() * 10 + 5;
        this.speed = Math.random() * 0.5 + 0.2;
    }

    draw() {
        ctx.fillStyle = "rgba(255,100,150,0.2)";
        ctx.font = this.size + "px Arial";
        ctx.fillText("❤", this.x, this.y);
    }

    update() {
        this.y -= this.speed;
        if (this.y < 0) {
            this.y = canvas.height;
            this.x = Math.random() * canvas.width;
        }
        this.draw();
    }
}

for (let i = 0; i < 30; i++) hearts.push(new Heart());

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    hearts.forEach(h => h.update());
    requestAnimationFrame(animate);
}
animate();
