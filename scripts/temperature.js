function sameOutput() {
            
    var selectInput = document.getElementById("temperatureInput").value;
    var selectOutput = document.getElementById("temperatureOutput").value;
                
    if ((selectInput == selectOutput) && (selectInput == 'celcius')) {
        document.getElementById("temperatureOutput").value = "fahrenheit";

    } else if ((selectInput == selectOutput) && (selectInput == 'fahrenheit')) {
        document.getElementById("temperatureOutput").value = "celcius";

    } else if ((selectInput == selectOutput) && (selectInput == 'kelvin')) {
        document.getElementById("temperatureOutput").value = "celcius";
    }

    temperatureOutout();
}

function sameInput() {

    var selectInput = document.getElementById("temperatureInput").value;
    var selectOutput = document.getElementById("temperatureOutput").value;
                
    if ((selectInput == selectOutput) && (selectOutput == 'fahrenheit')) {
        document.getElementById("temperatureInput").value = 'celcius';

    } else if ((selectInput == selectOutput) && (selectOutput == 'celcius')) {
        document.getElementById("temperatureInput").value = "fahrenheit";

    } else if ((selectInput == selectOutput) && (selectOutput == 'kelvin')) {
        document.getElementById("temperatureInput").value = "celcius";
    }

    temperatureOutout();
}

function temperatureInput() {

    var output = document.getElementById("tempOutput").value;
    var input = document.getElementById("tempInput").value;
    input = "";
    //output = parseFloat(input);
    var selectInput = document.getElementById("temperatureInput").value;
    var selectOutput = document.getElementById("temperatureOutput").value;

    if (selectInput == "celcius" && selectOutput == "fahrenheit") {
        var celcius = (output - 32) * 5/9
        document.getElementById('tempInput').value = parseFloat(celcius.toFixed(2));

    } else if (selectInput == "celcius" && selectOutput == "kelvin") {
        var celcius = (output - 273.15)
        document.getElementById("tempInput").value = parseFloat(celcius.toFixed(2));

    } else if (selectInput == "fahrenheit" && selectOutput == "celcius") {
        var fahrenheit = (output * 9/5) + 32
        document.getElementById("tempInput").value = parseFloat(fahrenheit.toFixed(2));

    } else if (selectInput == "fahrenheit" && selectOutput == "kelvin") {
        var fahrenheit = (output - 273.15) * 9/5 + 32
        document.getElementById("tempInput").value = parseFloat(fahrenheit.toFixed(2));

    } else if (selectInput == "kelvin" && selectOutput == "fahrenheit") {
        var kelvin = (output - 32) * 5/9 + 273.15
        document.getElementById("tempInput").value = parseFloat(kelvin.toFixed(2));

    } else if (selectInput == "kelvin" && selectOutput == "celcius") {
        var kelvin = output + 273.15
        document.getElementById("tempInput").value = parseFloat(kelvin.toFixed(2));

    }
}

function temperatureOutout() {

    var output = document.getElementById("tempOutput").value;
    output = "";
    var input = document.getElementById("tempInput").value;
    input = parseFloat(input);
    var selectInput = document.getElementById("temperatureInput").value;
    var selectOutput = document.getElementById("temperatureOutput").value;

    if (selectInput == "celcius" && selectOutput == "fahrenheit") {
        var celcius = (input * 9/5) + 32
        document.getElementById('tempOutput').value = parseFloat(celcius.toFixed(2));

    } else if (selectInput == "celcius" && selectOutput == "kelvin") {
        var kelvin = input + 273.15
        document.getElementById("tempOutput").value = parseFloat(kelvin.toFixed(2));

    } else if (selectInput == "fahrenheit" && selectOutput == "celcius") {
        var fahrenheit = (input - 32) * 5/9
        document.getElementById("tempOutput").value = parseFloat(fahrenheit.toFixed(2));

    } else if (selectInput == "fahrenheit" && selectOutput == "kelvin") {
        var kelvin = (input - 32) * 5/9 + 273.15
        document.getElementById("tempOutput").value = parseFloat(kelvin.toFixed(2));

    } else if (selectInput == "kelvin" && selectOutput == "fahrenheit") {
        var fahrenheit = (input - 273.15) * 9/5 + 32
        document.getElementById("tempOutput").value = parseFloat(fahrenheit.toFixed(2));

    } else if (selectInput == "kelvin" && selectOutput == "celcius") {
        var celcius = (input - 273.15)
        document.getElementById("tempOutput").value = parseFloat(celcius.toFixed(2));

    }

}