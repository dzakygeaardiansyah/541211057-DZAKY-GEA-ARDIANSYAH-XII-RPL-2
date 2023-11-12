const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    nama: {
        type: 'string',
        required: [true, 'Silahkan masukan nama anda'],
        unique: true
    },
    email: {
        type: 'string',
        required: true,
        unique: true,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'masukan email valid!']
    }
})

module.exports = mongoose.model('User', UserSchema)