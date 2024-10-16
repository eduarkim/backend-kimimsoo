import User from "../../models/User.js";

let create = async (req, res) => {

    try {
        let user = req.body
        let all = await User.create(user);
        return res.status(201).json({ response: all });
        
    } catch (error) {
        res.status(500).json({ message: "Error al agregar usuario", error });
    }
}

export {create}

