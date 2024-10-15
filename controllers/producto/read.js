import Producto from '../../models/Producto.js';

// Obtener todos los productos
export const getProductos = async (req, res) => {
    try {
        const productos = await Producto.find(); // Obtener todos los productos desde MongoDB
        res.status(200).json(productos);
    } catch (error) {
        res.status(500).json({ message: "Error al obtener productos", error });
    }
};

// Agregar un nuevo producto
export const addProducto = async (req, res) => {
    const { nombre, marca, tipo, precio } = req.body;

    const nuevoProducto = new Producto({ nombre, marca, tipo, precio });

    try {
        await nuevoProducto.save(); // Guardar el producto en MongoDB
        res.status(201).json(nuevoProducto);
    } catch (error) {
        res.status(400).json({ message: "Error al agregar producto", error });
    }
};