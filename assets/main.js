window.onscroll = function showHeader() {

    let header = document.querySelector('.header');

    if (window.pageYOffset > 0) {
        header.classList.add('header_fixed');
    } else {
        header.classList.remove('header_fixed');
    }

    let logo = document.querySelector('.logo_header');
    let navs = document.querySelectorAll('.nav');
    let cap = document.querySelector('.cap');

    if (window.pageYOffset > 990) {
        cap.classList.add('black_cap');
    } else {
        cap.classList.remove('black_cap');
    }
}
//media burger menu
//========================================
const hamb = document.querySelector('#hamb');
const popup = document.querySelector('#popup');
const menu = document.querySelector('#menu').cloneNode(1);

hamb.addEventListener("click", hambHandler);

function hambHandler(e) {
    e.preventDefault();
    popup.classList.toggle("open");
    renderPopup();
}

function renderPopup() {
    popup.appendChild(menu);
}