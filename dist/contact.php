<?php 

    if(isset($_POST['name'])) {

        $name       = $_POST['name']; 
        $mail       = $_POST['mail']; 
        $message    = $_POST['message'];

        echo $name;
        echo $mail;
        echo $message;

    }

?>