<?php
$id=$_REQUEST["shedule"];
$tody=date("Y-m-d");
header("Content-Type: application/json; charset=UTF-8");
include_once "config.php";
$sql = "SELECT `user` .* FROM `subscription`,`user` WHERE `user`.`id`= `subscription`.`id` AND `subscription`.`shedule`='$id'";
echo $sql;
//SELECT `shedule`.*,count(`subscription`.`id`) FROM `shedule`,`subscription` WHERE `subscription`.`id`=`shedule`.`id`AND`shedule`.`id`='1'
// $obj = json_decode($_GET["x"], false);

$stmt = $conn->prepare($sql);
// $stmt->bind_param("ss", $obj->table, $obj->limit);
$stmt->execute();
$result = $stmt->get_result();
$outp = $result->fetch_all(MYSQLI_ASSOC);

echo json_encode($outp);
?>