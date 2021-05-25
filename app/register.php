<?php
require_once('Connection.php');
session_start();

if (isset($_POST["register"])) {
    $user = $_POST["user"];
    $points = $_POST["points"];

    $connection = new Connection();

    if ($connection->checkUser($user)) {
        if ($connection->insertPuntuation($user, $points)) {
            if (isset($_SESSION["register"])) {
                unset($_SESSION["register"]);
            }
            echo "Recorded";
        } else {
            if (isset($_SESSION["points"])) {
                unset($_SESSION["points"]);
            }
            echo "Error";
        }
    } else {
        if (isset($_SESSION["points"])) {
            unset($_SESSION["points"]);
        }
        echo "This user already exists";
    }
}
?>