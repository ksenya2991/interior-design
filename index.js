const scrollToTop = document.querySelector('.scroll-back');

window.addEventListener('scroll', () => {
    if (window.scrollY > 1000) {
        scrollToTop.style.display = 'block';
    } else {
        scrollToTop.style.display = 'none';
    }
})

const menuBtn = document.querySelector('.menu-btn');
const menuList = document.querySelector('.drop-down-menu');

menuBtn.addEventListener('click', () => {
    menuList.classList.toggle('active');
})
