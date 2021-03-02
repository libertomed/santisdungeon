class Opcion {
    constructor(texto, escena = null, alerta = null) {
        this._texto = texto;
        this._escenaSiguiente = escena;
        this._alert = new Array();
        this._alert = alerta;
        this.sms = 0;
        this._time = 0;
    }
    mensajito() {
        if (this._alert != null && this.sms < this._alert.length) {
            alert(this._alert[this.sms]);
            this.sms++;
        }
    }
    resms() {
        this.sms = 0;
    }
    toString() {
        return this._texto;
    }
    get escenaSiguiente() {
        return this._escenaSiguiente;
    }
    get alerta() {
        return this._alert;
    }
}
export { Opcion };
//# sourceMappingURL=opcion.js.map