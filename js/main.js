'use strict';
let menuIcon = document.querySelector('.menu__icon');
let menuBody = document.querySelector('.menu__body');

menuIcon.addEventListener('click', () =>{
    menuIcon.classList.toggle('change');
    if(menuBody.style.display != 'block'){
        menuBody.style.display = 'block';  
    }else{
        menuBody.style.display = 'none';
    }
});