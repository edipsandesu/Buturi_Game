"use strict"

{
    function page(){
        if(document.getElementById("select").value == "akaibu_2021_12.php"){
            location.href = "akaibu_2021_12.php";
        }

        if(document.getElementById("select").value == "akaibu_2022_4.php"){
            location.href = "akaibu_2022_4.php";
        }
    }
    
    document.getElementById("select").onchange = page;

    //ハンバーガーメニューの動作
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