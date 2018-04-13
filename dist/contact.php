<?php 

if(isset($_POST['name'])) {

    // define variables and set to empty values
    $ERR_NAME = $ERR_EMAIL = $ERR_MESSAGE = "";
    $NAME = $EMAIL = $MESSAGE = "";
    $honeypot = false;

    if ($_SERVER["REQUEST_METHOD"] == "POST") {

        if(!empty($_REQUEST['company']) && (bool) $_REQUEST['company'] == true) {
            
            $honeypot = true;
            log_spambot($_REQUEST);

        } else {

            if(empty($_POST["name"])) {
                $ERR_NAME = "Manque le nom";
            } else {
                $NAME = test_input($_POST["name"]);
            }
            if(empty($_POST["name"])) {
                $ERR_MAIL = "Manque le mail";
            } else {
                $EMAIL = test_input($_POST["email"]);
            }
            if(empty($_POST["name"])) {
                $ERR_MESSAGE = "Manque le message";
            } else {
                $MESSAGE = test_input($_POST["message"]);
            }
    
            // CONFIGURATION
            $RECIEVER   = "bureaudessindebroux@gmail.com";
            $FROM       = "From: $NAME <$EMAIL>\r\nReturn-path: $EMAIL";
            $SUBJECT    = "[bureaudessindebroux.be] Message reçu de $NAME ($EMAIL)";
    
            // MAIL SERVICE
            mail($RECIEVER, $SUBJECT, $MESSAGE, $FROM);
            
            // REDIRECTION
            header('Location: index.html?message=message sent#target--contact');
            
        }
        
    }
}

function test_input($data) {
  $data = trim($data);
  $data = stripslashes($data);
  $data = htmlspecialchars($data);
  return $data;
}

?>