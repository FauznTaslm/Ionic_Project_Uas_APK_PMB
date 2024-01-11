<?php
    define('DB_NAME', 'dbs_mp_uas');
    define('DB_USER', 'root');
    define('DB_PASSWORD', '');
    define('DB_HOST', 'localhost');

    $kon = mysqli_connect("localhost", "root", "", "dbs_mp_uas") or die(mysqli_error());
?>
