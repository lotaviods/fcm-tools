exports.configurePort = function(port, defaultPort) {
    if (port != null) {
        var portRegExp = new RegExp("^([0-9]{1,4}|[1-5][0-9]{4}|6[0-4][0-9]{3}|65[0-4][0-9]{2}|655[0-2][0-9]|6553[0-5])$", 'i');
        if (!portRegExp.test(port)) {
            console.log(`Giving port is invalid: ${port} \nSetting default port: ${defaultPort}\n`)
            return defaultPort
        }
    } else {
        return defaultPort
    }
    return port
}