let prevContainer = document.querySelector('.product__prev');
let prevBox = prevContainer.querySelectorAll('.prev');

document.querySelectorAll('.product__blok .product__bloks').forEach(product =>{
  product.onclick = () =>{
      prevContainer.style.display = 'flex';
      let name = product.getAttribute('data-name')
      prevBox.forEach(prev =>{
       let target = prev.getAttribute('data-trget');
         if( name ==target){
           prev.classList.add('active');
         }
      });
  };
});

prevBox.forEach(close =>{
   close.querySelector('.fa-times').onclick = () =>{
       close.classList.remove('active');
       prevContainer.style.display = 'none';
   };
});


var toogleButton = document.getElementById("toggle");
var iconMenu = document.getElementById("icon-menu");
var menuPanel = document.getElementById("menu-panel");

var loader=document.getElementById("loader");



// ----- toggle menu -----

toogleButton.addEventListener('click', function () {

    menuPanel.classList.toggle('hide-menu');
    if (!menuPanel.classList.contains('hide-menu')) {
        iconMenu.innerHTML = `<i class="bx bx-x"></i>`
    } else {
        iconMenu.innerHTML = `<i class="bx bx-menu"></i>`
    }
});

// ---- toggle menu -----


window.addEventListener("load", function(){
    loader.classList.add('loader-hide');
   
})
