"use strict"
{
    const g = 9.80665;

    let x = 0;
    let y = 0;
    let l = Math.sqrt(x*x + y*y); //紐の長さ
    let sita = Math.PI/6; //角度
    let kakusoku = 0;  //各速度

    //振り子運動のアニメーション
    function Anime(){
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

        kakusoku += -g/l*Math.sin(sita)*t;
        sita += kakusoku*t;
        l = Math.sqrt(x*x + y*y);
        x += Math.cos(sita) * l;
        x += Math.sin(sita) * l;
        
        mono.style.top = y + "px";
        mono.style.left = x + "px";
    }

    document.getElementById("btn").addEventListener("click", Anime, false);
}