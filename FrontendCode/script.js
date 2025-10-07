// Loader
window.addEventListener("load", () => {
  document.getElementById("loader").style.display = "none";
});

// Carousel
const slide = document.getElementById("carousel-slide");
let count = 0;
setInterval(() => {
  count = (count + 1) % 5;
  slide.style.transform = `translateX(-${count * 100}%)`;
}, 3000);

// Stats Counter
const counters = document.querySelectorAll('.count');
counters.forEach(counter => {
  counter.innerText = '0';
  const updateCounter = () => {
    const target = +counter.getAttribute('data-target');
    const current = +counter.innerText;
    const increment = target / 100;
    if (current < target) {
      counter.innerText = `${Math.ceil(current + increment)}`;
      setTimeout(updateCounter, 20);
    } else {
      counter.innerText = target;
    }
  };
  updateCounter();
});

// Popup functions
function openPopup() { document.getElementById("popup").style.display = "flex"; }
function closePopup() { document.getElementById("popup").style.display = "none"; }

function openContact() { document.getElementById("contactPopup").style.display = "flex"; }
function closeContact() { document.getElementById("contactPopup").style.display = "none"; }

function closeAbout() { document.getElementById("aboutPopup").style.display = "none"; }

// Initialize AOS
AOS.init({ duration: 1000, once: true });
