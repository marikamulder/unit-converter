function sameInputImperial() {
            
    var selectInput = document.getElementById("imperialSelectInput").value;
    var selectOutput = document.getElementById("imperialSelectOutput").value;
                
    if ((selectInput == selectOutput) && (selectOutput == 'foot')) {
        document.getElementById("imperialSelectInput").value = "inch";

    } else if ((selectInput == selectOutput) && (selectOutput == 'inch')) {
        document.getElementById("imperialSelectInput").value = "foot";

    } else if ((selectInput == selectOutput) && (selectOutput == 'mile')) {
        document.getElementById("imperialSelectInput").value = "yard";

    } else if ((selectInput == selectOutput) && (selectOutput == 'yard')) {
        document.getElementById("imperialSelectInput").value = "foot";

    }

    imperialInput();
}

function sameOutputImperial() {

    var selectInput = document.getElementById("imperialSelectInput").value;
    var selectOutput = document.getElementById("imperialSelectOutput").value;
                
    if ((selectInput == selectOutput) && (selectInput == 'foot')) {
        document.getElementById("imperialSelectOutput").value = "inch";

    } else if ((selectInput == selectOutput) && (selectInput == 'inch')) {
        document.getElementById("imperialSelectOutput").value = "foot";

    } else if ((selectInput == selectOutput) && (selectInput == 'mile')) {
        document.getElementById("imperialSelectOutput").value = "yard";

    } else if ((selectInput == selectOutput) && (selectInput == 'yard')) {
        document.getElementById("imperialSelectOutput").value = "foot";

    }

    imperialInput();
}

function imperialInput() {

    var output = document.getElementById("imperialOutput").value;
    var input = document.getElementById("imperialInput").value;
    output = "";
    
    var selectInput = document.getElementById("imperialSelectInput").value;
    var selectOutput = document.getElementById("imperialSelectOutput").value;

    if (selectInput == "foot" && selectOutput == "inch") {
        var inch = input * 12
        document.getElementById('imperialOutput').value = parseFloat(inch.toFixed(6));

    } else if (selectInput == "foot" && selectOutput == "mile") {
        var mile = input / 5280
        document.getElementById("imperialOutput").value = parseFloat(mile.toFixed(6));

    } else if (selectInput == "foot" && selectOutput == "yard") {
        var yard = input / 3
        document.getElementById("imperialOutput").value = parseFloat(yard.toFixed(6));

    } else if (selectInput == "inch" && selectOutput == "foot") {
        var foot = input / 12
        document.getElementById("imperialOutput").value = parseFloat(foot.toFixed(6));

    } else if (selectInput == "inch" && selectOutput == "mile") {
        var mile = input / 63360
        document.getElementById("imperialOutput").value = parseFloat(mile.toFixed(6));

    } else if (selectInput == "inch" && selectOutput == "yard") {
        var yard = input / 36
        document.getElementById("imperialOutput").value = parseFloat(yard.toFixed(6));

    } else if (selectInput == "mile" && selectOutput == "foot") {
        var foot = input * 5280
        document.getElementById("imperialOutput").value = parseFloat(foot.toFixed(6));

    } else if (selectInput == "mile" && selectOutput == "inch") {
        var inch = input * 63360
        document.getElementById("imperialOutput").value = parseFloat(inch.toFixed(6));

    } else if (selectInput == "mile" && selectOutput == "yard") {
        var yard = input * 1760
        document.getElementById("imperialOutput").value = parseFloat(yard.toFixed(6));

    } else if (selectInput == "yard" && selectOutput == "foot") {
        var foot = input * 3
        document.getElementById("imperialOutput").value = parseFloat(foot.toFixed(6));

    } else if (selectInput == "yard" && selectOutput == "inch") {
        var inch = input * 36
        document.getElementById("imperialOutput").value = parseFloat(inch.toFixed(6));

    } else if (selectInput == "yard" && selectOutput == "mile") {
        var mile = input / 1760
        document.getElementById("imperialOutput").value = parseFloat(mile.toFixed(6));

    }
}

function imperialOutput() {

    var output = document.getElementById("imperialOutput").value;
    var input = document.getElementById("imperialInput").value;
    input = "";
    
    var selectInput = document.getElementById("imperialSelectInput").value;
    var selectOutput = document.getElementById("imperialSelectOutput").value;

    if (selectInput == "foot" && selectOutput == "inch") {
        var inch = output / 12
        document.getElementById('imperialInput').value = parseFloat(inch.toFixed(6));

    } else if (selectInput == "foot" && selectOutput == "mile") {
        var mile = output * 5280
        document.getElementById("imperialInput").value = parseFloat(mile.toFixed(6));

    } else if (selectInput == "foot" && selectOutput == "yard") {
        var yard = output * 3
        document.getElementById("imperialInput").value = parseFloat(yard.toFixed(6));

    } else if (selectInput == "inch" && selectOutput == "foot") {
        var foot = output * 12
        document.getElementById("imperialInput").value = parseFloat(foot.toFixed(6));

    } else if (selectInput == "inch" && selectOutput == "mile") {
        var mile = output * 63360
        document.getElementById("imperialInput").value = parseFloat(mile.toFixed(6));

    } else if (selectInput == "inch" && selectOutput == "yard") {
        var yard = output * 36
        document.getElementById("imperialInput").value = parseFloat(yard.toFixed(6));

    } else if (selectInput == "mile" && selectOutput == "foot") {
        var foot = output / 5280
        document.getElementById("imperialInput").value = parseFloat(foot.toFixed(6));

    } else if (selectInput == "mile" && selectOutput == "inch") {
        var inch = output / 63360
        document.getElementById("imperialInput").value = parseFloat(inch.toFixed(6));

    } else if (selectInput == "mile" && selectOutput == "yard") {
        var yard = output / 1760
        document.getElementById("imperialInput").value = parseFloat(yard.toFixed(6));

    } else if (selectInput == "yard" && selectOutput == "foot") {
        var foot = output / 3
        document.getElementById("imperialInput").value = parseFloat(foot.toFixed(6));

    } else if (selectInput == "yard" && selectOutput == "inch") {
        var inch = output / 36
        document.getElementById("imperialInput").value = parseFloat(inch.toFixed(6));

    } else if (selectInput == "yard" && selectOutput == "mile") {
        var mile = output * 1760
        document.getElementById("imperialInput").value = parseFloat(mile.toFixed(6));

    } 

}
