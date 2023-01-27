
// hamburger menu
let menu= document.getElementById('menu');
let openMenu = document.getElementById('open-menu');
let closeMenu = document.getElementById('close-menu');

openMenu.addEventListener('click', function(){
  menu.style.left='0';

});
closeMenu.addEventListener('click', function(){
menu.style.left='-300px';
});




// splide slider
var splide = new Splide( '.splide', {
 rewind : true,
 pagination:false,
});
splide.mount();