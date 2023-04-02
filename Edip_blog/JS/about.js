"use strict"

{
    function page(){
        const m = document.getElementById("select");

        if(m.value == "akaibu/akaibu_2022_4.php"){
            location.href = m.value;
        }

        if(m.value == "akaibu/akaibu_2021_12.php"){
            location.href = m.value;
        }
    }

    document.getElementById("select").onchange = page;

    let open = document.getElementById("open");
    let menu_close = document.querySelector(".menu_close");
    let close = document.getElementById("close");

    open.addEventListener("click", function(){
        menu_close.classList.add("show");
        open.classList.add("not");
    });

    close.addEventListener("click", function(){
        menu_close.classList.remove("show");
        open.classList.remove("not");
    });
}