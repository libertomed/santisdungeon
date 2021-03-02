class Obra {
    constructor() {
        this._obra = new Array();
    }
    ayadirEscena(escena) {
        this._obra.push(escena);
    }
    actuar() {
        console.log(this._obra[0]);
        console.log(this._obra[0].opciones[0]);
        console.log(this._obra[0].opciones[1]);
    }
}
export { Obra };
//# sourceMappingURL=obra.js.map