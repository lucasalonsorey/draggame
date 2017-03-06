$(document).ready(function(){
    lienzo = document.getElementById("lienzo");
    contexto = lienzo.getContext("2d");
    

})
var contador = 1;

$(document).keydown(function(e){
    
    
    //ACELERAR PERSONAJE
    if(e.which == 39){
        personaje.setMovimientoPersonaje('acelerar');
        
        personaje.setImage(cochemiguel[contador]);
        if(contador < 9){
            contador++; 
        }else{
            contador=1;
        }
        console.log(cochemiguel[contador]);
    
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