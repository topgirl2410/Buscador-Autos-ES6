'use strict';
// Variables

const resultado = document.querySelector('#resultado');
const year = document.querySelector('#year');

const max = new Date().getFullYear();  // getFullYear actualiza el año automaticamente 
const min = max - 10;

console.log(min);
console.log(max);

// Eventos

document.addEventListener('DOMContentLoaded', () => {
    mostrarAutos();  // Muestra los coches al cargar la pagina


    // Llena las opciones de años
    llenarSelect();
})



// Funciones

function mostrarAutos() {
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


// Genera los años del select

function llenarSelect() {
    for (let i = max; i >= min; i--) {
        const opcion = document.createElement('option');
        opcion.value = i;
        opcion.textContent = i;
        year.appendChild(opcion); // Agrega las opciones de año al select
    }
}