const mongoose = require('mongoose')


const walletSchema = new mongoose.Schema({

    userid: {
        type: String
    },
    hashwallet:{
        type:String
    },
    date_created:{
        type:Date,
        default: Date.now
    },
    wallet_type:{
        type:String
    },
   
})

module.exports = mongoose.model('Wallet', walletSchema)