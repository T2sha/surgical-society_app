<?php
    if ($_SERVER['REQUEST_METHOD'] != 'POST') {
        exit;
    }

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
    $image = $data->image;

    $age = intval($age);
    $phone = intval($age);
    $password = intval($password);

    list($type, $image) = explode(';', $image);
    list(, $image)      = explode(',', $image);
    $image = base64_decode($image);

    $newPath = 'profiles/' . time() . '.jpg';
    
    file_put_contents($newPath, $image);

    $sql = "INSERT INTO receptionist(id, img, name, age, gender, email, password, `phone number`, rank) VALUES (NULL, '$newPath', '$first $last','$age','$gender','$email','$password','$phone','Assistan Receptionist');";
    $result = mysqli_query($conn, $sql);


    if(!$result) {
        echo "Error";
    } else {
        echo "It worked";
    }
?>