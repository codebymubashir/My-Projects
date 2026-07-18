
//   var textWrapper = document.querySelector('.ml11 .letters');
//   textWrapper.innerHTML = textWrapper.textContent.replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>");

//   var letters = textWrapper.querySelectorAll('.letter');
//   letters[3].classList.add('text-red-800', 'underline');

//   var lettersWidth = document.querySelector('.ml11 .letters').getBoundingClientRect().width;

//   anime.timeline({loop: false})
//     .add({
//       targets: '.ml11 .line',
//       scaleY: [0,1],
//       opacity: [0.5,1],
//       easing: "easeOutExpo",
//       duration: 700
//     })
//     .add({
//       targets: '.ml11 .line',
//       translateX: [0, lettersWidth + 10],
//       easing: "easeOutExpo",
//       duration: 700,
//       delay: 100
//     })
//     .add({
//       targets: '.ml11 .letter',
//       opacity: [0,1],
//       easing: "easeOutExpo",
//       duration: 600,
//       offset: '-=775',
//       delay: (el, i) => 34 * (i+1)
//     })
//     .add({
//       targets: '.ml11 .line',
//       translateX: [lettersWidth + 10, 0],
//       translateY: ['0%', '150%'],
//       height: ['100%', '3px'],
//       width: ['3px', lettersWidth + 'px'],
//       easing: "easeOutExpo",
//       duration: 600
//     });



// const menuBtn = document.getElementById('menuBtn');
// const navList = document.getElementById('navList');

// menuBtn.addEventListener('click', () => {
//   navList.classList.toggle('hidden');
//   navList.classList.toggle('flex');
// });

var textWrapper = document.querySelector('.ml11 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>");

var letters = textWrapper.querySelectorAll('.letter');
letters[3].classList.add('text-red-800', 'underline');

var lettersWidth = document.querySelector('.ml11 .letters').getBoundingClientRect().width;

anime.timeline({ loop: false })
  .add({
    targets: '.ml11 .line',
    scaleY: [0, 1],
    opacity: [0.5, 1],
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
    opacity: [0, 1],
    easing: "easeOutExpo",
    duration: 600,
    offset: '-=775',
    delay: (el, i) => 34 * (i + 1)
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


// ----- Mobile Menu Toggle -----
const menuBtn = document.getElementById('menuBtn');
const navList = document.getElementById('navList');

menuBtn.addEventListener('click', () => {
  // Sirf mobile (md se chhoti) screens par hi toggle chalao
  if (window.innerWidth < 768) {
    navList.classList.toggle('hidden');
    navList.classList.toggle('flex');
  }
});

// Jab window resize ho kar md ya usse bari ho jaye,
// JS ki lagai hui classes reset kar do taake Tailwind ka
// "hidden md:flex" khud sambhal le
window.addEventListener('resize', () => {
  if (window.innerWidth >= 768) {
    navList.classList.remove('flex');
    navList.classList.add('hidden');
  }
});

const emailInput = document.getElementById('newsinput');
const joinbtn = document.getElementById('newsbtn');
joinbtn.addEventListener('click',()=>{
  const emailValue = emailInput.value.trim();

  if (emailValue === '') {
    alert('Please fill the input first');
    return;
  }

  const popup = document.createElement('div');
  popup.innerText = '🎉 Email submit karne ka shukriya!';
  popup.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    background: #78350f;
    color: white;
    padding: 15px 25px;
    border-radius: 10px;
    font-size: 16px;
    box-shadow: 0 4px 10px rgba(0,0,0,0.3);
    z-index: 9999;
  `;
  document.body.appendChild(popup);

  setTimeout(() => {
    popup.remove();
  }, 3000);

  emailInput.value = '';
});


// const emailInput = document.querySelector('.newsin');
// const joinBtn = document.querySelector('.newsin').nextElementSibling; // JOIN button

// joinBtn.addEventListener('click', () => {
//   const emailValue = emailInput.value.trim();

//   if (emailValue === '') {
//     alert('Please fill the input first');
//   } else {
//     alert('Thanks for joining!!');
//     emailInput.value = ''; 
//   }
// });