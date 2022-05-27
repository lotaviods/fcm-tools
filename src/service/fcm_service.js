const FCM = require('fcm-push')

module.exports.sendMessage = async function(title, token_device, body, server_key, channel_id, optionalValues) {
    const message = {
        "to": token_device,
        "notification": {
            "title": title,
            "body": body,
            "android_channel_id": channel_id
        }
    }
    let data = {}
    optionalValues.forEach(element => {
        data[Object.keys(element)[0]] = Object.values(element)[0]
    });

    message["data"] = data

    console.log(message);

    try {
        let fcm = new FCM(server_key);
        return fcm.send(message)
    } catch (e) {
        return e.message
    }

}