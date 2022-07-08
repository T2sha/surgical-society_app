<?php 

if($_SERVER['REQUEST_METHOD'] != 'POST'){
    exit;
}

include 'db_connection.php';

$request_body = file_get_contents('php://input');
$data = json_decode($request_body);

$id = $data;

$sql = "DELETE FROM events WHERE id = '$id';";
$result = mysqli_query($conn, $sql);

if(!$result){
    echo ("Error Description: " . mysqli_error($conn));
} else {
    echo ("All is Goood! Patient was deleted.");
}

?>