<?php 

echo '2';

if(isset($_POST['name'])) {

    $NAME       = $_POST['name'];
    $EMAIL      = $_POST['mail'];
    $MESSAGE    = $_POST['message'];


    // CONFIGURATION
    $RECIEVER   = "wollsale@gmail.com";
    $FROM       = "From: $NAME <$EMAIL>\r\nReturn-path: $EMAIL";
    $SUBJECT    = "Nouveau message reçu de $NAME";

    mail($RECIEVER, $SUBJECT, $MESSAGE, $FROM);

    echo 'sent';
}

?>