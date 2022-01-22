//Reserva de mesas

// *** QUIERO QUE EL USUARIO INGRESE CUÁNTAS PERSONAS COMEN POR MESA ***

//Función

function conteoCubiertos() {

    //Ingresa personas que van a comer
    let cubierto = prompt('Ingrese cantidad de personas en la mesa o ESC para salir');

    //Muestra cada mesa ingresada
    alert('Usted ha reservado una mesa para ' + cubierto);
    console.log(cubierto);

    //Bucle para repetir el prompt hasta que el usuario quiera salir

    while (cubierto != "ESC") {

        cubierto = prompt('Ingrese cantidad de personas en la mesa o ESC para salir');
        alert('Usted ha reservado una mesa para ' + cubierto);
        console.log(cubierto);
    }
}

conteoCubiertos();




