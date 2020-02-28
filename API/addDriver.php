<?php
include 'config.php';
header("Content-Type: application/json; charset=UTF-8");
$nic= $_POST['nic'];
$name= $_POST['name'];
$status= $_POST['status'];
$uname= $_POST['uname'];
$pass= $_POST['pass'];    

$sql = 
"INSERT INTO `driver` (`id`, `nic`, `name`, `status`, `uname`, `pass`) VALUES ('','$nic','$name','$status', '$uname', '$pass')
ON DUPLICATE KEY UPDATE
`name`='$name',
`uname`='$uname',
`pass`='$pass'
;
";
//echo $sql;
if(mysqli_query($conn, $sql)){
    $myObj=new \stdClass();
    $myObj->success = true;
    $myJSON = json_encode($myObj);
    echo $myJSON;
} else{
    $myObj=new \stdClass();
    $myObj->success = false;
    $myJSON = json_encode($myObj);
    echo $myJSON;
}
mysqli_close($conn);

?>
