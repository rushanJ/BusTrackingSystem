<?php
session_start();
$userName=$_REQUEST['email'];
$pass=$_REQUEST['pass'];

include "config.php";
$sql = "SELECT * FROM `user` WHERE `email` = '$userName' AND `pass` = '$pass' AND `conf`=1 ;";
$result = $conn->query($sql);

echo $sql;
if ($result->num_rows > 0) {
    // output data of each row
    while($row = $result->fetch_assoc()) {
        $id=$row["uniID"];
        //echo $id;
        //setcookie("user", $id, time() + (86400 * 30), "/");
        $_SESSION["uniId"] = $id;
        header("Location:../home.html"); 
        exit;
    }
} else {
 header("Location:../index.html"); 
 exit;
}
$conn->close()

?>