<?php

header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: * ");
include 'db_connection.php';

$request_body = file_get_contents('php://input');
$data = json_decode($request_body);

$first = $data->first;
$last = $data->last;
$age = $data->age;
$gender = $data->gender;
$phone = $data->phone;
$password = $data->password;
$email = $data->email;
$image = $data->password;

$age = intval($age);
$phone = intval($age);
$password = intval($password);


$sql = "INSERT INTO receptionist(id, name, age, gender, email, password, `phone number`, rank) VALUES (NULL, '$first $last','$age','$gender','$email','$password','$phone','Assistan Receptionist');";
$result = mysqli_query($conn, $sql);


if(!$result) {
    echo "Error";
} else {
    echo "It worked";
}

?>