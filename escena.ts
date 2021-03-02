import { Opcion } from "./opcion.js";

class Escena {
    private _texto : string;
    private _opciones : Array<Opcion>;
    private _image: string;
    tiempo : number;

    constructor(texto:string, image: string = null, tiempo : number = 0){
        this._opciones = new Array<Opcion>();
        this._texto = texto;
        this._image = image;
        this.tiempo=tiempo
    }


    agregarOpciones(opcion: Opcion){
        this._opciones.push(opcion);
    }

    retorno(){
        return this._opciones[0];
    }

    get opciones() {
        return this._opciones;
    }

    get texto() {
        return this._texto;
    }
 
    get imagen() {
        return this._image;
    }
    
}


export{Escena};
