function sameInputBinary() {
    var selectInput = document.getElementById("decimalInput").value;
    var selectOutput = document.getElementById("binaryOutput").value;
    var input = document.getElementById("decInput").value;
    var output = document.getElementById("binOutput").value;
                
    if ((selectInput == selectOutput) && (selectOutput == 'decimal')) {
        document.getElementById("decimalInput").value = "binary";

    } else if ((selectInput == selectOutput) && (selectOutput == 'binary')) {
        document.getElementById("decimalInput").value = "decimal";

    }

    document.getElementById("decInput").value = output;
    document.getElementById("binOutput").value = input;
    
}

function sameOutputBinary() {
    var selectInput = document.getElementById("decimalInput").value;
    var selectOutput = document.getElementById("binaryOutput").value;
    var input = document.getElementById("decInput").value;
    var output = document.getElementById("binOutput").value;
                
    if ((selectInput == selectOutput) && (selectInput == 'decimal')) {
        document.getElementById("binaryOutput").value = "binary";

    } else if ((selectInput == selectOutput) && (selectInput == 'binary')) {
        document.getElementById("binaryOutput").value = "decimal";

    }

    document.getElementById("decInput").value = output;
    document.getElementById("binOutput").value = input;
    
}

function decimalInput() {
    var output = document.getElementById("binOutput").value;
    output = "";
    var input = document.getElementById("decInput").value;
    input = parseFloat(input);
    var selectInput = document.getElementById("decimalInput").value;
    var selectOutput = document.getElementById("binaryOutput").value;
    if (selectInput == 'binary' && input.toString().match(/[2-9]/) != null) {
        document.getElementById("binOutput").value = null;
    } else {
        if (selectInput == "decimal" && selectOutput == "binary") {
            var binary = '';
            while (input > 0) {
                if (input & 1) {
                    binary = "1" + binary;
                } else {
                    binary = "0" + binary;
                }
                input = input >> 1;
            }
            document.getElementById('binOutput').value = binary;

        } else if (selectInput == "binary" && selectOutput == "decimal") {
            var decimal = parseInt(input, 2);
            document.getElementById("binOutput").value = decimal;

        }
    }
}

function binaryInput() {
    var output = document.getElementById("binOutput").value;
    var input = document.getElementById("decInput").value;
    input = "";
    output = parseFloat(output);
    var selectInput = document.getElementById("decimalInput").value;
    var selectOutput = document.getElementById("binaryOutput").value;
    if (selectOutput == 'binary' && output.toString().match(/[2-9]/) != null) {
        document.getElementById("decInput").value = null;
    } else {
        if (selectInput == "decimal" && selectOutput == "binary") {
            
            var decimal = parseInt(output, 2);
            document.getElementById("decInput").value = decimal;

        } else if (selectInput == "binary" && selectOutput == "decimal") {
            
            var binary = '';
            while (output > 0) {
                if (output & 1) {
                    binary = "1" + binary;
                } else {
                    binary = "0" + binary;
                }
                output = output >> 1;
            }
            document.getElementById('decInput').value = binary;
        }
    }
}