<?php 
if($_SERVER['REQUEST_METHOD'] != 'POST'){
    exit;
}

include 'db_connection.php';

$request_body = file_get_contents('php://input');
$data = json_decode($request_body);

$newName = $data->newName;
$newSurname = $data->newSurname;
$newAge = $data->newAge;
$newGender = $data->newGender;
$newCellNo = $data->newCellNo;
$newEmail = $data->newEmail;
$newSpecialization = $data->$newSpecialization;
$id = $data->id;

$sql = "UPDATE Doctors SET name='$newName', surname='$newSurname', age='$newAge', gender='$newGender', cellNo='$newCellNo', email='$newEmail', specialization='$newSpecialization' WHERE id = '$id';";
$result = mysqli_query($conn, $sql);

if(!$result){
    echo ("Error Description: " . mysqli_error($conn));
} else {
    echo ("All is Goood! Appointment was updated.");
}
?>