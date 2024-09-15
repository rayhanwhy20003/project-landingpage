const ButtonMenu = document.getElementById('button-menu');
const navbar = document.getElementById('navbar-item');
const stick = document.querySelectorAll('.Stick')
ButtonMenu.addEventListener('click', function(){
    stick.forEach(f => {
        f.classList.toggle('active');
    })
    navbar.classList.toggle('slide');
})

const logo = document.querySelector('.logo-client').cloneNode(true);
document.querySelector('.container-client-content').appendChild(logo)

//animation scrool//
ScrollReveal({ 
    reset: true,
    distance: '200px',
    duration:2000,
    delay:200
});

ScrollReveal().reveal('.home',{ origin: 'left' });
ScrollReveal().reveal('.home-container-side',{ origin: 'left' });
ScrollReveal().reveal('.container-deskription',{ origin: 'left' });
ScrollReveal().reveal('.blog-content',{ origin: 'right' });
