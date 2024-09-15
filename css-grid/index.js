const hamburger = document.getElementById('hamburger');
const menuList = document.getElementById('menu-list');
const cross = document.querySelector(".cross")

    hamburger.addEventListener('click', () => {
      menuList.classList.toggle('show'); 
      
    });
    cross.addEventListener("click",()=>{
        menuList.classList.toggle('show');
    })