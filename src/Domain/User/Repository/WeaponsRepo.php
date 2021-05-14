<?php


namespace App\Domain\User\Repository;

use mysqli;
use PDO;

class WeaponsRepo
{
    private $connection;

    public function __construct(PDO $connection)
    {
        $this->connection = $connection;
    }

    public function GetAllWeapons()
    {
        $result = "<br>";
        $row = null;
        $sql = 'SELECT * FROM weapon';
        @$mysqli = new mysqli("localhost", "root", "mysql", "mygame");
        $test = $mysqli->query($sql);
        if ($mysqli->affected_rows > 0) {
            while ($enreg = $test->fetch_row()) {
                $result = $result . $enreg[0] . ", Name : " . $enreg[1] . ", type : " . $enreg[2] . ' \\ <br>';
            }
            //$result = "Success";
        } else {
            $result = "No Results";
        }

        return $result;
    }

    public function WeaponCreation($tab):string{
        $sql = "INSERT INTO weapon (name,type,damage,max_ammo) VALUES ('$tab[0]','$tab[1]','$tab[2]','$tab[3]')";
        $req = $this->connection->prepare($sql);
        if($req->execute() == true){
            $result = $tab[0];
        }else {
            $result = "0 Data Created!";
        }
        return $result;
    }

    public function WeaponSupression($_name){
        $name = $_name;
        $sql = "DELETE FROM weapon WHERE name = '$name'";
        $req = $this->connection->prepare($sql);
        if($req->execute() == true){
            $result = $name . "removed!";
        }else {
            $result = "0 Data Removed! ". $_name;
        }
        return $result;
    }

    public function UpdateWeapon($_name,$tab):string{
        $name = $_name;
        $sql = "UPDATE weapon SET type='$tab[0]',damage='$tab[1]' WHERE name = '$name'";
        $req = $this->connection->prepare($sql);
        if($req->execute() == true){
            $result = $name;
        }else {
            $result = "0 Data Affected! <br> ". $name;
        }
        return $result;
    }
}
?>
