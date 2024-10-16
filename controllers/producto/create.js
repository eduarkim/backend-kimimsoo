import Producto from "../../models/Producto.js";

let create = async (req, res) => {
    
        try {
            let producto = req.body
            let all = await Producto.create(producto);
            return res.status(201).json({ response: all });
            
        } catch (error) {
            res.status(500).json({ message: "Error al agregar producto", error });
        }
    }

export {create}


