const express = require('express')
const router = express.Router()
const Transaction = require('../models/transaction')

router.get('/', async(req,res)=>{
    try{
        const transaction = await Transaction.find()
        res.json(transaction)
    }
    catch{
        res.send('Error'+ err)
    }
})

router.get('/id', async(req,res)=>{
    try{
        const transaction = await Transaction.findById(req.params.id)
        res.json(transaction)
    }
    catch(err){
        res.send('Error'+err)
    }
})

router.post('/', async(req,res)=>{
    const transaction = new Transaction({
        walletid: req.body.walletid,
        amount: req.body.amount,
        hashkey: req.body.hashkey,
        trans_date: req.body.trans_date,
        trans_type: req.body.trans_type
    })

    try{
        const halaman = await transaction.save()
        res.json(halaman)
    }
    catch(err){
        res.send('Error')
    }
})

module.exports = router