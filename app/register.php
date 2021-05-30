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
            header("Location: ../recorded.php");
        } else {
            if (isset($_SESSION["points"])) {
                unset($_SESSION["points"]);
            }
            echo "Error";
            header("Location: ../error.php");
        }
    } else {
        if (isset($_SESSION["points"])) {
            unset($_SESSION["points"]);
        }
        echo "This user already exists";
        header("Location: ../userexits.php");
    }
}
?>