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
