<?php 

if ( isset($_POST['name']) ) {

        $name = $_POST['name'];
        $separated = explode(" ", $name);

        if ( isset($separated[0]) ) {
            $firstName = $separated[0];
            setcookie("firstName", $firstName);
        }

        if ( isset($separated[1]) ) {
            $lastName = $separated[1];
            setcookie("lastName", $lastName);
        }
        
    }

    if ( isset($_POST['email']) ) {

        $email = $_POST['email'];
        setcookie("email", $email);
    }

    header('Location: ./get-started.php');

?>