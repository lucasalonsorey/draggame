$(document).ready(function(){
    
    //MOSTRAMOS EL FORMULARIO PARA CREAR UNA NUEVA PARTIDA
    $("#menucrearpartida").click(function(){
        $("#nuevapartida").fadeIn();
    }) 
    
    //MOSTRAMOS EL FORMULARIO PARA ENTRAR EN UNA PARTIDA
    $("#menuentrarpartida").click(function(){
        $("#entrarpartida").fadeIn();
    }) 
    
    //PEDIMOS EL NOMBRE DE LA PARTIDA Y EL NICK, SI SE CREA CORRECTAMENTE MOSTRAMOS LA LLAVE PARA ENTRAR EN LA PARTIDA
    //ES UN MD5 DE PHP, EL CONTRINCANTE TENDRA QUE INTRODUCIRLA PARA ENTRAR EN LA PARTIDA.
    $("#crearpartida").click(function(e){
        e.preventDefault();
        $.ajax({
            method: "POST",
            url: "php/crearpartida.php",
            data: { nombre: $("#nombrepartida").val(), nick: $("#nick").val() }
        })
        .done(function(msg) {
            var respuesta = msg.split("-");
            //SI ES 1 FUE CORRECTO
            if(respuesta[0] == 1){
                //MOSTRAMOS LA LLAVE PARA ENTRAR A LA PARTIDA
                $("#llavepartida").html(respuesta[1]);
                personaje = new Personaje();
                personaje.setImage(personajeimagen);
            }else if(respuesta[1] == 0){
                console.log("error");
            }
        });
    })
    
    //UNA VEZ CREADA LA PARTIDA, MOSTRAMOS YA EL JUEGO, SOLO SE VERA NUESTRO COCHE
    //HASTA QUE EL CONTRINCANTE SE CONECTE
    $("#empezar").click(function(e){
        e.preventDefault();        
        setTimeout("loop()",1000);
        $("#menujuego").fadeOut();
        $("#nuevapartida").fadeOut();
    })     
    
    //PEDIMOS EL NICK Y LA LLAVE PARA ENTRAR EN LA PARTIDA
    $("#empezarpartida").click(function(e){
        e.preventDefault();
        $.ajax({
            method: "POST",
            url: "php/entrarpartida.php",
            data: { llave: $("#llaveentrar").val(), nick: $("#nickentrar").val() }
        })
        .done(function(msg) {
            //console.log(msg);
            personaje2 = new Personaje();
            personaje2.setImage(personajeimagen2);
        });
    })
    
    //UNA VEZ CREADA LA PARTIDA, MOSTRAMOS YA EL JUEGO, SOLO SE VERA NUESTRO COCHE
    //HASTA QUE EL CONTRINCANTE SE CONECTE
    $("#empezarpartida").click(function(e){
        e.preventDefault();        
        setTimeout("loop()",1000);
        $("#menujuego").fadeOut();
        $("#entrarpartida").fadeOut();
    }) 
})