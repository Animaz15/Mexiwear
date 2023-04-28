//jshint esversion:6

document.addEventListener('DOMContentLoaded', function(){

    iniciarApp();
});

function iniciarApp(){

    navegacionFija();
    eventListeners();
    scrollNav();
};

function navegacionFija() {
    const barra = document.querySelector('.header');
    const secundaria = document.querySelector('.secundaria');
    const berep = document.querySelector('.berep-logo');
    const mexiwear = document.querySelector('.mexiwear-logo')


    window.addEventListener('scroll', function (){

        if( secundaria.getBoundingClientRect().top < 0) {
            barra.classList.add('fijo');
            berep.classList.add('hidden');
            mexiwear.classList.add('chico');
        } else {
            barra.classList.remove('fijo');
            berep.classList.remove('hidden');
            mexiwear.classList.remove('chico');
        }


    })
};


function scrollNav(){
    const enlaces = document.querySelectorAll('navegacion-principal a');
    enlaces.forEach( enlace => {
        enlace.addEventListener('click', function(e) {

            e.preventDefault();
            const seccionScroll = e.target.attributes.href.value;
            const seccion = document.querySelector(seccionScroll); 
            seccion.scrollIntoView( { behavior: 'smooth'});
        });
    });
}

function eventListeners(){
    const mobileMenu = document.querySelector('.mobile-menu');

    mobileMenu.addEventListener('click', navegacionResponsive);
}

function navegacionResponsive() {
    const navegacion = document.querySelector('.navegacion-principal');

        // navegacion.classList.toggle('mostrar');
   
}