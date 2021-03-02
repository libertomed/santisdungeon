import { Escena } from "./escena.js";


class Obra{

    _obra:Array<Escena>;
    
    constructor(){
        this._obra = new Array<Escena>();
    }

    ayadirEscena(escena : Escena){
        this._obra.push(escena);
    }

    actuar(){
        console.log(this._obra[0]);
        console.log(this._obra[0].opciones[0]);
        console.log(this._obra[0].opciones[1]);
    }
}


export{ Obra };