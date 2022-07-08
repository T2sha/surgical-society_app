<?php 
    include 'db_connection.php';
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Headers: *');


    $request_body = file_get_contents('php://input');
    $data = json_decode($request_body);

    $id = $data->id;

    $sql = "DELETE FROM appointments WHERE id='$id';";
    $result = mysqli_query($conn, $sql);


    if(!$result){
        echo ("Error Description: " . mysqli_error($conn));
    } else {
        echo ("Appointment Deleted.");
    }
?>