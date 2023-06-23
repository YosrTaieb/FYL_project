const allLetters = document.querySelectorAll(".bloc span");
const ligne = document.querySelector(".ligne");

const TLLetters = gsap.timeline();

TLLetters.from(ligne, {
  width: "0%",
  opacity: 0,
  duration: 0.9,
  ease: "power1.in",
})
  .from(allLetters, {
    opacity: 0,
    top: gsap.utils.wrap([100, -100]),
    stagger: 0.4,
    ease: "power2.out",
  })
  .set(ligne, { width: "55vw" });

//TYPE EFFECT

function typeEffect(element, speed) {
var text = element.innerHTML;
element.innerHTML = "";

  var i = 0;
  var timer = setInterval(function () {
    if (i < text.length) {
      element.append(text.charAt(i));
      i++;
    } else {
      clearInterval(timer);
    }
  }, speed);
}


// application
var speed = 100;
var p = document.querySelector(".txt-animation");
var delay = p.innerHTML.length * speed + speed + speed;

// type affect to header
// typeEffect(h1, speed);

// type affect to body
setTimeout(function () {
  p.style.display = "inline-block";
  typeEffect(p, speed);
}, delay);

