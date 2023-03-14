"use strict"
{
    //それぞれの天体の質量、座標、速度ベクトル。質量は-が引力
    let MM = [-150, -120000, -500, -200];
    let X = [600, 900, 1400, 400];
    let Y = [1200, 800, 200, 600];
    let Vx = [-3, 0, 6, 6];
    let Vy = [-14, 0, 13, -10];
   
    //inputからの座標と質量の入力
    let input_x;
    let input_y;
    let input_m;
    let input_vx;
    let input_vy;
    
    //天体運動のアニメーション
    function Anime(){
        let start = Date.now(); //アニメーションの動く時間
        let mono_start = start; //物体の運動のための時間

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

    //inputからの値を配列に追加。そして画像も追加
    function Add(){
        input_m = document.getElementById("situryo").value;
        input_x = document.getElementById("x_zahyo").value;
        input_y = document.getElementById("y_zahyo").value;
        input_vx = document.getElementById("x_syosoku").value;
        input_vy = document.getElementById("y_syosoku").value;

        input_m = parseInt(input_m);
        input_x = parseInt(input_x);
        input_y = parseInt(input_y);
        input_vx = parseInt(input_vx);
        input_vy = parseInt(input_vy);

        MM.push(input_m);
        X.push(input_x);
        Y.push(input_y);
        Vx.push(input_vx);
        Vy.push(input_vy);

        let i = document.createElement("img");
        i.src = "C:/Users/kouzi/Desktop/Web作成勉強用/Web_service/物理ゲーム/Gazo/球体.png"; //DOM操作で画像を追加する際は絶対パスで指定しないと表示されない可能性がある
        i.style.width = 50 +"px";
        i.style.height = 50 + "px";
        i.style.top = input_y + "px";
        i.style.left = input_x + "px";
        i.style.position="absolute";
        document.querySelector(".place").appendChild(i);
    }

    document.getElementById("tuika").addEventListener("click", Add);

    //スタートボタンを押したらAnime関数を呼び出してアニメ開始
    document.getElementById("btn").addEventListener("click", Anime, false);
}