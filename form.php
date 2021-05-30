<!DOCTYPE html>
<html>
<head>
    <meta charset='utf-8'>
    <meta http-equiv='X-UA-Compatible' content='IE=edge'>
    <title>Register</title>
    <meta name='viewport' content='width=device-width, initial-scale=1'>
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="./css/style2.css">
</head>
<body>
    <?php
        session_start();
        if (isset($_GET["points"])) {
            if (!isset($_SESSION["points"])) {
                $points = $_GET["points"];
                $_SESSION["points"] = $points;
            } else {
                $points = 0;
            }
        } else {
            $points = 0;
        }
    ?>
    <div class="main">
        <h1>
            doKKat <br>
            User Register
        </h1>
        <?php
        if (isset($_GET["points"]) && isset($_SESSION["register"])) {
        ?>
        <form action="./app/register.php" method="post">
            <label for="user">
                Type your user name to record your puntuation in our database.
            </label>
            <input type="text" name="user" id="user" maxlength="15" required="required"><br><br>
            <input type="hidden" name="points" value="<?php echo $points; ?>">
            <input type="submit" value="REGISTER" name="register">
        </form>
        <?php
        }
        ?>
        <div class="points">
            POINTS: <?php echo $points; ?>
        </div>
    </div>
</body>
</html>