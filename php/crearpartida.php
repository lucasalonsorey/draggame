<?php 
session_start();
$bd = new SQLite3('../bd/draggame.sqlite');
$nombrepartida = '';
$nick = '';
$clave = '';

if(isset($_POST['nombrepartida'])){
    $nombrepartida = $_POST['nombrepartida'];
}

if(isset($_POST['nick'])){
    $nick = $_POST['nick'];
}

$clave = $nombrepartida.$nick.time();
$clave = md5($clave);

$fuecorrecto = true;

//INSERTAMOS LA PARTIDA
$tblPartidasGrabar = $bd->prepare("INSERT INTO partidas VALUES (:partida,:clave)");
$tblPartidasGrabar->bindValue(':partida',$nombrepartida);
$tblPartidasGrabar->bindValue(':clave',$clave);
$tblPartidasGrabar->execute();

if($tblPartidasGrabar->lastErrorCode() != 0){
    $fuecorrecto = false;
}

//INSERTAMOS EL JUGADOR QUE CREO LA PARTIDA EN LA TABLA JUGADORES
$tblJugadoresGrabar = $bd->prepare("INSERT INTO jugadores VALUES (:nick,0,10,240,1,:clave)");
$tblJugadoresGrabar->bindValue(':nick',$nick);
$tblJugadoresGrabar->bindValue(':clave',$clave);
$tblJugadoresGrabar->execute();

if($tblJugadoresGrabar->lastErrorCode() != 0){
    $fuecorrecto = false;
}

if($fuecorrecto){
    echo "1-".$clave;
}else{
    echo "0-";
}

?>