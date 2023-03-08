const mongoose = require('mongoose')

const transactionSchema = new mongoose.Schema({

    walletid: {
        type: String
    },
    amount:{
        type:String
    },
    trans_type:{
        type:String
    },
    trans_date:{
        type:Date,
        default: Date.now
    },
    hashkey:{
        type:String
    }
   
})

module.exports = mongoose.model('Transaction', transactionSchema)