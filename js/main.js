//Reserva de mesas

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

// *** QUIERO QUE EL USUARIO INGRESE CUÁNTAS PERSONAS COMEN POR MESA ***

let cubierto = document.getElementById("ingresoCubiertos").value;

// SELECCION ENTRADA

// Recorrer el array para que busque las entradas

const productosEntrada = productos.filter(producto => producto.categoria == 'ENTRADAS');
console.log(productosEntrada);

//Generar opciones en HTML

if (productosEntrada.length > 0) {

    let select = document.getElementById('entrada');

    select.innerHTML = `<option> ${productosEntrada.nombre} </option>`;

}


// SELECCION PLATO PRINCIPAL

// Recorrer el array para que busque lo deseado

const XXXXX = productos.filter(producto => producto.categoria == 'PLATOS');
console.log(XXXXX);


// SELECCION PLATO POSTRES

// Recorrer el array para que busque lo deseado

const XXXXX = productos.filter(producto => producto.categoria == 'POSTRES');
console.log(XXXXX);

   // select.innerHTML="<option>"+productosEntrada+"</option>";

    // //CARGANDO LA PRIMER OPCION DEL ARRAY EN EL SELECT
    // //miSelect.innerHTML="<option>"+categorias[0]+"</option>";

    // //RECORRO EL ARRAY CATEGORIAS Y POR CADA POSICION AGREGO UNA OPCION
    // for (const categoria of categorias) {
    //     select.innerHTML += "<option>" + categoria + "</option>";
    // }



//-----------EJEMPLO CON SELECT DINAMICO-----------


//CARGANDO LA PRIMER OPCION DEL ARRAY EN EL SELECT
//miSelect.innerHTML="<option>"+categorias[0]+"</option>";

// //RECORRO EL ARRAY CATEGORIAS Y POR CADA POSICION AGREGO UNA OPCION
// for (const categoria of categorias) {
//         miSelect.innerHTML +="<option>"+categoria+"</option>";        
// }



// let cubierto;

// //Función
// function conteoCubiertos() {
//     //Ingresa personas que van a comer

//     //****IMPORTANTE***  || Al declarar la variable sin la palabra reservada, la transforma en una variable GLOBAL
//     cubierto = parseInt(prompt('Ingrese cantidad de personas en la mesa'));
//     if (!isNaN(cubierto) && cubierto != " " && cubierto != null) {
//         document.getElementById('cubiertos__seleccion').innerHTML = cubierto;

//     } else {
//         alert('Por favor ingrese la información correcta')
//         cubierto = parseInt(prompt('Ingrese cantidad de personas en la mesa'));
//         document.getElementById('cubiertos__seleccion').innerHTML = cubierto;
//     }
// }

// conteoCubiertos();
// console.log(cubierto);



// //Mostrar array en consola
// console.log(productos);

// //*********** Selección de platos ***********
// let divSeleccion = document.getElementById("seleccion__disponibles");

// //Variable que sirve de acumulador
// let opcionesDisponibles = ""

// //forEach que recorre el array
// productos.forEach((producto) => {
//     opcionesDisponibles = opcionesDisponibles + "\n" + producto.nombre
// });

// let platoSeleccion = prompt('Por favor ingrese lo que desea pedir \nLas opciones actualmente disponibles son:\n' + opcionesDisponibles + '\nSi no desea pedir nada, escriba ESC').toUpperCase();

// if (platoSeleccion != 'ESC') {

//     let encontrado = productos.find(productos => productos.nombre == platoSeleccion);
//     console.log(encontrado);
//     divSeleccion = document.createElement("div");
//     divSeleccion.innerHTML = `<h3>Producto: ${encontrado.nombre}</h3><h3>Precio: $ ${encontrado.precio}</h3>`;
//     seleccion__disponibles.append(divSeleccion);

// } else {
//     let divSeleccion = document.createElement("div");
//     divSeleccion.innerHTML = `<p>Usted no ha reservado ningún menú</p>`;
//     seleccion__disponibles.append(divSeleccion);
// }

// document.querySelector("#agradecimiento").innerHTML = "Muchas gracias por utilizar nuestro servicio!";



// /////////////////////////////////////////////////////

// let boton = document.getElementById("botonId")
// boton.addEventListener("click", respuestaClick)

// function respuestaClick() {
//      console.log("Respuesta evento");
// }