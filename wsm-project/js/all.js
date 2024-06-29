const navToggle = document.getElementById('nav-toggle');
const navList = document.querySelector('.nav-list');

navToggle.addEventListener('click', () => {
  navList.classList.toggle('show');
});

const menuItems = document.querySelectorAll('.menu-item');
const prevBtn = document.querySelector('.menu-nav.prev');
const nextBtn = document.querySelector('.menu-nav.next');
let currentIndex = 0;

function showMenu(index) {
  menuItems.forEach((item, i) => {
    item.style.left = `${i * 100 - index * 100}%`;
  });
}

function autoScroll() {
  currentIndex++;
  if (currentIndex >= menuItems.length) {
    currentIndex = 0;
  }
  showMenu(currentIndex);
}

prevBtn.addEventListener('click', () => {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = menuItems.length - 1;
  }
  showMenu(currentIndex);
});

nextBtn.addEventListener('click', () => {
  currentIndex++;
  if (currentIndex >= menuItems.length) {
    currentIndex = 0;
  }
  showMenu(currentIndex);
});

setInterval(autoScroll, 3000);

const slider = document.getElementById('slider');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
let index = 0;

function showSlide(index) {
  const slides = document.querySelectorAll('.slide');
  if (index >= slides.length) {
    index = 0;
  } else if (index < 0) {
    index = slides.length - 1;
  }
  slider.style.transform = 'translateX(' + (-index * 100) + '%)';
}

prev.addEventListener('click', () => {
  index--;
  showSlide(index);
});

next.addEventListener('click', () => {
  index++;
  showSlide(index);
});

// 자동 슬라이드 (선택 사항)
setInterval(() => {
  index++;
  showSlide(index);
}, 3000);