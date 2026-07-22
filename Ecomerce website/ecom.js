
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


const products = [
            {
                image: "https://images.unsplash.com/photo-1558121556-2a39fc528338?q=80&w=800&auto=format&fit=crop",
                badge: "New",
                number: "01",
                category: 'FOOTWEAR',
                name: "Field Runner",
                price: "Rs. 12,900"
            },
            {
                image: "https://images.unsplash.com/photo-1773259592395-144b30949978?q=80&w=800&auto=format&fit=crop",
                badge: "New",
                number: "02",
                category: 'OUTWEAR',
                name: "Coated Overshirt",
                price: "Rs. 18,500"
            },
            {
                image: "https://images.unsplash.com/photo-1576792741377-eb0f4f6d1a47?q=80&w=800&auto=format&fit=crop",
                badge: "New",
                number: "03",
                category: 'FOOTWEAR',
                name: "Bound Lofer",
                price: "Rs. 14,200"
            },
            {
                image: "https://images.unsplash.com/photo-1639006570490-79c0c53f1080?q=80&w=800&auto=format&fit=crop",
                badge: "New",
                number: "04",
                category: 'ACCESSORY',
                name: "Ledger Watch",
                price: "Rs. 9,800"
            }
        ];

        function createProductCard(product){
            return `
                <div class="pb-10">
                    <div class="h-70 sm:h-110 md:h-70 bg-cover bg-center  flex flex-row gap-45 sm:gap-110 md:gap-53 lg:gap-47 pt-4 pl-4 sm:pl-7 lg:pl-2" style = "background-image: url('${product.image}')">
                        <div class="bg-[#C1121F] text-[#FFFFFF] jetBrains h-8 w-12 z-1 flex justify-center items-center text-sm">${product.badge}</div>
                        <div class="jetBrains text-[#ffffff]">${product.number}</div>
                    </div>
                    <div class="h-20 md:h-30 pt-5 pl-5 flex flex-col gap-4.5 bg-[#FFFFFF] border-1 border-[rgba(19,17,20,0.14)]">
                        <p class="jetBrains text-[#5B5A61] text-sm">${product.category}</p>
                        <p class="text-[#131114] fraunces text-xl">${product.name}</p>
                        <p class="text-[#131114] jetBrains">${product.price}</p>
                    </div>
                    <div class="border-1 border-[rgba(19,17,20,0.14)] h-12 flex flex-row jetBrains text-sm">
                        <div class="w-[50%] bg-[#FFFFFF] text-[131114] flex justify-center items-center"><button>View</button></div>
                        <div class="w-[50%] text-[#FFFFFF] bg-[#131114] flex justify-center items-center"><button>Add</button></div>
                    </div>
                </div>
            `
        };

        let cardContainer = document.getElementById("cardContainer");
        cardContainer.innerHTML = products.map((item)=>{
            return createProductCard(item);
        }).join("");

        const darkActivator = document.getElementById("darkActivator");
        const html = document.getElementById("dark");
        
        darkActivator.addEventListener("click", ()=>{
        html.classList.toggle("dark");
})