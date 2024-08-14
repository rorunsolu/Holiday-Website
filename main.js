import '/styles/style.scss';
import '/styles/navbar.scss';
import '/styles/header.scss';
import '/styles/locations.scss';
import '/styles/about.scss';
import '/styles/activities.scss';
import '/styles/packages.scss';
import '/styles/footer.scss';

// change nav style on scroll
window.addEventListener('scroll',
    function () {
        document.querySelector('nav').classList.toggle('window-scrolled', window.scrollY > 0);
    });

const nav = document.querySelector('.navbar__links');
const openNavButton = document.querySelector('#navbar__toggle-open');
const closeNavButton = document.querySelector('#navbar__toggle-close');

const openNav = function () {
    nav.style.display = 'flex';
    openNavButton.style.display = 'none';
    closeNavButton.style.display = 'inline-block';
};

openNavButton.addEventListener('click', openNav);

const closeNav = function () {
    nav.style.display = 'none';
    openNavButton.style.display = 'inline-block';
    closeNavButton.style.display = ('none');
};

closeNavButton.addEventListener('click', closeNav);

if (document.body.clientWidth < 1024) { // this is a conditional STATEMENT not  conditional FUNCTION
    nav.querySelectorAll('li a').forEach(navLink => {
        navLink.addEventListener('click', closeNav);
    });
}