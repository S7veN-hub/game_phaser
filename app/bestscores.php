<?php
require_once('Connection.php');

$connection = new Connection();

print_r(json_encode($connection->getPuntuation()));
?>