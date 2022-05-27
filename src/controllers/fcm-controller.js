const express = require('express');
const router = express.Router()

const { sendMessage } = require("../service/fcm_service");

router.post("/fcm/", async(req, res) => {
    let json = req.body

    const optionalValues = req.body["optional-values"]

    fcm_resp = sendMessage(json.title, json.token_device, json.body, json.server_key, json.channel_id, optionalValues)

    fcm_resp.then(function(resp) {
        console.log(resp)
        res.status(200).send({ "response": resp })
    }).catch(function(err) {
        console.log(err)
        res.status(500).send({ "response": err })
    })

})
module.exports = app => {
    app.use(express.json());
    app.use(router)
}