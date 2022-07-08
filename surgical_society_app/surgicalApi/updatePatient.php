<?php 


header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: * ");

include 'db_connection.php';

$request_body = file_get_contents('php://input');
$data = json_decode($request_body);

$name = $data->name;
$number = $data->number;
$aid = $data->aid;
$id = $data->id;

$sql = "UPDATE patients SET name='$name',phone_number='$number',medical_aid_number='$aid'WHERE id='$id';";
$result = mysqli_query($conn, $sql); 

if(!$result){
    echo ("Error Description: " . mysqli_error($conn));
} else {
    echo ("All is Goood! Appointment was updated.");
} 
?>