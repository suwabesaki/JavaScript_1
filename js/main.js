'use strict';
{
  
    const menu1 = document.getElementById('menu1');
    const content1 = document.getElementById('contents1');
    const menu2 = document.getElementById('menu2');
    const content2 = document.getElementById('contents2');
  

    menu1.addEventListener("click",() =>{
      menu1.classList.toggle("active");
      });
      menu1.addEventListener("click",() =>{
        content1.classList.toggle("active");
      });

    menu2.addEventListener("click",() =>{
      menu2.classList.toggle("active");
      });
      menu2.addEventListener("click",() =>{
        content2.classList.toggle("active");
      });
     
  
  }
  
