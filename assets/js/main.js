AOS.init({
  duration: 1000,
  once: true
});

const text = "Hi, I'm Bhakta Ranjan Sahu";
let i = 0;
function typeEffect() {
  if (i < text.length) {
    document.getElementById("typing").innerHTML += text.charAt(i);
    i++;
    setTimeout(typeEffect, 100);
  }
}
window.onload = typeEffect;
