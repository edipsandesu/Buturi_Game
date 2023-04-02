<?php
date_default_timezone_set('Asia/Tokyo');
include("head.php");
?>
  <title>エディップのブログ</title>
  <link rel="stylesheet" href="CSS/Home_Style.css">
  <!--google上のハンバーガーメニューのリンク-->
  <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
</head>
<body>
<header>
    <nav class="navigation">
      <div class="menu-toggle">
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
      </div>
      <ul class="nav-menu">
        <li><a href="#">ホーム</a></li>
        <li><a href="#">ブログ概要</a></li>
        <li><a href="#">イラスト</a></li>
        <li><a href="#">ゲーム</a></li>
      </ul>
    </nav>
  </header>

  <main>
    <div class="idou">
      <label>月別アーカイブ</lable>
      <select id="select">
        <option>見たい月を選択してください</option>
        <option>1月</option>
        <option>2月</option>
        <option>3月</option>
        <option value="akaibu/akaibu_2022_4.php">4月</option>
        <option>5月</option>
        <option>6月</option>
        <option>7月</option>
        <option>8月</option>
        <option>9月</option>
        <option>10月</option>
        <option>11月</option>
        <option value="akaibu/akaibu_2021_12.php">12月</option>
      </select>
    </div>

    <div class="box">
      <div class="blog_title">
        <div class="time_2021_12">
          <a href="blog_file/No1.php">はじめまして</a>
          <br><br>
          <a href="blog_file/No2.php">Web開発の勉強の進捗</a>
          <br><br>
          <a href="blog_file/No3.php">就職先での様子</a>
          <br><br>
          <a href="blog_file/No4.php">実質懲役</a>
          <br><br>
          <a href="blog_file/No5.php">初休日</a>
          <br><br>
          <a href="blog_file/No6.php">あけおめ</a>
          <br><br>
          <a href="blog_file/No7.php">退社、そして今後</a>
        </div>
      </div>
  </main>
  <!--
  <footer>
    <a href="https://twitter.com/edipsandesu" target="_blank">Twitterの本垢</a><br>
    <a href="https://twitter.com/bobuchantinchan" target="_blank">Twitterのおそ松さん垢</a>
  </footer>
  -->
  <script src="JS/home.js"></script>
</body>
</html>