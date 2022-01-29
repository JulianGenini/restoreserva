//Reserva de mesas

// *** QUIERO QUE EL USUARIO INGRESE CUÁNTAS PERSONAS COMEN POR MESA ***

let cubierto;

//Función
function conteoCubiertos() {

    //Ingresa personas que van a comer
    let cubierto = prompt('Ingrese cantidad de personas en la mesa o ESC para salir').toUpperCase();

    //Bucle para repetir el prompt hasta que el usuario quiera salir

    while (cubierto != 'ESC') {
        //Muestra cada mesa ingresada
        alert('Usted ha reservado una mesa para ' + cubierto);
        console.log(cubierto);
        cubierto = prompt('Ingrese cantidad de personas en la mesa o ESC para salir').toUpperCase();
    }
    alert('Gracias por utilizar nuestro servicio!');
}

conteoCubiertos();

////////////////////////////////////////////////////////////

// DESAFIO COMPLEMENTARIO //

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

// Método para buscar la posición 

let obtenerIndice = categorias.indexOf('BEBIDAS');
console.log(obtenerIndice);