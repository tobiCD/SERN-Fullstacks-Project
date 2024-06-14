const {DBConnection} = require('../config/Db.js')
const bcrypt = require('bcryptjs')
const salt = bcrypt.genSaltSync()
const db = require('../models/index.js')
const user = require('../models/user.js')




const createUser =async (data)=>{
   try {
    const HashedPassworded = await HashUserPassword(data.password); // Assuming HashUserPassword function
    const newUser = await db.User.create({
      firstName: data.firstname,
      lastName: data.lastname,
      password: HashedPassworded,
      email: data.email,
      address: data.address,
      gender: data.gender,
      roleId: data.roleId,
      phoneNumber: data.phoneNumber,
    });
    console.log(data)
    console.log('User created:', newUser);
  } catch (error) {
    console.error('Error creating user:', error);
  }
}
const GetAllData = async() =>{
    return new Promise (async(resolve , reject)=> {
            try {
                let Getdata = await db.User.findAll({
                    raw : true
                })
                console.log(Getdata)
                resolve(Getdata)
            } catch (error) {
                reject(error)
            }
    })

}
const getUserById =async(userid)=>{
    return new Promise (async(resolve , reject)=>{
        try {
            let GetUser = await db.User.findOne({where : {id : userid},
                raw :true
            })
            resolve(GetUser)
        } catch (error) {
            reject(error)
        }

    })
}

const HashUserPassword =async (password)=>{
    return new Promise (async(resolve,reject)=>{
            try {
                let hassPassword = await bcrypt.hashSync(password ,salt)
                resolve(hassPassword)
            } catch (error) {
                reject(e)
            }
    })    
   
}
 const UpdateDB = (data)=>{
    return new Promise(async (resolve , reject) =>{
        try {
            let user = await db.User.update(
              {
               firstName: data.firstname,
                lastName: data.lastname,
                address: data.address,
                password: await HashUserPassword(data.password),
                phoneNumber: data.phoneNumber,
                email: data.email
              },
              {
                where: { id: data.id },
                returning: true
              }
            );
      
            if (user > 0) {
              resolve(user);
            } else {
              resolve('data not found');
            }
          } catch (error) {
            reject(error);
          }
        });
 }

module.exports= {
    createUser ,GetAllData, getUserById,UpdateDB
}