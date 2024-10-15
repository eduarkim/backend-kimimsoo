import 'dotenv/config.js';
import '../../config/database.js'; 
import Tienda from '../Tiendas.js'; 

let tiendas = [
    {
        nombre: "Tienda A",
        direccion: "Calle Falsa 123",
        telefono: 123456789
    },
    {
        nombre: "Tienda B",
        direccion: "Avenida Siempre Viva 742",
        telefono: 987654321
    },
    {
        nombre: "Tienda C",
        direccion: "Boulevard de los Sueños Rotos 456",
        telefono: 555555555
    },
    {
        nombre: "Tienda D",
        direccion: "Plaza Mayor 101",
        telefono: 111222333
    },
    {
        nombre: "Tienda E",
        direccion: "Camino del Rey 789",
        telefono: 444777888
    }
];

// Inserta los datos en la colección de Tienda
Tienda.insertMany(tiendas)
    .then(() => {
        console.log("Datos de tiendas insertados correctamente.");
    })
    .catch(err => {
        console.error("Error al insertar datos:", err);
    });