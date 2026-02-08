const ANIMATION_UP = [
    '.h2-FEATURES', '.h2-CATEGORIES',
    '.p-CATEGORIES', '.img-ABOUT-top',
    '.all-courses-H2', '.faq-h2', '.services-h2',
];
ANIMATION_UP.forEach(element => {
    ScrollReveal().reveal(element, {
        delay: 200,
        duration: 999,
        distance: '130px',
        origin: 'top',
        easing: 'ease-in-out',
        reset: true
    });
});



const ANIMATION_BOTTOM = [
    '.p-FEATURES', '.box-2', '.box-3', '.category-course-2',
    '.category-course-3', '.category-course-6',
    '.category-course-7', '.img-ABOUT-bottom',
    '.btn-bottom', '.all-courses-P', '.faq-p','.services-p',

];
ANIMATION_BOTTOM.forEach(element => {
    ScrollReveal().reveal(element, {
        delay: 200,
        duration: 999,
        distance: '130px',
        origin: 'bottom',
        easing: 'ease-in-out',
        reset: true
    });
});


const ANIMATION_BOTTOM2 = [
    '.cards_10',
    '.accordion-color-heading-1',
    '.accordion-color-heading-2',
    '.accordion-color-heading-3'
];
ANIMATION_BOTTOM2.forEach(element => {
    ScrollReveal().reveal(element, {
        delay: 500,
        duration: 999,
        distance: '230px',
        origin: 'bottom',
        easing: 'ease-in-out',
        reset: true
    });
});


const ANIMATION_RIGTH = [
    '.hero-info', '.box-1', '.category-course-1', '.category-course-5', '.h2-ABOUT', '.p-ABOUT',
    '.li-ABOUT-right',
];
ANIMATION_RIGTH.forEach(element => {
    ScrollReveal().reveal(element, {
        delay: 200,
        duration: 999,
        distance: '230px',
        origin: 'right',
        easing: 'ease-in-out',
        reset: true
    });
});



const ANIMATION_LEFT = [
    '.hero-img', '.box-4', '.category-course-4', '.category-course-8', '.li-ABOUT-left',
    '.faq-img',
];
ANIMATION_LEFT.forEach(element => {
    ScrollReveal().reveal(element, {
        delay: 200,
        duration: 999,
        distance: '230px',
        origin: 'left',
        easing: 'ease-in-out',
        reset: true
    });
});