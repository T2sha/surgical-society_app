<?php
        header('Access-Control-Allow-Origin: *');
        header("Access-Control-Allow-Headers: * ");

    if ($_SERVER['REQUEST_METHOD'] != 'POST') {
        exit;
    }


    include 'db_connection.php';

    $request_body = file_get_contents('php://input');
    $data = json_decode($request_body);

    $pat = $data->pat;
    $doc = $data->doc;
    $date = $data->date;


    $sql = "INSERT INTO appointments(id, name, date, doctor) VALUES (NULL,'$pat','$date','$doc')";
    $result = mysqli_query($conn, $sql);


    if(!$result) {
        echo "Error";
    } else {
        echo "It worked";
    }
?>