import mongoose from 'mongoose';

// Definición del esquema
const productoSchema = new mongoose.Schema({
    nombre: { type: String, required: true },
    marca: { type: String, required: true },
    tipo: { type: String, required: true },
    precio: { type: Number, required: true },
});

// Crear el modelo
const Producto = mongoose.model('Producto', productoSchema);

export default Producto;