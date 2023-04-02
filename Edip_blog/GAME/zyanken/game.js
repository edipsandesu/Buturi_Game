"use strict"

{
    let card_flag = 0; /*カード処理中かどうかの判定用変数。処理中は1としてクリックイベントを起こさないようにする*/
    let syudan = ["グー","チョキ","パー"];
    

    function init(){
        for(let i = 0; i < 3; i++){
            document.querySelector(".box1").appendChild(createCard(syudan[i]));
        }
        for(let i = 0; i < 3; i++){
            document.querySelector(".box2").appendChild(createCard2(syudan[i]));
        }
    }

    function createCard(text){
        let card;  //グローバル変数ににcard,card_front,card_backを持っていくと後にくるカードの内容に上書きされてしまうから変数は中に入れる
        let card_front;
        let card_back;
        card = document.createElement("div");
        card.className="card";

        card_front = document.createElement("div");
        card_front.className="card-front";
        card_front.textContent = text;

        card_back = document.createElement("div");
        card_back.className="card-back";
        card_back.textContent = "?";

        card.appendChild(card_front);
        card.appendChild(card_back);
        
        return card;
    }

    function createCard2(text){
        let card;
        let card_front;
        let card_back;
        card = document.createElement("div");
        card.className="card";

        card_front = document.createElement("div");
        card_front.className="card-back";
        card_front.textContent = text;

        card_back = document.createElement("div");
        card_back.className="card-front";
        card_back.textContent = "?";

        card.appendChild(card_front);
        card.appendChild(card_back);

        //カードがクリックされたら選択状態にする
        card.addEventListener("click", function(){
            if(card_flag == 0){
                //カードをめくったらフラグを1にして2枚閉じるまでは他のカードを開けないようにする
                card_flag = 1;
                card.className = "card change";
                //選択状態になったらbox1の方のカードをランダムにひっくり返す。
                openCard(card);
            }
        });

        return card;
    }

    function openCard(card){
        let rand = Math.floor(Math.random()*3);
        let card_box1 = document.querySelector(".box1").childNodes[rand];
        card_box1.className = "card open";

        //カードが開かれたときに勝利判定を行う
        katimake(card, card_box1);
        
        setTimeout(function(){
            card_box1.className = "card";
            card.className = "card";
        }, 1000);

        //カードが2枚とも閉じ終わったら再びめくれるようにする
        setTimeout(function(){
            card_flag = 0;
        }, 1500);
    }

    function katimake(card, card_box1){
        let hantei = document.querySelector(".hantei");

        if(card_box1.childNodes[0].textContent == card.childNodes[0].textContent){
            hantei.textContent = "あいこ";
        }

        if(card_box1.childNodes[0].textContent == "グー"){
            if(card.childNodes[0].textContent == "パー"){
                hantei.textContent = "勝ち";
            }

            if(card.childNodes[0].textContent == "チョキ"){
                hantei.textContent = "負け";
            }   
        }

        if(card_box1.childNodes[0].textContent == "チョキ"){
            if(card.childNodes[0].textContent == "グー"){
                hantei.textContent = "勝ち";
            }

            if(card.childNodes[0].textContent == "パー"){
                hantei.textContent = "負け";
            }   
        }

        if(card_box1.childNodes[0].textContent == "パー"){
            if(card.childNodes[0].textContent == "チョキ"){
                hantei.textContent = "勝ち";
            }

            if(card.childNodes[0].textContent == "グー"){
                hantei.textContent = "負け";
            }   
        }
    }

    init();
}