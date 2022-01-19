//Reserva de mesas

//Variable global para guardar lista de mesas

let mesas = '';

//Función
function cubiertos() {

    //Ingresa personas que van a comer
    let personas = parseInt(prompt('Ingrese cantidad de personas en la mesa'));

    //Suma lo ingresado a lo existente
    mesas = mesas + ' ' + personas;

    //Muestra cada mesa ingresada
    alert(personas);

    //Bucle para repetir el prompt hasta que el usuario quiera salir
    while (mesas >= 0) {
        cubiertos();
        if (mesas == 'ESC');
        break;
    }
}

//Mostrar lista de mesas

alert(mesas);




