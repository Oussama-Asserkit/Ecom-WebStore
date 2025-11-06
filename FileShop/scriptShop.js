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

// Button Category
const Phones = document.getElementById('Phones');
const Smartwatch = document.getElementById('Smartwatch');
const Headphones = document.getElementById('Headphones');
const Tablets = document.getElementById('Tablets');

// Cart Category
const CartShopPhone = document.querySelector('.CartShopPhone');
const CartShopSmartWatch = document.querySelector('.CartShopSmartWatch');
const CartShopTablet = document.querySelector('.CartShopTablet');
const CartShopHeadphone = document.querySelector('.CartShopHeadphone');

Phones.addEventListener('click', () => {
    CartShopPhone.style.display = 'flex';
    CartShopSmartWatch.style.display = 'none';
    CartShopTablet.style.display = 'none';
    CartShopHeadphone.style.display = 'none';
    Phones.classList.add('ActiveShop');
    Smartwatch.classList.remove('ActiveShop');
    Tablets.classList.remove('ActiveShop');
    Headphones.classList.remove('ActiveShop');
});
Smartwatch.addEventListener('click', () => {
    CartShopSmartWatch.style.display = 'flex';
    CartShopPhone.style.display = 'none';
    CartShopTablet.style.display = 'none';
    CartShopHeadphone.style.display = 'none';
    Smartwatch.classList.add('ActiveShop');
    Phones.classList.remove('ActiveShop');
    Tablets.classList.remove('ActiveShop');
    Headphones.classList.remove('ActiveShop');
});
Tablets.addEventListener('click', () => {
    CartShopTablet.style.display = 'flex';
    CartShopPhone.style.display = 'none';
    CartShopSmartWatch.style.display = 'none';
    CartShopHeadphone.style.display = 'none';
    Tablets.classList.add('ActiveShop');
    Smartwatch.classList.remove('ActiveShop');
    Phones.classList.remove('ActiveShop');
    Headphones.classList.remove('ActiveShop');
});
Headphones.addEventListener('click', () => {
    CartShopHeadphone.style.display = 'flex';
    CartShopTablet.style.display = 'none';
    CartShopPhone.style.display = 'none';
    CartShopSmartWatch.style.display = 'none';
    Headphones.classList.add('ActiveShop');
    Tablets.classList.remove('ActiveShop');
    Smartwatch.classList.remove('ActiveShop');
    Phones.classList.remove('ActiveShop');
});