"use strict"
{

    /*
    void function toggleMenu() {
        const navMenu = document.querySelector(".nav-menu");
        const bars = document.querySelectorAll(".bar");
        navMenu.classList.toggle("active");
      
        bars.forEach((bar) => {
          bar.classList.toggle("change");
        });
    }
    */
    document.addEventListener("DOMContentLoaded", function () {
        const menuToggle = document.querySelector(".menu-toggle");

        menuToggle.addEventListener("click", function(){
            const navMenu = document.querySelector(".nav-menu");
            const bars = document.querySelectorAll(".bar");
            navMenu.classList.toggle("active");
        
            bars.forEach((bar) => {
            bar.classList.toggle("change");
            });
        });
    });
}
  