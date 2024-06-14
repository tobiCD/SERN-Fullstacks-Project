const express = require('express')
const dirname = require('path')
const path = require('path')
const bodyParser = require('body-parser')
const DBConnection = require('../config/Db.js')
const db = require('../models/index.js')
const {createUser ,GetAllData, getUserById ,UpdateDB} = require('../services/CRUDservices.js')
const {handleLogin} = require('../services/userService.js')



const hangleUserLogin = async (req,res)=>{
    let email = req.body.email
    let password = req.body.password

  
        if(!email||!password){
            return res.status(500).json({
                error : 1 ,
                message : 'Missing input Parameters'
            })
        } else{
            let UserData = await handleLogin(email,password);
            return res.status(200).json({
              
                error : UserData.errorCode,
                message : UserData.errorMessage

            })
        }
    }
// check email tồn tại hay không 
// so sánh password người dùng truyền vào 


module.exports = {hangleUserLogin}