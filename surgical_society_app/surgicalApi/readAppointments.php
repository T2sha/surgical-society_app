<?php 
    include 'db_connection.php';
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Headers: *');


    $request_body = file_get_contents('php://input');
    $data = json_decode($request_body);

    $sql = "SELECT * FROM appointments;";
    $result = mysqli_query($conn, $sql);
    $resultCheck = mysqli_num_rows($result);


    if($resultCheck > 0){

        $emparray = array();

        while($row = mysqli_fetch_assoc($result)){
            $emparray[] = $row;
        }

        $array = $emparray;

        echo json_encode($array);


    } else {
        echo "false";
    }
?>