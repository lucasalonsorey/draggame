$(document).ready(function(){
    lienzo = document.getElementById("lienzo");
    contexto = lienzo.getContext("2d");
    

})

$(document).keydown(function(e){
    
    
    //ACELERAR PERSONAJE
    if(e.which == 39){
        personaje.setMovimientoPersonaje('acelerar'); 
        personaje.mover();     
    }    
    
  
    
})

function loop(){

    //LIMPIAMOS EL CANVAS
    contexto.clearRect(0,0,800,600);

    personaje.pintar();
    //personaje2.pintar();

    //LIMPIAMOS Y CREAMOS EL BUCLE
    clearTimeout(temporizador);
    temporizador = setTimeout("loop()",30);

}