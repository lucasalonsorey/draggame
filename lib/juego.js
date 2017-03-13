$(document).ready(function(){
    lienzo = document.getElementById("lienzo");
    contexto = lienzo.getContext("2d");
    personaje = new Personaje();
    personaje.setImage(cochemiguel[1]);
    personaje2 = new Personaje();
    personaje2.setImage(cochepedro[1]);
})

$(document).keydown(function(e){
    
    
    //ACELERAR PERSONAJE
    if(e.which == 39){
        personaje.setMovimientoPersonaje('acelerar');        
        personaje.setImage(cochemiguel[contadorMiguel]);
        if(contadorMiguel < 9){
            contadorMiguel++; 
        }else{
            contadorMiguel=1;
        }
    
        personaje.mover();
        
        
        //ACELERAMOS EL COCHE DE PEDRO
        personaje2.setMovimientoPersonaje('acelerar');        
        personaje2.setImage(cochepedro[contadorPedro]);
        if(contadorPedro < 9){
            contadorPedro++; 
        }else{
            contadorPedro=1;
        }
    
        personaje2.mover();
        

    }    
    
  
    
})
function loop(){

    //LIMPIAMOS EL CANVAS
    contexto.clearRect(0,0,800,600);
    
    personaje.pintar();
    personaje2.pintar();
    
    //LIMPIAMOS Y CREAMOS EL BUCLE
    clearTimeout(temporizador);
    temporizador = setTimeout("loop()",30);

}