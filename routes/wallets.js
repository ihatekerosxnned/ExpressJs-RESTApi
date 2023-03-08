const express = require('express')
const router = express.Router()
const Wallet = require('../models/wallet')

router.get('/', async(req,res)=>{
    try{
        const wallet = await Wallet.find()
        res.json(wallet)
    }
    catch{
        res.send('Error'+ err)
    }
})

router.get('/id', async(req,res)=>{
    try{
        const wallet = await Wallet.findById(req.params.id)
        res.json(wallet)
    }
    catch(err){
        res.send('Error'+err)
    }
})
//Wallet ( id, userid, hashwallet, date_created, type)
router.post('/', async(req,res)=>{
    const wallet = new Wallet({
        userid: req.body.userid,
        hashwallet: req.body.hashwallet,
        date_created: req.body.date_created,
        wallet_type: req.body.wallet_type
    })

    try{
        const halaman = await wallet.save()
        res.json(halaman)
    }
    catch(err){
        res.send('Error')
    }
})

module.exports = router