const noBtn = document.getElementById("no");
const yesBtn = document.getElementById("yes");
const card = document.getElementById("card");
const buttons = document.getElementById("buttons");
const question = document.getElementById("question");
const success = document.getElementById("success");
const music = document.getElementById("music");

let noScale = 1;
let speedBoost = 1;

/* NO BUTTON FULL SCREEN ESCAPE 😈 */
noBtn.addEventListener("mouseover", () => {
  // shrink + speed up
  noScale -= 0.06;
  speedBoost += 0.25;

  if (noScale < 0.4) noScale = 0.4; // limit shrinking

  noBtn.style.transform = `scale(${noScale})`;

  const btnRect = noBtn.getBoundingClientRect();

  const maxX = window.innerWidth - btnRect.width - 20;
  const maxY = window.innerHeight - btnRect.height - 20;

  const randomX = Math.random() * maxX;
  const randomY = Math.random() * maxY;

  noBtn.style.position = "fixed"; // 🔥 key change
  noBtn.style.transition = `all ${0.25 / speedBoost}s ease`;
  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
});

/* YES CLICK MAGIC 💖 */
yesBtn.addEventListener("click", () => {
  buttons.style.display = "none";
  question.style.display = "none";
  success.classList.remove("hidden");
  card.classList.add("love");
  music.play();
  launchHearts();
});

/* FLOATING HEARTS */
function launchHearts() {
  for (let i = 0; i < 30; i++) {
    const heart = document.createElement("div");
    heart.innerText = "💖";
    heart.style.position = "fixed";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.bottom = "-30px";
    heart.style.fontSize = "26px";
    heart.style.animation = "fly 4s linear";

    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 4000);
  }
}

/* HEART ANIMATION */
const style = document.createElement("style");
style.innerHTML = `
@keyframes fly {
  0% { transform: translateY(0); opacity: 1; }
  100% { transform: translateY(-110vh); opacity: 0; }
}`;
document.head.appendChild(style);
