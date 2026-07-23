  var textWrapper = document.querySelector('.ml11 .letters');
  textWrapper.innerHTML = textWrapper.textContent.replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>");

  var letters = textWrapper.querySelectorAll('.letter');
  letters[3].classList.add('text-red-800', 'underline');

  var lettersWidth = document.querySelector('.ml11 .letters').getBoundingClientRect().width;

  anime.timeline({loop: false})
    .add({
      targets: '.ml11 .line',
      scaleY: [0,1],
      opacity: [0.5,1],
      easing: "easeOutExpo",
      duration: 700
    })
    .add({
      targets: '.ml11 .line',
      translateX: [0, lettersWidth + 10],
      easing: "easeOutExpo",
      duration: 700,
      delay: 100
    })
    .add({
      targets: '.ml11 .letter',
      opacity: [0,1],
      easing: "easeOutExpo",
      duration: 600,
      offset: '-=775',
      delay: (el, i) => 34 * (i+1)
    })
    .add({
      targets: '.ml11 .line',
      translateX: [lettersWidth + 10, 0],
      translateY: ['0%', '150%'],
      height: ['100%', '3px'],
      width: ['3px', lettersWidth + 'px'],
      easing: "easeOutExpo",
      duration: 600
    });



const menuBtn = document.getElementById('menuBtn');
const navList = document.getElementById('navList');

menuBtn.addEventListener('click', () => {
  navList.classList.toggle('hidden');
  navList.classList.toggle('flex');
});


const form = document.getElementById('contactForm');
const toast = document.getElementById('toast');
const submitBtn = form.querySelector('.submit-btn');
 
const fieldIds = ['name', 'email', 'message'];
 
form.addEventListener('submit', (e) => {
  e.preventDefault();
 
  let hasError = false;
 
  fieldIds.forEach((id) => {
    const input = document.getElementById(id);
    const group = input.closest('.field-group');
    const value = input.value.trim();
 
    if (value === '') {
      group.classList.add('error');
      hasError = true;
    } else {
      group.classList.remove('error');
    }
  });
 
  if (hasError) return;
 
  sendMessage();
});
 
fieldIds.forEach((id) => {
  const input = document.getElementById(id);
  input.addEventListener('input', () => {
    if (input.value.trim() !== '') {
      input.closest('.field-group').classList.remove('error');
    }
  });
});
 
function sendMessage() {
  submitBtn.classList.add('sending');
  submitBtn.querySelector('span').textContent = 'Sending';
 
  setTimeout(() => {
    submitBtn.classList.remove('sending');
    submitBtn.querySelector('span').textContent = 'Send message';
    showToast();
    form.reset();
  }, 900);
}
 
function showToast() {
  toast.classList.add('show');
  setTimeout(() => {
    toast.classList.remove('show');
  }, 3500);
}
 
// ----- Scroll / entrance reveal -----
const revealEls = document.querySelectorAll('.reveal');
 
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });
 
revealEls.forEach((el) => observer.observe(el));




const darkActivator = document.getElementById("darkActivator");
const html = document.getElementById("dark");
 
darkActivator.addEventListener("click", () => {
  html.classList.toggle("dark");});