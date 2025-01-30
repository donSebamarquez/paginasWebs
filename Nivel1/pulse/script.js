const menubtn = document.querySelector('.navbar__menu');
const menulinks = document.querySelector('.navbar__links');
const main = document.querySelector('.card__main');
const footer = document.querySelector('.card__footer');

menubtn.addEventListener("click", function() {
    menulinks.classList.toggle('active');  
    main.classList.toggle('deactive');     
    footer.classList.toggle('deactive'); 
});
