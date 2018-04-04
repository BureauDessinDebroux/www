<?php 

    if(isset($_POST['message'])) {

        $name       = $_POST['name']; 
        $mail       = $_POST['mail']; 
        $message    = $_POST['message'];

        echo 'Name = ' . $name;
        echo 'Mail = ' . $mail;
        echo 'Message = ' . $message;

    }

?>