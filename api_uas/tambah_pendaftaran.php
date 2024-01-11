<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Credentials: true");
header("Access-Control-Allow-Methods: PUT, GET, POST, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Origin, Content-Type, Authorization, Accept, X-Requested-With, x-xsrf-token");
header("Content-Type: application/json; charset=utf-8");

include "config.php";

$insert = mysqli_query($kon, "INSERT INTO tbl_calon_mhs(`reg_id`,`nama_lengkap`,`jenis_kelamin`,`no_hp`,`email`,`asal_sekolah`,`prodi`,`jenjang_studi`,`kelas`,`info_kampus`,`status`) VALUES('','$_POST[nama_lengkap]','$_POST[jenis_kelamin]','$_POST[no_hp]','$_POST[email]','$_POST[asal_sekolah]','$_POST[prodi]','$_POST[jenjang_studi]','$_POST[kelas]','$_POST[info_kampus]','0')");

        if($insert){
            $result = json_encode(array('error' => false, 'hasil' => 'Data Berhasil Disimpan'));
        }else{
            $result = json_encode(array('error' => true, 'hasil' => 'Data Gagal Disimpan'));
        }
        echo $result;
        


?>

