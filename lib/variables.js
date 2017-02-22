var personajeimagen = new Image();
personajeimagen.src = "img/coche.png";
var personaje2imagen = new Image();
personaje2imagen.src = "img/coche2.png";
var rueda = new Image();
rueda.src = "img/rueda.png";
var personaje = new Personaje();
personaje.setImage(personajeimagen);
/*var personaje2 = new Personaje();
personaje2.setImage(personaje2imagen);
personaje2.setPosY(300);*/
var lienzo = '';
var contexto = '';
var temporizador = '';
var movimientoPersonaje = '';