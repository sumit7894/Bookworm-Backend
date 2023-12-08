const UserService = require('../services/user-service');

const userService = new UserService();

const signUp = async (req,res)=>{
    try{
    const response = await userService.create({
        name: req.body.name,
        email: req.body.email,
        mobile: req.body.mobile,
        password: req.body.password
    });
    return res.status(201).json({
        success:true,
        message:"Successfully created the user",
        data:response,
        err:{}
    })
}   catch(error){
    return res.status(201).json({
        success:true,
        message:"Somthing went wrong try again",
        data:{},
        err:error
    })}
}
module.exports ={
    signUp
}