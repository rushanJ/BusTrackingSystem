<?php
include 'config.php';
$vehicleNo= $_POST['vehicleNo'];    

$sql = 
"INSERT INTO `bus` (`id`, `vehicleNo`) VALUES ('','$vehicleNo')
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
