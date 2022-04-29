'use strict';
// Variables
const marca = document.querySelector('#marca');
const minimo = document.querySelector('#minimo');
const maximo = document.querySelector('#maximo');
const year = document.querySelector('#year');
const puertas = document.querySelector('#puertas');
const transmision = document.querySelector('#transmision');
const color = document.querySelector('#color');

// Contenedor para los resultados
const resultado = document.querySelector('#resultado');


const max = new Date().getFullYear();  // getFullYear actualiza el año automaticamente 
const min = max - 10;


// Generar un objeto con la busqueda
const datosBusqueda = {
    marca: '',
    year: '',
    minimo: '',
    maximo: '',
    transmision: '',
    color: ''
}

// Eventos

document.addEventListener('DOMContentLoaded', () => {
    mostrarAutos(autos);  // Muestra los coches al cargar la pagina


    // Llena las opciones de años
    llenarSelect();
})

// Events Listeners para los select de busqueda
marca.addEventListener('change', (e) => {
    datosBusqueda.marca = e.target.value;

    filtrarAuto();
});

year.addEventListener('change', (e) => {
    datosBusqueda.year = parseInt(e.target.value);  // Convertimos a String

    filtrarAuto();
});

minimo.addEventListener('change', (e) => {
    datosBusqueda.minimo = parseInt(e.target.value);

    filtrarAuto();
});

maximo.addEventListener('change', (e) => {
    datosBusqueda.maximo = parseInt(e.target.value);

    filtrarAuto();
});

puertas.addEventListener('change', (e) => {
    datosBusqueda.puertas = e.target.value;
});

transmision.addEventListener('change', (e) => {
    datosBusqueda.transmision = e.target.value;
});

color.addEventListener('change', (e) => {
    datosBusqueda.color = e.target.value;
});

console.log(datosBusqueda)
// Funciones

function mostrarAutos(autos) {

    limpiarHTML(); // Elimina el HTML previo


    autos.forEach(auto => {
        const { marca, modelo, year, puertas, transmision, precio, color } = auto;
        const autoHTML = document.createElement('p');

        autoHTML.textContent = `
        ${marca} ${modelo} - ${year} - ${puertas} Puertas - Transmisión: ${transmision} 
        - Precio: $${precio} - Color: ${color}
        `;

        // Insertar en el HTML 
        resultado.appendChild(autoHTML)
    });
}


// Limpiar HTML

function limpiarHTML() {
    while (resultado.firstChild) {
        resultado.removeChild(resultado.firstChild);
    }
}


// Genera los años del select

function llenarSelect() {
    for (let i = max; i >= min; i--) {
        const opcion = document.createElement('option');
        opcion.value = i;
        opcion.textContent = i;
        year.appendChild(opcion); // Agrega las opciones de año al select
    }
}

// Funcion que flitra en base a la busqueda 

function filtrarAuto() {
    const resultado = autos.filter(filtrarMarca).filter(filtrarYear).filter(filtrarMinimo).filter(filtrarMaximo)

    console.log(resultado);

    mostrarAutos(resultado);
}

function filtrarMarca(auto) {
    const { marca } = datosBusqueda;
    if (marca) {
        return auto.marca === marca;
    }

    return auto;
}

function filtrarYear(auto) {
    const { year } = datosBusqueda;

    if (year) {
        return auto.year === year;
    }

    return auto;
}


function filtrarMinimo(auto) {
    const {minimo} = datosBusqueda;
    if(minimo) {
        return auto.precio >= minimo;
    }
    return auto;
}

function filtrarMaximo(auto) {
    const {maximo} = datosBusqueda;
    if(maximo) {
        return auto.precio <= maximo;
    }
    return auto;
}