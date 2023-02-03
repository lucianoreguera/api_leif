const mongoose = require('mongoose')

const dbConnect = () => {
    const DB_URI = process.env.DB_URI

    mongoose.set('strictQuery', true)
    mongoose.connect(DB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }, (err, res) => {
        if (err) {
            return console.log('ERROR DE CONEXION A LA BASE DE DATOS')
        }

        console.log('BASE DE DATOS CONECTADA')
    })
}

module.exports = dbConnect