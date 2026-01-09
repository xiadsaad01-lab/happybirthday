/* password */
const passwordBtn = document.getElementById("password-btn");
const passwordInput = document.getElementById("password-input");
const passwordScreen = document.getElementById("password-screen");
const passwordTitle = document.getElementById("password-title");
const togglePassword = document.getElementById("toggle-password");
const pianoMusic = new Audio("assets/audio/piano.mp3");
const loopContainer = document.getElementById("loop-video-container");
const loopVideo = document.getElementById("loop-video");
const loopText = document.getElementById("loop-text");
pianoMusic.loop = true;
pianoMusic.volume = 0.6;
passwordInput.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
        passwordBtn.click();
    }
});
togglePassword.addEventListener("click", function () {
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        togglePassword.textContent = "🙈";
    } else {
        passwordInput.type = "password";
        togglePassword.textContent = "👁️";
    }
});
/* Heart background */
const heartsBg = document.querySelector(".hearts-bg");
for (let i = 0; i < 40; i++) {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.innerHTML = "❤<span class='heart-name'>Roaa</span>";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = 16 + Math.random() * 30 + "px";
  heart.style.animationDuration = 6 + Math.random() * 8 + "s";
  heartsBg.appendChild(heart);
}
/* intro */
const intro = document.getElementById("intro");
const introText = document.getElementById("intro-text");
const startBtn = document.getElementById("start-btn");
const video = document.getElementById("birthday-video");
const finalScreen = document.getElementById("final");
const finalMessage = document.getElementById("final-message");
const message = `Hi Roaa ❤️🥰

Today is your birthday 🥳

So, I made this programme for you 

& i hope you like it ❤❤❤`;

let i = 0;
function typeText() {
  if (i < message.length) {
    introText.innerHTML += message[i] === "\n" ? "<br>" : message[i];
    i++;
    setTimeout(typeText, 90);
  } else {
    startBtn.style.display = "block";
  }
}
/* Password check */
const passwordSuccess = document.getElementById("password-success");
passwordBtn.onclick = () => {
  if (passwordInput.value === "1412006") {
pianoMusic.play();
    // اخفاء input و الزرار
    passwordInput.style.display = "none";
    passwordBtn.style.display = "none";
    togglePassword.style.display = "none";
    passwordTitle.style.display = "none";
      //اظهار رسالة النجاح
    passwordSuccess.textContent = "💗💗That's great Roaa, welcome💗💗";
    passwordSuccess.style.opacity = "1";
setTimeout(() => {
  passwordScreen.style.transition = "opacity 2s ease";
  passwordScreen.style.opacity = "0";
  setTimeout(() => {
    passwordScreen.style.display = "none";
    intro.style.display = "flex";
    typeText();
  }, 2000); 
}, 3600); 
  } else {
    passwordTitle.textContent = "Wrong password";
    passwordTitle.style.color = "#ff0033";
  }
};
/* start video */
startBtn.onclick = () => {
  intro.style.display = "none";
  startBtn.style.display = "none";
  pianoMusic.pause();
  video.style.display = "block";
  video.play();
  skipBtn.style.display = "block";
};
/* Video end */
const secondVideo = document.getElementById("second-video");
const overlay = document.getElementById("video-overlay");
const overlayMessage = document.getElementById("overlay-message");
video.onended = () => {
  video.style.transition = "opacity 2s ease";
  video.style.opacity = "0";
  setTimeout(() => {
    video.style.display = "none";
    startSecondVideo();
  }, 2000);
};
const skipBtn = document.getElementById("skip-btn");

function closeFirstVideo() {
  skipBtn.style.opacity = "0";
  video.style.transition = "opacity 2s ease";
  video.style.opacity = "0";

  setTimeout(() => {
    video.pause();
    video.style.display = "none";
    skipBtn.style.display = "none";
    startSecondVideo();
  }, 2000);
}

video.onended = closeFirstVideo;

skipBtn.onclick = closeFirstVideo;
/*  open romantic vedio */
function startSecondVideo() {
  secondVideo.style.display = "block";
  overlay.style.display = "flex";
  pianoMusic.play();
  secondVideo.play();
  typeOverlayText();
}
/* Heart Canavas */
const canvas = document.getElementById("heart-canvas");
const ctx = canvas.getContext("2d");
canvas.width = 300;
canvas.height = 300;
let t = 0;
function drawHeart() {
  ctx.clearRect(0, 0, 300, 300);
  ctx.save();
  ctx.translate(150, 150);
  ctx.scale(8, 8);

  // رسم القلب
  ctx.beginPath();
  for (let a = 0; a < Math.PI * 2; a += 0.01) {
    let x = 16 * Math.pow(Math.sin(a), 3);
    let y = -(13 * Math.cos(a) - 5 * Math.cos(2 * a) - 2 * Math.cos(3 * a) - Math.cos(4 * a));
    ctx.lineTo(x, y);
  }

  ctx.fillStyle = "#ff2f6d";
  ctx.shadowColor = "#ff9bb8";
  ctx.shadowBlur = 25;
  ctx.fill();

  // ✨ الاسم المنوّر
  ctx.shadowColor = "#ff9bb8";
  ctx.shadowBlur = 30;
  ctx.fillStyle = "#ffffff";
  ctx.font = "bold 4px Poppins";
  ctx.textAlign = "center";
  ctx.fillText("ROAA", 0, 2);

  ctx.restore();
}
function animate() {
  t+=0.05;
  drawHeart();
  requestAnimationFrame(animate);
}
animate();
const overlayText = `
Today is not just any day;
 it is the day the most beautiful and amazing girl was born🌸🌑

Happy birthday, Roaa! ❤🥰
My best friend 🌸🌑
I wish you a very happy year ❤🤍
where you achieve everything you wish for and desire❤🤍.
I hope to see you as the happiest person in the world! ❤❤🥰
💗💗💗💗💗💗💗💗💗💗💗💗💗💗💗💗💗💗💗💗💗💗💗💗💗
`;

let j = 0;
function typeOverlayText() {
  if (j < overlayText.length) {
    overlayMessage.innerHTML +=
      overlayText[j] === "\n" ? "<br>" : overlayText[j];
    j++;
    setTimeout(typeOverlayText, 90);
  }
}