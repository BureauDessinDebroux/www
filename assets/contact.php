<?php 

if(isset($_POST['name'])) {

    // define variables and set to empty values
    $ERR_NAME = $ERR_EMAIL = $ERR_MESSAGE = $ERR_LEGAL = "";
    $NAME = $EMAIL = $MESSAGE = $LEGAL = "";
    $honeypot = false;

    if ($_SERVER["REQUEST_METHOD"] == "POST") {

        if(!empty($_REQUEST['company']) && (bool) $_REQUEST['company'] == true) {
            
            $honeypot = true;
            log_spambot($_REQUEST);

        } else {

            if(empty($_POST["name"])) {
                $ERR_NAME = "Il manque le nom";
            } else {
                $NAME = test_input($_POST["name"]);
            }
            if(empty($_POST["name"])) {
                $ERR_MAIL = "Il manque le mail";
            } else {
                $EMAIL = test_input($_POST["email"]);
            }
            if(empty($_POST["name"])) {
                $ERR_MESSAGE = "Il manque le message";
            } else {
                $MESSAGE = test_input($_POST["message"]);
            }
            if(empty($_POST["legal"])) {
                $ERR_MESSAGE = "Veuillez lire et acceptez les conditions générales d'utilisation";
            } else {
                $LEGAL = true;
            }
    
            // CONFIGURATION
            $RECIEVER   = "bureaudessindebroux@gmail.com";
            $FROM       = "From: $NAME <$EMAIL>\r\nReturn-path: $EMAIL";
            $SUBJECT    = "[bureaudessindebroux.be] Message reçu de $NAME ($EMAIL)";
    
            if($LEGAL == true) {
                // MAIL SERVICE
                mail($RECIEVER, $SUBJECT, $MESSAGE, $FROM);

                // REDIRECTION
                header('Location: index.html?message=message sent#target--contact');
            } else {
                // REDIRECTION
                header('Location: index.html?message=legal error#target--contact');
            }
            
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