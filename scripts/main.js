import '/styles/style.scss';
import '/styles/typography.scss';
import '/styles/utilities.scss';
import '/styles/navbar.scss';
import '/styles/menu.scss';
import '/styles/header.scss';
import '/styles/locations.scss';
import '/styles/about.scss';
import '/styles/activities.scss';
import '/styles/support.scss';
import '/styles/testimonials.scss';
import '/styles/accordion.scss';
import '/styles/conversion.scss';
import '/styles/footer.scss';


let openMenuBarBtn = document.getElementById('js-open-menu-btn');

openMenuBarBtn.addEventListener('click', openMenuBar);

function openMenuBar() {
    if (document.getElementById('js-menu')) return;

    let menuBar = document.createElement('div');

    menuBar.className = 'menu';
    menuBar.id = 'js-menu';

    menuBar.innerHTML = `
                        
                          <div class="menu__top" id="js-menu__top">
                
                            <button class="close-menu-btn" id="js-close-menu-btn" aria-label="close menu" type="button">
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                              </svg>
                            </button>
                
                          </div>
                
                          <div class="menu-bottom">
                            
                            <ul class="menu__list">
        
                              <li class="menu__item"><a class="menu__link" href="https://fintech-website-six.vercel.app/">Home</a></li>
        
                              <li class="menu__item"><a class="menu__link" href="#locations">Locations</a>
        
                                <span class="menu__item-arrow">
                                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"   class="size-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                                  </svg>
                                </span>
                                
                                <ul class="menu__dropdown">
                                  <li class="menu__dropdown-item"><a class="menu__dropdown-link" href="#locations">Europe</a></li>
                                  <li class="menu__dropdown-item"><a class="menu__dropdown-link" href="#locations">Asia</a></li>
                                  <li class="menu__dropdown-item"><a class="menu__dropdown-link" href="#locations">Africa</a></li>
                                </ul>
                                
                              </li>

                               <li class="menu__item"><a class="menu__link" href="#activities">Activities</a>

                                <span class="menu__item-arrow">
                                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"   class="size-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                                  </svg>
                                </span>

                                <ul class="menu__dropdown">
                                  <li class="menu__dropdown-item"><a class="menu__dropdown-link" href="#activities">Sightseeing</a></li>
                                  <li class="menu__dropdown-item"><a class="menu__dropdown-link" href="#activities">Adventure</a></li>
                                  <li class="menu__dropdown-item"><a class="menu__dropdown-link" href="#activities">Relaxation</a></li>
                                </ul>

                              </li>
        
                              <li class="menu__item"><a class="menu__link" href="#conversion">Contact Us</a>
        
                                <span class="menu__item-arrow">
                                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"   class="size-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                                  </svg>
                                </span>
        
                                <ul class="menu__dropdown">
                                    <li class="menu__dropdown-item"><a class="menu__dropdown-link" href="#conversion">Support</a></li>
                                    <li class="menu__dropdown-item"><a class="menu__dropdown-link" href="#conversion">Sales</a></li>
                                </ul>
                              </li>
        
                              <li class="menu__item"><a class="menu__link" href="#about">About Us</a></li>
        
                            </ul>
                
                          </div>
                        `;

    document.body.style.overflow = 'hidden';

    document.body.appendChild(menuBar);

    let closeMenuBarBtn = document.getElementById('js-close-menu-btn');

    closeMenuBarBtn.addEventListener('click', closeMenuBar);

    let links = menuBar.querySelectorAll('ul li a');
    links.forEach(link => {
        link.addEventListener('click', closeMenuBar);
    });

    createOverlay();
    activateDropdown();
}

function activateDropdown() {
    let arrows = document.querySelectorAll('.menu__item-arrow');

    arrows.forEach(arrow => {
        let dropdown = arrow.nextElementSibling;

        if (dropdown) {
            arrow.addEventListener('click', function () {
                if (dropdown.style.display === 'block') {
                    dropdown.style.display = 'none';
                } else {
                    dropdown.style.display = 'block';
                }
            });
        }
    });

    rotateArrow();
}

function rotateArrow() {
    let arrows = document.querySelectorAll('.menu__item-arrow');

    arrows.forEach(arrow => {
        arrow.addEventListener('click', function () {
            this.classList.toggle('rotate');
        });
    });
}

function closeMenuBar() {
    let menuBar = document.getElementById('js-menu');

    document.body.style.overflow = 'auto';

    if (menuBar) {
        menuBar.remove();
    }

    removeOverlay();
}

function createOverlay() {
    let overlay = document.createElement('div');

    overlay.className = 'menu__overlay';

    overlay.addEventListener("click", closeMenuBar);

    document.body.appendChild(overlay);
}

function removeOverlay() {
    let overlay = document.querySelector('.menu__overlay');

    if (overlay) {
        overlay.remove();
    }
}

const accordionHeader = document.querySelectorAll(".accordion__header");

accordionHeader.forEach(accordionHeader => {
    accordionHeader.addEventListener("click", event => {
        accordionHeader.classList.toggle("active");
        const accordionBody = accordionHeader.nextElementSibling;

        if (accordionHeader.classList.contains("active")) {
            accordionBody.style.maxHeight = accordionBody.scrollHeight + "px";
        }

        else {
            accordionBody.style.maxHeight = 0;
        }

    });
});