<?php
    if(!session_start()) {
		echo "Unexpected Error. Please Try Again";
		exit;
	}

    
    
    if (!isset($_SESSION["loggedIn"]))
    {
        echo "Unexpected Error. Please Try Again.";
        exit;
    }
    $user = $_SESSION["loggedIn"];
    if (!isset($_GET["winnings"]))
    {
        echo "Unexpected Error. Please Try Again.";
        exit;
    }

    $winnings = $_GET["winnings"];
//    echo "<br>Logged In : " . $user;

    if (!$user)
    {
        exit;
    }

//    echo "<br>Winnings = " . $winnings;

    require 'permissions.php';
    $mysqli = new mysqli($dbhost, $dbuser, $dbpass, $dbname);

    if ($mysqli->connect_error) 
    {
        $error = 'Error: ' . $mysqli->connect_errno . ' ' . $mysqli->connect_error;
        echo "Connection Error. Please Try Again.";
        exit;
    }

    $creditQuery= "SELECT * FROM blackjack WHERE user = '$user';";

    $creditCheck = $mysqli->query($creditQuery); 
    $credit = $creditCheck->fetch_assoc();

    if ($credit['winnings'] > $winnings)
    {
        echo "Too bad! You didn't win as much this time...";
        $creditCheck->close();
        $mysqli->close();
        exit;
    }

    $query = "UPDATE blackjack SET winnings = '$winnings' WHERE user = '$user';";

    $mysqliResult = $mysqli->query($query);

    echo "Winnings = " . $winnings;

    echo "<br>Log In To Record Higest Score";

    $creditCheck->close();
    $mysqli->close();
?>