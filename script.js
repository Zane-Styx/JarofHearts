const messages = [
  "You are my sunshine ☀️",
  "Every moment with you is magic ✨",
  "I love you more than words can say 💖",
  "Your smile is my favorite sight 😍",
  "With you, I feel complete 💞",
  "You're the reason my heart beats 💓",
  "Just thinking of you makes me smile 😊",
  "You're my forever and always ♾️",
  "I fall in love with you all over again every day 💘",
  "You make even ordinary days feel special 🌈",
  "My heart belongs to you 💝",
  "Being with you is my favorite place to be 🏡",
  "You are my greatest adventure 🌍",
  "You're my dream come true 💭",
  "I miss you even when you're near 🥺",
  "Loving you is the best decision I ever made 💗",
  "You light up my world like nobody else 💡",
  "I can't wait to spend forever with you ⏳",
  "You make my heart skip a beat 💓",
  "You're the missing piece to my puzzle 🧩",
  "I choose you. And I'll choose you again and again ❤️",
  "I feel so lucky to have you in my life 🍀",
  "You're the best part of my day 🌅",
  "You’re my person, my home 🏠",
  "No distance can break the bond we share 🌍❤️",
  "Every love story is beautiful, but ours is my favorite 📖",
  "You are the melody to my heart’s song 🎶",
  "You're the peanut butter to my jelly 🥪💕",
  "You are my safe place 🛡️",
  "I still get butterflies when I see your name pop up 🦋",
  "You're my daily dose of happiness 😄",
  "I adore every little thing about you 💫",
  "You make love feel easy 💐",
  "You're the first and last thing on my mind every day 💤",
  "You're all I ever wanted and more 🌟",
  "Even your flaws are perfect to me 🌹",
  "I can't stop thinking about you 🌀",
  "You’re the sparkle in my eyes ✨",
  "Being yours feels so right ✔️",
  "You're the calm to my chaos 🌤️",
  "You make my soul happy 🕊️",
  "Every second with you is a blessing 🙏",
  "You're the one I prayed for 🙌",
  "You're the highlight of my life 🖍️",
  "You’re sweeter than any chocolate 🍫❤️",
  "My heart is yours, completely 💘",
  "You’re the magic I never knew I needed 🪄",
  "Loving you feels like home 🏡💖",
  "You’re the best chapter of my life 📚",
  "Your voice is my favorite sound 🎧",
  "Every time I see you, I fall in love all over again 💞",
  "You’re my everything in a human form 🌎",
  "You complete me like a perfect rhyme 🎵",
  "I love how you love me ❤️",
  "You make my world brighter ☀️",
  "You’re the smile I wear every day 😊",
  "I’ll always be yours 💍",
  "Forever doesn’t seem long enough with you ♾️",
  "I cherish every moment we share ⏰",
  "I never knew love until I met you 🫶",
  "You're my favorite hello and hardest goodbye 👋💔",
  "You’re the warmth in my cold days 🔥",
  "You’re the best part of me 🧡",
  "You're the answer to my every why ❓❤️",
  "You’re my sun on a rainy day 🌧️☀️",
  "No one compares to you 🥇",
  "I love the way you see the world 🌍💗",
  "You're my favorite person to do nothing with 😌",
  "You're my heartbeat in human form 💓",
  "My love for you grows more every day 🌱",
  "I’m addicted to your love 💊💞",
  "You're all I need to be happy 😄❤️",
  "You're my guiding star in the dark 🌠",
  "I’d choose you in every lifetime 🌌",
  "You make me feel seen and loved 👀❤️",
  "You're my love, my light, my life 🌟",
  "My heart smiles when I think of you 😊❤️",
  "You're my favorite thought 🧠💘",
  "You're my best decision ever ✔️💖",
  "I love you endlessly 🔁",
  "You’re my today and all of my tomorrows 🌅",
  "With you, love is effortless 🌊❤️",
  "You’re the reason I believe in love again 💫",
  "You and me—perfectly imperfect together 💑",
  "My love for you is a never-ending story 📜💞",
  "You're the moonlight in my darkest nights 🌙",
  "I could hug you forever and never get tired 🤗",
  "You're the rhythm in my heartbeat 🎶❤️",
  "You’re my one in a million 💎",
  "I love how we fit so naturally together 🧩💞",
  "You are my heart's favorite song 🎼",
  "You’re my forever person 💍",
  "I love how your love feels like home 🏡❤️",
  "You are my best friend and my greatest love 👫",
  "Even when we’re apart, my heart is with you 💌",
  "I choose to love you more every single day 💕",
  "You're the reason behind my smile 😊❤️",
  "Your love is my favorite gift 🎁💖",
  "You're the one who makes everything better 🧸",
  "You're the most beautiful chapter in my life 💝"
];
let usedMessages = [];

const jar = document.getElementById('jar');
const jarFill = document.getElementById('jarFill');
const messagePopup = document.getElementById('messagePopup');
const messageText = document.getElementById('messageText');
const canvas = document.getElementById('burstCanvas');
const ctx = canvas.getContext('2d');

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

// 🧠 Load progress
const saved = localStorage.getItem('jarProgress');
if (saved) {
  const data = JSON.parse(saved);
  usedMessages = data.usedMessages || [];

  // Remove used from available pool
  for (const msg of usedMessages) {
    const i = messages.indexOf(msg);
    if (i !== -1) messages.splice(i, 1);
  }

  updateJarFill();
}

function updateJarFill() {
  const total = messages.length + usedMessages.length;
  const filled = usedMessages.length;
  const percent = Math.round((filled / total) * 100);

  jarFill.style.height = `${percent}%`;

  const progressText = document.getElementById('progressText');
  progressText.textContent = `${percent}% filled`;
}


function saveProgress() {
  localStorage.setItem(
    'jarProgress',
    JSON.stringify({ usedMessages })
  );
}

jar.addEventListener('click', () => {
  if (messages.length === 0 && usedMessages.length === 0) return;

  if (messages.length === 0) {
    // Reset everything
    messages.push(...usedMessages);
    usedMessages = [];
    jarFill.style.height = '0%';
    localStorage.removeItem('jarProgress');

    messageText.textContent = "The jar has been refilled 💫";
    messagePopup.classList.add('show');
    setTimeout(() => messagePopup.classList.remove('show'), 6000);
    return;
  }

  // Draw random message
  const i = Math.floor(Math.random() * messages.length);
  const selected = messages.splice(i, 1)[0];
  usedMessages.push(selected);

  messageText.textContent = selected;
  messagePopup.classList.add('show');
  setTimeout(() => {
    messagePopup.classList.remove('show');
  }, 5000);

  updateJarFill();
  saveProgress();
  triggerBurst();
});

// 💥 Heart burst animation
function triggerBurst() {
  const particles = [];
  const emojis = ['💖', '💘', '💗', '💕', '❤️'];

  for (let i = 0; i < 20; i++) {
    particles.push({
      x: window.innerWidth / 2,
      y: window.innerHeight / 2,
      vx: (Math.random() - 0.5) * 6,
      vy: (Math.random() - 1.2) * 6,
      life: 100,
      emoji: emojis[Math.floor(Math.random() * emojis.length)]
    });
  }

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => {
      p.x += p.vx;
      p.y += p.vy;
      p.vy += 0.1;
      p.life -= 2;

      ctx.font = "24px serif";
      ctx.globalAlpha = Math.max(p.life / 100, 0);
      ctx.fillText(p.emoji, p.x, p.y);
    });

    if (particles.some(p => p.life > 0)) {
      requestAnimationFrame(animate);
    } else {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
  }

  animate();
}

// Optional: Manual reset button support
window.resetJar = function () {
  messages.push(...usedMessages);
  usedMessages = [];
  localStorage.removeItem('jarProgress');
  jarFill.style.height = '0%';
  messageText.textContent = "Manually reset 💡";
  messagePopup.classList.add('show');
  setTimeout(() => messagePopup.classList.remove('show'), 2500);
};
