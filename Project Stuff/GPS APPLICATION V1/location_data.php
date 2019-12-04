<?php
    $location = $_POST["location"];
    $destination = $_POST["destination"];

    if(isset($_POST['submit'])){
        $file_open = fopen("user_data.csv","a");
        $form_data = array(
            'location'    => $location,
            'destination' => $destination
        );
    }
?>