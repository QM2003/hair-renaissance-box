const giftBtn = document.getElementById("giftBtn");
const content = document.getElementById("content");
const openSound = document.getElementById("openSound");

let opened = false;

giftBtn.addEventListener("click", () => {
  if (opened) return;
  opened = true;

  // Animate box
  giftBtn.classList.add("open");

  // Play sound (works best after user click)
  try {
    openSound.currentTime = 0;
    openSound.volume = 0.65;
    openSound.play();
  } catch (e) {}

  // Spawn hearts
  for (let i = 0; i < 18; i++) {
    setTimeout(() => spawnHeart(), i * 60);
  }

  // Reveal content
  setTimeout(() => {
    content.classList.remove("hidden");
    content.scrollIntoView({ behavior: "smooth", block: "start" });
  }, 700);
});

function spawnHeart() {
  const heart = document.createElement("div");
  heart.className = "heart";

  const hearts = ["💗", "💛", "💖", "💕", "💞"];
  heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];

  // Random horizontal drift
  const drift = (Math.random() * 240 - 120).toFixed(0) + "px";
  heart.style.setProperty("--x", drift);

  // Random size
  const size = 18 + Math.random() * 18;
  heart.style.fontSize = size + "px";

  // Random start position near the box
  const startX = window.innerWidth / 2 + (Math.random() * 90 - 45);
  const startY = window.innerHeight * 0.52 + (Math.random() * 40 - 20);

  heart.style.left = startX + "px";
  heart.style.top = startY + "px";

  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 1500);
}
