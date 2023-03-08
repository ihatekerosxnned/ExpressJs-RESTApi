const express = require('express')
const router = express.Router()
const User = require('../models/user')

router.get('/', async(req,res)=>{
    try{
        const users = await User.find()
        res.json(users)
    }
    catch{
        res.send('Error'+ err)
    }
})

router.get('/id', async(req,res)=>{
    try{
        const users = await User.findById(req.params.id)
        res.json(users)
    }
    catch(err){
        res.send('Error'+err)
    }
})

router.post('/', async(req,res)=>{
    const users = new User({
        username: req.body.username,
        password: req.body.password
    })

    try{
        const halaman = await users.save()
        res.json(halaman)
    }
    catch(err){
        res.send('Error')
    }
})

module.exports = router