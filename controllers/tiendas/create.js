import Tienda from "../../models/Tiendas.js";
let create = async (req, res) => {
    
        try {
            let tienda = req.body
            let all = await Tienda.create(tienda);
            return res.status(201).json({ response: all });
            
        } catch (error) {
            res.status(500).json({ message: "Error al agregar tienda", error });
        }
    }

export {create}

