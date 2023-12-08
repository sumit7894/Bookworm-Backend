const UserRepository = require('../repository/user-repository');
const jwt = require('jsonwebtoken')
const {JWT_KEY} = require('../config/serverConfig')
class UserService{
    constructor(){
        this.userRepository = new UserRepository();
    }   
    
    async create(data){
        try {
            const existingUser = await this.userRepository.get(data.email);
            if(existingUser){
                throw{error:"User with this email already exists"};
            }
            const user = await this.userRepository.create(data);
            const token = await this.createToken(data.email,data.name);
            console.log("here is token",token);
            return [user,{"token":token}];
        } catch (error) {
            console.log("Somthing went wrong in the service layer");
            throw error;
        }
    }
    async createToken(user){
        try {
            const token = jwt.sign(user,JWT_KEY);
            return token;
        } catch (error) {
            console.log("Somthing went wrong in service layer in creating token");
            throw error;
        }
    }
    async get(email){
        try {
            const user = await this.userRepository.get(email);
            return user;
        } catch (error) {
            console.log("Somthing went wrong in the service layer");
            throw error;
        }
    }
}
module.exports = UserService;