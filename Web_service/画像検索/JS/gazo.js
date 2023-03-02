"use strict"
{
    //jqueryでは$()の中にセレクターを書き、jqueryのメソッドを使って操作する。
    //$("#test").text("テスト");のように。これはtestidのテキストにテストを代入するという操作である。
    //今回はアロー関数で記述する。

    /*
    ajax通信の使い方。基本的に以下の構造に沿って処理を記述する。
    $.ajax({
    　url: ‘××××’　//URLまたはディレクトリを記載
    　})
    　.done(function(data){ // 通信が成功したときの処理 
    　})
    　.fail(function(data){ // 通信が失敗したときの処理
    　})
    　.always(function(data){ //通信の成否にかかわらず実行する処理 
    });
    */

    /*GoogleのAPIキーと検索エンジンID*/
    //AIzaSyAsv8T5svLOHa_aTNmgjZS7BUAZCGA4lGk
    //23ccdd161ef8f47d5

    //ajax通信を行って天気のデータを取得する。今日の天気の表示
    //urlからjsonデータを取得してdataに格納する。dataから値を取得する。
    /*
    $.ajax({
        url: 'https://www.jma.go.jp/bosai/forecast/data/overview_forecast/130000.json', //JSON形式のURL
        type: 'GET',
        dataType: 'json',
        //通信成功時の処理
        success: function(data) {
            const data2 = JSON.stringify(data); //stringifyはJSONデータをJSON形式の文字列に変換する
            const test = JSON.parse(data2); //parseはJSON形式の文字列をJavascriptで読めるようにする。
            console.log(test);

            //JSONの文字列データを配列に格納してfor文でまとめて表示
            let arr = ["発表元: "+ test.publishingOffice, "日付: " + test.reportDatetime, "場所: " + test.targetArea, test.text];  

            //既にあるセレクタを使うときは$('セレクタ名')、新しく作るときは$('<セレクタ名')とする。
            //リストを新しく作りulの下にappendToで追加。
            for(let i=0; i<arr.length; i++){
                $('<p>')
                .text(arr[i])
                .appendTo('.tenki');
            } 
        },
        //通信失敗時の処理
        error: function(data){
            alert('通信失敗！');
        }
    });
    */
    
    
    let flag=0;
    const APIkey = "AIzaSyAsv8T5svLOHa_aTNmgjZS7BUAZCGA4lGk";
    const engineID = "23ccdd161ef8f47d5";

    $(()=>{
        $("input[name='kensaku']").click(() => {
            //ajax通信でGoogleAPIから画像データを取得する
            const word = $("input[name=mozi").val();
            console.log(word);
            $.ajax({
                url: "https://www.googleapis.com/customsearch/v1?key=AIzaSyAsv8T5svLOHa_aTNmgjZS7BUAZCGA4lGk&cx=23ccdd161ef8f47d5&q=" + word,
                type: 'GET',
                dataType: 'json',
                //通信成功時の処理
                success: function(data) {
                    let image_arr = new Array(10);  //まとめて表示する画像数は10枚。それを格納する配列
                    const data2 = JSON.stringify(data); 
                    const test = JSON.parse(data2);
                    /*
                    $("<img>")
                    //画像を読み込んで表示する
                    .load(image)
                    .appendTo("#gyazo");
                    */

                    console.log(test);
                    let gazo2 = document.querySelector(".gazo");
                    //img要素を10個生成し、その度に.gazoクラスに新しい画像を追加していく。
                    for(let i=0; i<10; i++){
                        let new_gazo = document.createElement("img");
                        /*strにpagemapを文字列として保存する。そのためにオブジェクトをJSON.stringifyで文字列に変換する。
                        そしてcase_imageという文字列があったときだけ(pagemapの子要素にcse_imageという要素があった時だけ)
                        画像表示の処理を行う*/
                        console.log(i+"回目");
                        let str = JSON.stringify(test.items[i].pagemap);
                        let result = str.indexOf("cse_image");
                        if(result != -1){
                            console.log("a");
                            new_gazo.src = test.items[i].pagemap.cse_image[0].src;
                            gazo2.appendChild(new_gazo);
                        }
                    }

                    $("input[name='mozi']")
                    .val('')
                    .focus();    
                },

                //通信失敗時の処理
                error: function(data){
                    alert('通信失敗！');
                }
            });   

            $("input[name='mozi']")
            .val('')
            .focus();
        });

        $("input[name='clear']").click(() => {
            $("input[name='mozi']")
                .val('');
        });

        /*イベントは主にリストの削除に使われる。ulに含まれるノードをクリックした
        後にその中のそのノード名がliなら削除するという操作*/
        $('ul').click(e => {
            if(e.target.nodeName == 'LI' && confirm("本当に消しますか？")){
                e.target.remove();
            } else{
                return;
            }
        });
    });
}