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
        this.total = parseFloat(total); //suma total del pedido
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

function obtenerEntradas() {
    let obtenerE = document.getElementById('entrada').value;
    const entradasObtenidas = productos.find(item => item.entrada == obtenerE);
    return entradasObtenidas;
}

function obtenerPrincipal() {
    let obtenerP = document.getElementById('principal').value;
    const principalObtenido = productos.find(item => item.principal == obtenerP);
    return principalObtenido;
}

function obtenerPostre() {
    let obtenerPos = document.getElementById('postre').value;
    const poslObtenido = productos.find(item => item.postre == obtenerPos);
    return poslObtenido;
}

function obtenerBebida() {
    let obtenerB = document.getElementById('bebida').value;
    const bebidaObtenida = productos.find(item => item.bebida == obtenerB);
    return bebidaObtenida;
}

function obtenerPedido() {

    obtenerEntradas()
    obtenerPrincipal()
    obtenerPostre()
    obtenerBebida()
}

function crearPedido() {
    let pedido = new Pedido(pedidos.length + 1, obtenerNombre(), obtenerCubiertos(), obtenerPedido())
    pedidos.push(pedido);
}



let pedidoForm = document.getElementById("pedirComanda");

pedidoForm.onclick = () => {
    crearPedido()
}

console.log(pedidos);

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






/*


// *** QUIERO QUE EL USUARIO INGRESE CUÁNTAS PERSONAS COMEN POR MESA ***

function recogerDatos() {
    let cubiertosCantidad = document.getElementById('ingresoCubiertos').value;
    console.log(cubiertosCantidad);
    
    localStorage.setItem("personasMesa", cubiertosCantidad)

    
    let reporteTitulo = document.getElementById('titulo')
    reporteTitulo.innerHTML = `<h3>Usted ha reservado una mesa para ${cubiertosCantidad} persona/s</h3>`
}

let cubiertoForm = document.getElementById("submitCubiertos");

cubiertoForm.onclick = () => {
    recogerDatos()

}




function recogerDatos2() {
    let comanda = document.querySelectorAll('.seleccion');
    

    localStorage.setItem("comandas", JSON.stringify(comanda));
    
    for (item of comanda) {
        console.log(item.value);
        
        let divReporte = document.getElementById('pedir')
        divReporte.innerHTML += `<div>Usted ha ordenado ${item.value}</div>`
        
    }
}

let pedidoForm = document.getElementById("pedirComanda");

pedidoForm.onclick = () => {
    recogerDatos2()
}


// Evento 

// Funcion mostrar/ocultar reporte

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

//Historial

let historialMesas = localStorage.getItem('personasMesa');

let historial1 = document.getElementById('conteoMesas');
historial1.innerHTML = `<li>${historialMesas}</li>`

let historialPedidos = JSON.parse(localStorage.getItem('comandas'));

let historial2 = document.getElementById('conteoPedidos');
historial2.innerHTML = `<p>${historialPedidos}</p>`


*/