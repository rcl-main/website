/*!
* Start Bootstrap - Creative v7.0.6 (https://startbootstrap.com/theme/creative)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-creative/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

    // Activate SimpleLightbox plugin for portfolio items
    new SimpleLightbox({
        elements: '#portfolio a.portfolio-box'
    });

});


function updateTimer() {
    future = Date.parse("nov 12, 2022 9:00:00");
    now = new Date();
    diff = future - now;

    if (diff < 0) {
        document.getElementById("event-start").style.display = 'block';
        document.getElementById("timer").style.display = 'none';
    }
    else {
        days = Math.floor(diff / (1000 * 60 * 60 * 24));
        hours = Math.floor(diff / (1000 * 60 * 60));
        mins = Math.floor(diff / (1000 * 60));
        secs = Math.floor(diff / 1000);

        d = days;
        h = hours - days * 24;
        m = mins - hours * 60;
        s = secs - mins * 60;

        document.getElementById("timer")
            .innerHTML =
            '<div>' + d + '<span>Days</span></div>' +
            '<div>' + h + '<span>Hours</span></div>' +
            '<div>' + m + '<span>Minutes</span></div>' +
            '<div>' + s + '<span>Seconds</span></div>';
    }
}
setInterval('updateTimer()', 1000);
