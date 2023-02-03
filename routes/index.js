const express = require('express')
const fs = require('fs')
const router = express.Router()

const PATH_ROUTES = __dirname

const removeExtension = fileName => {
    // tracks.js => [tracks, js] => tracks
    return fileName.split('.').shift()
}

// ['tracks.js', ....]
fs.readdirSync(PATH_ROUTES).filter(file => {// tracks.js
    const name = removeExtension(file)// tracks

    if (name !== 'index') {
        router.use(`/${name}`, require(`./${file}`))
    }
})

module.exports = router