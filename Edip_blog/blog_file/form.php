<form action="" method="post">
    名前:<input type="text" name="user">
    <br>
    感想:<textarea name="kanso"></textarea>
    <input type="submit" value="投稿">
    <input type="hidden" name="token" value="<?php echo h($_SESSION['token']); ?>">
  </form>
  <h2>感想一覧(<?php echo count($kanso); ?>件)</h2>
  <ul>
    <?php   
    if (count($kanso)){ 
      foreach($kanso as $post){
        list($message, $user, $postedAt) = explode("\t", $post);
    ?>
    <li>
    <?php echo h($message);?> (<?php echo h($user);?>) - <?php echo h($postedAt); 
      }
    }
    ?>
</li>
  </ul>