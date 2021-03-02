import { Escena } from "./escena.js";


class Opcion{
    private _texto:string;
    private _escenaSiguiente:Escena;
    _alert : Array<string>;
    sms : number;
    _time : number;

    constructor(texto:string, escena : Escena = null, alerta : Array<string> = null){
        this._texto = texto;
        this._escenaSiguiente = escena;
        this._alert = new Array<string>();
        this._alert = alerta;
        this.sms = 0;
        this._time = 0;
    }
    
    mensajito(){
        if (this._alert != null && this.sms < this._alert.length) {
            alert(this._alert[this.sms]);
            this.sms++;
        }
    }

    resms(){
        this.sms = 0;
    }

    toString(){
        return this._texto;
    }

    get escenaSiguiente() : Escena{
        return this._escenaSiguiente;
    }

    get alerta(){
        return this._alert;
    }
}

export{Opcion};