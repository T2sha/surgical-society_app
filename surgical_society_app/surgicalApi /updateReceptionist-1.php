<?php

if($_SERVER['REQUEST_METHOD'] != 'POST'){
    exit;
}

include 'db_connection.php'; 

$request_body = file_get_contents('php://input');
$data = json_decode($request_body);

$id = $data->id;
$name = $data->name; 
$age = $data->age;
$gender = $data->gender;
$email = $data->email;
$password = $data->password;
$phone_number= $data->contact;
$rank = $data->rank; 



$sql = "UPDATE Receptionist SET name='$name', age='$age',gender='$gender',email='$email',password='$password',rank='$rank' WHERE id='$id';";

$result = mysqli_query($conn, $sql);

if(!$result){
    echo ("Error Description: " . mysqli_error($conn));
} else {
    echo ("All is Goood! User was Updated");
}
?>