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



// const menuBtn = document.getElementById('menuBtn');
// const navList = document.getElementById('navList');

// menuBtn.addEventListener('click', () => {
//     navList.classList.toggle('hidden');
//     navList.classList.toggle('flex');
// });


const products = [
    {
        image: "https://images.unsplash.com/photo-1558121556-2a39fc528338?q=80&w=800&auto=format&fit=crop",
        badge: "New",
        number: "01",
        category: 'SHOES',
        name: "Field Runner",
        price: "Rs. 12,900"
    },
    {
        image: "https://i.pinimg.com/736x/4f/22/fe/4f22fe03f3d6d96507cb479abf6bcff6.jpg",
        badge: "New",
        number: "02",
        category: 'ELECTRONICS',
        name: "REALME T110",
        price: "Rs. 18,500"
    },
    {
        image: "https://i.pinimg.com/vwebp/1200x/b6/1e/5b/b61e5bb5ab88134e40cb3374695e3b98.webp",
        badge: "New",
        number: "03",
        category: 'SHOES',
        name: "Bound Lofer",
        price: "Rs. 14,200"
    },
    {
        image: "https://i.pinimg.com/vwebp/1200x/14/57/3f/14573f1ce2ac06634f871bb2b87897ea.webp",
        badge: "New",
        number: "04",
        category: 'ELECTRONICS',
        name: "EARBUDS T100",
        price: "Rs. 9,800"
    },
    {
        image: "https://i.pinimg.com/1200x/c1/f5/49/c1f549b5b94feb95481c993627296233.jpg",
        badge: "New",
        number: "04",
        category: 'SHOES',
        name: "NIKE LEDGER",
        price: "Rs. 9,800"
    },
    {
        image: "https://images.unsplash.com/photo-1576792741377-eb0f4f6d1a47?q=80&w=800&auto=format&fit=crop",
        badge: "New",
        number: "03",
        category: 'SHOES',
        name: "Bound Lofer",
        price: "Rs. 14,200"
    },
    {
        image: "https://i.pinimg.com/736x/33/cb/02/33cb02b3e65918b0cbf217cf67fb5a64.jpg",
        badge: "New",
        number: "03",
        category: 'ACCESSORY',
        name: "HOODIE",
        price: "Rs. 14,200"
    },
    {
        image: "https://i.pinimg.com/vwebp/1200x/23/a7/3c/23a73c25d02a693f83d519c684b9b349.webp",
        badge: "New",
        number: "01",
        category: 'WATCHES',
        name: "ROYAL FANCY",
        price: "Rs. 12,900"
    },
    {
        image: "https://i.pinimg.com/vwebp/1200x/b6/11/89/b611896a287b3e88725f38494115390d.webp",
        badge: "New",
        number: "02",
        category: 'SHOES',
        name: "NIKE EXPOSE",
        price: "Rs. 18,500"
    },
    {
        image: "https://i.pinimg.com/736x/8d/95/57/8d9557860af3c901534b152e4cc106ad.jpg",
        badge: "New",
        number: "04",
        category: 'ACCESSORY',
        name: "HOODIE",
        price: "Rs. 9,800"
    },
    {
        image: "https://i.pinimg.com/736x/73/2c/8e/732c8e8759b063033df74607c7f892df.jpg",
        badge: "New",
        number: "04",
        category: 'ACCESSORY',
        name: "BRACLET",
        price: "Rs. 9,800"
    },
    {
        image: "https://i.pinimg.com/vwebp/1200x/f4/6b/da/f46bda0f79ae993f12ea8184610efaf4.webp",
        badge: "New",
        number: "03",
        category: 'GLASSES',
        name: "SUN GLASSES",
        price: "Rs. 14,200"
    },
    {
        image: "https://i.pinimg.com/736x/da/3b/1f/da3b1f6d2c3e5c7a403a672cc05e0d6d.jpg",
        badge: "New",
        number: "03",
        category: 'BEAUTY',
        name: "MAKEUP PRODUCTS",
        price: "Rs. 14,200"
    },
    {
        image: "https://i.pinimg.com/736x/fb/bb/c4/fbbbc4b27b03cb6d00ad57460d41fb64.jpg",
        badge: "New",
        number: "03",
        category: 'BEAUTY',
        name: "FACIAL SCRUB",
        price: "Rs. 14,200"
    },
    {
        image: "https://i.pinimg.com/736x/6a/c9/36/6ac93680b90dddfb5d1ff9609597fa44.jpg",
        badge: "New",
        number: "03",
        category: 'BEAUTY',
        name: "BEMIUN PRODUCTS",
        price: "Rs. 14,200"
    },
    {
        image: "https://i.pinimg.com/vwebp/736x/72/b8/ac/72b8ac6db205eff6256b118166b24a29.webp",
        badge: "New",
        number: "02",
        category: 'ELECTRONICS',
        name: "APPLE PRODUCTS",
        price: "Rs. 18,500"
    },
];

function createProductCard(product) {
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
                        <div class="w-[50%] bg-[#FFFFFF]  flex justify-center items-center"><button>View</button></div>
                        <div class="w-[50%] text-[#FFFFFF] bg-[#131114] flex justify-center items-center"><button>Add</button></div>
                    </div>
                </div>
            `
};

let cardContainer = document.getElementById("cardContainer");
// cardContainer.innerHTML = products.map((item) => {
//     return createProductCard(item);
// }).join("");




let all = document.getElementById("all");
let ACCESSORY = document.getElementById("accessories");
let shoes = document.getElementById("shoes");
let electronics = document.getElementById("electronics");
let beauty = document.getElementById("beauty");

function Showallproducts(params) {
           cardContainer.innerHTML = products.map(product => `
               <div class="pb-10">
                    <div class="h-70 sm:h-110 md:h-70 bg-cover bg-center  flex flex-row gap-45 sm:gap-110 md:gap-53 lg:gap-47 pt-4 pl-4 sm:pl-7 lg:pl-2" style = "background-image: url('${product.image}')">
                        <div class="bg-[#C1121F] text-[#FFFFFF] jetBrains h-8 w-12 z-1 flex justify-center items-center text-sm">${product.badge}</div>
                        <div class="jetBrains text-[#ffffff]">${product.number}</div>
                    </div>
                    <div class="pagedark h-20 md:h-30 pt-5 pl-5 flex flex-col gap-4.5 bg-[#FFFFFF] border-1 border-[rgba(19,17,20,0.14)]">
                        <p class="pagepara jetBrains text-[#5B5A61] text-sm">${product.category}</p>
                        <p class="pagetext text-[#131114] fraunces text-xl">${product.name}</p>
                        <p class="pagetext text-[#131114] jetBrains">${product.price}</p>
                    </div>
                    <div class="border-1 border-[rgba(19,17,20,0.14)] h-12 flex flex-row jetBrains text-sm">
                        <div class="w-[50%] bg-[#FFFFFF] flex justify-center items-center"><button>View</button></div>
                        <div class="pagebtn w-[50%] text-[#FFFFFF] bg-[#131114] flex justify-center items-center"><button>Add</button></div>
                    </div>
                </div>
        `)
}

function getproducts(categorye) {
    cardContainer.innerHTML = products
        .filter(p => p.category === categorye)
        .map(product => `
               <div class="pb-10">
                    <div class="h-70 sm:h-110 md:h-70 bg-cover bg-center  flex flex-row gap-45 sm:gap-110 md:gap-53 lg:gap-47 pt-4 pl-4 sm:pl-7 lg:pl-2" style = "background-image: url('${product.image}')">
                        <div class="bg-[#C1121F] text-[#FFFFFF] jetBrains h-8 w-12 z-1 flex justify-center items-center text-sm">${product.badge}</div>
                        <div class="jetBrains text-[#ffffff]">${product.number}</div>
                    </div>
                    <div class="pagedark h-20 md:h-30 pt-5 pl-5 flex flex-col gap-4.5 bg-[#FFFFFF] border-1 border-[rgba(19,17,20,0.14)]">
                        <p class="pagepara jetBrains text-[#5B5A61] text-sm">${product.category}</p>
                        <p class="pagetext text-[#131114] fraunces text-xl">${product.name}</p>
                        <p class="pagetext text-[#131114] jetBrains">${product.price}</p>
                    </div>
                    <div class="border-1 border-[rgba(19,17,20,0.14)] h-12 flex flex-row jetBrains text-sm">
                        <div class="w-[50%] bg-[#FFFFFF] flex justify-center items-center"><button>View</button></div>
                        <div class="pagebtn w-[50%] text-[#FFFFFF] bg-[#131114] flex justify-center items-center"><button>Add</button></div>
                    </div>
                </div>
        `)
        .join("");
}

shoes.addEventListener("click", () => {
    getproducts("SHOES");
});
electronics.addEventListener("click", () => {
    getproducts("ELECTRONICS");
});
beauty.addEventListener("click", () => {
    getproducts("BEAUTY")
})
ACCESSORY.addEventListener("click", () => {
    getproducts("ACCESSORY")
})
all.addEventListener("click", () => {
    Showallproducts();
})


const darkActivator = document.getElementById("darkActivator");
const html = document.getElementById("dark");
 
darkActivator.addEventListener("click", () => {
  html.classList.toggle("dark");});




  const menuBtn = document.getElementById('menuBtn');
const navList = document.getElementById('navList');

console.log('menuBtn found:', menuBtn); // ye add karein

menuBtn.addEventListener('click', () => {
    console.log('Button clicked!'); // ye bhi add karein
    navList.classList.toggle('hidden');
    navList.classList.toggle('flex');
});