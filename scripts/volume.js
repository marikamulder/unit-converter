function sameInputVolume() {
            
    var selectInput = document.getElementById("volumeSelectInput").value;
    var selectOutput = document.getElementById("volumeSelectOutput").value;
                
    if ((selectInput == selectOutput) && (selectOutput == 'gallon')) {
        document.getElementById("volumeSelectInput").value = "quart";

    } else if ((selectInput == selectOutput) && (selectOutput == 'quart')) {
        document.getElementById("volumeSelectInput").value = "gallon";

    } else if ((selectInput == selectOutput) && (selectOutput == 'pint')) {
        document.getElementById("volumeSelectInput").value = "quart";

    } else if ((selectInput == selectOutput) && (selectOutput == 'cup')) {
        document.getElementById("volumeSelectInput").value = "pint";

    } else if ((selectInput == selectOutput) && (selectOutput == 'tablespoon')) {
        document.getElementById("volumeSelectInput").value = "cup";

    } else if ((selectInput == selectOutput) && (selectOutput == 'teaspoon')) {
        document.getElementById("volumeSelectInput").value = "tablespoon";

    }

    volumeInput();
}

function sameOutputVolume() {

    var selectInput = document.getElementById("volumeSelectInput").value;
    var selectOutput = document.getElementById("volumeSelectOutput").value;
                
    if ((selectInput == selectOutput) && (selectOutput == 'gallon')) {
        document.getElementById("volumeSelectOutput").value = "quart";

    } else if ((selectInput == selectOutput) && (selectOutput == 'quart')) {
        document.getElementById("volumeSelectOutput").value = "pint";

    } else if ((selectInput == selectOutput) && (selectOutput == 'pint')) {
        document.getElementById("volumeSelectOutput").value = "cup";

    } else if ((selectInput == selectOutput) && (selectOutput == 'cup')) {
        document.getElementById("volumeSelectOutput").value = "tablespoon";

    } else if ((selectInput == selectOutput) && (selectOutput == 'tablespoon')) {
        document.getElementById("volumeSelectOutput").value = "teaspoon";

    } else if ((selectInput == selectOutput) && (selectOutput == 'teaspoon')) {
        document.getElementById("volumeSelectOutput").value = "tablespoon";

    }

    volumeInput();
}

function volumeInput() {

    var output = document.getElementById("volumeOutput").value;
    var input = document.getElementById("volumeInput").value;
    output = "";
    
    var selectInput = document.getElementById("volumeSelectInput").value;
    var selectOutput = document.getElementById("volumeSelectOutput").value;

    if (selectInput == "gallon" && selectOutput == "quart") {
        var quart = input * 4
        document.getElementById('volumeOutput').value = parseFloat(quart.toFixed(6));

    } else if (selectInput == "gallon" && selectOutput == "pint") {
        var pint = input * 8
        document.getElementById("volumeOutput").value = parseFloat(pint.toFixed(6));

    } else if (selectInput == "gallon" && selectOutput == "cup") {
        var cup = input * 16
        document.getElementById("volumeOutput").value = parseFloat(cup.toFixed(6));

    } else if (selectInput == "gallon" && selectOutput == "tablespoon") {
        var tablespoon = input * 256
        document.getElementById("volumeOutput").value = parseFloat(tablespoon.toFixed(6));

    } else if (selectInput == "gallon" && selectOutput == "teaspoon") {
        var teaspoon = input * 768
        document.getElementById("volumeOutput").value = parseFloat(teaspoon.toFixed(6));

    } else if (selectInput == "quart" && selectOutput == "gallon") {
        var gallon = input / 4
        document.getElementById("volumeOutput").value = parseFloat(gallon.toFixed(6));

    } else if (selectInput == "quart" && selectOutput == "pint") {
        var pint = input * 2
        document.getElementById("volumeOutput").value = parseFloat(pint.toFixed(6));

    } else if (selectInput == "quart" && selectOutput == "cup") {
        var cup = input * 4
        document.getElementById("volumeOutput").value = parseFloat(cup.toFixed(6));

    } else if (selectInput == "quart" && selectOutput == "tablespoon") {
        var tablespoon = input * 64
        document.getElementById("volumeOutput").value = parseFloat(tablespoon.toFixed(6));

    } else if (selectInput == "quart" && selectOutput == "teaspoon") {
        var teaspoon = input * 192
        document.getElementById("volumeOutput").value = parseFloat(teaspoon.toFixed(6));

    } else if (selectInput == "pint" && selectOutput == "gallon") {
        var gallon = input / 8
        document.getElementById("volumeOutput").value = parseFloat(gallon.toFixed(6));

    } else if (selectInput == "pint" && selectOutput == "quart") {
        var quart = input / 2
        document.getElementById("volumeOutput").value = parseFloat(quart.toFixed(6));

    } else if (selectInput == "pint" && selectOutput == "cup") {
        var cup = input * 2
        document.getElementById("volumeOutput").value = parseFloat(cup.toFixed(6));

    } else if (selectInput == "pint" && selectOutput == "tablespoon") {
        var tablespoon = input * 32
        document.getElementById("volumeOutput").value = parseFloat(tablespoon.toFixed(6));

    } else if (selectInput == "pint" && selectOutput == "teaspoon") {
        var teaspoon = input * 96
        document.getElementById("volumeOutput").value = parseFloat(teaspoon.toFixed(6));

    } else if (selectInput == "cup" && selectOutput == "gallon") {
        var gallon = input / 16
        document.getElementById("volumeOutput").value = parseFloat(gallon.toFixed(6));

    } else if (selectInput == "cup" && selectOutput == "quart") {
        var quart = input / 4
        document.getElementById("volumeOutput").value = parseFloat(quart.toFixed(6));

    } else if (selectInput == "cup" && selectOutput == "pint") {
        var pint = input / 2
        document.getElementById("volumeOutput").value = parseFloat(pint.toFixed(6));

    } else if (selectInput == "cup" && selectOutput == "tablespoon") {
        var tablespoon = input * 16
        document.getElementById("volumeOutput").value = parseFloat(tablespoon.toFixed(6));

    } else if (selectInput == "cup" && selectOutput == "teaspoon") {
        var teaspoon = input * 48
        document.getElementById("volumeOutput").value = parseFloat(teaspoon.toFixed(6));

    } else if (selectInput == "tablespoon" && selectOutput == "gallon") {
        var gallon = input / 256
        document.getElementById("volumeOutput").value = parseFloat(gallon.toFixed(6));

    } else if (selectInput == "tablespoon" && selectOutput == "quart") {
        var quart = input / 64
        document.getElementById("volumeOutput").value = parseFloat(quart.toFixed(6));

    } else if (selectInput == "tablespoon" && selectOutput == "pint") {
        var pint = input / 32
        document.getElementById("volumeOutput").value = parseFloat(pint.toFixed(6));

    } else if (selectInput == "tablespoon" && selectOutput == "cup") {
        var cup = input / 16
        document.getElementById("volumeOutput").value = parseFloat(cup.toFixed(6));

    } else if (selectInput == "tablespoon" && selectOutput == "teaspoon") {
        var teaspoon = input * 3
        document.getElementById("volumeOutput").value = parseFloat(teaspoon.toFixed(6));

    } else if (selectInput == "teaspoon" && selectOutput == "gallon") {
        var gallon = input / 768
        document.getElementById("volumeOutput").value = parseFloat(gallon.toFixed(6));

    } else if (selectInput == "teaspoon" && selectOutput == "quart") {
        var quart = input / 192
        document.getElementById("volumeOutput").value = parseFloat(quart.toFixed(6));

    } else if (selectInput == "teaspoon" && selectOutput == "pint") {
        var pint = input / 96
        document.getElementById("volumeOutput").value = parseFloat(pint.toFixed(6));

    } else if (selectInput == "teaspoon" && selectOutput == "cup") {
        var cup = input / 48
        document.getElementById("volumeOutput").value = parseFloat(cup.toFixed(6));

    } else if (selectInput == "teaspoon" && selectOutput == "tablespoon") {
        var tablespoon = input / 3
        document.getElementById("volumeOutput").value = parseFloat(tablespoon.toFixed(6));

    }
}

function volumeOutput() {

    var output = document.getElementById("volumeOutput").value;
    var input = document.getElementById("volumeInput").value;
    input = "";
    
    var selectInput = document.getElementById("volumeSelectInput").value;
    var selectOutput = document.getElementById("volumeSelectOutput").value;

    if (selectInput == "gallon" && selectOutput == "quart") {
        var quart = output / 4
        document.getElementById('volumeInput').value = parseFloat(quart.toFixed(6));

    } else if (selectInput == "gallon" && selectOutput == "pint") {
        var pint = output / 8
        document.getElementById("volumeInput").value = parseFloat(pint.toFixed(6));

    } else if (selectInput == "gallon" && selectOutput == "cup") {
        var cup = output / 16
        document.getElementById("volumeInput").value = parseFloat(cup.toFixed(6));

    } else if (selectInput == "gallon" && selectOutput == "tablespoon") {
        var tablespoon = output / 256
        document.getElementById("volumeInput").value = parseFloat(tablespoon.toFixed(6));

    } else if (selectInput == "gallon" && selectOutput == "teaspoon") {
        var teaspoon = output / 768
        document.getElementById("volumeInput").value = parseFloat(teaspoon.toFixed(6));

    } else if (selectInput == "quart" && selectOutput == "gallon") {
        var gallon = output * 4
        document.getElementById("volumeInput").value = parseFloat(gallon.toFixed(6));

    } else if (selectInput == "quart" && selectOutput == "pint") {
        var pint = output / 2
        document.getElementById("volumeInput").value = parseFloat(pint.toFixed(6));

    } else if (selectInput == "quart" && selectOutput == "cup") {
        var cup = output / 4
        document.getElementById("volumeInput").value = parseFloat(cup.toFixed(6));

    } else if (selectInput == "quart" && selectOutput == "tablespoon") {
        var tablespoon = output / 64
        document.getElementById("volumeInput").value = parseFloat(tablespoon.toFixed(6));

    } else if (selectInput == "quart" && selectOutput == "teaspoon") {
        var teaspoon = output / 192
        document.getElementById("volumeInput").value = parseFloat(teaspoon.toFixed(6));

    } else if (selectInput == "pint" && selectOutput == "gallon") {
        var gallon = output * 8
        document.getElementById("volumeInput").value = parseFloat(gallon.toFixed(6));

    } else if (selectInput == "pint" && selectOutput == "quart") {
        var quart = output * 2
        document.getElementById("volumeInput").value = parseFloat(quart.toFixed(6));

    } else if (selectInput == "pint" && selectOutput == "cup") {
        var cup = output / 2
        document.getElementById("volumeInput").value = parseFloat(cup.toFixed(6));

    } else if (selectInput == "pint" && selectOutput == "tablespoon") {
        var tablespoon = output / 32
        document.getElementById("volumeInput").value = parseFloat(tablespoon.toFixed(6));

    } else if (selectInput == "pint" && selectOutput == "teaspoon") {
        var teaspoon = output / 96
        document.getElementById("volumeInput").value = parseFloat(teaspoon.toFixed(6));

    } else if (selectInput == "cup" && selectOutput == "gallon") {
        var gallon = output * 16
        document.getElementById("volumeInput").value = parseFloat(gallon.toFixed(6));

    } else if (selectInput == "cup" && selectOutput == "quart") {
        var quart = output * 4
        document.getElementById("volumeInput").value = parseFloat(quart.toFixed(6));

    } else if (selectInput == "cup" && selectOutput == "pint") {
        var pint = output * 2
        document.getElementById("volumeInput").value = parseFloat(pint.toFixed(6));

    } else if (selectInput == "cup" && selectOutput == "tablespoon") {
        var tablespoon = output / 16
        document.getElementById("volumeInput").value = parseFloat(tablespoon.toFixed(6));

    } else if (selectInput == "cup" && selectOutput == "teaspoon") {
        var teaspoon = output / 48
        document.getElementById("volumeInput").value = parseFloat(teaspoon.toFixed(6));

    } else if (selectInput == "tablespoon" && selectOutput == "gallon") {
        var gallon = output * 256
        document.getElementById("volumeInput").value = parseFloat(gallon.toFixed(6));

    } else if (selectInput == "tablespoon" && selectOutput == "quart") {
        var quart = output * 64
        document.getElementById("volumeInput").value = parseFloat(quart.toFixed(6));

    } else if (selectInput == "tablespoon" && selectOutput == "pint") {
        var pint = output * 32
        document.getElementById("volumeInput").value = parseFloat(pint.toFixed(6));

    } else if (selectInput == "tablespoon" && selectOutput == "cup") {
        var cup = output * 16
        document.getElementById("volumeInput").value = parseFloat(cup.toFixed(6));

    } else if (selectInput == "tablespoon" && selectOutput == "teaspoon") {
        var teaspoon = output / 3
        document.getElementById("volumeInput").value = parseFloat(teaspoon.toFixed(6));

    } else if (selectInput == "teaspoon" && selectOutput == "gallon") {
        var gallon = output * 768
        document.getElementById("volumeInput").value = parseFloat(gallon.toFixed(6));

    } else if (selectInput == "teaspoon" && selectOutput == "quart") {
        var quart = output * 192
        document.getElementById("volumeInput").value = parseFloat(quart.toFixed(6));

    } else if (selectInput == "teaspoon" && selectOutput == "pint") {
        var pint = output * 96
        document.getElementById("volumeInput").value = parseFloat(pint.toFixed(6));

    } else if (selectInput == "teaspoon" && selectOutput == "cup") {
        var cup = output * 48
        document.getElementById("volumeInput").value = parseFloat(cup.toFixed(6));

    } else if (selectInput == "teaspoon" && selectOutput == "tablespoon") {
        var tablespoon = output * 3
        document.getElementById("volumeInput").value = parseFloat(tablespoon.toFixed(6));

    }

}
