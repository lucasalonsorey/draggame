<!DOCTYPE html>
<html lang="en">
    <head>
        <title>Drag Game</title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link href="css/estilos.css" rel="stylesheet" />
        <script type="text/javascript" src="./js/jquery-3.1.1.min.js" ></script>
        <script type="text/javascript" src="./lib/personaje.js" ></script>
        <script type="text/javascript" src="./lib/variables.js" ></script>
        <script type="text/javascript">
            
        </script>
        <script type="text/javascript" src="./lib/menu.js" ></script>
        <?php include('includes/juegojs.php'); ?>
    </head>
    <body> 
            <div id="juego">
                <div id="menujuego">
                    <div class="opcion" id="menucrearpartida">Crear Partida</div>
                    <div class="opcion" id="menuentrarpartida">Entrar en Partida</div>
                </div>
                <div id="nuevapartida">
                    <form>
                        <label for="nombrepartida">Nombre Partida</label>
                        <input type="text" name="nombrepartida" id="nombrepartida" />
                        <label for="nick">Nick</label>
                        <input type="text" name="nick" id="nick" />
                        <button id="crearpartida">Crear</button>
                        <span id="llavepartida"></span>
                        <button id="empezar">Empezar</button>
                    </form>
                </div>
                <div id="entrarpartida">
                    <form>                        
                        <label for="nickentrar">Nick</label>
                        <input type="text" name="nickentrar" id="nickentrar" />
                        <label for="llaveentrar">Llave</label>
                        <input type="text" name="llaveentrar" id="llaveentrar" />
                        <button id="empezarpartida">Empezar</button>
                    </form>
                </div>
                <canvas id="lienzo" width="800" height="600"></canvas>
            </div>
    </body>
</html>