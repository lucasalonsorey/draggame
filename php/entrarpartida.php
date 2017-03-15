<?php 
$bd = new SQLite3('../bd/draggame.sqlite');
$nick = '';
$llave = '';

if(isset($_POST['llave'])){
    $llave = $_POST['llave'];
}
 
if(isset($_POST['nick'])){
    $nick = $_POST['nick'];
}

$fuecorrecto = true;
$idjugador = md5($nick.$llave);
//INSERTAMOS EL JUGADOR QUE CREO LA PARTIDA EN LA TABLA JUGADORES
$tblJugadoresGrabar = $bd->prepare("INSERT INTO jugadores (nombre,idpartida,posx,posy,conectado,llave) VALUES (:nick,0,10,300,1,:clave)");
$tblJugadoresGrabar->bindValue(':nick',$nick);
$tblJugadoresGrabar->bindValue(':clave',$llave);
$tblJugadoresGrabar->execute();
$_SESSION['jugador'] = $idjugador;
$_SESSION['clave'] = $llave;

?>