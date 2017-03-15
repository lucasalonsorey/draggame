<?php 
$bd = new SQLite3('../bd/draggame.sqlite');
$posx = '';

if(isset($_POST['posx'])){
    $posx = $_POST['posx'];
}


//ACTUALIZAMOS LA POSICION X DEL JUGADOR
$tblJugadoresGrabar = $bd->prepare("UPDATE jugadores SET posx = :posx WHERE id = :id");
$tblJugadoresGrabar->bindValue(':posx',$posx);
$tblJugadoresGrabar->bindValue(':id',$llave);
$tblJugadoresGrabar->execute();

?>