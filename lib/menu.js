$(document).ready(function(){
    $("#menucrearpartida").click(function(){
        $("#nuevapartida").fadeIn();
    })       
    
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
            }else if(respuesta[1] == 0){

            }
        });
    })
})