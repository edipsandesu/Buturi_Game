"use strict"
{
    //クリックしたらアニメーション開始
    function Anime(){
        let start = Date.now(); //アニメーションの動く時間
        let mono_start = start; //物体の運動のための時間

        //それぞれの天体の質量、座標、速度ベクトル。質量は-が引力
        let MM = [-100, -120000, -500, -200];
        let X = [600, 900, 1400, 400];
        let Y = [1200, 800, 200, 600];
        let Vx = [-3, 0, 6, 6];
        let Vy = [-14, 0, 10, -10];

        //setIntervalは20msごとに実行される。第2引数より。
        let timer = setInterval(() => {
            let keika = Date.now() - mono_start;
            let anime_time = Date.now() - start;

            if(anime_time >= 30000){
                clearInterval(timer);
            }

            draw(keika);

        }, 10);
        
        function draw(time){
            
            let t = time / 8000;
            let c = 10;  //rが極端に小さくなったときに速度が発散してしまうためこれを付け加えて一定の値を保つ

            //天体の軌道計算
            for(let i=0; i < MM.length; i++){
                for(let j = 0; j < MM.length; j++){
                    if(i != j){
                        //対象の星とそれ以外のすべての距離を計算
                        let r = Math.sqrt((X[i] - X[j])*(X[i] - X[j]) + (Y[i] - Y[j])*(Y[i] - Y[j]));

                        if(r < 1){
                            c = 10;
                        }
                        //対象の星とそれ以外の星から力を受けて変化する速度を加える
                        Vx[i] += (X[i]- X[j])/(r*r*r + c)*MM[j]*t;
                        Vy[i] += (Y[i]- Y[j])/(r*r*r + c)*MM[j]*t;
                    }
                }
                X[i] += Vx[i]*t;
                Y[i] += Vy[i]*t;
            }

            //天体の座標の更新
            for(let i=0; i<MM.length; i++){
                let mono = document.querySelectorAll("img")[i];
                mono.style.top = Y[i] + 'px';
                mono.style.left = X[i] + 'px';
            }
            
        }
    }

    let bt = document.getElementById("btn");

    bt.addEventListener("click", Anime, false);
}