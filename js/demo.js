/*globals require, document, CodeMirror, alert*/
require.config({
    paths: {
        "crel": "../lib/crel"
    }
});
require(["../src/json.human"], function (JsonHuman) {
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
        var node = JsonHuman.format(input);

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
});
