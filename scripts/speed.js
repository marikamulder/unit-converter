function sameInputSpeed() {
            
    var selectInput = document.getElementById("speedSelectInput").value;
    var selectOutput = document.getElementById("speedSelectOutput").value;
                
    if ((selectInput == selectOutput) && (selectOutput == 'm/s')) {
        document.getElementById("speedSelectInput").value = "km/h";

    } else if ((selectInput == selectOutput) && (selectOutput == 'km/h')) {
        document.getElementById("speedSelectInput").value = "m/s";

    } else if ((selectInput == selectOutput) && (selectOutput == 'mi/h')) {
        document.getElementById("speedSelectInput").value = "m/s";

    } else if ((selectInput == selectOutput) && (selectOutput == 'ft/s')) {
        document.getElementById("speedSelectInput").value = "km/h";

    }

    speedInput();
}

function sameOutputSpeed() {

    var selectInput = document.getElementById("speedSelectInput").value;
    var selectOutput = document.getElementById("speedSelectOutput").value;
                
    if ((selectInput == selectOutput) && (selectInput == 'm/s')) {
        document.getElementById("speedSelectOutput").value = "km/h";

    } else if ((selectInput == selectOutput) && (selectInput == 'km/h')) {
        document.getElementById("speedSelectOutput").value = "m/s";

    } else if ((selectInput == selectOutput) && (selectInput == 'mi/h')) {
        document.getElementById("speedSelectOutput").value = "m/s";

    } else if ((selectInput == selectOutput) && (selectInput == 'ft/s')) {
        document.getElementById("speedSelectOutput").value = "km/h";

    }

    speedInput();
}

function speedInput() {

    var output = document.getElementById("speedOutput").value;
    var input = document.getElementById("speedInput").value;
    output = "";
    
    var selectInput = document.getElementById("speedSelectInput").value;
    var selectOutput = document.getElementById("speedSelectOutput").value;

    if (selectInput == "m/s" && selectOutput == "km/h") {
        var kilometer = input * 3.6
        document.getElementById('speedOutput').value = parseFloat(kilometer.toFixed(6));

    } else if (selectInput == "m/s" && selectOutput == "mi/h") {
        var mile = input * 2.237
        document.getElementById("speedOutput").value = parseFloat(mile.toFixed(6));

    } else if (selectInput == "m/s" && selectOutput == "ft/s") {
        var foot = input * 3.281
        document.getElementById("speedOutput").value = parseFloat(foot.toFixed(6));

    } else if (selectInput == "km/h" && selectOutput == "ft/s") {
        var foot = input / 1.097
        document.getElementById("speedOutput").value = parseFloat(foot.toFixed(6));

    } else if (selectInput == "km/h" && selectOutput == "m/s") {
        var meter = input / 3.6
        document.getElementById("speedOutput").value = parseFloat(meter.toFixed(6));

    } else if (selectInput == "km/h" && selectOutput == "mi/h") {
        var mile = input / 1.609
        document.getElementById("speedOutput").value = parseFloat(mile.toFixed(6));

    } else if (selectInput == "mi/h" && selectOutput == "ft/s") {
        var foot = input * 1.467
        document.getElementById("speedOutput").value = parseFloat(foot.toFixed(6));

    } else if (selectInput == "mi/h" && selectOutput == "m/s") {
        var meter = input / 2.237
        document.getElementById("speedOutput").value = parseFloat(meter.toFixed(6));

    } else if (selectInput == "mi/h" && selectOutput == "km/h") {
        var kilometer = input * 1.609
        document.getElementById("speedOutput").value = parseFloat(kilometer.toFixed(6));

    } else if (selectInput == "ft/s" && selectOutput == "m/s") {
        var meter = input / 3.281
        document.getElementById("speedOutput").value = parseFloat(meter.toFixed(6));

    } else if (selectInput == "ft/s" && selectOutput == "km/h") {
        var kilometer = input * 1.097
        document.getElementById("speedOutput").value = parseFloat(kilometer.toFixed(6));

    } else if (selectInput == "ft/s" && selectOutput == "mi/h") {
        var mile = input / 1.467
        document.getElementById("speedOutput").value = parseFloat(mile.toFixed(6));

    }
}

function speedOutput() {

    var output = document.getElementById("speedOutput").value;
    var input = document.getElementById("speedInput").value;
    input = "";
    
    var selectInput = document.getElementById("speedSelectInput").value;
    var selectOutput = document.getElementById("speedSelectOutput").value;

    if (selectInput == "m/s" && selectOutput == "km/h") {
        var kilometer = output / 3.6
        document.getElementById('speedInput').value = parseFloat(kilometer.toFixed(6));

    } else if (selectInput == "m/s" && selectOutput == "mi/h") {
        var mile = output / 2.237
        document.getElementById("speedInput").value = parseFloat(mile.toFixed(6));

    } else if (selectInput == "m/s" && selectOutput == "ft/s") {
        var foot = output / 3.281
        document.getElementById("speedInput").value = parseFloat(foot.toFixed(6));

    } else if (selectInput == "km/h" && selectOutput == "ft/s") {
        var foot = output * 1.097
        document.getElementById("speedInput").value = parseFloat(foot.toFixed(6));

    } else if (selectInput == "km/h" && selectOutput == "m/s") {
        var meter = output * 3.6
        document.getElementById("speedInput").value = parseFloat(meter.toFixed(6));

    } else if (selectInput == "km/h" && selectOutput == "mi/h") {
        var mile = output * 1.609
        document.getElementById("speedInput").value = parseFloat(mile.toFixed(6));

    } else if (selectInput == "mi/h" && selectOutput == "ft/s") {
        var foot = output / 1.467
        document.getElementById("speedInput").value = parseFloat(foot.toFixed(6));

    } else if (selectInput == "mi/h" && selectOutput == "m/s") {
        var meter = output * 2.237
        document.getElementById("speedInput").value = parseFloat(meter.toFixed(6));

    } else if (selectInput == "mi/h" && selectOutput == "km/h") {
        var kilometer = output / 1.609
        document.getElementById("speedInput").value = parseFloat(kilometer.toFixed(6));

    } else if (selectInput == "ft/s" && selectOutput == "m/s") {
        var meter = output * 3.281
        document.getElementById("speedInput").value = parseFloat(meter.toFixed(6));

    } else if (selectInput == "ft/s" && selectOutput == "km/h") {
        var kilometer = output / 1.097
        document.getElementById("speedInput").value = parseFloat(kilometer.toFixed(6));

    } else if (selectInput == "ft/s" && selectOutput == "mi/h") {
        var mile = output * 1.467
        document.getElementById("speedInput").value = parseFloat(mile.toFixed(6));

    } 

}
