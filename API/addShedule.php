<?php
include 'config.php';
$date= $_POST['date'];
$time= $_POST['time'];
$start= $_POST['start'];
$end= $_POST['end'];
$status= $_POST['status'];    
$bus= $_POST['bus'];  
$driver= $_POST['driver'];  

$sql = 
"INSERT INTO `shedule` (`id`, `date`, `time`, `start`, `end`, `status`, `bus`, `driver`) VALUES ('','$date','$time','$start', '$end', '$status','$bus', '$driver')
ON DUPLICATE KEY UPDATE
`status`='$status'
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
