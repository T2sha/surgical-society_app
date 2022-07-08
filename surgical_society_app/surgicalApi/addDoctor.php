<?php
    header('Access-Control-Allow-Origin: *');
    header("Access-Control-Allow-Headers: * ");

    if ($_SERVER['REQUEST_METHOD'] != 'POST') {
        exit;
    }


    include 'db_connection.php';

    $request_body = file_get_contents('php://input');
    $data = json_decode($request_body);

    $image = $data->img;
    $name = $data->name;
    $last = $data->last;
    $age = $data->age;
    $gender = $data->gender;
    $email = $data->email;
    $number = $data->number;
    $special = $data->special;

    list($type, $image) = explode(';', $image);
    list(, $image)      = explode(',', $image);
    $image = base64_decode($image);

    $newPath = 'profiles/' . time() . '.jpg';
 
    file_put_contents($newPath, $image);

    $sql = "INSERT INTO doctors (id, name, age, gender, email, phone, specialisation, img) VALUES (NULL,'$name  $last','$age','$gender','$email','$number','$special','$newPath');";
    
    $result = mysqli_query($conn, $sql);


    if(!$result) {
        echo "Error";
    } else {
        echo "It worked";
    }
?>