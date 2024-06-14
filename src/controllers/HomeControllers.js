const express = require('express')
const dirname = require('path')
const path = require('path')
const bodyParser = require('body-parser')
const DBConnection = require('../config/Db.js')
const db = require('../models/index.js')
const e = require('express')
const {createUser ,GetAllData, getUserById ,UpdateDB} = require('../services/CRUDservices.js')



const HomePage = async(req,res)=>{
    try {  
        let listUser = await GetAllData()
        res.render('homepage', {User : listUser})
    } catch (error) {
        console.log(error)
    }
  
}
const CURD = async(req,res)=>{
    try {
        res.render('crud')
    } catch (error) {
        console.log(error)
    }
}

const PostCrud = async(req,res)=>{
     let message = await createUser(req.body) 
        res.send('nothing')
}
const GetEditCrud = async(req,res)=>{
    const id = req.params.id
    console.log(id)
    let data = await getUserById(id)
    console.log(data)
    res.render('edit-crud' , {User: data})
}
const GetUpdateDone = async (req,res)=>{
    let data = req.body
    console.log(data)
    await UpdateDB(data)
    res.redirect('/') 
}

module.exports = {HomePage , CURD , PostCrud, GetEditCrud ,GetUpdateDone}