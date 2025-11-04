// NavBar
const IconClosed = document.getElementById('IconClosed');
const IconMenu = document.getElementById('IconMenu');
const linksNavBar__mobile = document.querySelector('.linksNavBar__mobile');

IconClosed.addEventListener('click', () => {
    linksNavBar__mobile.style.display = 'none';
});
IconMenu.addEventListener('click', () => {
    linksNavBar__mobile.style.display = 'flex';
});

// Hero Section Swiper
const swiper = new Swiper('.swiper', {
    loop: true,
    pagination: {
        el: '.swiper-pagination',
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

// Section Product
const NewArrival = document.getElementById('NewArrival');
const Bestseller = document.getElementById('Bestseller');
const FeaturedProducts = document.getElementById('FeaturedProducts');
NewArrival.addEventListener('click', () => {
    NewArrival.classList.add('active');
    Bestseller.classList.remove('active');
    FeaturedProducts.classList.remove('active');
});
Bestseller.addEventListener('click', () => {
    NewArrival.classList.remove('active');
    Bestseller.classList.add('active');
    FeaturedProducts.classList.remove('active');
});
FeaturedProducts.addEventListener('click', () => {
    NewArrival.classList.remove('active');
    Bestseller.classList.remove('active');
    FeaturedProducts.classList.add('active');
});