import { Escena } from "./escena.js";
import { Opcion } from "./opcion.js";
import { Obra } from "./obra.js";
class App {
    main() {
        this.escena1 = new Escena('txt/escena1.html', "img/cueva.jpg", 25000); //23000
        this.escena2 = new Escena('txt/escena2.html', "img/daigual.png", 46000); //46000
        this.escena3 = new Escena('txt/escena3.html', 'img/laberinto.png', 46472);
        this.escena4 = new Escena('txt/escena4.html', 'img/asgard.png', 66674);
        this.escena5 = new Escena('txt/escena5.html', 'img/escena5.gif', 27898);
        this.escena6 = new Escena('txt/escena6.html', 'img/yes.gif', 36482);
        this.escena7 = new Escena('txt/escena7.html', 'img/life.gif', 71040);
        // Configuracion de la escena 1
        this.opcion11 = new Opcion('Empecemos', this.escena2);
        this.opcion21 = new Opcion('Pues no me apetece', this.escena2);
        this.escena1.agregarOpciones(this.opcion11);
        this.escena1.agregarOpciones(this.opcion21);
        this.obra = new Obra();
        this.obra.ayadirEscena(this.escena1);
        // Configuracion de la escena 2
        this.opcion12 = new Opcion('Pa´lante', this.escena3);
        this.opcion22 = new Opcion('Me quedo aqui', this.escena3);
        this.opcion32 = new Opcion('Intentar salir', this.escena2, ['No hagas eso', 'Te he dicho que no hagas eso', 'Santi se va a enfadar',
            'Por favor, no te vonviene ver a santi enfadado', 'Se que piensas "que si no quieren que pulse este boton, ¿porque lo ponen? Sera por algo", pero no es verdad tu pasa de todo',
            'Si no paras el se va a en fadar soy yo', 'Te soltare un sermon sobre alguna refleccion de la vida', 'Ultima oprtunidad, ¡PARA!']);
        this.escena2.agregarOpciones(this.opcion12);
        this.escena2.agregarOpciones(this.opcion22);
        this.escena2.agregarOpciones(this.opcion32);
        this.obra.ayadirEscena(this.escena2);
        // Configuracion de la escena 3
        this.opcion13 = new Opcion('Derecha', this.escena4);
        this.opcion23 = new Opcion('Izquierda', this.escena4);
        this.escena3.agregarOpciones(this.opcion13);
        this.escena3.agregarOpciones(this.opcion23);
        this.obra.ayadirEscena(this.escena3);
        // Configuracion de la escena 4
        this.opcion14 = new Opcion('Hablar con THOR', this.escena5);
        this.escena4.agregarOpciones(this.opcion14);
        this.obra.ayadirEscena(this.escena4);
        // Configuracion de la escena 5
        this.opcion15 = new Opcion('Ayudar a THOR', this.escena6);
        this.escena5.agregarOpciones(this.opcion15);
        this.obra.ayadirEscena(this.escena5);
        // Configuracion de la escena 6
        this.escena6.agregarOpciones(this.opcion16);
        this.escena6.agregarOpciones(this.opcion26);
        this.obra.ayadirEscena(this.escena6);
        // Configuracion de la escena 7
        this.opcion17 = new Opcion('Volver al juego', this.escena3);
        this.escena7.agregarOpciones(this.opcion17);
        this.obra.ayadirEscena(this.escena7);
        this.cargarEscena(this.escena1);
    }
    clickoption(idxOpcion) {
        let opcion = this.escenaActual.opciones[idxOpcion];
        if (opcion.alerta != null) {
            if (opcion.sms >= opcion.alerta.length) {
                opcion.resms();
                this.cargarEscena(this.escena7);
            }
            else {
                opcion.mensajito();
            }
        }
        else {
            this.cargarEscena(opcion.escenaSiguiente);
        }
    }
    cargarEscena(escena) {
        this.escenaActual = escena;
        let image = document.getElementById('image');
        image.src = escena.imagen;
        let divTexto = document.getElementById('texto');
        //divTexto.innerHTML = escena.texto;
        divTexto.data = escena.texto;
        divTexto.style.backgroundColor = 'aliceblue';
        let divOpciones = document.getElementById('opciones');
        while (divOpciones.firstChild) {
            divOpciones.removeChild(divOpciones.firstChild);
        }
        setTimeout(() => {
            let escena = this.escenaActual;
            for (let i = 0; i < escena.opciones.length; i++) {
                let button = document.createElement("input");
                button.type = "button";
                button.addEventListener('click', this.clickoption.bind(this, i));
                button.value = escena.opciones[i].toString();
                divOpciones.appendChild(button);
            }
        }, escena.tiempo);
    }
}
let app = new App;
app.main();
//# sourceMappingURL=app.js.map