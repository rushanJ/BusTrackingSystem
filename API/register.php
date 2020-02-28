<?php
include 'config.php';
header("Content-Type: application/json; charset=UTF-8");

$studentID= $_POST['studentID'];
$name= $_POST['name'];
$role= $_POST['role'];
$uname= $_POST['uname'];
$pass= $_POST['pass'];
    

$sql = 
"INSERT INTO `user` (`id`, `studentID`, `name`, `role`, `uname`, `pass`) VALUES ('','$studentID','$name','$role', '$uname', '$pass')
ON DUPLICATE KEY UPDATE
`name`='$name',
`uname`='$uname',
`pass`='$pass'
;
";
//echo $sql;
if(mysqli_query($conn, $sql)){
    $myObj=new \stdClass();
    $myObj->status = 1;
    $myJSON = json_encode($myObj);
    echo $myJSON;
} else{
    $myObj=new \stdClass();
    $myObj->status = 0;
    $myJSON = json_encode($myObj);
    echo $myJSON;
}
mysqli_close($conn);

?>
