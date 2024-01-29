// сори, тут много говнокода, я быстро делал и качество было не в приоритете

let btn = document.querySelector("button");
let count_tosts = document.querySelector("span");
let random_num;
let collected =  new Set();  // множество

btn.addEventListener("click", ()=> {
    btn.disabled = true;  // блок кнопки
    random_num = Math.floor(Math.random() * 9) + 1;  // randint(1, 9)
    collected.add(random_num);
    var audio = new Audio(`assets/voices/${random_num}.mp3`);
    audio.play();  // плюс уши
    audio.addEventListener("ended", () => {
        btn.disabled = false;  // отдаём кнопку
        if (collected.size == 9) {
            document.querySelector(".hidden").classList.remove("hidden");
            frame();
        }
    })
    count_tosts.innerHTML = collected.size;
})


var colors = ["#8b5642", "#6a696b"];

function frame() {
  confetti({
    particleCount: 2,
    angle: 60,
    spread: 55,
    origin: { x: 0 },
    colors: colors,
  });
  confetti({
    particleCount: 2,
    angle: 120,
    spread: 55,
    origin: { x: 1 },
    colors: colors,
  });

  if (Date.now() < Date.now() + 15000) {
    requestAnimationFrame(frame);
  }
}

// window.onload = frame();