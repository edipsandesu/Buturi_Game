<?php

function h($s){
  return htmlspecialchars($s, ENT_QUOTES, "UTF-8");
}

//CSRF対策。このフォームから送られたデータかどうかを確かめる処理
session_start();

function setToken(){
  $token = sha1(uniqid(mt_rand(), true));
  $_SESSION['token'] = $token;
}

function checkToken(){
  if(empty($_SESSION['token']) || ($_SESSION['token'] != $_POST['token'])){
    echo "不正な投稿が行われました！";
  }
}

//投稿されたコメントをテキストフィルニ保存し、サイトに一覧表示する処理
if($_SERVER['REQUEST_METHOD'] == 'POST'){
  $message;
  $user = "名無しさん";
  if($_POST['kanso'] != NULL){
    checkToken();
    $message = $_POST['kanso'];
    if($_POST['user'] != NULL){
      $user = $_POST['user'];
    }

    $postedAt = date('Y-m-d H:i:s');
    $newdata = $message . "\t" . $user . "\t" . $postedAt . "\n";

    $fp = fopen($datafile,'a');
    fwrite($fp,$newdata);
    fclose($fp);
  }
} else{
  setToken();
}

$kanso = file($datafile, FILE_IGNORE_NEW_LINES);
$kanso = array_reverse($kanso);
?>