const {DBConnection} = require('../config/Db.js')
const bcrypt = require('bcryptjs')
const salt = bcrypt.genSaltSync()
const db = require('../models/index.js')
const user = require('../models/user.js')




const handleLogin = (email , password,userData)=>{
    return new Promise(async(resolve,reject)=>{
        try {
            let userData = {}
            let ixExist =  await CheckEmailPassword(email,password);
            if(ixExist){
                resolve()
            }
            else{
                userData.errorCode = 1;
                userData.errorMessage = 'Nothing'
                resolve(userData)
            }
        } catch (error) {
                reject(error)
        }
    })

}



const CheckEmailPassword = (email, password )=>{
    return new Promise(async(resolve , reject)=>{
        try {
            let user = await db.User.findOne({
                where : {email : email , password : password}

            })
            if(user){
                    resolve(true)
            }
            else{
                resolve(false)
            }
        } catch (error) {
            reject(e)
        }
    })
}

module.exports = {handleLogin}