<?php
    if (!isset($_POST["createUser"]) || !isset($_POST["createPass"]))
    {
        echo "Please Try Again.";
        exit;
    }

    $user = $_POST["createUser"];
    $pass = $_POST["createPass"];

//    if (!is_null($user))
//    {
//    }
//    else
//    {
//    }

//Start of Database stuff

    require 'permissions.php';
    $mysqli = new mysqli($dbhost, $dbuser, $dbpass, $dbname);

    if ($mysqli->connect_error) 
    {
        $error = 'Error: ' . $mysqli->connect_errno . ' ' . $mysqli->connect_error;
        echo "Connection Error. Please Try Again.";
        exit;
    }

    $user = $mysqli->real_escape_string($user);
    $pass = $mysqli->real_escape_string($pass);

    $query = "INSERT INTO blackjack (user, pass, winnings) VALUES ('$user', '$pass', 0)";

    $mysqliResult = $mysqli->query($query);



    if ($mysqliResult) {
        
        echo "Creation Successful<br>Log In To Record Higest Score";
    } 
    else 
    {
      $error = 'Username already being used';
      echo $error;
      exit;
    }

    
?>