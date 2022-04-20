let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {

    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}

// window.addEventListener('scroll', menu.onclick);
// window.addEventListener('click', menu.onclick);
// onclick.window = () => {

// }