<?php
$id=$_REQUEST["id"];
$today=date("Y-m-d");
header("Content-Type: application/json; charset=UTF-8");
// $obj = json_decode($_GET["x"], false);

include_once "config.php";
$sql = "SELECT * FROM `shedule` WHERE `driver`='$id'AND `date`='$today'";
$stmt = $conn->prepare($sql);
// $stmt->bind_param("ss", $obj->table, $obj->limit);
$stmt->execute();
$result = $stmt->get_result();
$outp = $result->fetch_all(MYSQLI_ASSOC);

echo json_encode($outp);
?>
