const reviews = [
  {
    id: 1,
    name: "RayMan",
    job: "Web Developer",
    img: "https://static.tvtropes.org/pmwiki/pub/images/rayman_3.png",
    text: "1Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
  },
  {
    id: 2,
    name: "Globox",
    job: "Frontend dev",
    img: "https://oyster.ignimgs.com/mediawiki/apis.ign.com/rayman-legends/f/f8/Globox.jpg",
    text: "2Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
  },
  {
    id: 3,
    name: "Teensie",
    job: "Backend Dev",
    img: "https://raymanpc.com/wiki/script-en/images/thumb/2/28/Teensy_-_R2_Model.png/369px-Teensy_-_R2_Model.png",
    text: "3Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
  },
  {
    id: 4,
    name: "Murphy",
    job: "Full Stack Dev",
    img: "https://raymanpc.com/wiki/script-en/images/e/e7/Murphy_R2Model.png",
    text: "4Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
  },
];

// select items
const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".pre-btn");
const nextBtn = document.querySelector(".next-btn");
const random = document.querySelector(".random-btn");

// set starting review
let currentItem = 0;

// load initial item
window.addEventListener("DOMContentLoaded", function () {
  showPerson();
});

// show person based on item
function showPerson() {
  const item = reviews[currentItem];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
}

// show next person

nextBtn.addEventListener("click", function () {
  currentItem++;
  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }
  showPerson();
});

// decrement person
prevBtn.addEventListener("click", function () {
  currentItem--;
  if (currentItem < 0) {
    currentItem = reviews.length - 1;
  }
  showPerson();
});

random.addEventListener("click", function () {
  currentItem = Math.floor(Math.random() * 4);
  showPerson();
});
