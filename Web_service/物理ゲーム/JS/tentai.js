"use strict"
{
    //クリックしたらアニメーション開始
    function Anime(){
        let start = Date.now(); //アニメーションの動く時間
        let mono_start = start; //物体の運動のための時間

        //動く惑星の座標
        let ry = 500;
        let rx = 850;
        let vx = 2;
        let vy = 4;

        //重力場1の座標
        let M = 0; //質量。-が引力、+が斥力になる。
        let My = 500;
        let Mx = 700;

        //重力場2の座標
        let M2 =  -35000; //質量
        let M2y = 500;
        let M2x = 1200;

        let r = Math.sqrt((rx-Mx)*(rx-Mx) + (ry-My)*(ry-My));  //点電荷と重力場1の距離
        let r2 = Math.sqrt((rx-M2x)*(rx-M2x) + (ry-M2y)*(ry-M2y)); //点電荷と重力場2の距離

        //setIntervalは20msごとに実行される。第2引数より。
        let timer = setInterval(() => {
            let keika = Date.now() - mono_start;
            let anime_time = Date.now() - start;

            console.log(r2);
            if(anime_time >= 10000 || r2 < 60){
                clearInterval(timer);
            }

            draw(keika);

        }, 10);
        
        function draw(time){
            
            let t = time / 8000;

            r = Math.sqrt((rx-Mx)*(rx-Mx) + (ry-My)*(ry-My));   //彗星と重力場1の距離の計算
            r2 = Math.sqrt((rx-M2x)*(rx-M2x) + (ry-M2y)*(ry-M2y)); //彗星と重力場2の距離の計算
            
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

            gazo.style.top = ry + 'px';
            gazo.style.left = rx + 'px';
        }
        
        function Tentai(t, x, y, m, r){
            //彗星と重力場1の計算
            vx += (rx-x)/(r*r*r) * M * t;
            vy += (ry-y)/(r*r*r) * M * t;

            rx += vx*t;
            ry += vy*t;
            
            rx += vx*t;
            ry += vy*t;
        }
    }

    let bt = document.getElementById("btn");

    bt.addEventListener("click", Anime, false);
}