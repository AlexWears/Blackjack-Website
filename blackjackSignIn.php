<?php
    if(!session_start()) {
		header("Location: error.php");
		exit;
	}

    if(!isset($_SESSION["loggedIn"]))
       {
           $_SESSION["loggedIn"]= 0;
       }
    if(!isset($_SESSION["winnings"]))
       {
           $_SESSION["winnings"] = 0;
       }
        
    if (!isset($_POST["signInUser"]))
    {
        echo "Could not confirm User or Password";
        exit;
    }
    if (!isset($_POST["signInPass"]))
    {
        echo "Could not confirm User or Password";
        exit;
    }

    $user = $_POST["signInUser"];
    $pass = $_POST["signInPass"];

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

    $query = "SELECT * FROM blackjack WHERE user = '$user' AND pass = '$pass'";

    $mysqliResult = $mysqli->query($query);

    $match = $mysqliResult->num_rows;
    

    if($match != 1)
    {
        echo "<br>Username or Password is Incorrect<br>Log Out to Try Again";
        $mysqliResult->close();
        $mysqli->close();
        exit;
    }
    else
    {
        $_SESSION["loggedIn"] = $user;
        
        $trash = $mysqliResult->fetch_assoc();
        $winnings = $trash['winnings'];
        
        echo "Current Highest Score: " . $winnings . "<br>Sign Out To Save Your Highest Score!";
        
        $mysqliResult->close();
        $mysqli->close();
        exit;
    }
?>