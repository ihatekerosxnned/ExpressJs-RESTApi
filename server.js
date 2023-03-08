const express = require('express')
const mongoose = require('mongoose')
const url = 'mongodb://127.0.0.1/hahahalaman'
const app = express()

mongoose.connect(url, {useNewUrlParser: true})
const con = mongoose.connection

con.on('open', ()=>{
    console.log("Database Connected!")
})

app.use(express.json())

const userRouter = require('./routes/users')
app.use('/users',userRouter)

const transRouter = require('./routes/transactions')
app.use('/transactions',transRouter)

const walletRouter = require('./routes/wallets')
app.use('/wallets',walletRouter)

app.listen(8080, ()=>{
    console.log('Server Started!')
})