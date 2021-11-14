//import { Router } from "express";
import User from "./User.model";

//const userRouter = Router();


const getAllUsers = async (req, res) => {
    try {
        const result = await  User.find();
        res.status(200).json({
            success: true,
            result
        });
    } catch (error){
        res.status(500).json({success: false, error: error.message });
    }
};

const createNewUser = async ( req, res ) => {
    try {
        const user = new User({ ... req.body});
        const result = await user.save();
        res.status(200).json({ success: true, result });
    } catch (error) {
        res.status(500).json({success: false, error: error.message });
    }
}

const login = async (req, res) => {
    try {
        const { boleta, password } = req.body;
        if (boleta && password) {
            const user = await User.findOne({ boleta });
            if(user && user.password == password) {
                const {boleta, name, email, type} = user;
                res.status(200).json({sucess: true, user: {boleta, name, email, type} });
            } else {
                throw new Error("Password is incorrect");
            }
        } else {
            throw new Error("Boleta or password is undefined");
        }
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
}

export {
    getAllUsers,
    createNewUser,
    login
}

