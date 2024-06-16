const {DBConnection} = require('../config/Db.js')
const bcrypt = require('bcryptjs')
const salt = bcrypt.genSaltSync()
const db = require('../models/index.js')
const user = require('../models/user.js')

const CheckEmailPassword = (email, password )=>{
    return new Promise(async(resolve , reject)=>{
        try {
            let userData = {}
            let user = await db.User.findOne({
                where : {email : email},
                raw : true

            })

         
            if(user){
                const passwordMatches = await bcrypt.compareSync(password, user.password)
                console.log(user.password)
           
                console.log(passwordMatches)
              await db.User.findOne({
                    where : {password :passwordMatches}
                    
                })
                if(passwordMatches)
                    {
                        delete user.password
                        console.log(user)

                        resolve({
                                errorCode :0,
                                errorMessage:'ok',
                                user
                            })
                    }
                    else{
                        resolve({
                            errorCode :2,
                            errorMessage:'not correct password',
                            ixExist : user
                        })
                    }
            }
            else{
                userData.errorCode = 1;
                userData.errorMessage = 'User Not found'
                resolve(userData)
            }
        } catch (error) {
            reject(error)
        }
    })
}

module.exports = {CheckEmailPassword}