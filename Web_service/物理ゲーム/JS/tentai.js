"use strict"
{
    //クリックしたらアニメーション開始
    function Anime(){
        let start = Date.now(); //アニメーションの動く時間
        let mono_start = start; //物体の運動のための時間

        //動く惑星の座標
        let y = 500;
        let x = 850;
        let vx = 4;
        let vy = 6;

        //重力場1の座標
        let M = -20000; //質量。-が引力、+が斥力になる。
        let My = 500;
        let Mx = 700;

        //重力場2の座標
        let M2 =  -45000; //質量
        let M2y = 500;
        let M2x = 1200;

        let r = Math.sqrt((x-Mx)*(x-Mx) + (y-My)*(y-My));  //点電荷と重力場1の距離
        let r2 = Math.sqrt((x-M2x)*(x-M2x) + (y-M2y)*(y-M2y)); //点電荷と重力場2の距離

        //setIntervalは20msごとに実行される。第2引数より。
        let timer = setInterval(() => {
            let keika = Date.now() - mono_start;
            let anime_time = Date.now() - start;

            console.log(r2);
            if(anime_time >= 20000 || r2 < 40){
                clearInterval(timer);
            }

            draw(keika);

        }, 10);
        
        function draw(time){
            
            let t = time / 8000;

            r = Math.sqrt((x-Mx)*(x-Mx) + (y-My)*(y-My));   //彗星と重力場1の距離の計算
            r2 = Math.sqrt((x-M2x)*(x-M2x) + (y-M2y)*(y-M2y)); //彗星と重力場2の距離の計算
            
            /*
            //彗星と重力場1の計算
            vx += (rx-Mx)/(r*r*r) * M * t;
            vy += (ry-My)/(r*r*r) * M * t;

            rx += vx*t;
            ry += vy*t;

            //彗星と重力場2の計算
            vx += (rx-M2x)/(r2*r2*r2) * M2 * t;
            vy += (ry-M2y)/(r2*r2*r2) * M2 * t;

            rx += vx*t;
            ry += vy*t;
            */

            Tentai(t, Mx, My, M, r);
            Tentai(t, M2x, M2y, M2, r2);

            gazo.style.top = y + 'px';
            gazo.style.left = x + 'px';
        }
        
        function Tentai(t, mx, my, m, r){
            //彗星と重力場1の計算
            vx += (x-mx)/(r*r*r) * m * t;
            vy += (y-my)/(r*r*r) * m * t;

            x += vx*t;
            y += vy*t;
            
            x += vx*t;
            y += vy*t;
        }
    }

    let bt = document.getElementById("btn");

    bt.addEventListener("click", Anime, false);
}