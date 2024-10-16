import User from '../../models/User.js';

let allUser =   async(req, res) => {
    try{
        let all = await User.find()
        return res.status(200).json({
            response: all
        })
    }catch(err){
        return res.status(500).json({
            response: error
        })
       
    }

}

let userByRole = async(req, res) => {
    try{
        console.log(req.params);
        let roleQuery = req.params.rol;
        let all = await User.find({role:roleQuery})

        return res.status(200).json({
            response: all
        })
    }catch(err){
        return res.status(500).json({
            response: error
        })
       
    }
   
}

let userById =  async (req,res) => {
    try {
        console.log(req.params);
        
        let roleQuery = req.params.id
        let all = await  User.findById(roleQuery)
        return res.status(200).json({
            response: all
        })
    } catch (error) {
        return res.status(500).json({
            response: error
        })
    }        
}

export {allUser, userByRole, userById}
