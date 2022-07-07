<?php
        if ($_SERVER['REQUEST_METHOD'] != 'POST') {
            exit;
        }
        header('Access-Control-Allow-Origin: *');
        header("Access-Control-Allow-Headers: * ");



    include 'db_connection.php';

    $request_body = file_get_contents('php://input');
    $data = json_decode($request_body);

    $message = $data->message;


    $sql = "INSERT INTO events(id, message) VALUES (NULL,'$message');";
    $result = mysqli_query($conn, $sql);


    if(!$result) {
        echo "Error";
    } else {
        echo "It worked";
    }
?>