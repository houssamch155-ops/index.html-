const letters = [
`My love,

I know things feel heavy right now.  
Exams, pressure, everything at once...  

But listen to me carefully:  
You are stronger than all of it.`,

`You don’t have to be perfect.  
You don’t have to have everything figured out.  

You just have to keep going…  
And I’ll be right here with you.`,

`Even on your worst days,  
even when you feel tired, lost, or overwhelmed…  

You are still the most beautiful soul I know.`,

`I see your effort.  
I see your strength.  

And I am so proud of you… more than words can say.`,

`So breathe…  
Take it one step at a time.  

You’ve got this.  
And you’ve got me 💜`
];

let letterIndex = 0;
let charIndex = 0;
let typing = false;

function typeLetter() {
  if (charIndex < letters[letterIndex].length) {
    document.getElementById("text").innerHTML += letters[letterIndex].charAt(charIndex);
    charIndex++;
    setTimeout(typeLetter, 30);
  } else {
    typing = false;
  }
}

function nextLetter() {
  if (typing) return;

  letterIndex = (letterIndex + 1) % letters.length;
  charIndex = 0;
  document.getElementById("text").innerHTML = "";
  typing = true;
  typeLetter();
}

// START FIRST LETTER
typing = true;
typeLetter();

// STARS
const canvas = document.getElementById("stars");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let stars = [];

for (let i = 0; i < 150; i++) {
  stars.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 2,
    d: Math.random() * 0.5
  });
}

function drawStars() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "#d9a6ff";

  stars.forEach(s => {
    ctx.beginPath();
    ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
    ctx.fill();
  });

  stars.forEach(s => {
    s.y += s.d;
    if (s.y > canvas.height) {
      s.y = 0;
      s.x = Math.random() * canvas.width;
    }
  });

  requestAnimationFrame(drawStars);
}

drawStars();
