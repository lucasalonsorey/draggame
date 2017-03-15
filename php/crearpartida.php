<?php 
session_start();
$bd = new SQLite3('../bd/draggame.sqlite');
$nombrepartida = '';
$nick = '';
$clave = '';

if(isset($_POST['nombre'])){
    $nombrepartida = $_POST['nombre'];
}
 
if(isset($_POST['nick'])){
    $nick = $_POST['nick'];
}

$clave = $nombrepartida.$nick.time();
$clave = md5($clave);
$idjugador = md5($nombrepartida.$nick);

$fuecorrecto = true;

//INSERTAMOS LA PARTIDA
$tblPartidasGrabar = $bd->prepare("INSERT INTO partidas2 (nombre,llave) VALUES (:partida,:clave)");
$tblPartidasGrabar->bindValue(':partida',$nombrepartida);
$tblPartidasGrabar->bindValue(':clave',$clave);
$fuecorrecto = $tblPartidasGrabar->execute();

//INSERTAMOS EL JUGADOR QUE CREO LA PARTIDA EN LA TABLA JUGADORES
$tblJugadoresGrabar = $bd->prepare("INSERT INTO jugadores (nombre,idpartida,posx,posy,conectado,llave,idjugador) VALUES (:nick,0,10,240,1,:clave,:idj)");
$tblJugadoresGrabar->bindValue(':nick',$nick);
$tblJugadoresGrabar->bindValue(':clave',$clave);
$tblJugadoresGrabar->bindValue(':idj',$idjugador);
$fuecorrecto = $tblJugadoresGrabar->execute();
$_SESSION['jugador'] = $idjugador;
$_SESSION['coche'] = 0;
$_SESSION['clave'] = $clave;
if($fuecorrecto){
    echo "1-".$clave;
}else{
    echo "0-";
}

?>