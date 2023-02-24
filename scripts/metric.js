function sameOutputMetric() {
            
    var selectInput = document.getElementById("metricSelectInput").value;
    var selectOutput = document.getElementById("metricSelectOutput").value;
                
    if ((selectInput == selectOutput) && (selectInput == 'kilometer')) {
        document.getElementById("metricSelectOutput").value = "meter";

    } else if ((selectInput == selectOutput) && (selectInput == 'meter')) {
        document.getElementById("metricSelectOutput").value = "centimeter";

    } else if ((selectInput == selectOutput) && (selectInput == 'centimeter')) {
        document.getElementById("metricSelectOutput").value = "millimeter";

    } else if ((selectInput == selectOutput) && (selectInput == 'decimeter')) {
        document.getElementById("metricSelectOutput").value = "centimeter";

    } else if ((selectInput == selectOutput) && (selectInput == 'millimeter')) {
        document.getElementById("metricSelectOutput").value = "centimeter";
    }

    metricInput();
}

function sameInputMetric() {

    var selectInput = document.getElementById("metricSelectInput").value;
    var selectOutput = document.getElementById("metricSelectOutput").value;
                
    if ((selectInput == selectOutput) && (selectOutput == 'kilometer')) {
        document.getElementById("metricSelectInput").value = "meter";

    } else if ((selectInput == selectOutput) && (selectOutput == 'meter')) {
        document.getElementById("metricSelectInput").value = "decimeter";

    } else if ((selectInput == selectOutput) && (selectOutput == 'centimeter')) {
        document.getElementById("metricSelectInput").value = "millimeter";

    } else if ((selectInput == selectOutput) && (selectOutput == 'decimeter')) {
        document.getElementById("metricSelectInput").value = "millimeter";

    } else if ((selectInput == selectOutput) && (selectOutput == 'millimeter')) {
        document.getElementById("metricSelectInput").value = "centimeter";
    }

    metricInput();
}

function metricInput() {

    var output = document.getElementById("metricOutput").value;
    var input = document.getElementById("metricInput").value;
    output = "";
    
    var selectInput = document.getElementById("metricSelectInput").value;
    var selectOutput = document.getElementById("metricSelectOutput").value;

    if (selectInput == "kilometer" && selectOutput == "meter") {
        var meter = input * 1000
        document.getElementById('metricOutput').value = parseFloat(meter.toFixed(2));

    } else if (selectInput == "kilometer" && selectOutput == "decimeter") {
        var decimeter = input * 10000
        document.getElementById("metricOutput").value = parseFloat(decimeter.toFixed(2));

    } else if (selectInput == "kilometer" && selectOutput == "centimeter") {
        var centimeter = input * 100000
        document.getElementById("metricOutput").value = parseFloat(centimeter.toFixed(2));

    } else if (selectInput == "kilometer" && selectOutput == "millimeter") {
        var millimeter = input * 1000000
        document.getElementById("metricOutput").value = parseFloat(millimeter.toFixed(2));

    } else if (selectInput == "meter" && selectOutput == "kilometer") {
        var kilometer = input / 1000
        document.getElementById("metricOutput").value = parseFloat(kilometer.toFixed(4));

    } else if (selectInput == "meter" && selectOutput == "decimeter") {
        var decimeter = input * 10
        document.getElementById("metricOutput").value = parseFloat(decimeter.toFixed(2));

    } else if (selectInput == "meter" && selectOutput == "centimeter") {
        var centimeter = input * 100
        document.getElementById("metricOutput").value = parseFloat(centimeter.toFixed(4));

    } else if (selectInput == "meter" && selectOutput == "millimeter") {
        var millimeter = input * 1000
        document.getElementById("metricOutput").value = parseFloat(millimeter.toFixed(2));

    } else if (selectInput == "decimeter" && selectOutput == "kilometer") {
        var kilometer = input / 10000
        document.getElementById("metricOutput").value = parseFloat(kilometer.toFixed(5));

    } else if (selectInput == "decimeter" && selectOutput == "meter") {
        var meter = input / 10
        document.getElementById("metricOutput").value = parseFloat(meter.toFixed(2));

    } else if (selectInput == "decimeter" && selectOutput == "centimeter") {
        var centimeter = input * 10
        document.getElementById("metricOutput").value = parseFloat(centimeter.toFixed(4));

    } else if (selectInput == "decimeter" && selectOutput == "millimeter") {
        var millimeter = input * 100
        document.getElementById("metricOutput").value = parseFloat(millimeter.toFixed(2));

    } else if (selectInput == "centimeter" && selectOutput == "kilometer") {
        var kilometer = input * 100000
        document.getElementById("metricOutput").value = parseFloat(kilometer.toFixed(4));

    } else if (selectInput == "centimeter" && selectOutput == "decimeter") {
        var decimeter = input / 10
        document.getElementById("metricOutput").value = parseFloat(decimeter.toFixed(2));

    } else if (selectInput == "centimeter" && selectOutput == "meter") {
        var centimeter = input * 100
        document.getElementById("metricOutput").value = parseFloat(centimeter.toFixed(4));

    } else if (selectInput == "centimeter" && selectOutput == "millimeter") {
        var millimeter = input * 10
        document.getElementById("metricOutput").value = parseFloat(millimeter.toFixed(2));

    } else if (selectInput == "millimeter" && selectOutput == "kilometer") {
        var kilometer = input / 1000000
        document.getElementById("metricOutput").value = parseFloat(kilometer.toFixed(6));

    } else if (selectInput == "millimeter" && selectOutput == "decimeter") {
        var decimeter = input / 100
        document.getElementById("metricOutput").value = parseFloat(decimeter.toFixed(2));

    } else if (selectInput == "millimeter" && selectOutput == "meter") {
        var meter = input / 1000
        document.getElementById("metricOutput").value = parseFloat(meter.toFixed(4));

    } else if (selectInput == "millimeter" && selectOutput == "centimeter") {
        var centimeter = input / 10
        document.getElementById("metricOutput").value = parseFloat(centimeter.toFixed(2));

    } 
}

function metricOutput() {

    var output = document.getElementById("metricOutput").value;
    var input = document.getElementById("metricInput").value;
    input = "";
    
    var selectInput = document.getElementById("metricSelectInput").value;
    var selectOutput = document.getElementById("metricSelectOutput").value;

    if (selectInput == "kilometer" && selectOutput == "meter") {
        var meter = output / 1000
        document.getElementById('metricInput').value = parseFloat(meter.toFixed(6));

    } else if (selectInput == "kilometer" && selectOutput == "decimeter") {
        var decimeter = output / 10000
        document.getElementById("metricInput").value = parseFloat(decimeter.toFixed(6));

    } else if (selectInput == "kilometer" && selectOutput == "centimeter") {
        var centimeter = output / 100000
        document.getElementById("metricInput").value = parseFloat(centimeter.toFixed(6));

    } else if (selectInput == "kilometer" && selectOutput == "millimeter") {
        var millimeter = output / 1000000
        document.getElementById("metricInput").value = parseFloat(millimeter.toFixed(6));

    } else if (selectInput == "meter" && selectOutput == "kilometer") {
        var kilometer = output * 1000
        document.getElementById("metricInput").value = parseFloat(kilometer.toFixed(6));

    } else if (selectInput == "meter" && selectOutput == "decimeter") {
        var decimeter = output / 10
        document.getElementById("metricInput").value = parseFloat(decimeter.toFixed(6));

    } else if (selectInput == "meter" && selectOutput == "centimeter") {
        var centimeter = output / 100
        document.getElementById("metricInput").value = parseFloat(centimeter.toFixed(6));

    } else if (selectInput == "meter" && selectOutput == "millimeter") {
        var millimeter = output / 1000
        document.getElementById("metricInput").value = parseFloat(millimeter.toFixed(6));

    } else if (selectInput == "decimeter" && selectOutput == "kilometer") {
        var kilometer = output * 10000
        document.getElementById("metricInput").value = parseFloat(kilometer.toFixed(6));

    } else if (selectInput == "decimeter" && selectOutput == "meter") {
        var meter = output * 10
        document.getElementById("metricInput").value = parseFloat(meter.toFixed(6));

    } else if (selectInput == "decimeter" && selectOutput == "centimeter") {
        var centimeter = output / 10
        document.getElementById("metricInput").value = parseFloat(centimeter.toFixed(6));

    } else if (selectInput == "decimeter" && selectOutput == "millimeter") {
        var millimeter = output / 100
        document.getElementById("metricInput").value = parseFloat(millimeter.toFixed(6));

    } else if (selectInput == "centimeter" && selectOutput == "kilometer") {
        var kilometer = output / 100000
        document.getElementById("metricInput").value = parseFloat(kilometer.toFixed(6));

    } else if (selectInput == "centimeter" && selectOutput == "decimeter") {
        var decimeter = output * 10
        document.getElementById("metricInput").value = parseFloat(decimeter.toFixed(6));

    } else if (selectInput == "centimeter" && selectOutput == "meter") {
        var centimeter = output / 100
        document.getElementById("metricInput").value = parseFloat(centimeter.toFixed(6));

    } else if (selectInput == "centimeter" && selectOutput == "millimeter") {
        var millimeter = output / 10
        document.getElementById("metricInput").value = parseFloat(millimeter.toFixed(6));

    } else if (selectInput == "millimeter" && selectOutput == "kilometer") {
        var kilometer = output * 1000000
        document.getElementById("metricInput").value = parseFloat(kilometer.toFixed(6));

    } else if (selectInput == "millimeter" && selectOutput == "decimeter") {
        var decimeter = output * 100
        document.getElementById("metricInput").value = parseFloat(decimeter.toFixed(6));

    } else if (selectInput == "millimeter" && selectOutput == "meter") {
        var meter = output * 1000
        document.getElementById("metricInput").value = parseFloat(meter.toFixed(6));

    } else if (selectInput == "millimeter" && selectOutput == "centimeter") {
        var centimeter = output * 10
        document.getElementById("metricInput").value = parseFloat(centimeter.toFixed(6));

    } 

}