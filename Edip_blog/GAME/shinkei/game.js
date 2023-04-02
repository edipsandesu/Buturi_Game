"use strict"

{
    const pair = 10;  //カードのペアの数
    let ransu_flag = Array(pair+1);  //カードの数字をランダムに発生させるための配列
    let ransu; //乱数
    let card_first = null;  //1枚目にめくったカードを記憶する
    let card_second = null; //2枚目にめくったカードを記憶する
    let count = 0;  //めくった回数を記憶
    let start_time;  //開始時間
    let run_time = false; //時間計測がすでに始まっているかどうかを記憶
    let pair2 = 0; //揃えたペア数を記憶。全て揃ったらゲーム終了

    function init(){
        ransu_flag.fill(0);
        for(let i=1; i<=pair*2; i++){
            /*乱数を生成しランダムな数字のカードを生成する。
            作れるカードの枚数は2度まで。要素数が2未満の数字だけ許可*/       
            while(1){
                ransu = Math.floor(Math.random() * pair) + 1;
                if(ransu_flag[ransu] < 2){
                    document.getElementById("box").appendChild(createCard(ransu));
                    ransu_flag[ransu]++;
                    break;
                }
            }
        }
    }

    function createCard(num){
        let card;
        let omote;
        let ura;

        //divタグで要素をつくり、class名、テキストを設定していく。設定したら親要素に追加する。

        //表
        omote = document.createElement("div");
        omote.className = "omote";
        omote.innerHTML = num;

        //裏
        ura = document.createElement("div");
        ura.className = "ura";
        ura.innerHTML = "?";

        //カード全体
        card = document.createElement("div");
        card.className = "card";
        card.appendChild(omote);
        card.appendChild(ura);

        /*カードができ終わった時点でこのカードがクリックされていたらひっくり返す。
        カードが開いていたらイベントは発生しない。イベントが発生してしまうと1枚目が2枚目としてカウントされるからである。
        addEventListernerの外側で"card hiraku"じゃない場合に実行するというような条件分岐はしない。何故なら選択されてない
        段階ではどのcardを指しているのか不明であり、クリックしてからではもうaddEventListnerは作動してしまうから。
        よってaddEventListenerの中でkaesu関数を呼び出さないように条件分岐*/
        card.addEventListener("click",function(){
            if(card.className != "card hiraku"){
                    kaesu(this);
                if(!run_time){
                    document.getElementById("start").className="";
                    run_time=true;
                    start_time = performance.now();  //一枚目をめくるときの時間を記録する。
                    runtimer();
                }
            }
        });

        return card;
    }

    //カードをひっくり返す関数
    function kaesu(card){
        if(card_first == null || card_second == null){
           // if(card.className == "card hiraku"){
             //   return;
          //  }
            count++;
            card.className = "card hiraku";
            if(count % 2 == 1){
                card_first = card;
            } else{
                card_second = card;
                /*transitionendはこの命令を指定するとこの命令が
                終わるまでは1つ1つの処理が完全に終わるまで次の処理に移行しない*/
                card_second.addEventListener("transitionend",check);  //2枚めくった時点で正誤判定
            }
        }
    }

    function check(){
        if(card_first.children[0].textContent != card_second.children[0].textContent){
            card_first.className = "card";
            card_second.className = "card";
        }else{
            pair2++; //2枚とも同じだったら1ペア揃ったので加算
        }
        card_second.removeEventListener("transitionend",check);
        card_first = null;
        card_second = null;
    }

    function runtimer(){
        //小数点以下2桁までの時間を表示。10ミリ秒(0.01秒)ごとにruntimer関数を呼び出して時間を更新。
        document.getElementById("time").textContent = ((performance.now() - start_time) / 1000).toFixed(2);
        const timeoutID = setTimeout(function(){
            runtimer();
        }, 10);
        if(pair2 == pair){
            clearTimeout(timeoutID);  //全てのペアが揃ったら時間計測終了
        }
    }

    init();

}