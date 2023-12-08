const express = require('express');
const {PORT} = require('./src/config/serverConfig')
const connect = require('./src/config/database');
const User = require('./src/models/user');
const app = express();
app.use(express.json());
const route = express.Router();
app.route('/signup').post( async(req,res)=>{
    try {
        const response = await User.create({
            name:req.body.name,
            mobile:req.body.mobile,
            email:req.body.email,
            password:req.body.password
            });
            return res.status(201).json({
                success:true,
                message:"User added successfully",
                data:response,
                err:{}
            })
    } catch (error) {
        return res.status(501).json({
            success:false,
            message:"Failed to add user sad",
            data:{},
            err:error
        })
    }
})
app.listen(PORT,()=>{
    console.log(`Server started at the port ${PORT}`)
    connect();
    console.log("Yup!! Server is runnning");
})