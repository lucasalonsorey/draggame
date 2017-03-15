<?php
session_start();
$bd = new SQLite3('../bd/draggame.sqlite');

//ACTUALIZAMOS LA POSICION X DEL JUGADOR
$tblJugadoresGrabar = $bd->prepare("SELECT * FROM jugadores WHERE llave = :llave");
$tblJugadoresGrabar->bindValue(':llave',$_SESSION['clave']);
$resultados = $tblJugadoresGrabar->execute();
$aJugadores = array();
if ($resultados->numColumns()) { // returns column count, here being used as true/false test
  while($fila = $resultados->fetchArray(SQLITE3_ASSOC)) { // query #2
    $pos = count($aJugadores);
    $aJugadores[$pos]['nombre'] = $fila['nombre'];
    $aJugadores[$pos]['posicion'] = $fila['posx'];
    $aJugadores[$pos]['coche'] = $pos;
  }
}

print_r(json_encode($aJugadores));
?>