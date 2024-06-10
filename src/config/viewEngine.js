const path = require('path')
const express = require('express')

const ViewEngine = (app)=>{
    app.set('views',path.join(__dirname ,'../views')) 
    console.log(path.join(__dirname ,'../views'))
}

module.exports = {
    ViewEngine
}