$(document).ready(function() {
    let sendButton = $("#send_req_btn")
    let addButton = $("#add_form")
    let newDivCount = 0

    addButton.on("click", () => {
        newDivCount += 1

        createFields(newDivCount)
    })


    sendButton.on("click", function(event) {
        event.preventDefault()

        let title = $("#title_input").val()
        let body = $("#body_input").val()
        let server_key = $("#server_key_input").val()
        let channel_id = $("#android_channel_id_input").val()
        let token_device = $("#device_token_id_input").val()
        let id_sistema = $("#idSistema_input").val()

        let json = {
            title: title,
            body: body,
            server_key: server_key,
            channel_id: channel_id,
            token_device: token_device,
            id_sistema: id_sistema
        };

        var array = []

        for (i = 0; i < newDivCount; i++) {
            const json = {}

            const value = $(`#optional-value-input-${i+1}`).val()
            json[$(`#optional-key-input-${i+1}`).val()] = value

            array.push(json)
        }

        json["optional-values"] = array

        console.log(json)

        $.ajax({
            type: "POST",
            url: "/fcm",
            dataType: 'json',
            contentType: 'application/json',
            data: JSON.stringify(json)
        }).done(function(data) {
            tata.text('FCM', data.response)
        }).fail(function(data) {
            tata.text('FCM', data.responseJSON.response)
        });
    })
})

function createFields(newDivCount) {


    let newDiv = jQuery('<div>', {
        class: 'mb-3',
        id: `optional-${newDivCount}`,
        css: {
            "display": "flex",
            "margin-top": "10px",
            "margin-bottom": "10px"
        }
    }).appendTo('#input-div')

    jQuery('<label>', {
        text: `${newDivCount} - Chave:`,
        class: 'form-label',
        for: `optional-key-input-${newDivCount}`,
        css: {
            "margin-right": "5px"
        }
    }).appendTo(newDiv)

    jQuery('<input>', {
        class: 'form-control',
        type: 'text',
        id: `optional-key-input-${newDivCount}`,
        css: {
            "width": "calc(40% - 2px)"
        }
    }).appendTo(newDiv)

    jQuery('<label>', {
        text: `Valor:`,
        class: 'form-label',
        for: `optional-value-input-${newDivCount}`,
        css: {
            "margin-right": "5px",
            "margin-left": "5px"
        }
    }).appendTo(newDiv)

    jQuery('<input>', {
        class: 'form-control',
        type: 'text',
        id: `optional-value-input-${newDivCount}`,
        css: {
            "width": "calc(40% - 2px)"
        }
    }).appendTo(newDiv)

}