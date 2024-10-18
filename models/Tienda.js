import { Schema, model } from 'mongoose';

const collection = 'tiendas'; // Nombre de la colección en la base de datos
const tiendaSchema = new Schema({
    nombre: { type: String, required: true },
    direccion: { type: String, required: true },
    telefono: { type: Number, required: true }
}, { timestamps: true }); // Habilitar timestamps

const Tienda = model(collection, tiendaSchema); // Crear el modelo

export default Tienda; // Exportar el modelo