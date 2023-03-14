"use strict"
{
    const PI = Math.PI;
    const g = 9.80665;

    let x = 0;
    let y = 0;
    let sita = 0;

    //振り子運動のアニメーション
    function Anime(){
        console.log("a");
        let start = Date.now(); //アニメーションの動く時間
        let mono_start = start; //物体の運動のための時間

        //setIntervalは10msごとに実行される。第2引数より。
        let timer = setInterval(() => {
            let keika = Date.now() - mono_start;
            let anime_time = Date.now() - start;

            if(anime_time >= 30000){
                clearInterval(timer);
            }

            draw(keika);

        }, 10);

        draw();
    }

    //振り子運動の計算と描写
    function draw(time){
        let t = time / 1000;

        let mono = document.getElementById("gazo");

        x++;
        y++;
        
        mono.style.top = y + "px";
        mono.style.left = x + "px";
    }

    document.getElementById("btn").addEventListener("click", Anime, false);
}