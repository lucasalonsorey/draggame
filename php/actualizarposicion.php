<?php 
session_start();
$bd = new SQLite3('../bd/draggame.sqlite');
$posx = '';

if(isset($_POST['posx'])){
    $posx = $_POST['posx'];
}


//ACTUALIZAMOS LA POSICION X DEL JUGADOR
$tblJugadoresGrabar = $bd->prepare("UPDATE jugadores SET posx = :posx WHERE idjugador = :id");
$tblJugadoresGrabar->bindValue(':posx',$posx);
$tblJugadoresGrabar->bindValue(':id',$_SESSION['jugador']);
$tblJugadoresGrabar->execute();

echo $posx.' - '.$_SESSION['jugador'];

?>