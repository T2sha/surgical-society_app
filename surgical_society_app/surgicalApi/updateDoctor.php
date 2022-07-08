<?php 


header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: * ");

include 'db_connection.php';

$request_body = file_get_contents('php://input');
$data = json_decode($request_body);

$name = $data->name;
$number = $data->number;
$specialisation = $data->specialisation;
$id = $data->id;

$sql = "UPDATE doctors SET name='$name', phone='$number',specialisation='$specialisation 'WHERE id='$id';";
$result = mysqli_query($conn, $sql); 

if(!$result){
    echo ("Error Description: " . mysqli_error($conn));
} else {
    echo ("All is Goood! Appointment was updated.");
} 
?>