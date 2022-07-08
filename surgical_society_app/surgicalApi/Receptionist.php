<?php

//ensures that there aren't any duplicates
if($_SERVER['REQUEST_METHOD'] != 'POST'){
    exit;
}

include 'db_connection.php';

header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: * ");

$request_body = file_get_contents('php://input');
$data = json_decode($request_body);

//print_r($data);
$name = $data->name;
$surname = $data->surname;
$age = $data->age;
$gender = $data->gender;
$phone = $data->phone;
$email = $data->email;
$password = $data->password;
$passwordCon = $data->PasswordCon;
$con = mysqli_connect("localhost:8889");
my_select_db($con,"office");

$sql = "insert into Receptionist(
    name,
    surname,
    age,
    gender,
    phone,
    email,
    password,
    passwordCon,
)
values(
    '$name',
    '$surname',
    '$age',
    '$gender',
    '$phone',
    '$email',
    '$password,
    '$passwordCon',

)";
$result = mysqli_query($con,$sql);

if($result){

    $response['data']=array(
     'status' => 'valid'
    );
    echo json_encode($response);
}
else{
    $response['data']=array(
      'status'  => 'invalid'
    );
    echo json_encode($response);
}
?>