<?php
class Connection {
    private $conn;
    private $dsn;
    private $username;
    private $password;

    public function __construct() {
        $this->dsn = 'mysql:dbname=dokkat_database;host=localhost';
        $this->username = 'dokkat_user';
        $this->password = 'katdok';

        try {
            $this->conn = new PDO($this->dsn, $this->username, $this->password);
        } catch (PDOException $e) {
            echo 'Falló la conexión: ' . $e->getMessage();
        }
    }

    public function insertPuntuation($user, $points) {
        $sql = "insert into dokkat_records values(?, ?)";

        $sth = $this->conn->prepare($sql);
        $result = $sth->execute([$user, $points]);

        return $result? true : false;
    }
    public function getPuntuation() {
        $sql = "select * from dokkat_records order by points desc";

        $sth = $this->conn->prepare($sql);
        $result = $sth->execute();

        return $sth->fetchAll();
    }
    public function checkUser($user) {
        $sql = "select * from dokkat_records where user=?";

        $sth = $this->conn->prepare($sql);
        $result = $sth->execute([$user]);

        if ($sth->rowCount() > 0) {
            return false;
        } else {
            return true;
        }
    }
}
?>