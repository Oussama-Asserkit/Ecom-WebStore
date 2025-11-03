const IconClosed = document.getElementById('IconClosed');
const IconMenu = document.getElementById('IconMenu');
const linksNavBar__mobile = document.querySelector('.linksNavBar__mobile');

IconClosed.addEventListener('click', () => {
    linksNavBar__mobile.style.display = 'none';
});
IconMenu.addEventListener('click', () => {
    linksNavBar__mobile.style.display = 'flex';
});