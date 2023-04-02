"use strict"
{

    let gamen = document.querySelector(".gamen");
    let val = Array(16);
    let ans = 0; //演算結果

    for(let i=0; i < 16; i++){
        val[i] = document.querySelectorAll(".val")[i];
    }

    for(let i=0; i< 10; i++){
        val[i].addEventListener("click",function(){
                gamen.textContent += val[i].textContent;
        });
    }
    
    for(let i=11; i<15; i++){
        val[i].addEventListener("click",function(){
            gamen.textContent += val[i].textContent;
        });
    }
}