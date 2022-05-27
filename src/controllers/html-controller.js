const express = require('express');
const path = require('path')
const router = express.Router()

router.get("/", async(_, res) => {
    res.status(200).sendFile(path.resolve("./src/index.html"))
})

module.exports = app => {
    app.use(router)
    app.use('/js/', express.static(path.resolve('./src/js')));
    app.use('/css/', express.static(path.resolve('./src/css')));
}