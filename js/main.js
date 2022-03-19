//Reserva de mesas

////////////////////////////////////////////////////////////
// *** ARRAYS ***

const categorias = ['ENTRADAS', 'PLATOS', 'BEBIDAS', 'POSTRES'];

// Array vacio para usar con objetos
const productos = [];

//Array para usar con Pedido
const pedidos = [];

// Objetos

class Producto {
    constructor(id, nombre, precio, categoria) {
        this.id = parseInt(id);
        this.nombre = nombre;
        this.precio = parseFloat(precio);
        this.categoria = categoria;
    }
}

class Pedido {
    constructor(id, nombre, cubiertos, orden, total) {
        this.id = parseInt(id);
        this.nombre = nombre;
        this.cubiertos = parseInt(cubiertos);
        this.orden = orden; //array productos pedidos!
        this.total = this.orden.reduce((sum, item) => sum + item.precio, 0);
    }
}

// Método push para agregar objetos al array

productos.push(new Producto(1, 'ENSALADA', 500, categorias[0]));
productos.push(new Producto(2, 'PORCIÓN FRITAS', 500, categorias[0]));
productos.push(new Producto(3, 'CORDERO', 2000, categorias[1]));
productos.push(new Producto(4, 'TRUCHA', 2000, categorias[1]));
productos.push(new Producto(5, 'AGUA', 200, categorias[2]));
productos.push(new Producto(6, 'GASEOSA', 300, categorias[2]));
productos.push(new Producto(7, 'FLAN', 500, categorias[3]));
productos.push(new Producto(8, 'HELADO', 500, categorias[3]));

// Funciones para obtener datos del form

function obtenerNombre() {
    let obtenerN = document.getElementById('ingresoNombre').value;
    return obtenerN;
}


function obtenerCubiertos() {
    let obtenerC = document.getElementById('ingresoCubiertos').value;
    return obtenerC;
}

// Funcion con método

function obtenerDato(id) {
    let dato = document.getElementById(id).value;
    return productos.find(item => item.nombre == dato);
}

function obtenerPedido() {
    const pedido = [obtenerDato('entrada'),
    obtenerDato('principal'),
    obtenerDato('postre'),
    obtenerDato('bebida')];
    return pedido;
}

function crearPedido() {
    let pedido = new Pedido(pedidos.length + 1, obtenerNombre(), obtenerCubiertos(), obtenerPedido())
    pedidos.push(pedido);

    localStorage.setItem("comandas", JSON.stringify(pedido));

    let divReporte = document.getElementById('pedir')
    divReporte.innerHTML = `<div>Usted ha ordenado ${pedido}</div>`

    console.log("pedido: ", pedido);
    console.log("pedidos: ", pedidos);
}

let pedidoForm = document.getElementById("pedirComanda");

pedidoForm.onclick = () => {
    crearPedido();
    // recogerDatos2()
}

/* 

            **** HASTA ACA OK ****

*/

//     ****** Resumen del pedido ******


//            CUBIERTOS

/*              Función para:
 - Mostrar cubiertos ingresados dinámicamente en HTML
 - Guardar la misma información en localStorage
*/

function recogerDatos() {
    let cubiertosCantidad = document.getElementById('ingresoCubiertos').value;
    console.log(cubiertosCantidad);

    localStorage.setItem("personasMesa", cubiertosCantidad)


    let reporteTitulo = document.getElementById('titulo')
    reporteTitulo.innerHTML = `<h3>Usted ha reservado una mesa para ${cubiertosCantidad} persona/s</h3>`
}

// Botón que llama la función anterior

let cubiertoForm = document.getElementById("submitCubiertos");

cubiertoForm.onclick = () => {
    recogerDatos()
}

// Mostrar/ocultar reporte

function mostrar() {
    document.getElementById('resumen').style.display = 'block';
}

function ocultar() {
    document.getElementById('resumen').style.display = 'none';
}

let evento = document.getElementById('evento');
evento.onclick = () => {
    mostrar()
}

// Fetch

let url = 'http://api.weatherapi.com/v1/current.json?key=23fc3ba8bf934f2d8f8195549221103&q=Ushuaia&aqi=no';
fetch(url)
    .then(response => response.json())
    .then(data => mostrarData(data))
    .catch(error => console.log(error))

const mostrarData = (data) => {
    console.log(data)
    document.getElementById('wx').innerHTML = `<p>Actualmente la temperatura en la ciudad de Ushuaia es de ${data.current.temp_c}º</p><p>La velocidad del viento es de ${data.current.wind_kph}km/h y proviene de los ${data.current.wind_degree}º</p><img src=${data.current.condition.icon}>`;

}