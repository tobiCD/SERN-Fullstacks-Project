const express = require('express')
const dirname = require('path')
const path = require('path')
const DBConnection = require('../config/Db.js')
const db = require('../models/index.js')
const e = require('express')




const HomePage = async(req,res)=>{
    try {  
        let data = await db.User.findAll()
        console.log(data)
        res.render('homepage')
    } catch (error) {
        console.log(error)
    }
  
}

module.exports = {HomePage}