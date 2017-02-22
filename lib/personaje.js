Personaje = function(){

    //PROPIEDADES
    this.alto = 69;
    this.ancho = 200;
    this.posx = 10;
    this.posy = 240;
    this.posyMin = 240;
    this.posyMax = 480 - this.alto;
    this.aceleracion = 10;
    this.incrementoTamano = 2;
    this.movimientoPersonaje = '';
    this.imagen = '';

    //METODOS
    this.mover = function(){

        /*if(movimientoPersonaje == 'arriba'){
            if(this.posy - this.aceleracion > this.posyMin){
                this.posy -= this.aceleracion;
                //AL SUBIR EL PERSONAJE REDUCIMOS SU TAMAÑO PARA HACER EFECTO PROFUNCIDAD
                this.ancho -= this.incrementoTamano;
                this.alto -= this.incrementoTamano;
                this.posyMax = 480 - this.alto;
            }
            
        }

        if(movimientoPersonaje == 'abajo'){
            if(this.posy + this.aceleracion < this.posyMax){
                this.posy += this.aceleracion;
                //AL BAJAR EL PERSONAJE AUMENTAMOS SU TAMAÑO PARA HACER EFECTO PROFUNCIDAD
                this.ancho += this.incrementoTamano;
                this.alto += this.incrementoTamano;
                this.posyMax = 480 - this.alto;
            }
        }*/

        if(this.movimientoPersonaje == 'acelerar'){
            this.posx += this.aceleracion;
        }
        this.movimientoPersonaje = '';
        
    }

    this.pintar = function(){

        contexto.drawImage(this.imagen,this.posx,this.posy,this.ancho,this.alto);
        //PINTAMOS LA RUEDA TRASERA
        contexto.drawImage(rueda,this.posx+28,this.posy+50,32,30);
        //PINTAMOS LA RUEDA DELANTERA
        contexto.drawImage(rueda,this.posx+148,this.posy+48,32,30);

    }

    this.setPosY = function(posiciony){

        this.posy = posiciony;

    }

    this.setMovimientoPersonaje = function(movi){

        this.movimientoPersonaje = movi;

    }

    this.setImage = function(img){

        this.imagen = img;

    }

}
