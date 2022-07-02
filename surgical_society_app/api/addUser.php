<?php

include 'db_connection.php';

header("Access-Control-Allow-Origin: * ");
header("Access-Control-Allow-Headers: * ");

$request_body = file_get_contents('php://input');
$data = json_decode($request_body);

$names = $data->names;
$email = $data->email;
$contact = $data->contact;
$username = $data->username;
$password = $data->password;


?>