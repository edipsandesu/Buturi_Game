"use strict"
{

    const g = 9.8; //重力加速度。m/s^2
    const e = 0.7; //反発係数
    const kaku = Math.PI/2.5;
    const v0 = 120; //初速度 m/s
    const H = 700;  //地面の位置

    /*
    let can = document.getElementById("canvas");
    let mono = can.getContext("2d");

    mono.arc(0,700,10,0,2*PI,false);
    mono.fill();
    */

    //クリックしたらアニメーション開始

    function Anime(){
        let start = Date.now(); //アニメーションの動く時間
        let mono_start = start; //物体の運動のための時間
        let y = 0;  //高さ
        let x = 0;  //横の距離
        let v_prev; //前の速度
        let v_now = v0; //今の速度
        let ground_x = 0;   //跳ね返った地点の横の距離
        let ground_flag = 0; //地面に

        //setIntervalは20msごとに実行される。第2引数より。
        let timer = setInterval(() => {
            //地面に落ちたら跳ね返る。時間をリセットする。H以上に設定するとHになった時点でt=0となりずっと700のままで進まなくなるため+1している。
            if(y >= H + 1){
                ground_x = x;
                v_prev = v_now;
                v_now = v_prev * e;
                mono_start = Date.now();
                ground_flag = 0;
            }

            let keika = Date.now() - mono_start;
            let anime_time = Date.now() - start;

            if(anime_time >= 5000){
                clearInterval(timer);
            }

            draw(keika);

        }, 10);

        
        function draw(time){
            let t = time / 50;

            //放物線の式
            y = 1/2*g*t*t - v_now*t*Math.sin(kaku) + H;
            x = v_now*Math.cos(kaku) * t + ground_x;
            console.log(t);
            gazo.style.top = y + 'px';
            gazo.style.left = x + 'px';
        }
    }

    let bt = document.getElementById("btn");

    bt.addEventListener("click", Anime, false);
}