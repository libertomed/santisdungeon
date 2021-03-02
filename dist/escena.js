class Escena {
    constructor(texto, image = null, tiempo = 0) {
        this._opciones = new Array();
        this._texto = texto;
        this._image = image;
        this.tiempo = tiempo;
    }
    agregarOpciones(opcion) {
        this._opciones.push(opcion);
    }
    retorno() {
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
export { Escena };
//# sourceMappingURL=escena.js.map