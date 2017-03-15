$(document).ready(function(){
    lienzo = document.getElementById("lienzo");
    contexto = lienzo.getContext("2d");
    personajes[0] = new Personaje();
    personajes[1] = new Personaje();
    personajes[0].setImage(cochemiguel[1]);
    personajes[1].setImage(cochepedro[1]);
    
})

$(document).keydown(function(e){
    
    
    //ACELERAR PERSONAJE
    if(e.which == 39){
        personajes[0].setMovimientoPersonaje('acelerar');        
        
        personajes[0].mover();
        //ACTUALIZAMOS BASE DE DATOS CON LA POSICION DEL COCHE
        $.ajax({
            method: "POST",
            url: "php/actualizarposicion.php",
            data: { posx: personajes[0].getPosX()}
        })
        
    }
    
})
var contador = 0;
function loop(){

    //LIMPIAMOS EL CANVAS
    contexto.clearRect(0,0,800,600);
    if(contador % 30 == 0){
    //OBTENEMOS LOS JUGADORES 
        $.ajax({
                method: "POST",
                url: "php/obtenerjugadores.php",
                data: {}
            })
            .done(function(msg) {
                var jugadores = JSON.parse(msg);
                for(var j = 0; j<jugadores.length;j++){
                    
                    personajes[j].setPosX(jugadores[j].posicion);
                    
                }
                
            });
    }
    for(var j = 0; j<personajes.length;j++){

        personajes[j].pintar();

    }
    contador ++;
    //personaje.pintar();
    
    
    
    //LIMPIAMOS Y CREAMOS EL BUCLE
    clearTimeout(temporizador);
    temporizador = setTimeout("loop()",30);

}