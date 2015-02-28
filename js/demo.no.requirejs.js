window.options = {
    showArrayIndex: false,
    hyperlinks : {
        enable : true,
        keys: [],
        target : '_blank'
    },

    bool : {
        showText : true,
        text : {
            true : "true",
            false : "false"
        },
        showImage : true,
        img : {
            true : 'css/true.png',
            false : 'css/false.png'
        }
    }
};

/*global document, JSON, window, alert*/
(function (JsonHuman, crel, CodeMirror) {
    "use strict";



    var textarea = document.getElementById("input"),
        output = document.getElementById("output"),
        raw = document.getElementById("output-raw"),
        button = document.getElementById("convert"),
        editor = CodeMirror.fromTextArea(textarea, {
            mode: "application/json",
            json: true
        });

    function convert(input, output) {
        var i;
        var aOptions = window.options.hyperlinks;
        var boolOptions = window.options.bool;

        // Parse options
        window.options.showArrayIndex = document.getElementById('opt_show_array_index').checked;

        aOptions.enable = document.getElementById('opt_enable_hyperlinks').checked;
        aOptions.keys = document.getElementById('opt_hyper_keys').value.split(',');
        for(i =0; i < aOptions.keys.length; i++){
            aOptions.keys[i] = aOptions.keys[i].trim();
        }
        aOptions.target = document.getElementById('opt_hyper_target').value;

        boolOptions.showText = document.getElementById('opt_bool_show_text').checked;
        boolOptions.showImage = document.getElementById('opt_bool_show_img').checked;
        boolOptions.text.true = document.getElementById('opt_bool_text_true').value;
        boolOptions.text.false = document.getElementById('opt_bool_text_false').value;
        boolOptions.img.true = document.getElementById('opt_bool_img_true').value;
        boolOptions.img.false = document.getElementById('opt_bool_img_false').value;

        var node = JsonHuman.format(input, window.options);
        output.innerHTML = "";
        output.appendChild(node);
        raw.textContent = output.innerHTML;
    }

    function doConvert() {
        var json;
        try {
            json = JSON.parse(editor.getValue());
        } catch (error) {
            alert("Error parsing json:\n" + error.stack);
            return;
        }

        convert(json, output);
    }

    button.addEventListener("click", doConvert);
    doConvert();
}(window.JsonHuman, window.crel, window.CodeMirror));
