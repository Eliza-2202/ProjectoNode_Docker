import User from '../models/user.model.js'
import bcrypt from 'bcrypt'
import {createAccessToken} from'../libs/jwt.js'

export const register = async (req, res) =>{
    const {email, password, name, userType}= req.body
    console.log(email, password, name, userType)

    try{

        //const passwordHash= await bcrypt.hash(password,10)

        const newUser = new User({
            email, 
            // password: passwordHash, 
            password: password, 
            name, 
            userType})

        const userSave =await newUser.save()

        const token = await createAccessToken({id:userSave._id})


        res.cookie('token',token)
        res.json({
            message: "User creado",
            id: userSave._id,
            name: userSave.name,
            email: userSave.email
        })
        
       
        //res.send('registrando')
    }catch(error){
        res.status(500).json({message:error.message})
        //console.log(error)

    }

    

}



export const login = async (req, res) =>{
    const {email, password, userType}= req.body;


    try{

        const userFound = await User.findOne({email})

        if(!userFound ) return res.status(400).json({message:'usuario no entontrado'})

//////////
        //const isMatch = await bcrypt.compare(password,userFound.password)
    
        const compare = async (plainPassword, hashedPassword) => {
            // Simula el comportamiento de bcrypt.compare sin encriptación
            return plainPassword === hashedPassword;
        };
        
        // En lugar de bcrypt.compare, usa la función personalizada
        const isMatch = await compare(password, userFound.password);

        
///////
        if(!isMatch) return res.status(400).json({message:'no es contraseña'})

 
        const token = await createAccessToken({id:userFound._id})


        res.cookie('token',token)
        res.json({
            message: "User logeado",
            id: userFound._id,
            name: userFound.name,
            email: userFound.email
        })
       
        //res.send('registrando')
    }catch(error){
        res.status(500).json({message:error.message})
        //console.log(error)

    }

}




export const logout = (req, res) => {
    res.cookie("token", "", {
        expires: new Date(0), 
    });
        return res.sendStatus(200);

};



export const profile = async (req, res) => {
    //console.log(req.user)
    //res.send('profile')

    const userFound = await User.findById(req.user.id)

    if (!userFound) return res.status(400).json({ message: "User not found"});
    return res.json({
    id: userFound._id,
    username: userFound.username,
    email: userFound.email,
    userType: userFound.userType,
    createdAt: userFound.createdAt,
    updatedAt: userFound.updatedAt,
    })
};