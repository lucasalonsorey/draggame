Personaje = function(){

    //PROPIEDADES
    this.alto = 69;
    this.ancho = 178;
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
        
        if(this.movimientoPersonaje == 'acelerar'){
            this.posx += this.aceleracion;
        }
        this.movimientoPersonaje = '';
        
    }

    this.pintar = function(){
        
        contexto.drawImage(this.imagen,this.posx,this.posy,this.ancho,this.alto);

    }

    this.setPosY = function(posiciony){

        this.posy = posiciony;

    }
    
    this.setPosX = function(posicionx){

        this.posX = posicionx;

    }

    this.setMovimientoPersonaje = function(movi){

        this.movimientoPersonaje = movi;

    }
    
    this.setImage = function(img){

        this.imagen = img;

    }
    
    this.getMovimientoPersonaje = function(){

        return this.movimientoPersonaje;

    }
    
    this.getPosX = function(){
        return this.posx;
    }
    

}
