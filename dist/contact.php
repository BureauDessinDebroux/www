<?php 

if(isset($_POST['name'])) {

    // define variables and set to empty values
    $NAME = $EMAIL = $MESSAGE = "";

    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $NAME       = test_input($_POST["name"]);
        $EMAIL      = test_input($_POST["email"]);
        $MESSAGE    = test_input($_POST["message"]);
    }

    // CONFIGURATION
    $RECIEVER   = "wollsale@gmail.com";
    $FROM       = "From: $NAME <$EMAIL>\r\nReturn-path: $EMAIL";
    $SUBJECT    = "[bureaudessindebroux.be] Nouveau message reçu de $NAME ($EMAIL)";

    mail($RECIEVER, $SUBJECT, $MESSAGE, $FROM);

    var_dump($NAME);
    var_dump($EMAIL);
    var_dump($MESSAGE);

}

function test_input($data) {
  $data = trim($data);
  $data = stripslashes($data);
  $data = htmlspecialchars($data);
  return $data;
}

?>