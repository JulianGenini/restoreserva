//Reserva de mesas

// *** QUIERO QUE EL USUARIO INGRESE CUÁNTAS PERSONAS COMEN POR MESA ***

let cubierto;

//Función
function conteoCubiertos() {
    //Ingresa personas que van a comer

    //****IMPORTANTE***  || Al declarar la variable sin la palabra reservada, la transforma en una variable GLOBAL
    cubierto = parseInt(prompt('Ingrese cantidad de personas en la mesa'));
    if (!isNaN(cubierto)) {
        alert('Usted ha reservado una mesa para ' + cubierto);

    } else {
        alert('Por favor ingrese la información correcta')
        cubierto = parseInt(prompt('Ingrese cantidad de personas en la mesa'));
    }
}

conteoCubiertos();
console.log(cubierto);

if (isNaN(cubierto)) {
    conteoCubiertos();
}


////////////////////////////////////////////////////////////

// *** ARRAYS ***

const categorias = ['ENTRADAS', 'PLATOS', 'BEBIDAS', 'POSTRES'];

// Objetos

class Producto {
    constructor(id, nombre, precio, categoria) {
        this.id = parseInt(id);
        this.nombre = nombre;
        this.precio = parseFloat(precio);
        this.categoria = categoria;
    }
}

// Array vacio para usar con objetos
const productos = [];

// Método push para agregar objetos al array

productos.push(new Producto(1, 'ENSALADA', 500, categorias[0]));
productos.push(new Producto(2, 'PORCIÓN FRITAS', 500, categorias[0]));
productos.push(new Producto(3, 'CORDERO', 2000, categorias[1]));
productos.push(new Producto(4, 'TRUCHA', 2000, categorias[1]));
productos.push(new Producto(5, 'AGUA', 200, categorias[2]));
productos.push(new Producto(6, 'GASEOSA', 300, categorias[2]));
productos.push(new Producto(7, 'FLAN', 500, categorias[3]));
productos.push(new Producto(8, 'HELADO', 500, categorias[3]));

//Mostrar array en consola
console.log(productos);

//*********** Selección de platos ***********

//Búsqueda

let buscar = prompt('Ya sabe lo que va a pedir? Escriba SI o ingrese cualquier caracter para ver todas las opciones').toUpperCase();

if (buscar == 'SI') {

    entradaBusqueda = prompt('Ingrese lo que desea pedir').toUpperCase();
    encontrado = productos.find(productos => productos.nombre == entradaBusqueda);
    console.log(encontrado);

    if (encontrado) {
        alert('Se agregará ' + encontrado + 'a su orden y será ubicado en una mesa para ' + cubierto + ' personas');

    } else {
        alert('El producto no fue encontrado, a continuación verá las opciones disponibles');
    }

} else {

    //Variable que sirve de acumulador
    let opcionesDisponibles = ""

    //forEach que recorre el array
    productos.forEach((producto) => {
        opcionesDisponibles = opcionesDisponibles + "\n" + producto.nombre
    });

    let platoSeleccion = prompt('Por favor ingrese lo que desea pedir \nLas opciones actualmente disponibles son:\n' + opcionesDisponibles + '\nSi no desea pedir nada, escriba ESC').toUpperCase();

    if (platoSeleccion != 'ESC') {

        alert('Usted ha reservado ' + platoSeleccion + '. En el próximo paso podrá ver el resumen de su pedido.');
        //Mensaje final
        alert('Usted ha solicitado ser atendido en una mesa para ' + cubierto + ' personas ' + 'y su menú elegido es ' + platoSeleccion + '\nGracias por utilizar nuestro servicio!');

    } else {

        alert('Usted no ha reservado ningún menú')
    }
}