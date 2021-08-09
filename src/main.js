const lightbox = document.createElement('div');
lightbox.classList.add('nav__lightbox');
document.body.appendChild(lightbox);
const burger = document.querySelector('.header__burger');
const closeNav = document.querySelector('.nav__close');
const nav = document.querySelector('.nav');

console.log(burger);

const displayNavMobile = () => {
  // burger.style.display = 'none';
  // closeNav.style.display = 'flex';
  nav.style.display = 'block';
  nav.style.transform = 'translateY(0)';
  lightbox.style.display = 'flex';
  // prevent scrollin when modal open
  document.body.style.overflow = 'hidden';
};
const hideNav = () => {
  nav.style.transform = 'translateY(-100%)';
  lightbox.style.display = 'none';
  document.body.style.overflow = 'initial';
};

burger.addEventListener('click', displayNavMobile);
closeNav.addEventListener('click', hideNav);
lightbox.addEventListener('click', hideNav);

///////////////////////////////

const sliderArrowLeft = document.querySelector('.slider__arrow__left');
const sliderArrowRight = document.querySelector('.slider__arrow__right');
const middle = document.querySelector('.slider__middle');
const left = document.querySelector('.slider__left');
const right = document.querySelector('.slider__right');

function moveLeft() {
  if (middle.classList.contains('current')) {
    middle.classList.remove('current');
    left.classList.add('current');
    middle.style.transform = 'translateX(+200%)';
    left.style.transform = 'translateX(0)';
  } else if (right.classList.contains('current')) {
    right.classList.remove('current');
    middle.classList.add('current');
    right.style.transform = 'translateX(+200%)';
    middle.style.transform = 'translateX(0)';
  }
}

function moveRight() {
  if (middle.classList.contains('current')) {
    middle.classList.remove('current');
    right.classList.add('current');
    middle.style.transform = 'translateX(-200%)';
    right.style.transform = 'translateX(0)';
  } else if (left.classList.contains('current')) {
    left.classList.remove('current');
    middle.classList.add('current');
    left.style.transform = 'translateX(-200%)';
    middle.style.transform = 'translateX(0)';
  }
}

sliderArrowLeft.addEventListener('click', moveLeft);
sliderArrowRight.addEventListener('click', moveRight);
